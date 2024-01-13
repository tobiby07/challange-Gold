const { knex } = require("../dbConnecting");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = "a1783019dc7fbb26aff87d7366d1812505a30e34410baf858632503714cea8343900d4";

// Function jwt ke cookie
const setTokenCookie = (res, userId, username) => {
  const token = jwt.sign({ userId, username }, jwtSecret, { expiresIn: "1h" });
  res.cookie("token", token, { maxAge: 3600000, httpOnly: true });
};

// Register user
const tambahUser = async (req, res) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    await knex.table("users").insert({
      username: req.body.username,
      password: hashedPassword,
      nama: req.body.nama,
    });

    res.json("berhasil input data");
  } catch (err) {
    console.log(err);
    res.status(500).json("An error occurred while registering the user.");
  }
};

// Auth middleware
const authUser = (req, res, next) => {
  const token = req.cookies.token;

  console.log("Received Token:", token);

  if (!token) {
    console.log("Unauthorized - Token not provided");
    return res.redirect("/?error=Unauthorized");
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.error("Error verifying token:", err);
      return res.redirect("/?error=Unauthorized");
    }

    req.user = {
      userId: decoded.userId,
      username: decoded.username,
    };
    
    res.locals.username = req.user.username

    console.log("User Authenticated:", req.user);

    next();
  });
};


// mencegah kembali ke / saat token tersedia
const checkTokenAndRedirect = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    return res.redirect("/dashboard");
  }

  next();
};

// Login user
const loginUser = async (req, res) => {
  try {
    const user = await knex.table("users").where({ username: req.body.username }).first();

    if (!user) {
      return res.redirect("/?error=Username not found");
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordMatch) {
      return res.redirect("/?error=Incorrect password");
    }

    setTokenCookie(res, user.id, user.username);

    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).json("An error occurred while logging in.");
  }
};

// Logout user
const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

module.exports = {
  tambahUser,
  loginUser,
  logoutUser,
  authUser,
  checkTokenAndRedirect,
};

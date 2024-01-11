const { knex } = require("../dbConnecting");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const jwtSecret = 'a1783019dc7fbb26aff87d7366d1812505a30e34410baf858632503714cea8343900d4';


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

// Login user 
const loginUser = async (req, res) => {
  try {
    const user = await knex.table("users").where({ username: req.body.username }).first();

    if (!user) {
      return res.json("Username tidak ditemukan");
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordMatch) {
      return res.json("Password salah");
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

    res.redirect(`/dashboard?token=${token}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("An error occurred while logging in.");
  }
};

// logout user
const logoutUser = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports = {
  tambahUser,
  loginUser,
  logoutUser,
};

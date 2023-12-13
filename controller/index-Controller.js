const multer = require("multer");
const fs = require("fs");


// destinasi penyimpanan foto

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });




//handler 404
const notFound = (req, res) => {
  res.status(404).render("404", { title: "Home Page", layout: "layouts/main-layout" });
};

module.exports = {
  upload,
  fs,
  notFound,
};

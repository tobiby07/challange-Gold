const express = require("express");
const expressEjsLayout = require("express-ejs-layouts");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
const uploadPhoto = upload.single('photo')

const port = 3000

const start = () => {
    console.log(`Server is running on ${port}`);
  }

  const notFound = (req, res) => {
    res.status(404).send("<h1>404</h1><h3>NOT FOUND</h3>");
  }

  module.exports = {
    start, 
    notFound,
    port,
    expressEjsLayout,
    app,
    upload,
    uploadPhoto,
    express
  }
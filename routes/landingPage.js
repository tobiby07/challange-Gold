const express = require("express");
const { loginPage } = require("../controller/landingPage");
const { tambahUser, loginUser, logoutUser } = require("../models/auth");
const loginPageRoute = express.Router();

loginPageRoute.get("/", loginPage);
loginPageRoute.post("/register", tambahUser);
loginPageRoute.post("/login", loginUser);
loginPageRoute.get("/logout", logoutUser);

module.exports = {
  loginPageRoute,
};

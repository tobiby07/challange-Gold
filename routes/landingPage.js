const express = require("express");
const { loginPage } = require("../controller/landingPage");
const loginPageRoute = express.Router();

loginPageRoute.get('/',loginPage)

module.exports={
    loginPageRoute
}


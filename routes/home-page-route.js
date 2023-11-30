const express = require("express");
const { homePage } = require("../controller/homePage-Controller");

const homePageRouter = express.Router();

homePageRouter.get("/", homePage);

module.exports = {
  homePageRouter,
};

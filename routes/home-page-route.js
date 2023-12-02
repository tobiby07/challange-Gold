const { homePage } = require("../controller/homePage-Controller");
const { express } = require("../controller/main-controller");

const homePageRouter = express.Router();

homePageRouter.get("/", homePage);

module.exports = {
  homePageRouter,
};

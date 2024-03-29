const express = require("express");
const expressEjsLayout = require("express-ejs-layouts");
const app = express();
const methodOverride = require("method-override");
const { notFound } = require("./controller/z-index-Controller");
const { dashboardRouter } = require("./routes/dashboard");
const { loginPageRoute } = require("./routes/landingPage");
const session = require('express-session');
const cookieParser = require("cookie-parser");


app.set("view engine", "ejs");
app.use(expressEjsLayout);
app.use(express.static("public"));
app.use("/dist", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/uploads", express.static("public/uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser())
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false
}));


app.use(loginPageRoute);
app.use(dashboardRouter);

// inisialisasi server
const port = 3001;

const start = () => {
  console.log(`Server is running on ${port}`);
};
app.use(notFound);
app.listen(port, start);

const loginPage = (req, res) => {
  res.render("login", {
    title: "Umikom University",
    layout: "layouts/main-layout",
  });
};

module.exports = {
  loginPage,
};

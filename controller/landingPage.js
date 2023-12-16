const loginPage = (req, res) => {
  res.render("login", {
    title: "Umikom University",
    layout: false,
  });
};

module.exports = {
  loginPage,
};

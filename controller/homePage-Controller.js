const homePage = (req, res) => {
    res.render("index", {
      title: "Home Page",
      layout: "layouts/main-layout",
    });
  }; 


  module.exports={
    homePage
  }
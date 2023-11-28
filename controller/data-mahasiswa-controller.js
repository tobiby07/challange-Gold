const { addDataMahasiswa } = require("../utils/add-data-mahasiswa");
const { deleteDataMahasiswa } = require("../utils/del-data-mahasiswa");
const { updateDataMahasiswa } = require("../utils/edit-data-mahasiswa");
const { findMhs, loadDataMhs } = require("../utils/main-utils");


const dataMahasiswaPage = (req, res) => {
    const dataMhs = loadDataMhs();
    res.render("data-mahasiswa", {
      title: "data mahasiswa",
      layout: "layouts/main-layout",
      dataMhs,
    });
  };

  const addDataMahasiswaPage = (req, res) => {
    res.render("add-data-mahasiswa", {
      title: "Add Data Mahasiswa",
      layout: "layouts/main-layout",
    });
  };
  
  const postAddDataMahasiswaPage =(req, res) => {
    const siswaData = req.body;
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null; 
    addDataMahasiswa({ ...siswaData, photo: photoPath });
    res.redirect("/data-mahasiswa");
  }

  const editDataMahasiswaPage = (req, res) => {
    const mahasiswa = findMhs(req.params.nama);
    if (!mahasiswa) {
      res.status(404).send("404 Not Found");
    } else {
      res.render("edit-data-mahasiswa", {
        title: "Edit Mahasiswa",
        layout: "layouts/main-layout",
        mahasiswa,
      });
    }
  }

  const postEditDataMahasiswaPage = (req, res) => {
    const originalNama = req.params.nama;
    const updatedMahasiswa = req.body;
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null; 
    updateDataMahasiswa(originalNama, { ...updatedMahasiswa, photo: photoPath });
    res.redirect("/data-mahasiswa");
  }

  const deleteDataMahasiswaPage = (req, res) => {
    const mahasiswa = findMhs(req.params.nama);
    if (!mahasiswa) {
      res.status(404).send("404 Not Found");
    } else {
      deleteDataMahasiswa(req.params.nama);
      res.redirect("/data-mahasiswa");
    }
  }

  const detailMahasiswapage = (req, res) => {
    const mahasiswa = findMhs(req.params.nama);
    res.render("detail-mahasiswa", {
      title: "detail Page mahasiswa",
      layout: "layouts/main-layout",
      mahasiswa,
    });
  }

  module.exports={
    dataMahasiswaPage,
    addDataMahasiswaPage,
    postAddDataMahasiswaPage,
    editDataMahasiswaPage,
    postEditDataMahasiswaPage,
    deleteDataMahasiswaPage,
    detailMahasiswapage
  }
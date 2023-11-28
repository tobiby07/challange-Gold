const express = require("express");
const expressEjsLayout = require("express-ejs-layouts");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });

const { loadDataMhs, findMhs, addDataMahasiswa, deleteDataMahasiswa, updateDataMahasiswa } = require("./utils/utils-data-mahasiswa.js");
const { start, notFound, port } = require("./controller/main-controller.js");
const { homePage } = require("./controller/homePage-Controller.js");

app.set("view engine", "ejs");
app.use(expressEjsLayout);
app.use(express.static("public"));
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use("/uploads", express.static("public/uploads"));
app.use(express.json());
app.use(express.urlencoded());


app.get("/", homePage)

const dataMahasiswaPage = (req, res) => {
  const dataMhs = loadDataMhs();
  res.render("data-mahasiswa", {
    title: "data mahasiswa",
    layout: "layouts/main-layout",
    dataMhs,
  });
};
app.get("/data-mahasiswa", dataMahasiswaPage);

const addDataMahasiswaPage = (req, res) => {
  res.render("add-data-mahasiswa", {
    title: "Add Data Mahasiswa",
    layout: "layouts/main-layout",
  });
};

app.get("/data-mahasiswa/add", addDataMahasiswaPage)


const postAddDataMahasiswaPage =(req, res) => {
  const siswaData = req.body;
  const photoPath = req.file ? `/uploads/${req.file.filename}` : null; 
  addDataMahasiswa({ ...siswaData, photo: photoPath });
  res.redirect("/data-mahasiswa");
}
const uploadPhoto = upload.single('photo')

app.post("/data-mahasiswa",uploadPhoto, postAddDataMahasiswaPage);

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
app.get("/data-mahasiswa/edit/:nama", editDataMahasiswaPage);

const postEditDataMahasiswaPage = (req, res) => {
  const originalNama = req.params.nama;
  const updatedMahasiswa = req.body;
  const photoPath = req.file ? `/uploads/${req.file.filename}` : null; 
  updateDataMahasiswa(originalNama, { ...updatedMahasiswa, photo: photoPath });
  res.redirect("/data-mahasiswa");
}

app.post("/data-mahasiswa/edit/:nama",uploadPhoto,postEditDataMahasiswaPage );

const deleteDataMahasiswaPage = (req, res) => {
  const mahasiswa = findMhs(req.params.nama);
  if (!mahasiswa) {
    res.status(404).send("404 Not Found");
  } else {
    deleteDataMahasiswa(req.params.nama);
    res.redirect("/data-mahasiswa");
  }
}

app.get("/data-mahasiswa/delete/:nama",deleteDataMahasiswaPage );

const detailMahasiswapage = (req, res) => {
  const mahasiswa = findMhs(req.params.nama);
  res.render("detail-mahasiswa", {
    title: "detail Page mahasiswa",
    layout: "layouts/main-layout",
    mahasiswa,
  });
}

app.get("/data-mahasiswa/:nama", detailMahasiswapage );



app.use(notFound);
app.listen(port, start );


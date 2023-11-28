const express = require("express");
const expressEjsLayout = require("express-ejs-layouts");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
const uploadPhoto = upload.single('photo')

const { start, notFound, port } = require("./controller/main-controller.js");
const { homePage } = require("./controller/homePage-Controller.js");
const { dataMahasiswaPage, addDataMahasiswaPage, postAddDataMahasiswaPage, postEditDataMahasiswaPage, deleteDataMahasiswaPage, editDataMahasiswaPage, detailMahasiswapage } = require("./controller/data-mahasiswa-controller.js");

app.set("view engine", "ejs"); 
app.use(expressEjsLayout);
app.use(express.static("public"));
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use("/uploads", express.static("public/uploads"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", homePage)
app.get("/data-mahasiswa", dataMahasiswaPage);
app.get("/data-mahasiswa/add", addDataMahasiswaPage)
app.post("/data-mahasiswa",uploadPhoto, postAddDataMahasiswaPage);
app.get("/data-mahasiswa/edit/:nama", editDataMahasiswaPage);
app.post("/data-mahasiswa/edit/:nama",uploadPhoto,postEditDataMahasiswaPage );
app.get("/data-mahasiswa/delete/:nama",deleteDataMahasiswaPage );
app.get("/data-mahasiswa/:nama", detailMahasiswapage );


app.use(notFound);
app.listen(port, start );

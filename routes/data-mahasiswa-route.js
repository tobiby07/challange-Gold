const express = require('express');
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
const uploadPhoto = upload.single('photo')
const { dataMahasiswaPage, postAddDataMahasiswaPage } = require('../controller/data-mahasiswa-controller');


dataMahasiswapageRoute = express.Router()

dataMahasiswapageRoute.get('/data-mahasiswa',dataMahasiswaPage)
dataMahasiswapageRoute.post('/data-mahasiswa',uploadPhoto, postAddDataMahasiswaPage)

module.exports={dataMahasiswapageRoute}


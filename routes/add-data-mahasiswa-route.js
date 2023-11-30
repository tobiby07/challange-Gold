const express = require('express');
const { addDataMahasiswaPage, dataMahasiswaPage } = require('../controller/data-mahasiswa-controller');
const addDataMahasiswaPageRoute = express.Router();


addDataMahasiswaPageRoute.use("/data-mahasiswa/add", addDataMahasiswaPage)

module.exports = {
    addDataMahasiswaPageRoute
}


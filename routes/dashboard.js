const express = require("express");
const dashboardRouter = express.Router();

const { homePage, getTambahMahasiswa, datamahasiswa, detailMahasiswa, getEditMahasiswa } = require("../controller/dashboard");
const { postTambahMahasiswa } = require("../models/tambahMahasiswa");
const { upload } = require("../controller/z-index-Controller");
const { deletemahasiswa } = require("../models/deleteMahasiswa");
const { putEditMahasiswa } = require("../models/editMahasiswa");

dashboardRouter.get("/dashboard", homePage);
dashboardRouter.get("/tambah-mahasiswa", getTambahMahasiswa);
dashboardRouter.get("/daftar-mahasiswa", datamahasiswa);
dashboardRouter.get("/daftar-mahasiswa/:id", detailMahasiswa);
dashboardRouter.get("/edit-mahasiswa/:id", getEditMahasiswa);

dashboardRouter.post("/tambah-mahasiswa", upload.single("photo"), postTambahMahasiswa);
dashboardRouter.delete("/mahasiswa/:id", deletemahasiswa);
dashboardRouter.put("/edit-mahasiswa/:id", upload.single("photo"), putEditMahasiswa);

module.exports = {
  dashboardRouter,
};

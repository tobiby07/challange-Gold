const express = require("express");
const dashboardRouter = express.Router();

const { homePage, getTambahMahasiswa, datamahasiswa, detailMahasiswa, getEditMahasiswa } = require("../controller/dashboard");
const { postTambahMahasiswa } = require("../models/tambahMahasiswa");
const { upload } = require("../controller/z-index-Controller");
const { deletemahasiswa } = require("../models/deleteMahasiswa");
const { putEditMahasiswa } = require("../models/editMahasiswa");
const { authUser } = require("../models/auth");

dashboardRouter.use(authUser);
dashboardRouter.get("/dashboard", homePage);
dashboardRouter.get("/dashboard/tambah-mahasiswa", getTambahMahasiswa);
dashboardRouter.get("/dashboard/daftar-mahasiswa", datamahasiswa);
dashboardRouter.get("/dashboard/daftar-mahasiswa/:nim", detailMahasiswa);
dashboardRouter.get("/dashboard/edit-mahasiswa/:nim", getEditMahasiswa);

dashboardRouter.post("/tambah-mahasiswa", upload.single("photo"), postTambahMahasiswa);
dashboardRouter.delete("/mahasiswa/:nim", deletemahasiswa);
dashboardRouter.put("/edit-mahasiswa/:nim", upload.single("photo"), putEditMahasiswa);

module.exports = {
  dashboardRouter,
};

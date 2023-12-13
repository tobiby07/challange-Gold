const { knex } = require("../dbConnecting");

const postTambahMahasiswa = async (req, res) => {
    try {
      const photopath = req.file ? `/uploads/${req.file.filename}` : null;
  
      await knex.table("mahasiswa").insert({
        nama: req.body.nama,
        tempatlahir: req.body.tempatlahir,
        tanggallahir: req.body.tanggallahir,
        jeniskelamin: req.body.jeniskelamin,
        alamat: req.body.alamat,
        alamatdomisili: req.body.alamatdomisili,
        kontakhp: req.body.kontakhp,
        email: req.body.email,
        namaayah: req.body.namaayah,
        namaibu: req.body.namaibu,
        namawali: req.body.namawali,
        kontakhporangtua: req.body.kontakhporangtua,
        pekerjaanorangtua: req.body.pekerjaanorangtua,
        asalsekolah: req.body.asalsekolah,
        tahunlulus: req.body.tahunlulus,
        jurusan: req.body.jurusan,
        fakultas: req.body.fakultas,
        kelas: req.body.kelas,
        nim: req.body.nim,
        photo: photopath,
      });
  
      res.redirect("/tambah-mahasiswa");
    } catch (err) {
      console.log(err);
      res.send("An error occurred while adding data.");
    }
  };

  module.exports = {
    postTambahMahasiswa
  }
  knex
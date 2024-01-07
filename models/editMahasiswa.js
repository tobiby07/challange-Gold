const { fs } = require("../controller/z-index-Controller");
const { knex } = require("../dbConnecting");

const putEditMahasiswa = async (req, res) => {
  try {
    const mahasiswaNim = req.params.nim;

    const existingMahasiswa = await knex.table("mahasiswa").where({ nim: mahasiswaNim }).first();

    if (!existingMahasiswa) {
      return res.status(404).send("Mahasiswa not found");
    }

    const updatedMahasiswa = {
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
    };

    // chek jika ada photo baru
    if (req.file) {
      const newPhotoPath = `/uploads/${req.file.filename}`;
      updatedMahasiswa.photo = newPhotoPath;

      // hapus file photo jika ada
      if (existingMahasiswa.photo) {
        const existingPhotoPath = __dirname + "/public" + existingMahasiswa.photo;
        try {
          fs.unlinkSync(existingPhotoPath);
          console.log("Existing photo deleted:", existingPhotoPath);
        } catch (err) {
          console.error("Error deleting existing photo:", err);
        }
      }
    }

    await knex.table("mahasiswa").where({ nim: mahasiswaNim}).update(updatedMahasiswa);
    console.log("Mahasiswa updated successfully");
    res.redirect(`/daftar-mahasiswa`);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while updating data.");
  }
};

module.exports = {
  putEditMahasiswa,
};

const { knex } = require("../dbConnecting");

const postTambahMahasiswa = async (req, res) => {
  try {
    const photopath = req.file ? `/uploads/${req.file.filename}` : null;
    const angkatan = new Date().getFullYear();

    const highestNimResult = await knex.raw("SELECT split_part(nim, '.', 3) as urutan FROM mahasiswa ORDER BY urutan DESC LIMIT 1");
    const highestNimValue = highestNimResult.rows[0]?.urutan || 0;

    const nextNimValue = (parseInt(highestNimValue) + 1).toString().padStart(3, "0");

    let kodekelas = "";

    if (req.body.kelas === "S1-INFORMATIKA") {
      kodekelas = `${angkatan.toString().slice(-2)}.983.${nextNimValue}`;
    } else if (req.body.kelas === "S1-ILMU KOMPUTER") {
      kodekelas = `${angkatan}456${nextNimValue}`;
    } else if (req.body.kelas === "S1-AKUNTANSI") {
      kodekelas = `${angkatan}123${nextNimValue}`;
    } else {
      kodekelas = `${angkatan}000${nextNimValue}`;
    }

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
      nim: kodekelas,
      photo: photopath,
      tahunangkatan: angkatan,
    });

    res.redirect("/tambah-mahasiswa");
  } catch (err) {
    console.log(err);
    res.send("An error occurred while adding data.");
  }
};

module.exports = {
  postTambahMahasiswa,
};

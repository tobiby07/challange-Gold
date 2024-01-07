const { knex } = require("../dbConnecting");

const deletemahasiswa = async (req, res) => {
    try {
      const mahasiswaNim = req.params.nim;
  
      const mahasiswa = await knex.table("mahasiswa").where({ nim: mahasiswaNim }).first();
      if (!mahasiswa) {
        return res.status(404).send("Mahasiswa not found");
      }
      if (mahasiswa.photo) {
        const photoPath = __dirname + "/public" + mahasiswa.photo;
        try {
          fs.unlinkSync(photoPath);
          console.log("Photo deleted:", photoPath);
        } catch (err) {
          console.error("Error deleting photo:", err);
        }
      }
      await knex.table("mahasiswa").where({ nim: mahasiswaNim }).del();
      console.log("Mahasiswa deleted successfully");
      res.redirect('/dashboard/daftar-mahasiswa')
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred while deleting data.");
    }
  };

module.exports={
    deletemahasiswa
}
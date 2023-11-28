const { loadDataMhs, saveDataMahasiswa } = require("./main-utils");

const deleteDataMahasiswa = (nama) => {
    const dataMhs = loadDataMhs();
    const filteredDataMhs = dataMhs.filter((mahasiswa) => mahasiswa.nama !== nama);
    saveDataMahasiswa(filteredDataMhs);
  };
  

  module.exports={
    deleteDataMahasiswa
  }
const { loadDataMhs, saveDataMahasiswa } = require("./main-utils");

const updateDataMahasiswa = (originalNama, updatedMahasiswa) => {
    const dataMhs = loadDataMhs();
    const index = dataMhs.findIndex((mahasiswa) => mahasiswa.nama === originalNama);
    if (index !== -1) {
      dataMhs[index] = {
        ...updatedMahasiswa,
        photo: updatedMahasiswa.photo || "/default-photo.jpg",
      };
      saveDataMahasiswa(dataMhs);
    }
  };

  
 module.exports={
    updateDataMahasiswa
 }
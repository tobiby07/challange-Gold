const { saveDataMahasiswa, loadDataMhs } = require("./main-utils");


const addDataMahasiswa = (siswa) => {
  const dataMhs = loadDataMhs();
  const newMahasiswa = {
    ...siswa,
    photo: siswa.photo || "/public/uploads/default-photo.jpg",
  };
  dataMhs.push(newMahasiswa);
  saveDataMahasiswa(dataMhs);
};

module.exports = {
    addDataMahasiswa
}
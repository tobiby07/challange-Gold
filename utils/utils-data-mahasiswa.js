const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const datapath = "./data/dataMahasiswa.Json";
if (!fs.existsSync(datapath)) {
  fs.writeFileSync(datapath, "[]", "utf-8");
}

const loadDataMhs = () => {
  const fileBuffer = fs.readFileSync("data/dataMahasiswa.Json", "utf-8");
  const dataMhs = JSON.parse(fileBuffer);
  return dataMhs.map((mahasiswa) => ({
    ...mahasiswa,
    photo: mahasiswa.photo || "/default-photo.jpg"
  }));
};

// cari kontak berdasarkan nama

const findMhs = (nama) => {
  const dataMhs = loadDataMhs();
  const mahasiswa = dataMhs.find((mahasiswa) => mahasiswa.nama.toLowerCase() === nama.toLowerCase());
  return mahasiswa;
};

const saveDataMahasiswa = (dataMhs) => {
  fs.writeFileSync("data/dataMahasiswa.Json", JSON.stringify(dataMhs));
};

const addDataMahasiswa = (siswa) => {
  const dataMhs = loadDataMhs();
  const newMahasiswa = {
    ...siswa,
    photo: siswa.photo || "/public/uploads/default-photo.jpg"
  }
  dataMhs.push(newMahasiswa);
  saveDataMahasiswa(dataMhs);
};

const deleteDataMahasiswa = (nama) => {
  const dataMhs = loadDataMhs();
  const filteredDataMhs = dataMhs.filter((mahasiswa) => mahasiswa.nama !== nama);
  saveDataMahasiswa(filteredDataMhs);
};

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

module.exports = { loadDataMhs, findMhs, addDataMahasiswa, deleteDataMahasiswa, updateDataMahasiswa };

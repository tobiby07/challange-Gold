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


const findMhs = (nama) => {
  const dataMhs = loadDataMhs();
  const mahasiswa = dataMhs.find((mahasiswa) => mahasiswa.nama.toLowerCase() === nama.toLowerCase());
  return mahasiswa;
};

const saveDataMahasiswa = (dataMhs) => {
  fs.writeFileSync("data/dataMahasiswa.Json", JSON.stringify(dataMhs));
};


module.exports={
    loadDataMhs,
    findMhs,
    saveDataMahasiswa
}
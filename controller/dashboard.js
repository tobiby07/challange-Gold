const { knex } = require("../dbConnecting");

// menampilkan dashboard page
const homePage = (req, res) => {
  res.render("index", {
    title: "Home Page",
    layout: "layouts/main-layout",
  });
};

//   menampilkan data mahasiswa
const datamahasiswa = async (req, res) => {
  try {
    const mahasiswa = await knex.table("mahasiswa").select();
    res.render("daftar-mahasiswa", {
      title: "Daftar Mahasiswa",
      layout: "layouts/main-layout",
      mahasiswa,
    });
  } catch (err) {
    console.log(err);
    res.send("An error occurred while fetching data.");
  }
};
// const datamahasiswa = async (req, res) => {
//   try {
//     const mahasiswa = await knex.table("mahasiswa").select();

//     // Organize mahasiswa by class
//     const mahasiswaByClass = organizeMahasiswaByClass(mahasiswa);

//     res.render("daftar-mahasiswa", {
//       title: "Daftar Mahasiswa",
//       layout: "layouts/main-layout",
//       mahasiswa: mahasiswaByClass,
//     });
//   } catch (err) {
//     console.log(err);
//     res.send("An error occurred while fetching data.");
//   }
// };

// // Function to organize mahasiswa by class
// const organizeMahasiswaByClass = (mahasiswa) => {
//   const mahasiswaByClass = {};

//   mahasiswa.forEach((mhs) => {
//     if (!mahasiswaByClass[mhs.kelas]) {
//       mahasiswaByClass[mhs.kelas] = [];
//     }
//     mahasiswaByClass[mhs.kelas].push(mhs);
//   });

//   return mahasiswaByClass;
// };



// menampilkan tambah mahasiswa page
const getTambahMahasiswa = (req, res) => {
  res.render("add-data-mahasiswa", {
    title: "Add Data Mahasiswa",
    layout: "layouts/main-layout",
  });
};

//   menampilkan detail mahasiswa
const detailMahasiswa = async (req, res) => {
  try {
    const mahasiswaNim = req.params.nim;
    const mahasiswa = await knex.table("mahasiswa").where({ nim: mahasiswaNim }).first();

    if (!mahasiswa) {
      return res.status(404).send("Mahasiswa not found");
    }

    res.render("detail-mahasiswa", {
      title: "Detail Mahasiswa",
      layout: "layouts/main-layout",
      mahasiswa,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while fetching data.");
  }
};


// menampilkan page edit mahasiswa
const getEditMahasiswa = async (req, res) => {
    try {
      const mahasiswaNim = req.params.nim;
      const mahasiswa = await knex.table("mahasiswa").where({ nim: mahasiswaNim }).first();
  
      if (!mahasiswa) {
        return res.status(404).send("Mahasiswa not found");
      }
  
      res.render("edit-mahasiswa", {
        title: "Edit Mahasiswa",
        layout: "layouts/main-layout",
        mahasiswa,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching data.");
    }
  };

module.exports = {
  homePage,
  getTambahMahasiswa,
  datamahasiswa,
  detailMahasiswa,
  getEditMahasiswa
};

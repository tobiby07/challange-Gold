const { dataMahasiswaPage, postAddDataMahasiswaPage, editDataMahasiswaPage, 
    postEditDataMahasiswaPage, deleteDataMahasiswaPage, 
    detailMahasiswapage, 
    addDataMahasiswaPage} = require("../controller/data-mahasiswa-controller");

const { express, uploadPhoto } = require("../controller/main-controller");



const dataMahasiswapageRoute = express.Router()


dataMahasiswapageRoute.get('/data-mahasiswa',dataMahasiswaPage)
dataMahasiswapageRoute.post("/data-mahasiswa",uploadPhoto, postAddDataMahasiswaPage);
dataMahasiswapageRoute.get("/data-mahasiswa/edit/:nama", editDataMahasiswaPage);
dataMahasiswapageRoute.get('/data-mahasiswa/add', addDataMahasiswaPage)
dataMahasiswapageRoute.post("/data-mahasiswa/edit/:nama",uploadPhoto,postEditDataMahasiswaPage );
dataMahasiswapageRoute.get("/data-mahasiswa/delete/:nama",deleteDataMahasiswaPage );
dataMahasiswapageRoute.get("/data-mahasiswa/:nama", detailMahasiswapage );

/*

get('/data-mahasiswa)
post('/data-mahasiswa)
delete('/data-mahasiswa)
put('/data-mahasiswa)

get('/data-mahasiswa/data) (menampilkan selutuh data mahasiswa)
get('/data-mahasiswa/add) (menampilkan form add data mahasiswa)
get('/data-mahasiswa/:nim) (menampilkan detail mahasiswa)




*/ 
module.exports={dataMahasiswapageRoute}

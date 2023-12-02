const { start, notFound, port, app, expressEjsLayout, express } = require("./controller/main-controller.js");
const { dataMahasiswapageRoute } = require("./routes/data-mahasiswa-route.js");
const { homePageRouter } = require("./routes/home-page-route.js");

app.set("view engine", "ejs"); 
app.use(expressEjsLayout);
app.use(express.static("public"));
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use("/uploads", express.static("public/uploads"));
app.use(express.json());
app.use(express.urlencoded());

app.use(homePageRouter)
app.use(dataMahasiswapageRoute)


app.use(notFound);
app.listen(port, start );

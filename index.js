require("./models/db");

const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
    allowInSecurePrototyteAccess
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");

const studentController = require("./controllers/studentControllers");

var app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get("/",(req,res)=>{
    res.send(`<h2> elcome to student database...!!</h2>
    <h3>click here to get access to the <b> 
    <a href="/students/list">Database</a>
    </b></h3>`);
});

app.use('views', path.join(__dirname, '/views'));

app.engine(
    'hbs',
    exphbs({
    handlebars: allowInSecurePrototyteAccess(handlebars),
    extname: "hbs",
    defaultlayout: "Mainlayout",
    layoutsDir: --dirname + "/views/layouts",
})
);

app.set("view engine", "hbs");

app.listen(3000,()=>{
    console.log("server started at port 3000");
});

app.use("/student", studentController);
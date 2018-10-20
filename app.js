const express = require("express");
const app = express();
const hbs = require("express-handlebars");
require("morgan")("dev");
const bp = require("body-parser");


app.use(require("cors")());

app.engine('hbs',hbs());
app.set("view engine",'hbs');
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(express.static("static"));


app.get("/",(req,res)=>{
    res.render("index")
});


app.listen(process.env.PORT || 3000,()=>console.log("Listening...."))



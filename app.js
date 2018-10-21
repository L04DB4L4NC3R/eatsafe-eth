const express = require("express");
const app = express();
const hbs = require("express-handlebars");
require("morgan")("dev");
const bp = require("body-parser");
const socket = require("socket.io");

app.use(require("cors")());

// app.engine('hbs',hbs());
app.set("view engine",'ejs');
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(express.static("static"));


app.post('/',(req,res,next)=>{
    res.render('index',{data:req.body});
}); 


server = app.listen(process.env.PORT || 3000,()=>console.log("Listening...."))

const io = socket(server);
io.on("connection",(socket)=>{
    console.log(socket.id);
});
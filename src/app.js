const express=require("express");
require("./db/conn")
const User = require("./models/usermessage");
const hbs = require("hbs");
const path = require("path")
const req = require("express/lib/request");
const res = require("express/lib/response");
const app=express();
const port=3100;

const staticpath = path.join(__dirname,"../Public");
const templatespath = path.join(__dirname,"../templates/Views");
const partialpath = path.join(__dirname,"../templates/partials");


app.use("/css", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("view engine", "pug");
app.set("Views", templatespath);
hbs.registerPartials(partialpath);


// app.get('/', (req, res) => {
// res.render('index.hbs', {
//     title: 'Document',
//     message: 'Express.js example',
// });
// });

app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/contact",(req,res)=>{
    res.render("contact.hbs");
})

app.post("/contact",async(req,res)=>{
    try {
        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index.hbs");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port,()=>{
    console.log('Hello there! This is the server running');
})
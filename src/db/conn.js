const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/HabibMongo",{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Connection succesful!")
}).catch((error)=>{
    console.log(error)})
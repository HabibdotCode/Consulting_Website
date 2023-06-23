const { error } = require("jquery");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength:4
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email address!")
            }
        }
    },
    phone:{
        type:Number,
        required: true,
        min:11
    },
    message:{
        type:String,
        required:true,
        minLength:20
    },
    date:{
        type:Date,
        default:Date.now,
    }

})


const User = mongoose.model("User",userSchema);

module.exports = User;
const mongoose =require('mongoose')

const userinfoschema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    location:String,
    age:Number,
    phoneno:Number

});
module.exports= mongoose.model("userinfos",userinfoschema)
const mongoose=require('mongoose');
const { stringify } = require('nodemon/lib/utils');

var Detailschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
})

const Userdb = mongoose.model('userdb',Detailschema);

module.exports=Userdb;
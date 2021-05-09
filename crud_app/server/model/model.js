const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    modulecode:{
        type:String, 
        required:true
    },
    modulename:{
        type:String,
        required:true,
        unique:true
    },
    semester:String,
    day:String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;


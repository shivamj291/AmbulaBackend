const { default: mongoose, Schema } = require("mongoose");

const schema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
      
})

const modalsdata =  mongoose.model('data',schema);
module.exports = modalsdata;

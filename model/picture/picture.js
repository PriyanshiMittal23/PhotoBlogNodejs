const mongoose= require('mongoose');

let pictureSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    img:{
        type:String,
        trim:true
    },
    desc:{
        type:String,
        trim:true
    }
})

let Picture = mongoose.model('Picture' , pictureSchema);
module.exports = Picture;
const express = require('express');
// const Product = require('../model/product');
const Picture = require('../model/picture/picture');
const router = express.Router();
// Picture

// Read
router.get('/pictures',async(req,res)=>{
    let pictures = await Picture.find({});
    res.render('pictures/index',{pictures});
})

module.exports = router;
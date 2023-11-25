const Picture = require("../model/picture/picture");
const express = require("express");
const router = express.Router();

// router.get("/pictures/<%= item.id %>",async(req,res)=>{
//     let pictures = await Picture.find({});
//     res.render("pictures/show",{pictures});
// })

router.get('/pictures/:picid',async(req,res)=>{
    let {picid} = req.params;
    let foundpic = await Picture.find({"_id":picid});
    res.render('pictures/show' , {foundpic});
    // res.send('showing particular quote');
})

module.exports = router;
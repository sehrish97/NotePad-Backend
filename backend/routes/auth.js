const express = require("express");
const user = require("../models/User");

const User = require('../models/User');
const router = express.Router();


// Create a User using: POST "/api/auth/. Doesn't require Auth

router.get('/', async(req,res)=>{
    const users = User(req.body)
    const createduser = await users.save()
    res.json(createduser).status(201)
})


// router.post('/', async(req,res)=>{
//     try{
//         // console.log(req.body);
//     const users =new User({
//         name:"sehrish",
//     email:"abc@gmail.com",
//     password:"fcgfhgh"
//     });
//     const newNotes = await users.save();
//     res.json({message: "data connected", data: newNotes})

//     }
//     catch (error){
//         console.log(error);
//     }
// })
module.exports = router;
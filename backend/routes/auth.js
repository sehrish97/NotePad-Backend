const express = require("express");
const User = require('../models/User');



// Create a User using: POST "/api/auth/. Doesn't require Auth
const router = express.Router();
router.get('/', (req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send('hello')
})
module.exports = router;
const express = require('express')
const router = express.Router();
const notes = require('../data.js');

router.get('/', (req,res)=>{
    res.json(notes).status(200) 
});

router.get('/:id',(req,res)=>{
    const {id} = req.params
    console.log(id)

    const singlenote = notes.filter(item => item.id == id)
    res.json(singlenote).status(200)
})
module.exports = router;
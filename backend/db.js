const mongoose = require('mongoose');
require("dotenv").config();
// const mongoURL = 'mongodb+srv://Sehrish:<SehrishBibi123>@cluster0.xtntd.mongodb.net/NotePad?retryWrites=true&w=majority';

async function connetToMongo (){
   await mongoose.connect(process.env.URL, ()=>{
        console.log('Connected to Mongo Successfully');
    })
 
}
module.exports = connetToMongo;
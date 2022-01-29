const mongoose = require('mongoose');


const mongoURL = 'mongodb+srv://Sehrish:<SehrishBibi123>@cluster0.xtntd.mongodb.net/NotePadretryWrites=true&w=majority';

const connetToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log('Connected to Mongo Successfully');
    })
}
module.exports = connetToMongo;
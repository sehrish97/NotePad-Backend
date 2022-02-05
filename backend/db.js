const mongoose = require('mongoose');


const mongoURL = 'mongodb+srv://DataBase:SehrishBibi111@cluster0.ygit6.mongodb.net/NotePadretryWrites=true&w=majority';
//
const connetToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log('Connected to Mongo Successfully');
    })
}
module.exports = connetToMongo;
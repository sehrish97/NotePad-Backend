const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToMongo = require('./db');
const notePadRoutes = require('./routes/notePadRoutes.js');
connectToMongo();

const app = express();

app.use(cors())
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.get('/' , (req,res)=>{
    res.send(`Server is running at ${PORT}`)
});
//Available Routes
app.use('/api/notes', require('./routes/notePadRoutes'))
app.use('/api/auth', require('./routes/auth'))




app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
});

app.use('/notes', notePadRoutes)
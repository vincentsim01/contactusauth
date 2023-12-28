const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
// const dotenv = require('dotenv');
const port = 6000;
const contactAuthController = require('./controller/contactAuthController');

app.use(cors());
app.use('/api/auth', contactAuthController);

app.get('/',(req,res) => {
    res.send("Hiii From Express");
})






app.listen(port,() => {
    console.log(`Running on port ${port}`)
})

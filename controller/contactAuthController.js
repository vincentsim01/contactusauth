
const express = require('express');
const bodyParser = require('body-parser');

const Contact = require('../model/contactUserSchema');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());


router.post('/Contactform',(req,res) => {

    Contact.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })
    .then(function (Contacts) {
        res.send(Contacts);


        });
})









module.exports = router;





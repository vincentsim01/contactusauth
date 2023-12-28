
const express = require('express');
const bodyParser = require('body-parser');

const User = require('../model/contactUserSchema');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());


router.post('/SubmitContact',(req,res) => {

    User.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })
    .then(function (users) {
        res.send(users);

        console.log(users);
        });
})









module.exports = router;





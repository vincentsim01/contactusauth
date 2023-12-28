const mongoose = require('mongoose');

let contactUserSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    message:String
})

mongoose.model('contactusdata',contactUserSchema);
module.exports = mongoose.model('contactusdata');
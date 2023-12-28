const mongoose = require('mongoose');

let submitSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
})

mongoose.model('contactusdatas',submitSchema);
module.exports = mongoose.model('contactusdatas');
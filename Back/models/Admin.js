const mongoose = require('mongoose');
const {boolean} = require("webidl-conversions");

const AdminSchema = new mongoose.Schema({
    username: { type: String, required : true, unique : true},
    email : { type: String, required : true, unique : true},
    password: { type: String, required : true}
})

module.exports = Admin = mongoose.model('Admin', AdminSchema);
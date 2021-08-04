const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String,
    name:String,
    profile_pic:{type:mongoose.Schema.ObjectId, ref:'images'},
    zipCode:Number
})

module.exports = mongoose.model('users',userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    confirmPassword:String,
    name:String,
    profile_pic:{type:mongoose.Schema.ObjectId, ref:'images'},
    zipcode:Number
})

module.exports = mongoose.model('users',userSchema);
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
     name : {type : String , required : true} ,
     email : {type : String , required : true , unique : true},
     contact : {type : String , required : true},
     city : {type : String , required : true} , 
     course : {type : String , required : true},
     dob : {type : String , required : true},
     message : {type : String , required : true}     
})

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
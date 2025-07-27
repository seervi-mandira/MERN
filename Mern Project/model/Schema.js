
const mongoose = require('mongoose');
const  jwt = require('jsonwebtoken');

 const userschema = new mongoose.Schema({
             username:{
                          type:String,
                          required: true
             },
             email:{
                          type:String,
                          required: true
             },
             phone:{
                          type:Number,
                          required: true
             },
             password:{
                          type:String,
                          required: true
             },
              isAdmin: {
    type: Boolean,
    default: false,
  },
 })



 userschema.methods.generateToken = async function() {
             try{
                          return jwt.sign({
                                       userID : this._id.toString(),
                                       email : this.email,
                                        username: this.username,
                                        phone: this.phone
                        },
             
             
             
               process.env.jwt_sign           
             )




             }
             catch(error){
                          console.error(error);
             }

 }
// in the user scheme we creat a collection with the singular form 


//json token 
// json will not stored in the databse it will be storged in the form of cookied and loacl storge 
 const user = new mongoose.model('Userdata', userschema);

 module.exports = user;
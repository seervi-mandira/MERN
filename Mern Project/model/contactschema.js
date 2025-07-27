const mongoose = require('mongoose');



const contactscheme = new mongoose.Schema({
             username:{
                          type:String,
                          required: true
             }, email:{
                         type:String,
                          required: true  
             },
              message:{
                         type:String,
                          required: true  
             }
})

const contactdata = new mongoose.model('contacts', contactscheme)
module.exports = contactdata;
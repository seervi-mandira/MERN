// require('dotenv').config();
// const mongoose = require('mongoose');
// const connectd = async() =>{
// try{
// await mongoose.connect(process.env.mon)
// }catch{
//              console.error('unable to connecte to data base ');
           
// }
// }
// module.exports= connectd;




require('dotenv').config()
 const mongoose = require('mongoose');
  
   
  const connectdatabse  = async() =>{
  try{  
    console.log('connected the database')
    return mongoose.connect(process.env.MONGO_URI);

  }catch{
    console.log('unable to connect databse ');
     process.exit(0)
  }

  }


  module.exports = connectdatabse
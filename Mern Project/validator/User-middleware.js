// const jwt = require('jsonwebtoken')

// const UserMiddleware = async(req, res, next) =>{
// try {
// const token = req.header('Authorization')

 
//     if (!token)  {
//              res.status(400).json({msg:'it is not a token '})
//     }      
     
//      const jswttoken = token.replace('Bearer', '').trim(); 
//         console.log('usetoken  for  the postman', jswttoken)

//     try {
// //         const isverify = jwt.verify(jswttoken, process.env.jwt_sign) 
// //         console.log(isverify) 
//         const isverify = jwt.verify(jswttoken, process.env.jwt_sign);
// req.user = isverify;  // ✅ THIS LINE IS MISSING IN YOUR CODE
// console.log(isverify);

        


//     } catch (error) {
//              console.log(error)
//     }
    
 
// next()} catch (error) {
//              console.log(error); 
// }
// }
const user = require('../model/Schema')


const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserMiddleware = async (req, res, next) =>{

     const token = req.header('Authorization'); 
     if(!token){
        res.status(400).json({msg:'wrong token '})
     }



 const jwttoken = token.replace('Bearer', '').trim();
console.log('token form middleware', jwttoken)


try {
    const isverify = jwt.verify(jwttoken, process.env.jwt_sign)

const userdata = await user.findOne({email: isverify.email})


 req.user = userdata ; 
req.token = token; 









console.log(userdata)

    next()
} catch (error) {
 console.log(error)  
     res.status(500).json({ msg: 'Server error' });
 
}




}



















module.exports = UserMiddleware; 
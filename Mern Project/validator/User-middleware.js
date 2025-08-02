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

const UserMiddleware = async (req, res, next) => {

     const token = req.header('Authorization'); 
     if (!token) {
        return res.status(401).json({ msg: 'Authorization token missing' });
     }

     const jwttoken = token.split(' ')[1];  // ✅ safer extraction
     console.log('token from middleware', jwttoken)

     try {
         const isverify = jwt.verify(jwttoken, process.env.jwt_sign)

         const userdata = await user.findOne({ email: isverify.email })

         if (!userdata) {
             return res.status(404).json({ msg: 'User not found' });
         }

         req.user = userdata; 
         req.token = jwttoken; 

         console.log(userdata)

         next()
     } catch (error) {
         console.log(error)  
         return res.status(401).json({ msg: 'Invalid or expired token', error: error.message });
     }

}

module.exports = UserMiddleware;

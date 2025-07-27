const adminMiddleware = (req, res, next) =>{

try {
         console.log(req.user)    

const adminrole = req.user.isAdmin

if(!adminrole){
             res.status(400).json({msg: 'not a admin'})
}
// res.status(200).json({msg: req.user.isAdmin})
             next();
} catch (error) {
            console.log('error from admin middleware')  
}


}

 module.exports = adminMiddleware;
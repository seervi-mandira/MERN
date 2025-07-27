const Services = require('../model/Services')
const service = async(req, res) =>{
try {

 const {service, price, provider,description} = req.body;
 const data = await Services.create({service, price, provider,description}); 
 res.status(200).json(data)

} catch (error) {
             console.log(`server error ${error}`)
}
}


const GetAllService =  async(req, res) =>{
  

try {
    
    const allservice = await Services.find({});
     res.status(200).json(allservice)


} catch (error) {
    console.log(error);
}

}




const deleteservice = async (req, res) =>{
try {
    const id = req.params.id;
const result = await Services.deleteOne({_id: id})
res.status(200).json( result)
} catch (error) {
    console.log(error);
    res.status(400).json({msg:'service error data'})

}
}




module.exports = {service, GetAllService, deleteservice}
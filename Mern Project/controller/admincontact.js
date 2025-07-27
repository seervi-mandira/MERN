//  const contactdata = require('../model/contactschema')
//  const contactdatas =  async(req, res) =>{
// try {
//           const GetAllContact =  await contactdata.find({}) ;
//           res.status(200).json(GetAllContact);
// } catch (error) {
//        console.log(error);
//         res.status(400).json({msg: 'unable to fetch the contcat data'})      
// }
// } 



// const DeleteContactdata = async(req, res) =>{
//  try {
//               const id = req.params.id;
//               const result = await contactdata.deleteOne({_id : id})
//               res.status(200).json({msg:'contact form data', result})
             
//  } catch (error) {
//              res.status(400).json({msg:'error'})
//              console.log(error);
//  }
// }

   











// module.exports = {contactdatas, DeleteContactdata};

// controller/admincontact.js

const contactdata = require('../model/contactschema');

const contactdatas = async (req, res) => {
  try {
    const GetAllContact = await contactdata.find({});
    res.status(200).json(GetAllContact);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'unable to fetch the contact data' });
  }
};

const DeleteContactdata = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await contactdata.deleteOne({ _id: id });
    res.status(200).json({ msg: 'contact deleted', result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'error' });
  }
};

module.exports = { contactdatas, DeleteContactdata };

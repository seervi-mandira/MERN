
const contacts = require('../model/contactschema')
const contactform = async (req, res) => {
try {
       const response = req.body
       await contacts.create(response)
       res.status(200).json({mes:'sucressfull done '})   
} catch (error) {
            res.status(400).json({mes:'unable to send '}) 
}
}
 module.exports = contactform;
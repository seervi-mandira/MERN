
// const contacts = require('../model/contactschema')
// const contactform = async (req, res) => {
// try {
//        const response = req.body;
//        await contacts.create(response)
//        res.status(200).json({mes:'sucressfull done '})   
// } catch (error) {
//             res.status(400).json({mes:'unable to send '}) 
// }
// }
//  module.exports = contactform;
const Contact = require('../model/contactschema');

const contactform = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Validation
    if (!username || !email || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Save to DB
    const newContact = await Contact.create({ username, email, message });

    res.status(201).json({ msg: "Contact form submitted successfully", data: newContact });
  } catch (error) {
    console.error("Contact form error:", error.message);
    res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = contactform;

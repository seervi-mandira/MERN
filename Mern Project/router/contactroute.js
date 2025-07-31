// router/adminRoute.js

const express = require('express');
const router = express.Router();

const { contactdatas, DeleteContactdata } = require('../controller/admincontact');
const contactform = require('../controller/contactcontroller');

router.route('/contact').get(contactdatas);
router.route('/delete/:id').delete(DeleteContactdata);
router.route('/contacts').post(contactform)
module.exports = router;

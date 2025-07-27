// router/adminRoute.js

const express = require('express');
const router = express.Router();

const { contactdatas, DeleteContactdata } = require('../controller/admincontact');

router.route('/contact').get(contactdatas);
router.route('/delete/:id').delete(DeleteContactdata);

module.exports = router;

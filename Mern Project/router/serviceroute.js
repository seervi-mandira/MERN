const express = require('express')
const {GetAllService,service, deleteservice} = require('../controller/servicecontorller')
const router = express.Router();
router.route('/service').post(service);
router.route('/allservices').get(GetAllService)
router.route('/delete/:id').delete(deleteservice)
module.exports= router
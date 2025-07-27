const express = require('express');

const router = express.Router();
const {register, login, Usersmidd}= require('../controller/authRegister')
const  validate = require('../validator/validatorMiddleware')
const singupSchema = require('../validation/userValidation');
const UserMiddleware = require('../validator/User-middleware');
router.route('/userregister').post(validate(singupSchema), register);

router.route('/login').post(login);

router.route('/usersdata').get(UserMiddleware,  Usersmidd);

module.exports = router;


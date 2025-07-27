 const express = require('express')
 const {getallusers, deleteuserid, updateUserById, userUpdateByID} = require('../controller/admincontroller')
 const router = express.Router();
const UserMiddleware = require('../validator/User-middleware');
const adminMiddleware = require('../validator/adminMiddleware');
 router.route('/user').get(UserMiddleware,adminMiddleware, getallusers);
  router.route('/update/:id').get(updateUserById);
  router.route('/user/update/:id').patch(userUpdateByID);
  router.route('/delete/:id').delete(deleteuserid)
  

 module.exports = router
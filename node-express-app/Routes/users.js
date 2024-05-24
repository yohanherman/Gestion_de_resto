
const express = require('express');
const router = express.Router();
const userControllers = require('../Controllers/Users');

const auth=require('../middleware/auth');


router.post('/signUp', userControllers.signUp);
router.post('/logIn', userControllers.logIn);
router.get('/logout', auth,userControllers.logout);


module.exports=router;

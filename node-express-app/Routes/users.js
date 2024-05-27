
const express = require('express');
const router = express.Router();
const userControllers = require('../Controllers/Users');

const {body}=require('express-validator')

// const auth=require('../middleware/auth');
const validate = require('../validation');

router.post('/signUp', userControllers.signUp);

router.post('/logIn', [body('email').notEmpty().withMessage('field email cannot be empty'),
    body('password').notEmpty().withMessage("password can't be empty").isString().withMessage('this field can only be a string')
], validate,userControllers.logIn);
// router.get('/logout', auth,userControllers.logout);


module.exports=router;

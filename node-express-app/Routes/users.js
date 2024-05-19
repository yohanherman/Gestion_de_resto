const express=require('express');

const router=express.Router();

const userControllers=require('../Controllers/Users')

router.post('/api/signUp',userControllers.signUp)
router.get('/api/logIn',userControllers.logIn)

module.exports=router;
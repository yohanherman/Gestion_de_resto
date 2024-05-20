
const express = require('express');
const router = express.Router();
const userControllers = require('../Controllers/Users');

router.post('/signUp', userControllers.signUp);
router.post('/logIn', userControllers.logIn);

module.exports = router;
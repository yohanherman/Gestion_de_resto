const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');


router.post('/employee', employeeController.saveEmployees)



module.exports = router;
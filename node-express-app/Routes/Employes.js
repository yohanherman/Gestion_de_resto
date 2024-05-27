const express = require('express')
const auth =require('../middleware/auth')

const router= express.Router();

const {body}=require('express-validator');

const EmployesController=require('../Controllers/Employes');
const validate = require('../validation');

router.get('/employes',EmployesController.getAllEmployes);
router.get('/employes/:id',EmployesController.getSingleEmployes)


router.post('/employes', auth, [body('first_name').notEmpty().withMessage('the field first_name is required').isString().withMessage('first_name can only be a string'),
 body('last_name').notEmpty().withMessage('the field last_name is required').isString().withMessage('the last_name can only be a string'),
 body('restaurant_id').notEmpty().withMessage('provide a restaurant ID').isInt().withMessage('restaurant_id can only be a number'),
 body('hire_date').isString().withMessage('hire_date can only be a string').notEmpty().withMessage('hire_date cannot be empty')
], validate,EmployesController.createEmployes);


router.delete('/employes/:id',auth,EmployesController.deleteEmpoyes);

router.put('/employes/:id', auth, [body('first_name').notEmpty().withMessage('the field first_name is required').isString().withMessage('first_name can only be a string'),
body('last_name').notEmpty().withMessage('the field last_name is required').isString().withMessage('the last_name can only be a string'),
body('restaurant_id').notEmpty().withMessage('provide a restaurant ID').isInt().withMessage('restaurant_id can only be a number'),
body('hire_date').isString().withMessage('hire_date can only be a string').notEmpty().withMessage('hire_date cannot be empty')],validate,EmployesController.updateEmploye);

router.get('/restaurants/employes/:restaurant_id',EmployesController.getAllEmployesByResId);

module.exports=router;
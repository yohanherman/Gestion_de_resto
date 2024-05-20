const express = require('express');
const router= express.Router();

const {body} =require('express-validator');
const validate=require('../validation.js');


const restaurantController=require('../Controllers/Restaurant.js')

router.get('/restaurants',restaurantController.getAllrestaurants);
router.get('/restaurants/:id',restaurantController.getSingleRestaurant);
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);


router.post('/restaurants', [body('name').isString().withMessage('name must be a string').notEmpty().withMessage('the field cannot be empty'),
body('city').isString().withMessage('city must be a string').notEmpty().withMessage('the field cannot be empty'),
body('nbcouverts').isInt().withMessage('nbcouverts must be of type number').notEmpty().withMessage('the field cannot be empty'),
body('terrasse').isString().withMessage('terrasse must a string').notEmpty().withMessage('the field cannot be empty'),
body('parking').isString().withMessage('parking must be of type string').notEmpty().withMessage('field cannot be empty')
], 
validate,
restaurantController.createRestaurant);


router.put('/restaurants/:id',restaurantController.updateRestaurant);






module.exports=router;
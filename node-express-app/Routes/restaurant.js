const express = require('express');
const router= express.Router();

const {body} =require('express-validator');
const validate=require('../validation.js');


const restaurantController=require('../Controllers/Restaurant.js')

router.get('/api/restaurants',restaurantController.getAllrestaurants);
router.get('/api/restaurants/:id',restaurantController.getSingleRestaurant);
router.delete('/api/restaurants/:id', restaurantController.deleteRestaurant);


router.post('/api/restaurants', [body('name').isString().withMessage('name must be a string').notEmpty().withMessage('the field cannot be empty'),
body('city').isString().withMessage('city must be a string').notEmpty().withMessage('the field cannot be empty'),
body('nbcouverts').isInt().withMessage('nbcouverts must be of type number').notEmpty().withMessage('the field cannot be empty'),
body('terrasse').isString().withMessage('terrasse must a string').notEmpty().withMessage('the field cannot be empty'),
body('parking').isString().withMessage('parking must be of type string').notEmpty().withMessage('field cannot be empty')
], 
validate,
restaurantController.createRestaurant);


router.put('/api/restaurants/:id',restaurantController.updateRestaurant);






module.exports=router;
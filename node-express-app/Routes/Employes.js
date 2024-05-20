const express = require('express')

const router= express.Router();

const EmployesController=require('../Controllers/Employes');

router.get('/employes',EmployesController.getAllEmployes);
router.get('/employes/:id',EmployesController.getSingleEmployes)
router.post('/employes',EmployesController.createEmployes);
router.delete('/employes/:id',EmployesController.deleteEmpoyes);
router.put('/employes/:id',EmployesController.getSingleEmployes);

router.get('/restaurants/employes/:restaurant_id',EmployesController.getAllEmployesByResId);

module.exports=router;
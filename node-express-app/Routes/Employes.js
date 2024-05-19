const express = require('express')

const router= express.Router();

const EmployesController=require('../Controllers/Employes');

router.get('/api/employes',EmployesController.getAllEmployes);
router.get('/api/employes/:id',EmployesController.getSingleEmployes)
router.post('/api/employes',EmployesController.createEmployes);
router.delete('/api/employes/:id',EmployesController.deleteEmpoyes);
router.put('/api/employes/:id',EmployesController.getSingleEmployes);

router.get('/api/restaurants/employes/:restaurant_id',EmployesController.getAllEmployesByResId);

module.exports=router;
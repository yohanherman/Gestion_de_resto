const express = require('express')
const auth =require('../middleware/auth')

const router= express.Router();

const EmployesController=require('../Controllers/Employes');

router.get('/employes',EmployesController.getAllEmployes);
router.get('/employes/:id',EmployesController.getSingleEmployes)
router.post('/employes',auth,EmployesController.createEmployes);
router.delete('/employes/:id',auth,EmployesController.deleteEmpoyes);
router.put('/employes/:id',auth,EmployesController.updateEmploye);

router.get('/restaurants/employes/:restaurant_id',EmployesController.getAllEmployesByResId);

module.exports=router;
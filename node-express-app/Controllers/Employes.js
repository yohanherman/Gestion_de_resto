const mysql=require('mysql');
const connexion =require('../Models/connexion');


const getAllEmployes=(req,res)=>{

    connexion.query('SELECT Employes.id, Employes.first_name , Employes.last_name , Employes.hire_date ,restaurant.name,restaurant.city  FROM Employes JOIN restaurant ON Employes.restaurant_id = restaurant.id ',(err,results,fields)=>{
        if(err) throw err;
        res.status(200).json(results)
    })
}


const getAllEmployesByResId=(req,res)=>{

    const restaurant_id=parseInt(req.params.restaurant_id);

    connexion.query('SELECT id,first_name, last_name FROM employes WHERE restaurant_id = ?',[restaurant_id],(err,results,fields)=>{
        if(err) throw err;
        res.status(200).json(results);
    })
}


const createEmployes=(req,res)=>{

    const first_name = req.body.first_name;
    const last_name=req.body.last_name;
    const hire_date=req.body.hire_date;
    const restaurant_id= req.body.restaurant_id;

    connexion.query('INSERT INTO employes (first_name,last_name,hire_date,restaurant_id) VALUES (?,?, STR_TO_DATE(?,"%d/%m/%Y"), ? )',[first_name,last_name,hire_date,restaurant_id],(err,result)=>{
        if(err)throw err;
        res.status(201).json({message:'employe cree avec succes'})
    
    })
}


const deleteEmpoyes=(req,res)=>{
    const id=parseInt(req.params.id)

    connexion.query('DELETE FROM Employes WHERE id = ?',[id],(err,results)=>{
        if(err) throw err;
        res.status(204).json({message:'employe supprimé aec succes'})
    })
}


const updateEmploye=(req,res)=>{

    const id=parseInt(req.params.id)

    const first_name=req.body.first_name
    const last_name=req.body.last_name
    const hire_date=req.body.hire_date
    const restaurant_id=req.body.restaurant_id;

    connexion.query('UPDATE Employes SET first_name = ? , last_name = ? , hire_date = (STR_TO_DATE( ? , "%d/%m/%Y" )) , restaurant_id = ? WHERE id = ? ',[first_name,last_name,hire_date,restaurant_id, id],(err,results,fields)=>{
        if(err) throw err
        res.status(204).json(results)
    })
}

const getSingleEmployes=(req,res)=>{

    const id=parseInt(req.params.id);

    connexion.query('SELECT Employes.id, Employes.first_name , Employes.last_name , Employes.hire_date ,restaurant.name,restaurant.city  FROM Employes JOIN restaurant ON Employes.restaurant_id = restaurant.id  WHERE Employes.id = ?',[id],(err,results)=>{
        if(err) throw err;

        res.status(200).json({results:results});
    });
}

module.exports={getAllEmployes,getSingleEmployes,createEmployes,deleteEmpoyes,updateEmploye,getAllEmployesByResId};
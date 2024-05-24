const mysql=require('mysql')

const connexion=require('../Models/connexion');

const getAllrestaurants=(req,res)=>{

    // connexion.query('SELECT restaurant.id, restaurant.name , restaurant.city , restaurant.terrasse ,restaurant.parking ,employes.first_name , employes.last_name  FROM restaurant JOIN employes ON restaurant.employes_id = employes.id',(err,results)=>{

    connexion.query('SELECT restaurant.id, restaurant.name , restaurant.nbcouverts , restaurant.city , restaurant.terrasse ,restaurant.parking  FROM restaurant',(err,results)=>{
        
        if(err) throw err;
        res.status(200).json(results)
    })
}

const getSingleRestaurant=(req,res)=>{

    const id=parseInt(req.params.id)

    connexion.query('SELECT restaurant.id, restaurant.name , restaurant.nbcouverts , restaurant.city , restaurant.terrasse ,restaurant.parking FROM restaurant WHERE id = ? ',[id] ,(err,result)=>{
        
        if(err) throw err
        
        res.status(200).json(result)
    })
}


const deleteRestaurant=(req,res)=>{
const id=parseInt(req.params.id);

  connexion.query('DELETE FROM restaurant WHERE id = ?' ,[id],(err,result)=>{
    if(err) throw err
    res.status(204).json({message:'restaurant effacé'})
  })
}


const createRestaurant=(req,res)=>{

    // console.log(req.body);
    const name=req.body.name;
    const city= req.body.city;
    const nbcouverts =req.body.nbcouverts;
    const terrasse=req.body.terrasse
    const parking=req.body.parking;

    connexion.query('INSERT INTO restaurant (name,city,nbcouverts,terrasse,parking) VALUES(?,?,?,?,?)',[name,city,nbcouverts,terrasse,parking], (err,result)=>{
        if(err) throw err;
        res.status(201).json({message:'restaurant creé avec succes'});
    });
}

const updateRestaurant=(req,res)=>{
    // console.log(req.body);
    const id=parseInt(req.params.id);

    const name=req.body.name;
    const city= req.body.city;
    const nbcouverts =req.body.nbcouverts;
    const terrasse=req.body.terrasse
    const parking=req.body.parking;


    connexion.query('UPDATE restaurant SET name = ? , city = ? , nbcouverts = ? ,terrasse = ? ,parking = ? WHERE id= ?',[name,city,nbcouverts,terrasse,parking,id],(err,result)=>{
        if(err) throw err
        res.status(200).json({message:'Objet modifié avec succès'})
    })
}


module.exports= {getAllrestaurants,getSingleRestaurant,deleteRestaurant,createRestaurant,updateRestaurant}


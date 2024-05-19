const connexion=require('../Models/connexion');

const bcrypt=require('bcrypt');

const signUp=(req,res)=>{

    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    bcrypt.hash(password,10)
    .then(hash=>{

        connexion.query('INSERT INTO users (name,email,password) VALUES( ?,?,?)',[name,email,hash],(err,results)=>{
            if(err) throw err
            res.status(201).json({message:'user cree avec succes'})
        }) 
    })
   .catch((err)=>{
   res.status(500).json({err})
   })

   


    // connexion.query('INSERT INTO users (name,email,password) VALUES( ?,?,?)',[name,email,password],(err,results)=>{
    //     if(err) throw err
    //     res.status(201).json({message:'user cree avec succes'})
    // })

}


const logIn=()=>{

}

module.exports={signUp,logIn}
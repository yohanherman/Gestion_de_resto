const connexion=require('../Models/connexion');
const jwt=require('jsonwebtoken');

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
}


const logIn=(req,res,next)=>{
    
    const email=req.body.email;
    const password=req.body.password;

    connexion.query('SELECT * FROM users WHERE email = ?',[email],(err,results,fields)=>{
        if(err) throw err;

        if(results.length===0 ){
            res.status(401).json({message:'mot de passe/email incorrect'})
        }


        const user=results[0];


        bcrypt.compare(password , user.password)
        .then(valid=>{

            if(!valid){
                res.status(401).json({message:'paire identifiant/mot de passe incorrect'})
            }else{
                res.status(200).json({

                    userId: user.id,

                    token: jwt.sign(
                        { userId : user.id},
                        'RANDOM_TOKEN_SECRET',
                        {expiresIn:'24h'}

                    )
                    
                })
            }

        })
        .catch((err)=>{res.status(500).json({err})})

    })

}

module.exports={signUp,logIn}
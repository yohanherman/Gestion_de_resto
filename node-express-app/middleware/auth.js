const jwt=require('jsonwebtoken');

const authentification=(req,res,next)=>{

   
    try{
        // const token = req.headers.authorization.split(' ')[1];
        const token=req.cookies.token;
        const decodedToken= jwt.verify(token,'RANDOM_TOKEN_SECRET');
        const userId=decodedToken.userId;

        // les infos de mo  user
        req.auth={
            userId:userId,
        }

        next();

    }catch(err){
        res.status(401).json({message:"vous n'etes pas authaurisé(e) a executer cette requete"})
    }
}
module.exports=authentification;


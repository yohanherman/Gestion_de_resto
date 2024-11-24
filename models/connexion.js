const mongoose = require('mongoose'); 

const connexionDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://johane:11Decembre@cluster0.65s4g.mongodb.net/manage_employees'),
            console.log('Connexion reussie');
    }catch(error){
        console.error("connexion echoué");
        process.exit(1);
    }
}

module.exports = connexionDB;

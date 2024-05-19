const mysql=require('mysql');
// console.log('connected')

const connexion=mysql.createConnection({

    database:'nodereactjs',
    host:'localhost',
    user:'root',
    password:''
}
)

connexion.connect(function(err){
    if(err) throw err;
    console.log('connected to database ...')
})

module.exports=connexion;

let mysql=require('mysql');

console.log('Get connection...');

const connection= mysql.createConnection({
    database:'testnodejs',
    user:'localhost',
    user:'root',
    password:''
})

connection.connect((err)=>{

    // if(err) throw err;
    // console.log('Connected');

    // let sql_template='Select * from ??'

    // let replaces=['Employes'];

    // sql=mysql.format(sql_template,replaces);


    // connection.query(sql, function(err,row,fields){
    //     if(err) throw err;

    //     for(let i=0 ; i< row.length ; i++){
    //         console.log(row[i]);
    //     }

    // })


    // pour recuperer un element en particulier
    if(err) throw err;
    
 
    const sql_template = ['SELECT * FROM ?? WHERE Hire_date > STR_TO_DATE(?, "%d/%m/%Y")'];
    const replaces = ['Employes', '20/11/1995'];

    const sql = mysql.format(sql_template.join(' '), replaces);


    connection.query(sql, function(err,row,fields){
        if(err) throw err;

        for(let i=0 ; i< row.length ; i++){
            console.log(row[i])

        }
    })
})
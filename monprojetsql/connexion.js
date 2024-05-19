let mysql =require('mysql');

console.log('Get connection...')

var connection = mysql.createConnection({
    database: 'testnodejs',
    host: 'localhost',
    user:'root',
    password:''
})

connection.connect(function(err){
    if(err) throw err;
    console.log('Connected');
})


// let sql2= 'CREATE TABLE  Employes (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,FirstName VARCHAR(150),LastName VARCHAR(150),Hire_date DATE)';

// connection.query(sql2, function(err){
//     if(err) throw err;
//     console.log("Table Employés créée");

// })

let firstName=['john','jack','Paul'];
let lastname=['Hikes','Smith','Gates'];
let hireDates=['22/10/2001','11/11/2000','12/12/1990']


const data=firstName.map((firstName,index)=>({

    firstName: firstName,
    lastName: lastname[index],
    hireDates:hireDates[index]
}))


for( let i=0 ; i < data.length; i++){

    let sql3 = 'INSERT INTO Employes(FirstName,LastName,Hire_Date) VALUES (?,?, STR_TO_DATE(?,"%d/%m/%Y"))';
    let values=[data[i].firstName, data[i].lastName,data[i].hireDates];


    connection.query(sql3,values, function(err){
        if(err) throw err;
        console.log('Insert a Record');
    })

}





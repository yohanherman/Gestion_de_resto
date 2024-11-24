const Employee = require('../models/employeesModel') 

const saveEmployees = (req, res )=>{

    const employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        position: req.body.position,
        hiring_date: req.body.hiring_date
    })
    employee.save().then(()=>{
            res.status(201).json({ message: 'employee successfully created'});
        }
    ).catch((error)=>{
        res.status(400).json({error: error});
    })

}

module.exports= {saveEmployees}
const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    lastname: { type:String, required: true},
    firstname: { type:String, required: true},
    age: { type: Number, required: true},
    position: { type:String, required: true},
    hiring_date: { type:Date, required: true }

})


module.exports = mongoose.model('employees', employeeSchema);
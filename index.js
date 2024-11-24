const express = require('express');
// const testRoutes = require('./routes/test')
const employeeRoutes = require('./routes/employeeRoutes');


const connectDB = require('./models/connexion');

connectDB();

const app = express();

app.use(express.json());



// app.use('/api', testRoutes);
app.use('/api', employeeRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server  is listening  at port ${PORT}`)
})

module.exports = app;
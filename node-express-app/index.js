
const express = require('express');
const cors= require('cors')
const cookieParser=require('cookie-parser');

const app = express();


app.use(express.json());
app.use(cookieParser());


const corsOptions={
     origin: 'http://localhost:5173',
     credentials:true,
     allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
     methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
}

app.use(cors(corsOptions));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });


const restaurantRoutes = require('./Routes/restaurant');
const EmployesRoutes = require('./Routes/Employes');
const userRoutes = require('./Routes/users');


app.use('/api', restaurantRoutes); 
app.use('/api', EmployesRoutes);   
app.use('/api', userRoutes);   



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
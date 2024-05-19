const express =require('express');
const app=express();

app.use(express.json());

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server is listening at port 5000');
})


const restaurantRoutes=require('./Routes/restaurant');
const EmployesRoutes=require('./Routes/Employes');
const userRoutes=require('./Routes/users')


app.use((req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app.get('/api/restaurants',restaurantRoutes);
app.get('/api/restaurants/:id',restaurantRoutes)
app.delete('/api/restaurants/:id',restaurantRoutes);
app.post('/api/restaurants',restaurantRoutes);
app.put('/api/restaurants/:id',restaurantRoutes);


app.get('/api/restaurants/employes/:restaurant_id',EmployesRoutes)



app.get('/api/employes',EmployesRoutes);
app.get('/api/employes/:id',EmployesRoutes)
app.post('/api/employes',EmployesRoutes);
app.delete('/api/employes/:id',EmployesRoutes);
app.put('/api/employes/:id',EmployesRoutes);



app.post('/api/signUp',userRoutes)





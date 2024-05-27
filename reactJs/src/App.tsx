
import './App.css'
import Accueil from './Pages/Accueil'
import Restaurants from './Pages/Restaurants'
import About from './Pages/about'
import CreateEmploye from './Pages/createEmploye'
import Update from './Pages/updateRestaurant';
import RestaurantDetails from './Pages/RestaurantDetails'
import RestaurantCreation from './Pages/createRestaurant'
import { Route,Routes } from 'react-router-dom'
import ShowEmployes from './Pages/Employes'
import UpdateEmploye from './Pages/updateEmpl'
import Connexion from './Pages/connexion'


function App() {

return (
<div className='App'>
 <Routes>
   <Route path='/' element ={<Accueil/>}/>
   <Route path='/restaurants' element={<Restaurants/>}/>
   <Route path='/employes' element={<ShowEmployes/>}/>
   <Route path='/About' element={<About/>} />
   <Route path='/CreateRestaurant'element={<RestaurantCreation/>} />
   <Route path='restaurants/:id' element={<RestaurantDetails/>} />
   <Route path='/modifier/:id' element={<Update/>}/>
   <Route path='/createEmploye' element={<CreateEmploye/>}/>
   <Route path='modifier-employe/:id' element={<UpdateEmploye/>}/>
   <Route path='/connexion' element={<Connexion/>}/>

 </Routes>
</div>

  )
}
export default App

import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

interface Items {

 id:number;
 name:string,
 city:string,
 nbcouverts:number,
 terrasse:string,
 parking:string

}
const Restaurants =()=>{
const [data, setDate]=useState<Items[]>();
    
useEffect(()=>{

        async function getAllRestaurants(){

            try{
                const response= await axios.get('http://localhost:5000/api/restaurants');
                // console.log(response);
                setDate(response.data);

            }catch(error){
                console.log(error)
            }

        }
        getAllRestaurants();

},[])

    return (

    <div>
    <Navbar/>

    <h1 className="font-bold text-2xl">Restaurants</h1>

   <div className="text-end"><Link to={'/CreateRestaurant'}>Creer un restaurant <i className="fa-solid fa-plus"></i></Link></div>

    {data && data.map((items,index)=>(

    <ul key={index}>
        {/* <li key={index}></li> */}
        <li className="text-xl capitalize ">{items.name}</li>
        <Link to={`/restaurants/${items.id}`}> voir plus</Link>

    </ul>

    ))}
 
    </div>
 )}

export default Restaurants;
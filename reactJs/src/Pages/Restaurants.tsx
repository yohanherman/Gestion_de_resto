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

    <h1 className="font-bold text-2xl my-7">Restaurants</h1>

   <div className="text-end mb-10"><span className="bg-sky-500 p-2 text-white font-bold"><Link to={'/CreateRestaurant'}>Creer un restaurant <i className="fa-solid fa-plus text-black text-xl"></i></Link></span></div>

<div className="">

    {data && data.map((items,index)=>(

    <ul key={index}>
          <div className="mb-5">
        <li className="text-xl capitalize font-bold ">{items.name}</li>
        <Link to={`/restaurants/${items.id}`}> voir plus <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
    </ul>

    ))}

</div>
 
    </div>
 )}

export default Restaurants;
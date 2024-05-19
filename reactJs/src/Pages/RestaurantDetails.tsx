import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import DeleteRestaurant from "../Components/DeleteRestaurant";
import DeleteEmploye from "../Components/deleteEmployes";

interface Items{

    id:number,
    name:string,
    city:string,
    nbcouverts:number,
    terrasse: string,
    parking: string,
}

interface ItemEmploye{

  id:number,
  first_name:string,
  last_name:string

}

const RestaurantDetails=()=>{

    const [data,setData]=useState<Items[]>()
    const [Employe,setEmploye]=useState<ItemEmploye[]>()
    

    const {id}= useParams();

    useEffect(()=>{

        async function fetchSingleRestaurant(){
            try{
                const response= await axios.get(`http://localhost:5000/api/restaurants/${id}`)
                // console.log(response);
                setData(response.data);

                const responseEmployes=await axios.get(`http://localhost:5000/api/restaurants/employes/${id}`)
                // console.log(responseEmployes);
                setEmploye(responseEmployes.data)

            }catch(err){
                console.log(err)
            }
        }


        fetchSingleRestaurant();

    },[id])

    return (<>

    <Navbar/>

    <div className="text-start mt-10"><Link to={'/restaurants'}><i className="fa-solid fa-arrow-left text-2xl"></i></Link></div>
    <p className="text-lg font-bold my-10">Details du Restaurant</p>

    {data && data.length > 0 && (

    <div>
        <p className="mb-5">Fiche du Restaurant <span className="uppercase font-bold">{data[0].name}</span></p>

<table>
  <thead>
    <tr>
      <th className='p-2 border' scope='col'>Name</th>
      <th className='p-2 border' scope='col'>City</th>
      <th className='p-2 border' scope="col">couverts</th>
      <th className='p-2 border' scope="col">terrasse</th>
      <th className='p-2 border' scope="col">Parking</th>
      <th className='p-2 border' scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="border">
    <tr>
      <td className="p-2 border">{data[0].name}</td>
      <td className="p-2 border">{data[0].city}</td>
      <td className="p-2 border">{data[0].nbcouverts}</td>
      <td className="p-2 border">{data[0].terrasse}</td>
      <td className="p-2 border">{data[0].parking}</td>
      <td className="p-2 border"> <DeleteRestaurant id={data[0].id}/><Link to={`/Modifier/${data[0].id}`}>Modifier</Link></td>
    {/* <Link to={`/Modifier/${data[0].id}`}>Modifier</Link> */}
    </tr>
  </tbody>
</table>


<div className="my-8">

<h3>les equipes du Restaurant</h3>

{Employe && Employe.map((items,index)=>(
  
  <ul key={index}>
    <li>{items.first_name} - {items.last_name}  <DeleteEmploye id={items.id}/></li>
  </ul>

)
)}


</div>



</div>

    
    )}







    </>)
}

export default RestaurantDetails;


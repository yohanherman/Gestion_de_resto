import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect, ChangeEvent } from "react";
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";


const axiosInstance=axios.create({
    baseURL:'http//:localhost:5000/api',
    withCredentials:true
})


interface EmployeInterface{
    id:number,
    first_name:string,
    last_name:string,
    hire_date:string,
    restaurant_id:number
    
    name:string,
}

interface restaurantInterface{

    id:number
    name:string
}


const UpdateEmploye=()=>{

    const navigate=useNavigate();

    const {id}=useParams();


    const [employe,setEmploye]=useState<EmployeInterface[]>([])


    useEffect(()=>{
        async function getSingleEmploye(){
            try{
                const response= await axios.get(`http://localhost:5000/api/employes/${id}`)
                // console.log(response)
                setEmploye(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getSingleEmploye();

    },[id]);


        const [restaurant,setRestaurant]=useState<restaurantInterface[]>()

        useEffect(()=>{

            async function fetchRestaurants(){
                try{
                    const response= await axios.get('http://localhost:5000/api/restaurants')
                    // console.log(response);
                    setRestaurant(response.data)

                }catch(err){
                    console.log(err)
                }
            }

            fetchRestaurants();
        },[id])



            // post de mise a jour
        //   const [employe,setEmploye]=useState<EmployeInterface[]>([]) defini plus haut pour recuperer un element et aussi pour la mise a jour
    
            const handleOnChange=(e:ChangeEvent<HTMLInputElement>, index: number, field: keyof EmployeInterface )=>{
                const newData=[...employe];

                newData[index][field]=e.target.value;
                setEmploye(newData)
            }


            const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault() 
                
                try{
                 const formattedDate= format(new Date(employe[0].hire_date),'dd/MM/yyyy');

                const formData={
                    first_name:employe[0].first_name,
                    last_name:employe[0].last_name,
                    hire_date:formattedDate,
                    restaurant_id:employe[0].restaurant_id
                  }
            
                    await axiosInstance.put(`http://localhost:5000/api/employes/${id}`, formData)
                    // console.log("modifie avec succes")
                    navigate(-1);
                }catch(err){
                    console.log(err)
                }
            }

    return (
    <>

    <Navbar/>

    <h3 className="font-bold text-xl my-10">Modification de l'employe</h3>


    {employe && employe.length > 0 && (

    <form action="" onSubmit={handleSubmit}>

    <div>
        <label htmlFor="first_name">Prenom</label>
        <input type="text" value={employe[0].first_name} onChange={(e)=>handleOnChange(e , 0, "first_name")} />
    </div>
    <div>
        <label htmlFor="last_name">Nom</label>
        <input type="text" value={employe[0].last_name} onChange={(e)=>handleOnChange(e ,0 , "last_name")}/>
    </div>
    <div>
        <label htmlFor="hire_date">Embauché(e) le</label>
        <input type="date" value={employe[0].hire_date} onChange={(e)=>handleOnChange(e , 0 , "hire_date")}/>
    </div>

  <div>
    <label htmlFor="restaurant">Assigné au Restaurant</label>

    <select name="restaurant_id" id="restaurant_id" onChange={(e:ChangeEvent<HTMLSelectElement>)=>handleOnChange(e , 0 ,"restaurant_id")}>
    {restaurant && restaurant.map((items,index)=>(
    <option key={index} value={items.id}>{items.name}</option>
    ))}
    </select>

  </div>
  <button type='submit'>Enregister</button>

  </form>


    )}
    </>)

}

export default UpdateEmploye
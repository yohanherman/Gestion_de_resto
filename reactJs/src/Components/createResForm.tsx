import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateRestaurant=()=>{

    const navigate = useNavigate();

    const [data,setData]=useState({
       
        name:'',
        city:'',
        nbcouverts:'',
        terrasse:'',
        parking:'',
        
    })


    const handleOnChange=(e:any)=>{

        const value=e.target.value;
        setData({
            ...data,
            [e.target.name]:value
        })

    }


    const HandleSubmit= async(e:any)=>{
        e.preventDefault();
        // console.log(data)

            try{
                const formData={
                    name:data.name,
                    city:data.city,
                    nbcouverts:data.nbcouverts,
                    terrasse:data.terrasse,
                    parking:data.parking
                }
                
    
                const response=await axios.post('http://localhost:5000/api/restaurants',formData)
                // console.log('resto ajouté')
                setData(response.data)
                navigate(-1);
    
    
            }catch(err){
                console.log(err)
            }

        }
  

    return (<>

    <h3 className="mt-7 text-sky-600 font-bold">Creation d'un Restaurant</h3>

    <form onSubmit={HandleSubmit} className='bg-gray-200 my-10 ' action="">
   <div>
      <label htmlFor="name">Nom</label>
      <input  className='border border-slate-300' type="text" name='name' onChange={handleOnChange}/>
   </div> 
   <div>
      <label htmlFor="ville">ville</label>
      <input  className='border border-slate-300' type="text"  name='city' onChange={handleOnChange}/>
   </div> 
   <div>
      <label htmlFor="nbcouvert">nbre de couverts</label>
      <input  className='border border-slate-300'type="text" name='nbcouverts' onChange={handleOnChange} />
   </div> 
   <div>
      <label htmlFor="terrasse">Terrasse</label>
      <input  className='border border-slate-300' type="text" name='terrasse' onChange={handleOnChange}/>
  </div> 
  <div>
    <label htmlFor="parking">Parking</label>
    <input  className='border border-slate-300'  name='parking' type="text" onChange={handleOnChange} />
  </div> 

  <button type="submit"> Ajouter</button>



</form>

</> )}

export default CreateRestaurant;
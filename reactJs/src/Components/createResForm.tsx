import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";




const axiosInstance= axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
})


const CreateRestaurant=()=>{

    const navigate = useNavigate();

    useEffect(()=>{

           if(!document.cookie){
                navigate('/connexion');
                console.log('pas de token')
            }else{
                // console.log('il ya le token')

            }
    })

    const [data,setData]=useState({
       
        name:'',
        city:'',
        nbcouverts:0,
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

    const [errors,setErrors]=useState({});


    const HandleSubmit= async(e:any)=>{
        e.preventDefault();

        setErrors(validation(data))

        // console.log(data)

            try{
                const formData={
                    name:data.name,
                    city:data.city,
                    nbcouverts:data.nbcouverts,
                    terrasse:data.terrasse,
                    parking:data.parking
                }
                
                const response=await axiosInstance.post('http://localhost:5000/api/restaurants',formData)
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
      {errors.name && <p style={{color: 'red' , marginTop:'3px',marginBottom:'3px'}}>{errors.name}</p>}

   </div> 
   <div>
      <label htmlFor="ville">ville</label>
      <input  className='border border-slate-300' type="text"  name='city' onChange={handleOnChange}/>
      {errors.city && <p style={{color:'red', marginTop:'3px',marginBottom:'3px'}}>{errors.city}</p>}
   </div> 
   <div>
      <label htmlFor="nbcouvert">nbre de couverts</label>
      <input  className='border border-slate-300'type="text" name='nbcouverts' onChange={handleOnChange} />
      {errors.nbcouverts && <p style={{color:'red'}}>{errors.nbcouverts}</p>}
   </div> 
   <div>
      <label htmlFor="terrasse">Terrasse</label>
      <input  className='border border-slate-300' type="text" name='terrasse' onChange={handleOnChange}/>
      {errors.terrasse && <p style={{color:'red'}}>{errors.terrasse}</p>}
  </div> 
  <div>
    <label htmlFor="parking">Parking</label>
    <input  className='border border-slate-300'  name='parking' type="text" onChange={handleOnChange} />
    {errors.parking && <p style={{color:'red'}}>{errors.parking}</p>}
    
  </div> 

  <button type="submit"> Ajouter</button>



</form>

</> )}

export default CreateRestaurant;
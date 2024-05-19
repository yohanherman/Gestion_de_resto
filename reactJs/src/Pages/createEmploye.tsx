import axios from "axios";
import { useState,useEffect, ChangeEvent } from "react";

interface Items{
    id:number,
    first_name:string,
    last_name:string,
    hire_date:string,

    name:string,
    city:string
}




const CreateEmploye=()=>{
        const [data, setDate]=useState<Items[]>();

        const[Employe,setEmploye]=useState({

            first_name:'',
            last_name:'',
            hire_date:'',
            restaurant_id:''

        })


        const handleOnChange=(e:any)=>{
            const value=e.target.value;

            setEmploye({
                ...Employe,
                [e.target.name]:value
            })

        }



            
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

    return(

    <div>

    <h1>Creation d'un Employé</h1>

<div>
  <label htmlFor="last_name">Nom</label>
  <input type="text" name="last_name" onChange={handleOnChange}/>
</div>

<div>
  <label htmlFor="first_name">Prenom</label>
  <input type="text" name="first_name" onChange={handleOnChange} />
</div>

<div>
  <label htmlFor="hire_date">Date d'embauche</label>
  <input type="date" name="hire_date" onChange={handleOnChange} />
</div>


<div>
  <label htmlFor="Restaurant">Restaurant</label>

 <select name="restaurant_id">
  {data && data.map((items,index)=>(
    <option onChange={handleOnChange} value={items.id}>{items.name}</option>))}
 </select>

</div>

<button type='submit'>Enregister</button>
</div>


)}


export default CreateEmploye;
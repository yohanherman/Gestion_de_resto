import axios from "axios";
import { useState,useEffect} from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import validation from "../Components/validation";


const axiosInstance= axios.create({
  baseURL:'http://localhost:5000/api',
  withCredentials:true,
})


interface Items{
    id:number,
    name:string,
}

const CreateEmploye=()=>{

        const navigate=useNavigate()
        
        useEffect(()=>{
          if(!document.cookie){
            navigate('/connexion')
;          }
        })


        const [data, setDate]=useState<Items[]>();

        
        const[Employe,setEmploye]=useState({

            first_name:'',
            last_name:'',
            hire_date:'',
            restaurant_id:''

        })

        const handleOnChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
            const value=e.target.value;

            setEmploye({
                ...Employe,
                [e.target.name]:value
            })
        }


        const [errors,setErrors]=useState({})

        const handleSubmit= async (e:any)=>{
          e.preventDefault();

          setErrors(validation(Employe))

          
          try{

            // mon front m'envoie au format dd-mm-yy en faisant ca je convertie en dd/mm/yyy
            const formattedDate = format(new Date(Employe.hire_date), 'dd/MM/yyyy');

            const formData={
              first_name:Employe.first_name,
              last_name:Employe.last_name,
              hire_date:formattedDate,
              restaurant_id:Employe.restaurant_id
            }
            // console.log(formData);

            const response = await axiosInstance.post('http://localhost:5000/api/employes',formData);
            setDate(response.data);
            navigate('/Employes');
            // console.log('ajouter avec success')

          }catch(err){
            console.log(err)
          }
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

<form action="" onSubmit={handleSubmit}>

<div>
  <label htmlFor="last_name">Nom</label>
  <input type="text" name="last_name" onChange={handleOnChange}/>
  {errors.last_name && <p style={{color:'red',marginTop:'4px', marginBottom:'10px'}}>{errors.last_name}</p>}
</div>

<div>
  <label htmlFor="first_name">Prenom</label>
  <input type="text" name="first_name" onChange={handleOnChange} />
  {errors.first_name && <p style={{color:'red',marginTop:'4px', marginBottom:'10px'}}>{errors.first_name}</p>}
</div>

<div>
  <label htmlFor="hire_date">Date d'embauche</label>
  <input type="date" name="hire_date" onChange={handleOnChange} />
  {errors.hire_date && <p style={{color:'red',marginTop:'4px', marginBottom:'10px'}}>{errors.hire_date}</p>}

</div>


<div>
  <label htmlFor="Restaurant">Restaurant</label>

 <select name="restaurant_id" onChange={handleOnChange}>
 <option value="">Sélectionner un restaurant</option>
  {data && data.map((items,index)=>(
    <option  key={index} value={items.id}>{items.name}</option>))}
 </select>
 {errors.restaurant_id && <p style={{color:'red',marginTop:'4px', marginBottom:'10px'}}>{errors.restaurant_id}</p>}

</div>

<button type='submit'>Enregister</button>

</form>

</div>



)}


export default CreateEmploye;
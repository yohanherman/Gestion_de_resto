import axios from "axios";
import { useState,useEffect} from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import validation from "../Components/validation";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


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

      <Navbar/>

    <div className="text-start my-10 text-2xl"><Link to='/Employes'><i className="fa-solid fa-arrow-left"></i></Link></div>

  <h1 className="my-10 text-xl font-bold">Creation d'un Employé</h1>


<div className="flex justify-center items-center">

<form action="" onSubmit={handleSubmit} className='bg-gray-200 my-10 p-2 rounded-xl w-96' >

<div className="m-3">
  <label className='block text-gray-700 font-bold text-left mb-2 ml-2' htmlFor="last_name">Nom</label>
  <input  className="border border-slate-300 w-full p-2 rounded-md mb-3" type="text" name="last_name" onChange={handleOnChange}/>
  {errors.last_name && <p style={{color:'red',marginTop:'4px', marginBottom:'10px'}}>{errors.last_name}</p>}
</div>

<div className="m-3">
  <label className="block text-gray-700 font-bold text-left mb-2 ml-2" htmlFor="first_name">Prenom</label>
  <input className="border border-slate-300 w-full p-2 rounded-md mb-3" type="text" name="first_name" onChange={handleOnChange} />
  {errors.first_name && <p style={{color:'red',marginTop:'4px', marginBottom:'10px'}}>{errors.first_name}</p>}
</div>

<div className="m-3">
  <label className="block text-gray-700 font-bold text-left mb-2 ml-2" htmlFor="hire_date">Date d'embauche</label>
  <input className="border border-slate-300 w-full p-2 rounded-md mb-3" type="date" name="hire_date" onChange={handleOnChange} />
  {errors.hire_date && <p style={{color:'red',marginTop:'3px', marginBottom:'10px'}}>{errors.hire_date}</p>}
</div>


<div className="m-3">
  <label className="block text-gray-700 font-bold text-left mb-2 ml-2" htmlFor="Restaurant">Restaurant</label>

 <select  className="border border-slate-300 w-full p-2 rounded-md mb-3" name="restaurant_id" onChange={handleOnChange}>
 <option value="">Sélectionner un restaurant</option>
  {data && data.map((items,index)=>(
    <option  key={index} value={items.id}>{items.name}</option>))}
 </select>
 {errors.restaurant_id && <p style={{color:'red',marginTop:'3px', marginBottom:'10px'}}>{errors.restaurant_id}</p>}

</div>

<button className='bg-sky-500 text-white uppercase rounded-md p-2 w-64 my-4 ' type='submit'>Enregister</button>

</form>

</div>

</div>



)}


export default CreateEmploye;
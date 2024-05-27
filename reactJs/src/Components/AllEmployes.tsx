import { useState,useEffect } from "react";
import axios from "axios";
import DeleteEmploye from "./deleteEmployes";
import { Link } from "react-router-dom";

interface Items{
    id:number,
    first_name:string,
    last_name:string,
    hire_date:string,

    name:string,
    city:string
}
const Employes=()=>{

    const [data,setData]=useState<Items[]>();

    useEffect(()=>{
        async function getAllEmployes(){
            try{
                const response = await axios.get('http://localhost:5000/api/employes');
                // console.log(response);
                setData(response.data)
            }catch(err){
                console.log(err)
            }}

        getAllEmployes();

    },[]);

return(

    <div>
        <div className="md:flex justify-center items-center flex-wrap">

    {data && data.map((items,index)=>(

        <ul key={index} className="shadow-md p-4 ">
            <li  className="m-1">Nom: <span className="font-bold uppercase">{items.last_name}</span></li>
            <li className="m-1">Prenom : <span className="font-bold capitalize">{items.first_name}</span></li>
            <li  className="m-1">Embauche le : <span className="font-bold">{items.hire_date}</span></li>
            <li  className="m-1">Assigné au restaurant : <span className="font-bold">{items.name}</span></li>
            <li  className="m-1">Dans la ville de : <span className="font-bold">{items.city}</span></li>

          <div className="mt-5 flex justify-center items-center gap-20">
            <div className="text-2xl"><DeleteEmploye id={items.id}/></div>
           <div className="text-2xl"><Link to={`/modifier-employe/${items.id}`}><i className="fa-solid fa-pen text-sky-600 "></i></Link></div>
          </div>
       
        </ul>

))}
</div>
    </div>



)

}

export default Employes
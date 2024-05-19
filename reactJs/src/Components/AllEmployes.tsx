import { useState,useEffect } from "react";
import axios from "axios";

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
   
    {data && data.map((items,index)=>(
        
        <ul key={index}>
            <hr />
            <li>{items.first_name}</li>
            <li>{items.last_name}</li>
            <li>{items.hire_date}</li>
            <li>{items.name}</li>
            <li>{items.city}</li>
        </ul>
    ))}
    </div>



)

}

export default Employes
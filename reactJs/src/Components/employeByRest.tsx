import { useState,useEffect } from "react"
import axios from "axios";

import { useParams } from "react-router-dom";


interface Items{
    id:number,
    first_name:string,
    last_name:string;
}

const getEmployesByResaurant=()=>{

    const [data,setData]=useState<Items[]>();

    const{restaurant_id}=useParams()


    useEffect(()=>{

        async function getEmployeByRes(){
            try{
              const response= await axios.get('http://localhost:5000/api/employes/'+ restaurant_id);

              setData(response.data)
              console.log(response);

            }catch(err){
                console.log(err)
            }
        }

        getEmployeByRes();

    },[restaurant_id])


    return(<>
    

    {data && data.length>0 && (

        <p></p>

    )}
    
    </>)

}

export default getEmployesByResaurant;
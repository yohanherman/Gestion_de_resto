import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const Accueil =()=>{

    // const [auth,setAuth]=useState(false);

    // useEffect(()=>{
    //     axios.get('http://localhost:5000')
    //     .then(res=>{
    //         if(res.data){
    //             setAuth(true);
    //         }
    //     })
    // })


    return (
        <div>
            <Navbar/>

            {/* {auth ? <p>page d'acceuil </p>  :  <p> connectez-vous</p>} */}
            home page
            
        </div>
    )
}

export default Accueil;
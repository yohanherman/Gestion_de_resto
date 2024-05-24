import axios from "axios";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Connexion =()=>{

    const navigate=useNavigate();

    const[data,setData]=useState({

        email:'',
        password:'',
    })

    const handleOnChange =(e:ChangeEvent<HTMLInputElement>)=>{
        const value=e.target.value;
        setData({
            ...data,
            [e.target.name]:value
        })
    }


        const handleOnSubmit=async(e:any)=>{
            e.preventDefault();

            const formData={
                email:data.email,
                password:data.password
            }
            // console.log(formData)

            try{
            const response=await axios.post('http://localhost:5000/api/logIn', formData);
            // console.log(response);
            
            if (response.status === 200) {
                // Stocker le token JWT dans un cookie
                document.cookie = `token=${response.data.token}; Secure; SameSite=Strict`;
                // navigate('/restaurants');
            
            }

            }catch(err){
                console.log(err)
            }

        }

      

    return (<>

    <Navbar/>
    
    <h3>Connexion</h3>

    <form action="" onSubmit={handleOnSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleOnChange}/>
        </div>
        <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="text" name="password" onChange={handleOnChange}/>
        </div>

        <button type="submit">Se connecter</button>
    </form>
    
    </>)
}

export default Connexion;
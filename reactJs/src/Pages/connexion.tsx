import axios from "axios";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import validation from "../Components/validation";

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

        const [errors,setErrors]=useState({})

        const handleOnSubmit=async(e:any)=>{
            e.preventDefault();

            setErrors(validation(data))

            const formData={
                email:data.email,
                password:data.password
            }
            // console.log(formData)

            try{
            const response=await axios.post('http://localhost:5000/api/logIn', formData);
            window.alert('vous etes maintenant connecte(e) et pouvez donc effectuer toutes les requtes')
            
            
            if (response.status === 200) {
                // je stocke le token JWT dans un cookie
                document.cookie = `token=${response.data.token}; Secure; SameSite=Strict`;
                // navigate('/restaurants');
            
            }

            }catch(err){
                console.log(err)
                // window.alert('email/mot de passe incorrect veuillez reessayer');
            }

        }

      

    return (<div className="bg-gray-200 h-screen">

    <Navbar/>

    <div>
    
    <h3 className="font-bold my-10 text-2xl">Connexion</h3>

    <div className="flex justify-center items-center">

    <form action="" onSubmit={handleOnSubmit} className="bg-white w-96 rounded-md m-3">
        <div className="m-3">
            <label className='block text-gray-700 font-bold text-left mb-2 ml-2' htmlFor="email">Email</label>
            <input className='border border-slate-300 w-full p-2 rounded-md mb-3' type="text" name="email" onChange={handleOnChange}/>
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
        </div>

        <div className="m-3">
            <label className='block text-gray-700 font-bold text-left mb-2 ml-2' htmlFor="password">Mot de passe</label>
            <input className='border border-slate-300 w-full p-2 rounded-md mb-3' type="password" name="password" onChange={handleOnChange}/>
            {errors.password && (<p style={{color:'red'}}>{errors.password}</p>)}
        </div>

        <button className="bg-green-600 p-2 text-white rounded-md my-3" type="submit">Se connecter</button>
    </form>

    </div>

    </div>
    
    </div>)
}

export default Connexion;
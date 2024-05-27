
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Employes from "../Components/AllEmployes";

const ShowEmployes=()=>{

return(

    <div>
    <Navbar/>

       <h1 className="font-bold text-2xl my-10">Fiche employes des restaurants </h1>

       <div className="text-center mb-20 md:text-end"><Link to='/createEmploye'><span className="bg-sky-500 p-2 text-white font-bold">Create Employe <i className="fa-solid fa-plus text-black text-xl"></i></span></Link></div>

    <Employes/>
    </div>



)

}

export default ShowEmployes
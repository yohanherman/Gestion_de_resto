
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Employes from "../Components/AllEmployes";

const ShowEmployes=()=>{

return(

    <div>
    <Navbar/>

       <h1 className="font-bold text-2xl">Employes</h1>

       <div className="text-end"><Link to='/createEmploye'>Create Employe <i className="fa-solid fa-plus"></i></Link></div>

    <Employes/>
    </div>



)

}

export default ShowEmployes
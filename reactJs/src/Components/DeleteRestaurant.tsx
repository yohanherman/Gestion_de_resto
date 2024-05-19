import axios from "axios";

import { useNavigate } from "react-router-dom";

const DeleteRestaurant=({id}:{id:number})=>{

    const navigate= useNavigate();

    async function handleDelete(){

        try{
            const answer= window.confirm('veux-tu vraiment effacer ce restaurant ?')

            if(answer){
                axios.delete(`http://localhost:5000/api/restaurants/${id}`)
                // console.log('efface avec succes')
                navigate(-1);
            }else{
                return ;
            }

        }catch(err){
            console.log(err)
        }


    }


    return (<>
    <button className='bg-red-700 text-white rounded p-2' type="button" onClick={handleDelete}>supprimer</button>
    </>)
}

export default DeleteRestaurant;
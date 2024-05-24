import axios from "axios";

import { useNavigate } from "react-router-dom";

// je cree une instance  axios avec les cookies pour authoriser les requetes car route securisee

const axiosInstance= axios.create({
    baseURL:'http://localhost:5000/api/',

    // pour inclure les cookie
    withCredentials:true,
})

const DeleteRestaurant = ({ id }: { id: number }) => {

    const navigate = useNavigate();

    async function handleDelete() {
        try {
            const answer = window.confirm('Veux-tu vraiment effacer ce restaurant ?');

            if (answer) {
                // Envoyer la requête de suppression
                await axiosInstance.delete(`restaurants/${id}`);
                navigate(-1);

            } else {
                return;
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    
    return (
        <button className='p-2 rounded bg-red-700 text-white mx-1' type="button" onClick={handleDelete}>
            Supprimer
        </button>
    );


}
    export default DeleteRestaurant;
import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'http:/localhost:5000/api',
    withCredentials:true
})


const DeleteEmploye=({id}:{id :number})=>{

    async function handleDeleteEmp(){

        try{
            const answer=window.confirm('Etes-vous sur de vouloir supprimer cet equipier');
            if(answer){

                axiosInstance.delete(`http://localhost:5000/api/employes/${id}`)
                // console.log('efface avec succes')

            }else{
                console.log('erreur')
                return;
            }

        }catch(err){
            console.log(err)
        }
    }


    return(<>

        <button onClick={handleDeleteEmp} type='button'><i className="fa-solid fa-trash text-red-700"></i></button>
    
    </>)

}

export default DeleteEmploye;
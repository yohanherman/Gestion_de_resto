
import React, { useState, useEffect, ChangeEvent } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import validation from "../Components/validation";


const axiosInstance=axios.create({
  baseURL:'http://localhost:5000/api',
  withCredentials:true,
})


interface Items {
  id: number;
  name: string;
  city: string;
  nbcouverts: number;
  terrasse: string;
  parking: string;
}


const Update = () => {

  const { id } = useParams();
  const restaurantId = parseInt(id, 10);
  
  const navigate=useNavigate()

  
  const [data, setData] = useState<Items[]>([]);


  useEffect(() => {

    async function fetchRestaurant() {

      try {
        const response = await axios.get(
          `http://localhost:5000/api/restaurants/${restaurantId}`
        );

        setData(response.data);

      } catch (err) {
        console.log(err);
      }
    }

    fetchRestaurant();
  }, [restaurantId]);


  const handleInputChange = ( e: ChangeEvent<HTMLInputElement>,index: number, field: keyof Items) => {

    const newData = [...data];
    newData[index][field] = e.target.value;
    setData(newData);
  };

  // const [errors,setErrors]=useState({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setErrors(validation(data))

    try {
      await axiosInstance.put(`http://localhost:5000/api/restaurants/${restaurantId}`, data[0]);
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />


      <h3 className="my-10 font-bold text-xl ">Modification du restaurant</h3>

      {data && data.length > 0 && (

        <div className="flex justify-center items-center">

        <form onSubmit={handleSubmit} className='bg-gray-200 my-10 p-2 rounded-xl w-96'>

          <div className="m-3">
            <label className='block text-gray-700 font-bold text-left mb-2 ml-2' htmlFor="name">Nom</label>
            <input className="border border-slate-300 w-full p-2 rounded-md mb-3" type="text" value={data[0].name} onChange={(e) => handleInputChange(e, 0, "name")}/>
            {/* {errors.name && <p style={{color: 'red' , marginTop:'3px',marginBottom:'3px'}}>{errors.name}</p>} */}
          </div>

          <div className="m-3">
            <label className="block text-gray-700 font-bold text-left mb-2 ml-2" htmlFor="city">Ville</label>
            <input className="border border-slate-300 w-full rounded-md p-2 mb-3 " type="text" value={data[0].city} onChange={(e) => handleInputChange(e, 0, "city")}/>
            {/* {errors.city && <p style={{color: 'red' , marginTop:'3px',marginBottom:'3px'}}>{errors.city}</p>} */}
          </div>

          <div className="m-3">
            <label className="block text-gray-700 font-bold text-left mb-2 ml-2" htmlFor="nbcouverts">Nombre de couverts</label>
            <input className="border border-slate-300 w-full p-2 rounded-md mb-3" type="number" value={data[0].nbcouverts} onChange={(e) => handleInputChange(e, 0, "nbcouverts")}/>
            {/* {errors.nbcouverts && <p style={{color: 'red' , marginTop:'3px',marginBottom:'3px'}}>{errors.nbcouverts}</p>} */}
          </div>

          <div className="m-3">
            <label className='block text-gray-700 font-bold text-left mb-2 ml-2' htmlFor="terrasse">Terrasse</label>
            <input className="border border-slate-300 w-full p-2 rounded-md mb-3" type="text" value={data[0].terrasse} onChange={(e) => handleInputChange(e, 0, "terrasse")}/>
            {/* {errors.terrasse && <p style={{color: 'red' , marginTop:'3px',marginBottom:'3px'}}>{errors.terrasse}</p>} */}
          </div>

          <div className="m-3">
            <label className="block text-gray-700 font-bold text-left mb-2 ml-2" htmlFor="parking">Parking</label>
            <input className="border border-slate-300 w-full p-2 rounded-md " type="text" value={data[0].parking} onChange={(e) => handleInputChange(e, 0, "parking")}/>
            {/* {errors.parking && <p style={{color: 'red' , marginTop:'3px',marginBottom:'3px'}}>{errors.parking}</p>} */}
          </div>
          <button className="bg-sky-600 text-white p-2 my-5 rounded-md uppercase" type="submit">Enregistrer</button>
        </form>

        </div>

      )}
    </>
  );
};

export default Update;
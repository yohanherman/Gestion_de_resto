
import React, { useState, useEffect, ChangeEvent } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

      <h3>Modification du restaurant</h3>

      {data && data.length > 0 && (

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name">Nom</label>
            <input className="border border-slate-300" type="text" value={data[0].name} onChange={(e) => handleInputChange(e, 0, "name")}/>
          </div>

          <div>
            <label htmlFor="city">Ville</label>
            <input className="border border-slate-300" type="text" value={data[0].city} onChange={(e) => handleInputChange(e, 0, "city")}/>
          </div>

          <div>
            <label htmlFor="">Nombre de couverts</label>
            <input className="border border-slate-300" type="text" value={data[0].nbcouverts} onChange={(e) => handleInputChange(e, 0, "nbcouverts")}/>
          </div>

          <div>
            <label htmlFor="terrasse">Terrasse</label>
            <input className="border border-slate-300" type="text" value={data[0].terrasse} onChange={(e) => handleInputChange(e, 0, "terrasse")}/>
          </div>

          <div>
            <label htmlFor="parking">Parking</label>
            <input className="border border-slate-300" type="text" value={data[0].parking} onChange={(e) => handleInputChange(e, 0, "parking")}/>
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      )}
    </>
  );
};

export default Update;
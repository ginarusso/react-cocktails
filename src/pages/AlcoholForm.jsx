import React, { useState, useEffect } from "react";
import AddAlcohol from '../components/AddAlcohol'
import apiConn from "../api/connect"
import videoBG from "../images/bar_banner_vid.mp4";
import '../styles/addCocktail.css'
import DeleteAlcohol from "../components/DeleteAlcohol";

const AlcoholForm = () => {
    const [data, setData] = useState([])
    const [alcoholDeleted, setAlcoholDeleted] = useState(false);

    useEffect(() => {
        getCocktailData()
        getAlcoholData();
      }, []);
    function getAlcoholData(){
        apiConn.get('/alcohol')
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      function deleteAlcoholData(id) {
        apiConn
        .delete(`/alcohol/${id}`)
        .then(res => {
          console.log(`Alcohol with ID ${id} deleted.`);
          getCocktailData()
          setAlcoholDeleted(true);
        })
        .catch((error) => {
          console.error(`Error deleting cocktail with ID ${id}:`, error);
        });
      }

      function getCocktailData(){
        apiConn.get('/cocktail')
    
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

    return (
    <>
    <div className="video-wrapper">
   <video className="background" src={videoBG} autoPlay loop muted></video>
  </div>
  <h4>List of Alcohols</h4>
  <div className="flex">
  {data.map(alcohol => {
    return (
      <div className="alcohol-list" key={alcohol.id}>
        {alcohol.alcohol_name} {alcohol.id}
      </div>
    );
  })}
</div>
    <AddAlcohol />
    <DeleteAlcohol />
    </>
  )
}

export default AlcoholForm;
  
  
  
  
  
  
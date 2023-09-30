import React, { useState, useEffect } from "react";
import AddCocktail from '../components/AddCocktail'
import DeleteCocktail from '../components/DeleteCocktail'
import apiConn from "../api/connect"

const CocktailForm = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getCocktailData()
      }, []);
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
    <h1>List of Cocktails</h1>
{data.map(cocktail => {
    return <div key={cocktail.id}>{cocktail.cocktail_name} {cocktail.id}</div>
})}

    <AddCocktail />

    </>
  )
}

export default CocktailForm
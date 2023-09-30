import React, { useState, useEffect } from "react";
import AddAlcohol from '../components/AddAlcohol'
// import DeleteAlcohol from '../components/DeleteAlcohol'
import apiConn from "../api/connect"
import EditAlcohol from "../components/EditAlcohol";

const AlcoholForm = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getAlcoholData()
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
    return (
    <>
    <h1>list of Alcohols</h1>
{data.map(alcohol => {
    return <div key={alcohol.id}>{alcohol.alcohol_name} {alcohol.id}</div>
})}
    <h2>Add Alcohol</h2>

    <AddAlcohol />
    {/* <EditAlcohol /> */}

    </>
  )
}

export default AlcoholForm;
  
  
  
  
  
  
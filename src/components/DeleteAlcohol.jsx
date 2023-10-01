import React from 'react'
// import apiConn from "../api/connect"

const DeleteAlcohol = ({ id, deleteAlcoholData, setSearchResults }) => {
    function handleDelete() {
      deleteAlcoholData(id);
       console.log(id)
      setSearchResults([])
    }
  
    return (
      <button onClick={handleDelete}>Delete Alcohol</button>
    );
  };
  
  export default DeleteAlcohol;
  

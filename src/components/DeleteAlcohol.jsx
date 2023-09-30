import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import apiConn from "../api/connect"

const DeleteAlcohol = ({id, deleteAlcohol}) => {
    function handleDelete() {

        axios
          .delete(`/alcohol/${id}`)
          .then(() => {
            console.log(`Alcohol with ID ${id} deleted.`);
 
            if (deleteAlcohol) {
              deleteAlcohol(id);
            }
          })
          .catch((error) => {
            console.error(`Error deleting alcohol with ID ${id}:`, error);
          });
      }
    
      return (
        <button onClick={handleDelete}>Delete Alcohol</button>
      );
    };
    
    export default DeleteAlcohol;
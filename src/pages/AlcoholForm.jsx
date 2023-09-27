import React, {useState} from 'react'
import AddAlcohol from '../components/AddAlcohol'

const AlcoholForm = () => {
    // Define a function to add alcohols
    const addAlcohols = (newAlcohol) => {
      // Implement your logic to add alcohols here
      console.log('Adding alcohol:', newAlcohol);
    };
  
    return (
      <>
      <h2>Add Alcohol</h2>
        {/* Pass the addAlcohols function as a prop */}
        <AddAlcohol addAlcohols={addAlcohols} />
      </>
    );
  }
  
  export default AlcoholForm;
  
  
  
  
  
  
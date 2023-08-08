import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "./CocktailHeader"; 
import IngredientsList from "./IngredientsList";
import CocktailDetails from "./CocktailDetails";
import CocktailMethod from "./CocktailMethod";

// require('dotenv').config();

const Card = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://the-cocktail-db3.p.rapidapi.com', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
          }
        });
        const data = await response.json();

        // Extracting cocktail IDs from the response
        const cocktailIds = data.map(cocktail => cocktail.id);

        // Fetch details for each cocktail based on its ID
        const cocktailDetailsPromises = cocktailIds.map(async id => {
          const cocktailResponse = await fetch(`https://the-cocktail-db3.p.rapidapi.com/${id}`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
            }
          });
          return cocktailResponse.json();
        });

        // Wait for all promises to resolve
        const cocktailDetails = await Promise.all(cocktailDetailsPromises);

        setCocktails(cocktailDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <div className="container">
      {cocktails.map(cocktailData => (
        <div className="card" key={cocktailData.id}>
          <CocktailHeader title={cocktailData.title} image={cocktailData.image} /> 
          <IngredientsList ingredients={cocktailData.ingredients} /> 
          <CocktailDetails
            difficulty={cocktailData.difficulty}
            portion={cocktailData.portion}
            time={cocktailData.time}
            description={cocktailData.description}
          /> 
          <CocktailMethod method={cocktailData.method || []} />
        </div>
      ))}
    </div>
  );
}

export default Card;

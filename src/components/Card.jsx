import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "./CocktailHeader"; 
import IngredientsList from "./IngredientsList";
import CocktailDetails from "./CocktailDetails";
import CocktailMethod from "./CocktailMethod";

const Card = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://the-cocktail-db3.p.rapidapi.com', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'replace with your own API key here',
            'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
          }
        });
        const data = await response.json();
        setCocktails(data);
        console.log(data)
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

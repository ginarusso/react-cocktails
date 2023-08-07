import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "./CocktailHeader"; 
import IngredientsList from "./IngredientsList";
import CocktailDetails from "./CocktailDetails"
import CocktailMethod from "./CocktailMethod";

const url = 'https://the-cocktail-db3.p.rapidapi.com/1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '', //add your API Key here
		'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const Card = () => {
    const [cocktailData, setCocktailData] = useState({});
  
    useEffect(() => {
      const fetchCocktail = async () => {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result); // Log the fetched data to the console
          setCocktailData(result);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCocktail();
    }, []);
  
    return (
        <div className="container">
          <div className="card">
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
        </div>
      );
  }
  
  export default Card;

import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "./CocktailHeader"; // Import CocktailHeader component
import IngredientsList from "./IngredientsList"; // Import IngredientsList component
import CocktailDetails from "./CocktailDetails"; // Import CocktailDetails component

const url = 'https://the-cocktail-db3.p.rapidapi.com/45';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f9314c370msh1588e48f2a127a6p1908fbjsn543b7704c767',
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
            <CocktailHeader title={cocktailData.title} image={cocktailData.image} /> {/* Use CocktailHeader component */}
            <IngredientsList ingredients={cocktailData.ingredients} /> {/* Use IngredientsList component */}
            <CocktailDetails
              difficulty={cocktailData.difficulty}
              portion={cocktailData.portion}
              time={cocktailData.time}
              description={cocktailData.description}
            /> 
          </div>
        </div>
      );
  }
  
  export default Card;

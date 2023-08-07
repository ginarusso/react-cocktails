import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import MethodList from "./MethodList";

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
          <h2>{cocktailData.title}</h2>
          <img className="" src={cocktailData.image} alt={cocktailData.title} />
          <div className="ingredients">
            <h4>Ingredients:</h4>
            <ul>
              {cocktailData.ingredients &&
                cocktailData.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>
          <div className="details">
            <p>Difficulty: {cocktailData.difficulty}</p>
            <p>Portion: {cocktailData.portion}</p>
            <p>Time: {cocktailData.time}</p>
            <p>Description: {cocktailData.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;

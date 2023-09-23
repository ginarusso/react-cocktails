import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "./CocktailHeader"; 
import IngredientsList from "./IngredientsList";
import CocktailDetails from "./CocktailDetails";
import CocktailMethod from "./CocktailMethod";
// import videoBG from "../images/cocktails.mp4";
import videoBG from "../images/bar_banner_vid.mp4";
import { cocktailList, detailedCocktailRecipe } from "../data.js";
import spiritData from "../spiritsData";



// const Card = () => {
//   const [cocktails, setCocktails] = useState([]);

  // useEffect(() => {
  //   const fetchCocktails = async () => {
  //     try {
  //       const response = await fetch('https://the-cocktail-db3.p.rapidapi.com', {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': '',
  //           'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  //         }
  //       });
  //       const data = await response.json();

  //       // Extracting cocktail IDs from the response
  //       const cocktailIds = data.map(cocktail => cocktail.id);

  //       // Fetch details for each cocktail based on its ID
  //       const cocktailDetailsPromises = cocktailIds.map(async id => {
  //         const cocktailResponse = await fetch(`https://the-cocktail-db3.p.rapidapi.com/${id}`, {
  //           method: 'GET',
  //           headers: {
  //             'X-RapidAPI-Key': '',
  //             'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  //           }
  //         });
  //         return cocktailResponse.json();
  //       });

  //       // Wait for all promises to resolve
  //       const cocktailDetails = await Promise.all(cocktailDetailsPromises);

  //       setCocktails(cocktailDetails);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCocktails();
  // }, []);
  
  const initialCocktailImage = "https://cdn.pixabay.com/photo/2014/03/24/17/07/pineapple-juice-295078_1280.png";
  const emptyCocktailGlassImage = "https://cdn.pixabay.com/photo/2014/12/12/22/08/glass-565914_1280.jpg";
  

const Card = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showInitialImage, setShowInitialImage] = useState(true);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [visibleSpirit, setVisibleSpirit] = useState(null);

  useEffect(() => {
    // use the provided cocktailList data to update the DOM
    setCocktails(cocktailList);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  
    // Clean the search input
    const cleanSearchInput = searchInput.trim().toLowerCase();
  
    // search logic
    const results = detailedCocktailRecipe.filter(recipe =>
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().split(' ').includes(cleanSearchInput)
      )
    );
  
    setSearchResults(results);
    setShowInitialImage(false);
    setNoResultsFound(results.length === 0);
    setSearchInput('');
  };

  const toggleSpirit = (spiritName) => {
    if (visibleSpirit === spiritName) {
      // Clicking on the same spirit hides it
      setVisibleSpirit(null);
    } else {
      // Clicking on a different spirit shows it and hides the previous one
      setVisibleSpirit(spiritName);
    }
  };

  return (
    <>
   <div className="video-wrapper">
   <video className="background" src={videoBG} autoPlay loop muted></video>
  </div>
    <div className="container">
      <div className="search-form">
        <form onSubmit={handleSearch}>
        {/* <ul className="spirit-list">
              {spiritData.map((spirit, index) => (
                <li key={index}>
                  <p
                    className={`spirit-name ${visibleSpirit === spirit.name ? 'active' : ''}`}
                    onClick={() => toggleSpirit(spirit.name)}
                  >
                    {spirit.name}
                  </p>
                  <ul
                    id={`${spirit.name.toLowerCase()}-list`}
                    className={visibleSpirit === spirit.name ? "" : "hidden"}
                  >
                    {spirit.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul> */}
<div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by liquor or ingredient"/>
          <button type="submit">Search</button>
</div>
        </form>
      </div>
      {showInitialImage && (
        <div className="card">
          <CocktailHeader title="Cocktails" image={initialCocktailImage} />
        </div>
      )}
      {noResultsFound && !showInitialImage && (
        <div className="card">
          <CocktailHeader title="Your Cocktail Was Not Found" image={emptyCocktailGlassImage} />
        </div>
      )}
      {searchResults.map(recipe => (
        <div className="card" key={recipe.id}>
          <CocktailHeader title={recipe.title} image={recipe.image} />
          <IngredientsList ingredients={recipe.ingredients} />
          {recipe && <CocktailDetails detailedCocktailRecipe={recipe} />}
          <CocktailMethod method={recipe.method} />
        </div>
      ))}
    </div>
    </>
  );
}

export default Card;
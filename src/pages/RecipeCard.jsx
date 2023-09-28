import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "../components/CocktailHeader"; 
import IngredientsList from "../components/IngredientsList";
import CocktailDetails from "../components/CocktailDetails";
import CocktailMethod from "../components/CocktailMethod";
import videoBG from "../images/bar_banner_vid.mp4";
// import spiritData from "../spiritsData";

import apiConn from "../api/connect"

const initialCocktailImage = "https://cdn.pixabay.com/photo/2014/03/24/17/07/pineapple-juice-295078_1280.png";
const emptyCocktailGlassImage = "https://cdn.pixabay.com/photo/2014/12/12/22/08/glass-565914_1280.jpg";
  
const RecipeCard = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showInitialImage, setShowInitialImage] = useState(true);
  const [noResultsFound, setNoResultsFound] = useState(false);
//   const [visibleSpirit, setVisibleSpirit] = useState(null);
  const [data, setData] = useState([])
  const [searchMade, setSearchMade] = useState(false);

  useEffect(() => {
    getData()
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  
    // Clean the search input
    const cleanSearchInput = searchInput.trim().toLowerCase();
  
    // search logic
    const results = data.filter(recipe =>
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(cleanSearchInput)
        ) ||
        recipe.cocktail_name.toLowerCase().includes(cleanSearchInput) // Search for cocktail name
      );
  
    setSearchResults(results);
    setShowInitialImage(false);
    setNoResultsFound(results.length === 0);
    setSearchInput('');
    setSearchMade(true);

    setNoResultsFound(results.length === 0); // Set noResultsFound to true if no results are found

    if (results.length === 0) {
      setShowInitialImage(true); // Set showInitialImage to true if no results are found
    } else {
      setShowInitialImage(false);
    }
    setSearchResults(results);
    setSearchInput('');
    setSearchMade(true); // Set searchMade to true when search is made
  };

  function getData(){
    apiConn.get('/cocktail')
    // apiConn.get('/alcohol')
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

//   const toggleSpirit = (spiritName) => {
//     if (visibleSpirit === spiritName) {
//       // Clicking on the same spirit hides it
//       setVisibleSpirit(null);
//     } else {
//       // Clicking on a different spirit shows it and hides the previous one
//       setVisibleSpirit(spiritName);
//     }
//   };

  return (
    <>
        {/* {data.map(cocktail => {
      return  <div>{cocktail.category}</div>
    })} */}

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
            placeholder="Search by liquor or ingredient"
            required
            />
          <button type="submit">Search</button>
</div>
        </form>
      </div>

      {showInitialImage && !searchMade && ( // Only show the initial image if search has not been made
          <div className="card">
            <CocktailHeader title="Cocktails" image={initialCocktailImage} />
          </div>
        )}
        {noResultsFound && searchMade && ( // Show no results message if search was made
          <div className="card">
            <CocktailHeader title="Your Cocktail Was Not Found" image={emptyCocktailGlassImage} />
          </div>
        )}

        {searchResults.length > 0 && ( // Only display recipes if search results are available
          <div>
            {searchResults.map(recipe => (
              <div className="card" key={recipe.id}>
                <CocktailHeader title={recipe.cocktail_name} image={recipe.image_url} />
                <IngredientsList ingredients={recipe.ingredients} />
                <CocktailDetails detailedCocktailRecipe={recipe} />
                <CocktailMethod method={recipe.method} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default RecipeCard;

      {/* {data.map(recipe => (
        <div className="card" key={recipe.id}>
          <CocktailHeader title={recipe.cocktail_name} image={recipe.image_url} />
          <IngredientsList ingredients={recipe.ingredients} />
          {recipe && <CocktailDetails detailedCocktailRecipe={recipe} />}
          <CocktailMethod method={recipe.method} />
        </div>
      ))}
    </div>
    </>
  );
}

export default RecipeCard; */}

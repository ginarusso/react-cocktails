import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "../components/CocktailHeader"; 
import IngredientsList from "../components/IngredientsList";
import CocktailDetails from "../components/CocktailDetails";
import CocktailMethod from "../components/CocktailMethod";
import videoBG from "../images/bar_banner_vid.mp4";

// import spiritData from "../spiritsData";

import apiConn from "../api/connect"
import DeleteCocktail from "../components/DeleteCocktail";

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
  const [cocktailDeleted, setCocktailDeleted] = useState(false);


  useEffect(() => {
    getCocktailData()
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  
    // Clean the search input
    const cleanSearchInput = searchInput.trim().toLowerCase();


    // Helper function to check if a string contains the search term as a whole word (without this if you search for gin, anything with ginger is also returned)
function containsWholeWord(text, word) {
    const wordPattern = new RegExp(`\\b${word}\\b`, 'i');
    return wordPattern.test(text);
  }
  
// Search logic
const results = data.filter(recipe =>
    recipe.ingredients.some(ingredient =>
      containsWholeWord(ingredient.toLowerCase(), cleanSearchInput)
    ) ||
    containsWholeWord(recipe.cocktail_name.toLowerCase(), cleanSearchInput)
  );
  
    setSearchResults(results);
    setShowInitialImage(false);
    // setNoResultsFound(results.length === 0);
    setSearchInput('');
    setSearchMade(true);

    setNoResultsFound(false)
    // setNoResultsFound(results.length === 0); // Set noResultsFound to true if no results are found

    if (results.length === 0) {
      setShowInitialImage(true); // Set showInitialImage to true if no results are found
    } else {
      setShowInitialImage(false);
    }
    
  };

  function getCocktailData(){
    apiConn.get('/cocktail')

    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  function deleteCocktailData(id) {
    apiConn
    .delete(`/cocktail/${id}`)
    .then(res => {
      console.log(`Cocktail with ID ${id} deleted.`);
      getCocktailData()
      setCocktailDeleted(true);
      setSearchResults([]);
    })
    .catch((error) => {
      console.error(`Error deleting cocktail with ID ${id}:`, error);
    });
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
<div className="flexSearch">
    <label>Search by cocktail name, liquor, or ingredient</label>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="What are you looking for?"
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
                <DeleteCocktail id={recipe.id} deleteCocktailData={deleteCocktailData} setSearchResults={setSearchResults} />

              </div>
            ))}
          </div>
        )}

{searchResults.length === 0 && searchMade && !noResultsFound && !cocktailDeleted && (
  <div className="card">
    <CocktailHeader title="Your Cocktail Was Not Found" image={emptyCocktailGlassImage} />
  </div>
)}

      {/* Display "Your Cocktail Was Deleted" message and the empty cocktail glass image */}
      {cocktailDeleted && searchResults.length === 0 && (
        <div className="card">
          <CocktailHeader title="Your Cocktail Has Been Deleted" image={emptyCocktailGlassImage} />
        </div>
      )}


      </div>
    </>
  );
}

export default RecipeCard;

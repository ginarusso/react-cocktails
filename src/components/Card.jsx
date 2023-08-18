import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "./CocktailHeader"; 
import IngredientsList from "./IngredientsList";
import CocktailDetails from "./CocktailDetails";
import CocktailMethod from "./CocktailMethod";
// import videoBG from "../images/cocktails.mp4";
import videoBG from "../images/bar_banner_vid.mp4";

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


const cocktailList = [
  {"id":"1","title":"Nutella and cognac coffee cocktail","difficulty":"Easy","image":"https://apipics.s3.amazonaws.com/coctails_api/1.jpg"},
  {"id":"45","title":"Aperol spritz","difficulty":"Easy","image":"https://apipics.s3.amazonaws.com/coctails_api/45.jpg"}
];

const detailedCocktailRecipe = [
  {"id":"1","title":"Nutella and cognac coffee cocktail","difficulty":"Easy","portion":"Makes 4","time":"Hands-on time 10 min, plus 2 hours freezing","description":"An Irish coffee amped up to eleven – this utterly delicious cocktail involves croissant-infused cognac and a Nutella syrup to bolster the coffee and whipped cream. Sounds very fancy, but actually very simple.","ingredients":["80g croissant, chopped","240ml cognac","50g Nutella","25g demerara sugar","200ml hot coffee","200g double cream to serve","Toasted coconut flakes to serve"],"method":[{"Step 1":"Put the croissant and cognac in a blender or food processor and whizz until smooth. Transfer to a freezable container, cover and freeze for at least 2 hours. Strain through a very fine sieve (or for an even clearer finish, through coffee filter paper) and reserve."},{"Step 2":"Put the Nutella, sugar and 25ml water in a small saucepan and gently warm until the sugar has dissolved. Leave to cool."},{"Step 3":"To make the cocktail, measure out 50ml croissant cognac and 25ml nutella syrup in each glass, then top up with 50ml hot coffee in each, stirring to combine. Put a spoon over the top of the coffee and gently pour double cream onto it (it should float on the surface of the coffee). Garnish with toasted coconut flakes."}],"image":"https://apipics.s3.amazonaws.com/coctails_api/1.jpg"},
  {
    "id": "45",
    "title": "Aperol spritz",
    "difficulty": "Easy",
    "portion": "Serves 6-8",
    "time": "Hands-on time 5 min",
    "description": "Get into the spirit of summer with this classic Italian recipe. Chilled prosecco and Aperol come together to create the beloved Aperol spritz.",
    "ingredients": [
      "750ml bottle of prosecco",
      "Bag of ice",
      "Bottle of Aperol",
      "Bottle of soda water",
      "Slice of orange"
    ],
    "method": [
      {
        "Step 1": "Chill the bottle of prosecco and Aperol in the fridge."
      },
      {
        "Step 2": "Fill 6 or 8 wine glasses or tall tumblers with a couple of ice cubes and roughly three parts prosecco to one part Aperol."
      },
      {
        "Step 3": "Add a splash of soda water and a slice of orange. Serve straightaway so that the fizz stays lively."
      }
    ],
    "image": "https://apipics.s3.amazonaws.com/coctails_api/45.jpg"
  }
  ];

  
  const initialCocktailImage = "https://cdn.pixabay.com/photo/2014/03/24/17/07/pineapple-juice-295078_1280.png";
  const emptyCocktailGlassImage = "https://cdn.pixabay.com/photo/2014/12/12/22/08/glass-565914_1280.jpg";
  

const Card = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showInitialImage, setShowInitialImage] = useState(true);
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    // use the provided cocktailList data to update the DOM
    setCocktails(cocktailList);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    // search logic
    const results = detailedCocktailRecipe.filter(recipe =>
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchInput.toLowerCase())
      )
    );

    setSearchResults(results);
    setShowInitialImage(false);
    setNoResultsFound(results.length === 0);
  };

  return (
    <>
   <div class="video-wrapper">
   <video className="background" src={videoBG} autoPlay loop muted></video>
</div>
    <div className="container">
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by ingredient"/>
          <button type="submit">Search</button>
        </form>
        <ul className="inline">
          <li>Vodka</li>
          <li>Cognac</li>
          <li>Gin</li>
          <li>Prosecco</li>
          <li>Whiskey</li>
          <li>Mezcal</li>
          <li>Brandy</li>
        </ul>
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
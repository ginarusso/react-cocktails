// import React, { useState, useEffect } from "react";
// import '../styles/styles.css';
// import CocktailHeader from "./CocktailHeader"; 
// import IngredientsList from "./IngredientsList";
// import CocktailDetails from "./CocktailDetails";
// import CocktailMethod from "./CocktailMethod";
// // import videoBG from "../images/cocktails.mp4";
// import videoBG from "../images/bar_banner_vid.mp4";
// import { cocktailList, detailedCocktailRecipe } from "../data.js";
// import { cocktailsArr, alcoholArr } from "../alcoholArr.js"
// import spiritData from "../spiritsData";
// // import { Routes, Route, Link } from 'react-router-dom'
// // import Home from '../pages/Home'
// // import AlcoholForm from '../pages/AlcoholForm'
// // import CocktailForm from '../pages/CocktailForm'
// // import PageNotFound from "../pages/PageNotFound";

// import apiConn from "../api/connect"

// const initialCocktailImage = "https://cdn.pixabay.com/photo/2014/03/24/17/07/pineapple-juice-295078_1280.png";
// const emptyCocktailGlassImage = "https://cdn.pixabay.com/photo/2014/12/12/22/08/glass-565914_1280.jpg";

// const Card = () => {
//   const [cocktails, setCocktails] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showInitialImage, setShowInitialImage] = useState(true);
//   const [noResultsFound, setNoResultsFound] = useState(false);
//   const [visibleSpirit, setVisibleSpirit] = useState(null);
//   const [data, setData] = useState([])

//   useEffect(() => {
//     // use the provided cocktailList data to update the DOM
//     setCocktails(cocktailList);
//     getData()
//   }, []);
 
//   function getData(){
//     apiConn.get('/cocktail')
//     .then(res => {
//       setData(res.data)
//       console.log(data)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }


//   const handleSearch = (e) => {
//     e.preventDefault();
  
//     // Clean the search input
//     const cleanSearchInput = searchInput.trim().toLowerCase();
  
//     // search logic
//     const results = detailedCocktailRecipe.filter(recipe =>
//       recipe.ingredients.some(ingredient =>
//         ingredient.toLowerCase().split(' ').includes(cleanSearchInput)
//       )
//     );
  
//     setSearchResults(results);
//     setShowInitialImage(false);
//     setNoResultsFound(results.length === 0);
//     setSearchInput('');
//   };

//   const toggleSpirit = (spiritName) => {
//     if (visibleSpirit === spiritName) {
//       // Clicking on the same spirit hides it
//       setVisibleSpirit(null);
//     } else {
//       // Clicking on a different spirit shows it and hides the previous one
//       setVisibleSpirit(spiritName);
//     }
//   };

//   return (
//     <>
//     <h1>hello world</h1>
//     {/* {data.map(cocktail => {
//       return {cocktail}
//       (
//         <div>
//           {cocktail}
//         </div>
//       ) */}
//     {/* })} */}
//     {/* <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/alcohol'>Add an Alcohol Name</Link></li>
//         <li><Link to='/cocktail'>Add a Cocktail Recipe</Link></li>
//       </ul>
//     </nav>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/alcohol' element={<AlcoholForm />} />
//       <Route path='/alcohol/:id' element={<AlcoholForm />} />
//       <Route path='/cocktail' element={<CocktailForm />}/>
//       <Route path='*' element={<PageNotFound />}/>
//     </Routes> */}
//    <div className="video-wrapper">
//    <video className="background" src={videoBG} autoPlay loop muted></video>
//   </div>
//     <div className="container">
//       <div className="search-form">
//         <form onSubmit={handleSearch}>
//         {/* <ul className="spirit-list">
//               {spiritData.map((spirit, index) => (
//                 <li key={index}>
//                   <p
//                     className={`spirit-name ${visibleSpirit === spirit.name ? 'active' : ''}`}
//                     onClick={() => toggleSpirit(spirit.name)}
//                   >
//                     {spirit.name}
//                   </p>
//                   <ul
//                     id={`${spirit.name.toLowerCase()}-list`}
//                     className={visibleSpirit === spirit.name ? "" : "hidden"}
//                   >
//                     {spirit.description.map((item, itemIndex) => (
//                       <li key={itemIndex}>{item}</li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul> */}
// <div>
//           <input
//             type="text"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search by liquor or ingredient"/>
//           <button type="submit">Search</button>
// </div>
//         </form>
//       </div>
//       {showInitialImage && (
//         <div className="card">
//           <CocktailHeader title="Cocktails" image={initialCocktailImage} />
//         </div>
//       )}
//       {noResultsFound && !showInitialImage && (
//         <div className="card">
//           <CocktailHeader title="Your Cocktail Was Not Found" image={emptyCocktailGlassImage} />
//         </div>
//       )}
//       {searchResults.map(recipe => (
//         <div className="card" key={recipe.id}>
//           <CocktailHeader title={recipe.title} image={recipe.image} />
//           <IngredientsList ingredients={recipe.ingredients} />
//           {recipe && <CocktailDetails detailedCocktailRecipe={recipe} />}
//           <CocktailMethod method={recipe.method} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// }

// export default Card;
// CocktailHeader.js
import React from "react";

const CocktailHeader = ({ title, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img className="img-hero" src={image} alt={title} />
    </div>
  );
}

export default CocktailHeader;
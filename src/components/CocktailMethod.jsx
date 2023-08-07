import React from "react";

const CocktailMethod = ({ method }) => {
  return (
    <div className="method container">
      <h4>Directions</h4>
      <ol>
        {method.map((stepObj, index) => {
          const stepDescription = Object.values(stepObj)[0];
          return <li key={index}>{stepDescription}</li>;
        })}
      </ol>
    </div>
  );
};

export default CocktailMethod;


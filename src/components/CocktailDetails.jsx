import React from "react";

const CocktailDetails = ({ difficulty, portion, time, description }) => {
  return (
    <div className="directions container">
      <p>Difficulty: {difficulty}</p>
      <p>Portion: {portion}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default CocktailDetails;

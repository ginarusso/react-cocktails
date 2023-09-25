import React from 'react'

const Cocktail = ({cocktails}) => {
    return (
        <>
        {cocktails.map(cocktailName => {
            const {id, cocktail_name, difficulty, portion, time, description, category, ingredients, method, image_url, alcohol_id} = cocktailName
            return (
                <div key={id}>
                    <h4>Cocktail name: {cocktail_name}</h4>
                    <h5>Difficulty: {difficulty}</h5>
                    <h5>Portion: {portion}</h5>
                    <h5>Time: {time}</h5>
                    <h5>Description: {description}</h5>
                    <h5>Category: {category}</h5>
                    <h5>Ingredients: {ingredients}</h5>
                    <h5>Method: {method}</h5>
                    <h5>Image URL: {image_url}</h5>
                    <h5>Alcohol ID: {alcohol_id}</h5>
                    <hr />
                </div>
            )
        })}
        </>
    )
}
export default Cocktail
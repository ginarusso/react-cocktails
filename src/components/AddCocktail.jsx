import React, {useState} from 'react'
import apiConn from "../api/connect"

const AddCocktail = ({addCocktails}) => {
    const [cocktail, setCocktail] = useState({
        cocktail_name: "",
        difficulty: "",
        portion: "",
        time: "",
        description: "",
        category: "",
        ingredients: [],
        method: [],
        image_url: "",
        alcohol_id: ""
    })

function  handleName(e) {
    setCocktail((previousCocktail) => {
        return {...previousCocktail, cocktail_name: e.target.value}
    })
}

async function handleOnSubmit(e) {
    e.preventDefault()
        apiConn.post('/cocktail', cocktail)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    setCocktail({
        cocktail_name: "",
        difficulty: "",
        portion: "",
        time: "",
        description: "",
        category: "",
        ingredients: [],
        method: [],
        image_url: "",
        alcohol_id: ""
    })
}

return (
    <>
    <h2>Add a Cocktail</h2>
    <form onSubmit={handleOnSubmit}>
        <input type="text"
        placeholder="Cocktail Name"
        value={cocktail.cocktail_name}
        onChange={handleName}
        required
        />
        <input type="text"
        placeholder="Difficulty"
        value={cocktail.difficulty}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, difficulty: e.target.value}
            })
        }}
        required
        />
        <input type="text"
        placeholder="portion"
        value={cocktail.portion}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, portion: e.target.value}
            })
        }}
        required
        />
        <input type="text"
        placeholder="time"
        value={cocktail.time}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, time: e.target.value}
            })
        }}
        required
        />
        <input type="text"
        placeholder="description"
        value={cocktail.description}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, description: e.target.value}
            })
        }}
        required
        />
        <input type="text"
        placeholder="category"
        value={cocktail.category}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, category: e.target.value}
            })
        }}
        required
        />
        {/* separate textarea input fields for ingredients and method, allowing you to enter multiple items separated by newlines. The handleArrayChange function splits the input by newlines and updates the corresponding array in the cocktail state. */}
        {/* <textarea
          name="ingredients"
          placeholder="Ingredients (one per line)"
          value={cocktail.ingredients.join('\n')}
          onChange={(e) => handleArrayChange(e, 'ingredients')}
          required
        />
        <textarea
          name="method"
          placeholder="Method (one per line)"
          value={cocktail.method.join('\n')}
          onChange={(e) => handleArrayChange(e, 'method')}
          required
        /> */}
        {/* <input type="text"
        placeholder="ingredients"
        value={cocktail.ingredients}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, ingredients: e.target.value}
            })
        }}
        /> */}
        {/* need to be able to add several ingredents (unlimited amount) */}
        {/* <input type="text"
        placeholder="method"
        value={cocktail.method}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, method: e.target.value}
            })
        }}
        /> */}
        {/* need to be able to add several methods (unlimited steps) */}
        <input type="text"
        placeholder="image URL"
        value={cocktail.image_url}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, image_url: e.target.value}
            })
        }}
        required
        />
        <input type="number"
        placeholder="alcohol ID"
        value={cocktail.alcohol_id}
        onChange={e => {
            setCocktail(previousCocktail => {
                return {...previousCocktail, alcohol_id: e.target.value}
            })
        }}
        required
        />
        <button type="submit">Add Cocktail</button>
    </form>

    </>
    )
}

export default AddCocktail
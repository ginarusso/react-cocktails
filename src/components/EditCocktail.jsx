import React, {useState} from 'react'

const EditCocktail = ({editCocktails}) => {
    const [cocktail, setCocktail] = useState({
        id: "",
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

function handleSubmit(e) {
    e.preventDefault()
    // console.log(person)
    editCocktails(cocktail.id, cocktail)

    setCocktail({
        id: "",
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
        <hr />
<h2>Component to edit cocktail</h2>

    <form onSubmit={handleSubmit}> 

    <input type="number"
    placeholder="ID"
    value={cocktail.id}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, id: e.target.value}
        })
    }}
    required
    />

    <input type="text"
    placeholder="Cocktail name"
    value={cocktail.cocktail_name}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, cocktail_name: e.target.value}
        })
    }}
    required
    />

    <input type="text"
    placeholder="Difficulty"
    value={cocktail.difficulty}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, difficulty: e.target.value}
        })
    }}
    required
    />
    <input type="text"
    placeholder="portion"
    value={cocktail.portion}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, portion: e.target.value}
        })
    }}
    required
    />
    <input type="text"
    placeholder="time"
    value={cocktail.time}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, time: e.target.value}
        })
    }}
    required
    />
    <input type="text"
    placeholder="description"
    value={cocktail.description}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, description: e.target.value}
        })
    }}
    required
    />
    <input type="text"
    placeholder="category"
    value={cocktail.category}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, category: e.target.value}
        })
    }}
    required
    />   
    <input type="text"
    placeholder="ingredients"
    value={cocktail.ingredients}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, ingredients: e.target.value}
        })
    }}
    required
    /> 
    <input type="text"
    placeholder="method"
    value={cocktail.method}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, method: e.target.value}
        })
    }}
    required
    /> 
    <input type="text"
    placeholder="image URL"
    value={cocktail.image_url}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, image_url: e.target.value}
        })
    }}
    required
    /> 
    <input type="text"
    placeholder="alcohol ID"
    value={cocktail.alcohol_id}
    onChange={e => {
        setCocktail (previousCocktail => {
            return {...previousCocktail, alcohol_id: e.target.value}
        })
    }}
    required
    />  
<button>Edit Cocktail</button>
    </form>
    <hr />
    </>
  )
}

export default EditCocktail
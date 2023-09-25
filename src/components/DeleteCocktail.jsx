import React from 'react'

const DeleteCocktail = ({id, deleteCocktail}) => {
    function handleDelete(e) {
        deleteCocktail(id)
    }
    return (
        <>
        <button onClick={handleDelete}>Delete Cocktail</button>
        </>
    )
}

export default DeleteCocktail


// when a cocktail is deleted, the alcohol shouldn't be deleted from the database

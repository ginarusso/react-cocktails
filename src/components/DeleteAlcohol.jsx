import React from 'react'

const DeleteAlcohol = ({id, deleteAlcohol}) => {
    function handleDelete(e) {
        deleteAlcohol(id)
    }
    return (
        <>
        <button onClick={handleDelete}>Delete Alcohol</button>
        </>
    )
}

export default DeleteAlcohol


// when an alcohol is deleted, the cocktail shouldn't be deleted from the database

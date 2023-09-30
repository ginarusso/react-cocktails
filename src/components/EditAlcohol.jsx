import React, {useState} from 'react'

const EditAlcohol = ({editAlcohol}) => {
    const [alcohol, setAlcohol] = useState({
        id: "",
        alcohol_name: "",
        brand: ""
    })

function handleSubmit(e) {
    e.preventDefault()
    // console.log(person)
    editAlcohol(alcohol.id, alcohol)

    setAlcohol({
        id: "",
        alcohol_name: "",
        brand: ""
    })
}

  return (
    <>
        <hr />
<h2>Component to edit alcohol</h2>

    <form onSubmit={handleSubmit}> 

    <input type="number"
    placeholder="ID"
    value={alcohol.id}
    onChange={e => {
        setAlcohol (previousAlcohol => {
            return {...previousAlcohol, id: e.target.value}
        })
    }}
    />

    <input type="text"
    placeholder="Name"
    value={alcohol.alcohol_name}
    onChange={e => {
        setAlcohol (previousAlcohol => {
            return {...previousAlcohol, alcohol_name: e.target.value}
        })
    }}
    />
    <input type="text"
    placeholder="Brand"
    value={alcohol.brand}
    onChange={e => {
        setAlcohol (previousAlcohol => {
            return {...previousAlcohol, brand: e.target.value}
        })
    }}
    />
<button>Edit Alcohol</button>
    </form>
    <hr />
    </>
  )
}

export default EditAlcohol
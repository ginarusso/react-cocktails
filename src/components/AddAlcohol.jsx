import React, {useState} from 'react'

const AddAlcohol = ({addAlcohols}) => {
    const [alcohol, setAlcohol] = useState({
        alcohol_name: "",
        brand: ""
    })

function  handleName(e) {
    setAlcohol((previousAlcohol) => {
        return {...previousAlcohol, alcohol_name: e.target.value}
    })
}

function handleOnSubmit(e) {
    e.preventDefault()
    addAlcohols(alcohol)
    setAlcohol({
        alcohol_name: "",
        brand: ""
    })
}

return (
    <>
    <form onSubmit={handleOnSubmit}>
        <input type="text"
        placeholder="Alcohol Name"
        value={alcohol.alcohol_name}
        onChange={handleName}
        required />
        <input type="text"
        placeholder="Brand"
        value={alcohol.brand}
        onChange={e => {
            setAlcohol(previousAlcohol => {
                return {...previousAlcohol, brand: e.target.value}
            })
        }}
        required
        />
        <button>Add Alcohol</button>
    </form>
    </>
    )
}

export default AddAlcohol






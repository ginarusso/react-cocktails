import React from 'react'

const Alcohol = ({alcohol}) => {
    return (
        <>
    {/* <DeleteAlcohol /> */}
    <EditAlcohol />
        {alcohol.map(alcoholName => {
            const {id, alcohol_name, brand} = alcoholName
            return (
                <div key={id}>
                    <h4>Alcohol name: {alcohol_name}</h4>
                    <h5>Brand: {brand}</h5>
                    <h5>Alcohol ID: {id}</h5>
                    <hr />
                </div>
            )
        })}
        </>
    )
}
export default Alcohol
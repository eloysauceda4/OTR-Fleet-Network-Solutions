import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServicesCard = (props) => {
    let navigate = useNavigate()

    const showServices = (companies) => {
        navigate(`/companies/:id${props._id}`)
    }
    return (
        <div onClick={showServices}>
            <h3>{props.title}</h3>
            {props._id}
            <p>{props.description}</p>
            <p>{props.area}</p>
        </div>
    )
}

export default ServicesCard
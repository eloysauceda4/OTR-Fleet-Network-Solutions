import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompaniesCard = (props) => {
    let navigate = useNavigate()

    const showCompanies = (companies) => {
        navigate(`/companies/${props._id}`)
    }
    return (
        <div onClick={showCompanies}>
            <h3>{props.name}</h3>
            {props._id}
            <img src={props.img} alt={props.img}/>
            <p>{props.location}</p>
        </div>
    )
}

export default CompaniesCard
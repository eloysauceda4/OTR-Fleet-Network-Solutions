import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar'


import ServicesCard from "./ServicesCard";
import CompaniesCard from "./CompaniesCard";

import { Link } from "react-router-dom";
import axios from "axios"

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState()
    const [searching, setSearching] = useState(false)

    const getSearchResults = async (e) => {
        setSearching(true)
        e.preventDefault()
        const companies = await axios.get("http://localhost:3001/companies")
        setSearchResults(companies.data)
        setSearchQuery('')
    }

  

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

  
    
    const handleValue = (e) => {
        setSearchValue(parseInt(e.target.value))
    }

    return (
        <div>
            <div className="img1">
        <img src="/images/FleetMaintenance_Logo.5e4e9e29e1d99.avif" alt=""/> 
        </div>
    <SearchBar 
        onSubmit1={getSearchResults}
        onChange={handleChange}
        onCheck={handleValue}
        value1={searchQuery}
        value2={searchValue}
    />
    <h2></h2>
    <section className="searchResults">
        {searching && searchResults.map((result) => (
            <Link to={`companies/${result._id}`}>
            <CompaniesCard key={result._id} name={result.name}  img={result.image} location={result.location} />
           
            </Link>
            
           
            
        ))}
       
    </section>
    {searching && searchResults.map((result) => 
    <Link to={`companies/:id${result._id}`}>
    <ServicesCard key={result._id} title={result.title} description={result.description} area={result.area}/>
</Link>
    )}
    
    </div>
            
        
    
    )
}

export default Main
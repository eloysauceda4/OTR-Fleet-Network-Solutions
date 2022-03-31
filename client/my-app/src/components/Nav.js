import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    return (
        <div>
            <span className='title'>
                OTR Fleet Network Solutions  
               
            </span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Industry Data</Link>
        </div>
    )
}

export default Nav
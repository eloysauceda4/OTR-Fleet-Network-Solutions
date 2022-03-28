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
            <Link to="/contact">Contact Us</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Nav
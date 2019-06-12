import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav'>
            <div className='Nav-Home'><Link to ='/'>Home</Link></div >
            <div className='Nav-Portfolio'><Link to ='/portfolio'>Portfolio</Link></div >
            <div className='Nav-Resume'><Link to ='/resume'>Resume</Link></div >
            <div className='Nav-Contact'><Link to ='/contact'>Contact</Link></div >
        </div>
    )
}

export default Nav
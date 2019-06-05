import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <div className='Nav'> 
            <Link to ='/'>Home</Link>
            <Link to ='/FindMyRep'>FindMyReps</Link>
            <Link to ='/Info'>Info</Link>
        </div>
    )
}

export default NavBar
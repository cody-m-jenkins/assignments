import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='Home'>
            <h1>Welcome to FindMyRep.info</h1> <br />
            <p>Find your representatives for the both the House and Senate in one convenient place. 
            <br /><br />Click FindMyReps or click the image below to continue!</p> <br /><br /><br />
            <Link to ='/FindMyRep'><img className='CapitolBuilding' src="https://media.newyorker.com/photos/59096016019dfc3494e9fe0f/master/w_2046,c_limit/Borowitz-Capitol-Citigroup.jpg" alt='Capitol Building' ></img></Link>
        </div>
    )
}

export default Home
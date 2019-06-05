import React from 'react'
import './styles.css'


const Main = () => {
const myFriend = {
    name: 'Chuck',
    occupation: 'Test Pilot',
    favColor: 'yellow'
}

    return (
        <div className='main-container'>
            <div>{myFriend.name}</div>
            <div>Occupation: {myFriend.occupation}</div>
            <div>Favorite color: {myFriend.favColor}</div>
        </div>
    )
}
export default Main
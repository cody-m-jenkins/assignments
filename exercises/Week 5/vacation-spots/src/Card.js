import React from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls';

const Card = (props) => {
    let{place, price, timeToGo} = props.card;
    let valueDollar = ''
    price < 500 ? valueDollar = '$' :
    price <1000 ? valueDollar = '$$' :
    valueDollar = '$$$'

    let backgroundColor = ''
    timeToGo === 'Spring' ? backgroundColor = '#73C991' :
    timeToGo === 'Summer' ? backgroundColor = 'yellow' :
    timeToGo === 'Fall' ? backgroundColor = 'orange' :
    backgroundColor = '#86BCD8'

    return (
        <div style={{backgroundColor}}>
            <h1>Destination: {place}</h1>
            <p>Price: ${price}</p>
            <h3>Best time to go: {timeToGo}</h3>
            <h2>Value {valueDollar}</h2>
        </div>
    )
}

export default Card
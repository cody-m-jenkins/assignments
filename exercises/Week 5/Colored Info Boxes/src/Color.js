import React from 'react'

const Color = (props) => {
    let{backgroundColor, title, subtitle, information} = props.color;
    return (
        <div style={{backgroundColor}}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{information}</p>
        </div>
    )
}

export default Color
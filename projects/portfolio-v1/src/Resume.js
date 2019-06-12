import React from 'react';
import { Document } from 'react-pdf'

const Resume = () => {
    return (
        <div className='Container'>
            <div className='Resume'>
                <p>Please check out my resume! Here's a 
                    <a href={'https://docs.google.com/document/d/1llQo7j3MQgp7-4d_eUuTtSvJ2aZzJ7nZTl1kZBSLcgQ/export?format=pdf'}> download link </a>
                    for your convenience.</p>
                <br />
                <p>If downloading strange files from the internet isn't your thing, I get that. Here's a .png image of it instead if you prefer:</p>
                <br />
                <img  
                className='Resume-Img'
                src={'https://i.imgur.com/ilAyfkg.png'} 
                alt='resume pic' 
                />

                {/* <Document file="https://drive.google.com/open?id=14T4p7gEDsl28qYh7ZKN8YfJt3mLak6K5"/> */}
                {/* <Document file="https://docs.google.com/document/d/1llQo7j3MQgp7-4d_eUuTtSvJ2aZzJ7nZTl1kZBSLcgQ/export?format=pdf"/> */}
            </div>
        </div>
    )
}

export default Resume
import React from 'react';
import Fade from 'react-reveal/Fade'

const Home = () => {
    return (
        <div className='Container'>
            <div className='Home'>
                <Fade bottom>
                    <div className='Home-1'>Hi, hello! My name is Cody.
                        I'm a full stack web developer with experience in React.js, Node.js, and Mongo.db. 
                        Let me tell you a little about myself.</div>
                    <br />
                    <div className='Home-2'>About Me</div>
                    <div className='Home-3'></div>
                </Fade>
            </div>
        </div>
    )
}

export default Home
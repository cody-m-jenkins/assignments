import React from 'react'
import {Consumer} from './index'

const Header = props => (
    <Consumer>
    {value => (
        <div className={`${value.theme}-header`}>
            <h1>Totally Awesome Header</h1>
            <button>{value.theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
        </div>
    )}
    </Consumer>
)

export default Header
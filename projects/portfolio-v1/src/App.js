import React from 'react'
import Nav from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'
import {Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Nav />
            <Switch>
                
                    <Route exact path ='/' component = {Home} />
                    <Route path ='/portfolio' component = {Portfolio} />
                    <Route path ='/contact' component = {Contact} />
                    <Route path ='/resume' component = {Resume} />
            </Switch>
        </>
    )
}

export default App
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Services from './Services'
import About from './About'
import React from 'react'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path = '/about' component={About} />
                <Route path = '/services' component={Services} />
                <Route exact path = '/' component={Home} />
            </Switch>
            <Footer />
        </> 
    )
}

export default App
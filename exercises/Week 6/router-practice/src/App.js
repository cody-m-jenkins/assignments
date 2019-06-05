import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Home from './Home'

import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/about' component={About} />
                <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
        </>
    )
}

export default App
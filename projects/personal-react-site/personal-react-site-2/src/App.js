import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import FindMyRep from './FindMyRep'
import Info from './Info'
import {Switch, Route} from 'react-router-dom'




const App = () => {
    return (
        <div>

                <NavBar />
                <Switch>
                    <Route exact path ='/' component ={Home}/>
                    <Route path ='/FindMyRep' component ={FindMyRep}/>
                    <Route path ='/Info' component ={Info}/>
                </Switch>
                <Footer />

        </div>
    )}
    

export default App
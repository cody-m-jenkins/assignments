import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import {BrowserRouter} from 'react-router-dom'
import DataProvider from './CongressContainer'

ReactDOM.render(
    <BrowserRouter>
        <DataProvider> 
            <App />
        </DataProvider>  
    </BrowserRouter>
    , document.getElementById('root')
    )
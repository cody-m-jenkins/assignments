import React from 'react'
import Styles from './styles.css'
import Box from './Box'

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            squares: ['white', 'white', 'white', 'white']
    }

    }
    // blackOrWhite = () => {
    //     this.setState(
    //         prevState => {
    //                prevState.squares[0] === 'black') 
    //         }
    //     )
    }

    render(){
        return (
            <>
                <div className='square-container'>Squares</div>
                    <box color={this.state.squares[0]}></box>
                    <box color={this.state.squares[1]}></box>
                    <box color={this.state.squares[2]}></box>
                    <box color={this.state.squares[3]}></box>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </>
        )
    }
    
}
export default App
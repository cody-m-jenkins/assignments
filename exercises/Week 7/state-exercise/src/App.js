import React from 'react'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            clickCounter: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                clickCounter: prevState.clickCounter * 999 
            }
        } )

    }

    render() {
        return (
            <CounterDisplay counter={this.state.clickCounter} handleClick={this.handleClick} />
        )
    }
}
class CounterDisplay extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.handleClick}>+</button>
            </div>
        )
    }
}


export default Counter
import React, { Component } from 'react'

class Form extends Component {
        constructor(){
            super()

            this.state = {
                fName: '',
                lName: '',
                people: []
            }
        }
        handleSubmit = (event) => {
            event.preventDefault()

            const newPerson = {
                fName: this.state.fName,
                lName: this.state.lName
            }

            this.setState((prevState)=>{
                return {
                    people: [...prevState.people, newPerson]
                }
            })
        }
    render(){
        const mappedPeople = this.state.people.map((person, i)=> {
            return <div key={i + person.fName}>
                        <h1>{person.fName} {person.lName}</h1>
                    </div>
        })
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='First name'
                        name='fName'
                        value={this.state.name}
                    />
                    <input
                        type='text'
                        placeholder='Last name'
                        name='lName'
                        value={this.state.name}
                    />
                    <button>Submit</button>
                </form>
                {mappedPeople}
            </>
        )
    }
}

export default Form
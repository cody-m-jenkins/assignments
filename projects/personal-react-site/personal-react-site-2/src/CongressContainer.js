import React, { Component, createContext} from 'react'
import axios from 'axios'


const {Consumer, Provider} = createContext()

class DataProvider extends Component {
    constructor() {
        super()
        
        this.state={
            data: []
        }
    }

    getRep = (zip) => {
        const api = `https://vschool-cors.herokuapp.com?url=https://whoismyrepresentative.com/getall_mems.php?zip=${zip}&output=json`
        axios.get(api).then(response => {
            if(typeof response.data !== 'object'){
                alert('Please enter a valid ZIP Code')
                this.setState({
                    data: []
                })
            }else {
                this.setState({
                    data: response.data.results
                })
            }
            
        })
    }
render(){
    const values = {
        ...this.state,
        getRep: this.getRep
    }
    return(
    
            <Provider value={values}>
                {this.props.children}
            </Provider>
   
    )}
}

export default DataProvider

export function withDataProvider (Component){
    return props => (
        <Consumer>
            {value => <Component {...props}{...value}/>}
        </Consumer>
    )
} 
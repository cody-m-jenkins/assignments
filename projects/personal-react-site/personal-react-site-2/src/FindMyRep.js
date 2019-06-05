import React, {Component} from 'react';
import {withDataProvider} from './CongressContainer'



class FindMyRep extends Component {
    constructor () {
        super()
        this.state={
            zip:''
        }
    }

    handleChange = (event) => {
        this.setState({zip: event.target.value})
    
    }

    render () {
   
        const mapReps = this.props.data.map((rep, i) => {

            return (
                    <div className='RepReturn' key={rep+i}>
                        <h2 className='RepReturn-Name'>Name: {rep.name}</h2>
                        {rep.district === '' ? <h3>Senate</h3> : <h3>House of Representatives</h3>}
                        {rep.district === '' ? '': <h3>District: {rep.district}</h3>}
                        <h3>Party: {rep.party}</h3>
                        <h4>State: {rep.state}</h4>
                        <h4>Office phone: {rep.phone}</h4>
                        <h4>Office address: {rep.office}</h4>
                        <h4>Official website: <a href={rep.link} target='blank'>{rep.link}</a></h4> <br />
                    </div>
            )
    })
        

    return (
       
        <div className='Rep'>
            <div className='RepMain'><h1>Find your representatives by ZIP code:</h1> <br />
            <p>Please enter your 5 digit ZIP code and hit the 'submit' button below.</p> <br /> 
            
            <input required type='number' name='zip' onChange={this.handleChange}></input>
            
            <br /> <br /> <p>Note: If your ZIP code overlaps multiple districts they will all be listed.</p> <br />
            
            <button className='Button' onClick={()=>this.props.getRep(this.state.zip)}>Submit</button>
            
            {mapReps}
                
            </div>
        </div>
    
    )}
}

export default withDataProvider(FindMyRep)


// import React, { Component } from 'react';
// import {withDataProvider} from './CongressContainer'


// class FindMyRep extends Component {
//     componentDidMount(){
//         this.props.getRep()
//     }

//     render() {
//         console.log(this.props)
//         const mapReps = this.props.data.map((rep, i) => {
//             return (
//                 <div key={rep+i}>
//                     <h1>Name: {rep.name}</h1>
//                     <h2>Party: {rep.party}</h2>
//                     <h3>Office phone: {rep.phone}</h3>
//                     {rep.district === '' ? <h2>Senate</h2> : <h2>House of Representatives</h2>}
//                 </div>
//             )
//         })
//         return (
//             <div className='Rep'>
//                 <h1>Find your congress person:</h1>
//                 <div>
//                     <button onClick={this.props.getRep}>Click here</button> 
//                     {mapReps}
//                     {/* {props.data[0] ==='' ? <h1>Enter zip</h1> : <h1>{props.data[0].name}</h1>} */}
//                 </div>
//             </div>
//         )
//     }
// }

// export default withDataProvider(FindMyRep)
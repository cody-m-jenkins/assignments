import React from 'react'
import HitList from './HitList'

constructor(props){
    super(props)
    this.state = {
      name:[],
      image:[]  
    }
}

const App = () => {
    return (
        <div>
            <HitList />
        </div>
    )
}

export default App
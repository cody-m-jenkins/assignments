import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const {Consumer, Provider} = React.createContext()

ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  )
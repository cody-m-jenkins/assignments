const express = require('express')
const data = require('./database.js')
const app = express()
const PORT = 4444
const uuid = require('uuid/v4')

app.use(express.json())

app.get('/destination', (request, response) => {
    console.log(request.query)
    response.send(data)
    if(request.query.timeToGo) {
        results = data.filter(destination => destination.timeToGo === request.query.timeToGo)
    }
})

app.get('/destination/:id', (request, response) => {
    // request.params.id vs id that matches in the database
    const destination = data.find(destination => destination._id === request.params.id)
    respond.send(searchedDestination)
})

app.post('/destination', (request, response) => {
    //body of info comes from request.body
    const newDestination = request.body
    newDestination._id = uuid()
    console.log(newDestination)
    data.push(newDestination)
    response.send(request.body)
})

app.delete('/destination/:id', (request, response) => {
    // id is found in request.params.id
    data.forEach((destination, i) => {
        if (request.params.id === destination._id){
            data.splice(i,1)
        }
    })
    response.send('red rover')
})

app.put('/destination/:id', (request, response) => {
    console.log(request.body)
    data.forEach((destination, i) => {
        if(destination._id === request.params.id) {
            // destination.place = request.body.place
            Object.assign(destination, request.body)
        }
    })
    response.send('put worked')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
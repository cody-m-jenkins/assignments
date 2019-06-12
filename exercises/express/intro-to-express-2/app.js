const express = require('express')
const uuid = require('uuid/v4')
const data = require('./database')
const app = express()

const bounties = [
    bounty = {
        firstName: '',
        lastName: '',
        living: true,
        bounty: 100,
        type: '',
        id: ''
    }
]






// const port = process.env.PORT || 8000;

// // Routes for 'fruits'
// app.get("/fruit", (req, res) => {
//     res.send("GET on /fruit endpoint");
// });

// app.post("/fruit", (req, res) => {
//     res.send("POST on /fruit endpoint");
// });

// app.get("/fruit/:fruitId", (req, res) => {
//     res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
// });

// app.put("/fruit/:fruitId", (req, res) => {
//     res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
// });

// app.delete("/fruit/:fruitId", (req, res) => {
//     res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
// });


// // Routes for 'vegetables'
// app.get("/vegetable", (req, res) => {
//     res.send("GET on /vegetable endpoint");
// });

// app.post("/vegetable", (req, res) => {
//     res.send("POST on /vegetable endpoint");
// });

// app.get("/vegetable/:vegetableId", (req, res) => {
//     res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
// });

// app.put("/vegetable/:vegetableId", (req, res) => {
//     res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
// });

// app.delete("/vegetables/:vegetableId", (req, res) => {
//     res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
// });

// // Run the server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

















// app.use(express.json())

// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })

// app.get('/destination', (request, response)=> {
//     response.send(data)
// })

// app.get('/destination/:destinationID', (request, response) => {
//     console.log(request.params.destinationID)
//     const results = data.filter(destination => destination._id === request.params.destinationID)
//     response.send(results)
// })

// app.post('/destination', (request, response)=> {
//     const newDestination = request.body
//     newDestination._id = uuid()
//     data.push(newDestination)
//     response.send(newDestination)
// })

// app.delete('/destination/:destinationID', (request, response)=> {
//    data.forEach((destination, i) => {
//        if(request.params.destinationID === destination._id){
//            data.splice(i, 1)
//        }
//    })
//    response.send({
//        msg: 'Successfully Deleted Destination'
//    })
// })

// app.put('/destination/:destinationID', (request, response) => {
//     const updatedDestination = request.body;
//     data.forEach(destination => {
//         if(request.params.destinationID === destination._id){
//             return Object.assign(destination, updatedDestination)
//         }
//     })  
//     response.send({
//         msg: 'Successfully Updated Destination',
//         data
//     })
// })
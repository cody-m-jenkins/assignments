const express = require ('express')
const app = express()
const PORT = 6000
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(
    'mongodb://localhost:27017/bounty-hunter', 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log('Connected to Database')
})

// app.use('/bounty', require('./models/bounty'))

app.use('/bounties', require('./routes/bountyRoutes'))


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

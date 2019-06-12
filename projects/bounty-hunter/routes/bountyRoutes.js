const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

//post for new items
bountyRouter.post('/', (req, res) => {
    const newBounty = new Bounty(req.body)
    
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//get for all items
bountyRouter.get('/', (req,res) => {
    Bounty.find((err, allTheBounties) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(allTheBounties)
    })
})

//get for individual IDs
bountyRouter.get('/:_id', (req, res) => {
    Bounty.findOne({_id: req.params._id}, (err, foundBounty) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundBounty)
    })
})

//delete for individual IDs
bountyRouter.delete('/:_id', (req, res) => {
    Bounty.findOneAndDelete({_id: req.params._id}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successsfully deleted ${deletedItem.firstName} ${deletedItem.lastName}`)
    })
})

//put for individual IDs
bountyRouter.put('/:id', (req, res) => {
    Bounty.findOneAndUpdate(
        {_id: req.params._id},  //find bounty with with ID
        req.body,               //Update it with this object from user
        {new:true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


module.exports = bountyRouter
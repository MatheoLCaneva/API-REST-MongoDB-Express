const express = require("express")
const userSchema = require("../models/figuritas")

const router = express.Router();

router.post("/figuritas", (req, res) => {
    const figurita = userSchema(req.body)
    figurita
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//get all 

router.get("/figuritas", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error })) 
})


//get filter

router.get("/figuritas/:id", (req, res) => {
    const { id } = req.params
    console.log(id)
    userSchema
        .find( {codigo: id} )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router
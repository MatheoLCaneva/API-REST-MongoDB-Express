const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("figurita", userSchema)
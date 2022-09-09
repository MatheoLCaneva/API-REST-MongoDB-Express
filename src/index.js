const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const userRoutes = require("./routes/figuritas")

const app = express()
const port = process.env.PORT || 4040;

//middleware
app.use(express.json())
app.use("/api", userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to this API Rest")
})


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error('Error a conectar a la base de datos: ', error))

app.listen(port, () => console.log('Server listening at port', port ))

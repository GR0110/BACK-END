const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const userRoutes = require("./ROUTES/routes")

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log("Error",error)
})
app.use("/users",userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server Started and Running at ${PORT}`)
})
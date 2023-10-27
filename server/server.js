require("dotenv").config();
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const adminRouter = require('./router/api/admin');
const employeeRouter = require("./router/api/exployee");

const PORT = process.env.PORT;

app.listen(PORT,(req,res)=>{
    console.log(`app is listen on port ${PORT}`)
})

connectDB()

app.use(express.json())

app.use("/api/admin",adminRouter)
app.use("/api/employee",employeeRouter)




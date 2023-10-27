
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URL 

const connectDB = async() =>{
    try{
        await mongoose.connect(uri,{ useNewUrlParser: true })
        console.log("Database Connected")

    } catch {
        console.log(uri)
        console.log("Database connection failed ")
    }
}

module.exports = connectDB
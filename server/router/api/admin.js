const express = require('express')
const Admin = require('../../models/Admin')
const adminRouter = express.Router()
const bcrypt = require('bcrypt')


adminRouter.post("/register", async(req,res)=>{
    const {username, email,password } = req.body
    if(!username || !email || !password) {
        return res.status(400).json("please provide username,email and password")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const hashedPassword = hash;
    const adminObj ={
        username: username,
        email : email,
        password : hashedPassword
    }
    try{
        const admin  = new Admin(adminObj)
        await admin.save()
        res.status(201).json(admin)
    } catch (error) {
        console.log("Admin Not created")
        res.status(401).json(error)
    }   
})

adminRouter.get("/",async(req,res)=>{
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
      } catch (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
})



module.exports = adminRouter
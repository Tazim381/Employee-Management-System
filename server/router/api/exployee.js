const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../../models/Employee')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')


employeeRouter.post("/register",async(req,res)=>{
    const { id, firstName, lastName, age, position, email, phone, address, image, department, joiningDate, salary, skills,education } = req.body;
    console.log(id,firstName,lastName,age,position,email,phone,address,image,department,joiningDate,salary,skills)
    if (!id || !firstName || !lastName || !age || !position || !email || !phone || !address || !department || !joiningDate || !salary || !skills || !education) {
        return res.status(400).json("Please provide all required fields");
    }
    
    try {
        const salt = await bcrypt.genSalt(10);
        const employeeObj = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age, 
            position:position, 
            phone: phone, 
            address:address, 
            image: image, 
            department: department, 
            joiningDate:joiningDate, 
            salary: salary, 
            skills: skills, 
            education: [
                {
                    degree:education[0].degree, 
                    university:education[0].university, 
                    graduationYear:education[0].graduationYear 
                }
            ]
        };

        const employee = new Employee(employeeObj);
        await employee.save();

        res.status(201).json(employee);
    } catch (error) {
        console.error("Employee not created", error);
        res.status(401).json(error);
    }
})


employeeRouter.get(("/"), async(req,res)=>{
    try{
        const employees =await Employee.find()
        res.status(200).json(employees)
    } 
    catch(error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
})


module.exports = employeeRouter
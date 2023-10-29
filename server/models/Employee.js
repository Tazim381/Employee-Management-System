const mongoose = require('mongoose');

// Define the schema for the Employee collection
const employeeSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  age: Number,
  position: String,
  email:{
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  address: String,
  image: String,
  department: String,
  joiningDate: String,
  salary: Number,
  skills: String,
  education: [{
    degree: String,
    university: String,
    graduationYear: Number
  }]
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

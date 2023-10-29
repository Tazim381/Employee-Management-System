const mongoose = require('mongoose');

// Define the schema for the Employee collection
const employeeSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  age: Number,
  position: String,
  email: String,
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

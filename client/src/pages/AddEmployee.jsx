import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const AddEmployee = () => {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    axios.post('http://localhost:5000/api/employee/register', {
      id: form.id.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age: form.age.value,
      position: form.position.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      image: form.image.value,
      department: form.department.value,
      joiningDate: form.joiningDate.value,
      salary: form.salary.value,
      skills: form.skills.value,
      education: [{
        degree: form.degree.value,
        university: form.university.value,
        graduationYear: form.graduationYear.value
      }]
    })
      .then((response) => {
        alert("Employee Added")
        navigate("/")
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className=" bg-slate-400  overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
        <form className="p-8 " onSubmit={handleSubmit}>
          <div className=' content-center text-3xl font-bold mb-6 md:mb-8 text-gray-800'>Employee Information Form</div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="number" name="id" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Id" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="firstName" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="First Name" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="lastName" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Last Name" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="number" name="age" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Age" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="position" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Position" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="email" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="phone" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Phone Number" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="address" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Address" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="image" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Image URL" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="department" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Department" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="joiningDate" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Joining Date" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="number" name="salary" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Salary" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="skills" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Skills" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="degree" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Degree" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="text" name="university" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="University" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input type="number" name="graduationYear" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Graduation Year" required />
          </div>
          <button type="submit" className="border-gray-50 bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee
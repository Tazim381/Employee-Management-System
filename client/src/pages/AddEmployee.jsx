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
    axios.post('https://tazim-1234.vercel.app/api/employee/register', {
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
    }, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
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
  <form className='lg:flex justify-center mt-10 mb-10 ' onSubmit={handleSubmit} >
  <div class="border border-yellow-700 p-10 bg-slate-100 rounded-lg">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900 ">Employee Information</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
      <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">ID</label>
          <div class="mt-2">
            <input type="number" name="id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="firstName"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="lastName"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-4">
          <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Age</label>
          <div class="mt-2">
            <input  name="age" type="number"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div class="mt-2">
            <input type="number" name="phone"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        
        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Address</label>
          <div class="mt-2">
            <input type="text" name="address"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

         
        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Position</label>
          <div class="mt-2">
            <input type="text" name="position"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Department</label>
          <div class="mt-2">
            <input type="text" name="department"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Salary</label>
          <div class="mt-2">
            <input type="number" name="salary"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Joining Date</label>
          <div class="mt-2">
            <input type="text" name="joiningDate"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3 sm:col-start-1">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Degree</label>
          <div class="mt-2">
            <input type="text" name="degree"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">University</label>
          <div class="mt-2">
            <input type="text" name="university"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Graduation Year</label>
          <div class="mt-2">
            <input type="number" name="graduationYear"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>
 
        <div class="sm:col-span-4">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Skills</label>
          <div class="mt-2">
            <input type="text" name="skills"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>
        
        <div class="sm:col-span-3">
          <label  class="block text-sm font-medium leading-6 text-gray-900">Image Url</label>
          <div class="mt-2">
            <input type="text" name="image" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      </div>
    </div>

    <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>

  </div>
</form>
      
  )
}

export default AddEmployee
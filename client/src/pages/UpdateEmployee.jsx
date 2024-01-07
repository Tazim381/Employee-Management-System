import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    position: '',
    email: '',
    phone: '',
    address: '',
    image: '',
    department: '',
    joiningDate: '',
    salary: 0,
    skills: '',
    education: [{
      degree: '',
      university: '',
      graduationYear: 0,
    }],
  });



  useEffect(() => {
    axios.get(`https://tazim-1234.vercel.app/api/employee/${id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
    })
      .then((response) => {
        const data = response.data;
        setEmployeeData(data);
      })
      .catch((error) => {
        console.log("Error fetching employee data:", error);
      });
  }, [id]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://tazim-1234.vercel.app/api/employee/update/${id}`, employeeData, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
        }
      })
      .then((response) => {
        alert("Employee Updated");
        navigate("/");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className='lg:flex justify-center mt-10 mb-10 ' onSubmit={handleSubmit} >
      <div class="border border-yellow-700 p-10 bg-slate-100 rounded-lg">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900 ">Update Employee Information</h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900">First name</label>
              <div class="mt-2">
                <input type="text" name="firstName" value={employeeData.firstName} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <div class="mt-2">
                <input type="text" name="lastName"  value={employeeData.lastName} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input name="email" type="email" value={employeeData.email} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Age</label>
              <div class="mt-2">
                <input name="age" type="number" value={employeeData.age} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
              <div class="mt-2">
                <input type="number" name="phone" value={employeeData.phone} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>


            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Address</label>
              <div class="mt-2">
                <input type="text" name="address" value={employeeData.address} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>


            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Position</label>
              <div class="mt-2">
                <input type="text" name="position"  value={employeeData.position} onChange={handleInputChange}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Department</label>
              <div class="mt-2">
                <input type="text" name="department" value={employeeData.department} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label class="block text-sm font-medium leading-6 text-gray-900">Salary</label>
              <div class="mt-2">
                <input type="number" name="salary" value={employeeData.salary} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Joining Date</label>
              <div class="mt-2">
                <input type="text" name="joiningDate" value={employeeData.joiningDate} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3 sm:col-start-1">
              <label class="block text-sm font-medium leading-6 text-gray-900">Degree</label>
              <div class="mt-2">
                <input type="text" name="degree"  value={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].degree : ""} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">University</label>
              <div class="mt-2">
                <input type="text" name="university"  value={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].university : ""} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label class="block text-sm font-medium leading-6 text-gray-900">Graduation Year</label>
              <div class="mt-2">
                <input type="number" name="graduationYear"  value={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].graduationYear : ""} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900">Skills</label>
              <div class="mt-2">
                <input type="text" name="skills" value={employeeData.skills} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Image Url</label>
              <div class="mt-2">
                <input type="text" name="image" value={employeeData.image} onChange={handleInputChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>
        </div>

        <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>

      </div>
    </form>
  )
}

export default UpdateEmployee
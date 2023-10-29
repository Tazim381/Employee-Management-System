import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';


const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
      axios.get(`http://localhost:5000/api/employee/${id}`)
        .then((response) => {
          const data = response.data;
          setEmployeeData(data);
        })
        .catch((error) => {
          console.log("Error fetching employee data:", error);
        });
  }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    axios.put(`http://localhost:5000/api/employee/update/${id}`, {
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
        alert("Employee Updated")
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
          <div className=" items-center text-lg mb-6 md:mb-8">
            <p className='font-bold'>Fist Name</p>
            <input type="text" name="firstName"  value={employeeData.firstName} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="First Name" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
            <p className='font-bold'>Last Name</p>
            <input type="text" name="lastName" value={employeeData.lastName} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Last Name" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
           <p className='font-bold'>Age</p>
            <input type="number" name="age" value={employeeData.age} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Age" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Position</p>
            <input type="text" name="position" value={employeeData.position} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Position" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Email</p>
            <input type="text" name="email" value={employeeData.email}  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Phone</p>
            <input type="text" name="phone" value={employeeData.phone}  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Phone Number" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Address</p>
            <input type="text" name="address" value={employeeData.address} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Address" required />
          </div>
          <div className="items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Image URL</p>
            <input type="text" name="image"  value={employeeData.image} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Image URL" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Department</p>
            <input type="text" name="department" value={employeeData.department} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Department" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Joining Date</p>
            <input type="text" name="joiningDate" value={employeeData.joiningDate} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Joining Date" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Salary</p>
            <input type="number" name="salary" value={employeeData.salary} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Salary" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Skills</p>
            <input type="text" name="skills" value={employeeData.skills} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Skills" required />
          </div>
          
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Degree</p>
            <input type="text" name="degree"   value={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].degree : ""} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Degree" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>University</p>
            <input type="text" name="university"  value={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].university : ""} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="University" required />
          </div>
          <div className=" items-center text-lg mb-6 md:mb-8">
          <p className='font-bold'>Graduation Year</p>
            <input type="number" name="graduationYear"  value={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].graduationYear : ""} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Graduation Year" required />
          </div>
          <button type="submit" className="border-gray-50 bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployee
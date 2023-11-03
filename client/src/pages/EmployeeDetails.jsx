import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const EmployeeDetails = () => {

  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState([])
  const [imageURL, setImageURL] = useState('')
  useEffect(() => {
    axios.get(`http://localhost:5000/api/employee/${id}`)
      .then((response) => {
        const data = response.data;
        setEmployeeData(data);
        setImageURL(data.image)
        console.log(data.image)
      })
      .catch((error) => {
        console.log("Error fetching employee data:", error);
      });
  }, [id]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      {imageURL && (
        <div className='border-2 border-gray-800  shadow-md w-2/6 m-20 p-5 '>
          <img src={imageURL} alt="emp3" border="0" />
          <div className='mt-5 flex flex-col gap-2'>
            <p ><span className='font-bold'>Name : </span> {employeeData.firstName} {employeeData.lastName}</p>
            <p><span className='font-bold'>Department :</span> {employeeData.department}</p>
            <p><span className='font-bold'>Position : </span>{employeeData.position}</p>
            <p><span className='font-bold'>Salary : </span>{employeeData.salary}</p>
            <p><span className='font-bold'>Email : </span>{employeeData.email}</p>
            <p><span className='font-bold'>Phone : </span>{employeeData.phone}</p>
            <p><span className='font-bold'>Address : </span>{employeeData.address}</p>
            <p><span className='font-bold'>Skills : </span>{employeeData.skills}</p>
            <p><span className='font-bold'>Joining Date : </span>{employeeData.joiningDate}</p>
            <p><span className='font-bold'>Age : </span>{employeeData.age}</p>
            <p><span className='font-bold'>Education</span></p>
            <p><span className='font-bold'>Degree : </span>{employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].degree : ''}</p>
            <p><span className='font-bold'>University : </span> {employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].university : ''}</p>
            <p><span className='font-bold'>Graduation Year : </span>{employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].graduationYear : ''}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeDetails
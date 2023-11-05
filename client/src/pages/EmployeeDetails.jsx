import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import DetailsCard from '../components/DetailsCard';

const EmployeeDetails = () => {

  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/employee/${id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
    })
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
      <DetailsCard image={employeeData.image} firstName={employeeData.firstName} lastName={employeeData.lastName}
        department={employeeData.department} position={employeeData.position} salary={employeeData.salary}
        email={employeeData.email} phone={employeeData.phone} address={employeeData.address}
        skills={employeeData.skills} joiningDate={employeeData.joiningDate} age={employeeData.age}
        degree={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].degree : ''} university={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].university : ''}
        graduationYear={employeeData.education && employeeData.education.length > 0 ? employeeData.education[0].graduationYear : ''}
      />
    </div>
  )
}

export default EmployeeDetails
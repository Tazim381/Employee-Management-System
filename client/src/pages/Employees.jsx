import React, { useEffect, useState } from 'react'

const Employees = () => {
    const[employees,setEmployees] = useState([])

 useEffect(()=>{
    fetch('http://localhost:5000/api/employee')
    .then(response => response.json())
    .then( data => {
        setEmployees(data)
    })
 })
  return (
    <div className='align-middle' >
            <table className='items-center mx-auto m-14'>
                <thead className='bg-gray-300 h-11'>
                    <tr>
                        <th>Name</th>
                        <th className='pl-10'>Age</th>
                        <th className='pl-10'>Position</th>
                        <th className='pl-10'>Phone No</th>
                        <th className='pl-10'>Salary</th>
                        <th className='pl-10'>Update</th>
                        <th className='pl-10'>Delete</th>

                    </tr>
                </thead>
                <tbody >
                {
                employees.map((employee, index) => (
                    <tr>
                        <td className='pl-10'>{employee.firstName} {" "} {employee.lastName}</td>
                        <td className='pl-10'>{employee.age}</td>
                        <td className='pl-10'>{employee.position}</td>
                        <td className='pl-10'>{employee.phone}</td>
                        <td className='pl-10'>{employee.salary}</td>
                       <td  className='pl-10'> <button className="border-2 border-[#61d7a2] ml-8 mt-5" onClick={() => updateProduct(employee._id,employee.firstName, employee.lastName, employee.task)}>Update</button>
                        </td> 
                        <td  className='pl-8'>
                        <button className="border-2 border-red-500 ml-8 mt-5" onClick={() => deleteProduct(employee._id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
                </tbody>

            </table>
           
        </div>
  )
}

export default Employees
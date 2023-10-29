import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employees = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/employee')
            .then(response => response.json())
            .then(data => {
                setEmployees(data)
            })
    },[employees])

    const deleteEmployee = (id) => {
        try {
            axios.delete(`http://localhost:5000/api/employee/${id}`)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log("Delete error:", error);
                });
        } catch (error) {
            console.log("Delete error:", error);
        }
    }    

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
                                <td className='pl-10'> <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/updateEployee/${employee.id}`}>Update</Link></button>
                                </td>
                                <td className='pl-8'>
                                    <button className=" bg-red-800 text-white p-1 px-2 ml-8 mt-5" onClick={() => deleteEmployee(employee.id)}>Delete</button>
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
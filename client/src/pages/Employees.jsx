import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';





const Employees = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const[searchQuery,setSearchQuery] = useState('')
    const[currentPage,setCurrentPage] = useState(1)
    const [employees, setEmployees] = useState([])
    const[someEmployees,setSomeEmployees] = useState([])

    useEffect(() => {
        const isUser = localStorage.getItem('set-token-for-user');
        if (isUser) {
            setIsAuthenticated(true);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        fetch('http://localhost:5000/api/employee')
            .then(response => response.json())
            .then(data => {
                setEmployees(data)
            })
    }, [employees])

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

    const totalEmployees=employees.length;
    const itemsPerPage = 8;
    const totalPages = Math.ceil(totalEmployees/itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/api/employee/someEmployees?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            setSomeEmployees(data);
            console.log(someEmployees)
        }
        fetchData()
    }, [currentPage, itemsPerPage])
   

    return (
        <div className='flex flex-col items-center align-middle' >
        <input
          type="text"
          className="w-3/4  py-2 pl-8 pr-4 rounded-full shadow  appearance-none border-2 mt-5 border-gray-500"
          placeholder="Search Employee By Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
            <table className='items-center mx-auto m-14 '>
                <thead className='bg-gray-300 h-11'>
                    <tr>
                        <th>Name</th>
                        <th className='pl-10'>Age</th>
                        <th className='pl-10'>Position</th>
                        <th className='pl-10'>Phone No</th>
                        <th className='pl-10'>Salary</th>
                        {
                            isAuthenticated && <th className='pl-10'>Update</th>
                        }
                        {
                            isAuthenticated && <th className='pl-10'>Delete</th>
                        }
                    </tr>
                </thead>
                <tbody >
                    {
                        searchQuery? employees.filter(employee => employee.firstName.toLowerCase().includes(searchQuery)).map((employee, index) => (
                            <tr> 
                                <td className='pl-10'>{employee.firstName} {" "} {employee.lastName}</td>
                                <td className='pl-10'>{employee.age}</td>
                                <td className='pl-10'>{employee.position}</td>
                                <td className='pl-10'>{employee.phone}</td>
                                <td className='pl-10 pr-5'>{employee.salary}</td>
                                <td className='pl-10'>
                                    {
                                        isAuthenticated && <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/updateEployee/${employee.id}`}>Update</Link></button>
                                    }
                                </td>
                                <td className='pl-8'>
                                    {
                                        isAuthenticated && <button className=" bg-red-800 text-white p-1 px-2 ml-8 mt-5" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    }
                                </td>     
                            </tr>
                        )
                        ):  someEmployees.map((employee, index) => (
                            <tr>           
                                <td className='pl-10'>{employee.firstName} {" "} {employee.lastName}</td>
                                <td className='pl-10'>{employee.age}</td>
                                <td className='pl-10'>{employee.position}</td>
                                <td className='pl-10'>{employee.phone}</td>
                                <td className='pl-10 pr-5'>{employee.salary}</td>
                                <td className='pl-10'>
                                    {
                                        isAuthenticated && <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/updateEployee/${employee.id}`}>Update</Link></button>
                                    }
                                </td>
                                <td className='pl-8'>
                                    {
                                        isAuthenticated && <button className=" bg-red-800 text-white p-1 px-2 ml-8 mt-5" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    }
                                </td>       
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='mb-10 flex '>
            {
            pageNumbers.map(number => <button key={number}
            className={currentPage === number+1 ? ' bg-gray-800 text-white px-4 py-2':'px-4 py-2 bg-slate-400 text-white'}
            onClick={()=>setCurrentPage(number+1)}
            >{number+1}</button>)
           }
            </div>
        </div>
    )
}

export default Employees
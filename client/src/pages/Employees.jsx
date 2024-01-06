import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'


const Employees = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [employees, setEmployees] = useState([])
    const [someEmployees, setSomeEmployees] = useState([])
    const [positionFlag, setPositionFlag] = useState(false)
    const [positionFilter, setPositionFilter] = useState('')
    const [departmentFlag, setDepartmentFlag] = useState(false)
    const [departmentFilter, setDepartmentFilter] = useState('')
    useEffect(() => {
        const isUser = localStorage.getItem('set-token-for-user');
        if (isUser) {
            setIsAuthenticated(true);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        fetch('https://tazim-1234.vercel.app/api/employee',{
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
          })
            .then(response => response.json())
            .then(data => {
                setEmployees(data)
            })
    }, [employees])

    const deleteEmployee = (id) => {
        try {
            axios.delete(`https://tazim-1234.vercel.app/api/employee/${id}`,{
                method: 'DELETE',
                headers: {
                  authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
                }
              })
                .then((res) => {
                    window.location.reload()
                    console.log(res);
                })
                .catch((error) => {
                    console.log("Delete error:", error);
                });
        } catch (error) {
            console.log("Delete error:", error);
        }
    }

    const totalEmployees = employees.length;
    //console.log(totalEmployees)
    const itemsPerPage = 8;
    const totalPages = Math.ceil(totalEmployees / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://tazim-1234.vercel.app/api/employee/someEmployees?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            setSomeEmployees(data);
           // console.log(someEmployees)
        }
        fetchData()
    }, [currentPage, itemsPerPage])


    const handlePositionFlag = () => {
        setPositionFlag(!positionFlag)
    }


    return (
<>
<motion.div animate={{ x: 0 }}
        initial={{ x: 1000 }} 
        exit={{ x: -1000 }}  className='flex flex-col items-center align-middle min-h-screen' >
            <input
                type="text"
                className="w-3/4  py-2 pl-8 pr-4 rounded-full shadow  appearance-none border-2 mt-5 border-gray-500"
                placeholder="Search Employee By Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className='items-center max-w-full  table-fixed mx-14 mt-14 mr-14 mb-14'>
                <thead className='bg-gray-300 h-11'>
                    <tr>
                        <th className=''>Name</th>
                        <th className=''>Age</th>
                        <th className='w-1/4'>
                            <div className=' flex items-center flex-col'><div>Position <button onClick={() => handlePositionFlag()}><FontAwesomeIcon icon={faFilter} /> </button></div>
                                {
                                    positionFlag && <input value={positionFilter}
                                        onChange={(e) => setPositionFilter(e.target.value)} className='border-1 border-gray-700 rounded-md' placeholder='enter position' />
                                }
                            </div>
                        </th>
                        <th className=' w-2/12'>
                            <div className=' flex items-center flex-col'><div>Department <button onClick={() => setDepartmentFlag(!departmentFlag)}><FontAwesomeIcon icon={faFilter} /> </button></div>
                                {
                                    departmentFlag && <input value={departmentFilter}
                                        onChange={(e) => setDepartmentFilter(e.target.value)} className='border-1 border-gray-700 rounded-md' placeholder='enter position' />
                                }
                            </div>
                        </th>
                        <th className=''>Salary</th>
                        {
                            isAuthenticated && <th className=''>Update</th>
                        }
                        {
                            isAuthenticated && <th className=''>Delete</th>
                        }
                        {
                            isAuthenticated && <th className=''>Details</th>
                        }
                    </tr>
                </thead>
                <tbody >
                    {
                        searchQuery || positionFlag || departmentFlag ? employees.filter(employee => employee.firstName.toLowerCase().includes(searchQuery.toLowerCase())
                            &&
                            (!positionFilter || employee.position.toLowerCase().includes(positionFilter.toLowerCase()))
                            &&
                            (!departmentFilter || employee.department.toLowerCase().includes(departmentFilter.toLowerCase()))).map((employee, index) => (
                                <tr className='bg-gray-100'>
                                    <td className='border px-4 py-2'>{employee.firstName} {" "} {employee.lastName}</td>
                                    <td className=' border px-4 py-2'>{employee.age}</td>
                                    <td className='border px-4 py-2'>{employee.position}</td>
                                    <td className=' border px-4 py-2'>{employee.department}</td>
                                    <td className=' pr-5 border px-4 py-2'>{employee.salary}</td>
                                    { isAuthenticated && 
                                    <td className=' border px-4 py-2'>
                                        {
                                            isAuthenticated && <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/updateEployee/${employee.id}`}>Update</Link></button>
                                        }
                                    </td>
                                    }
                                    { isAuthenticated && 
                                    <td className='border px-4 py-2'>
                                        {
                                            isAuthenticated && <button className=" bg-red-800 text-white p-1 px-2 ml-8 mt-5" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        }
                                    </td>
                                    }
                                    { isAuthenticated && 
                                    <td className=' border px-4 py-2'>
                                        {
                                            isAuthenticated && <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/details/${employee.id}`}>Details</Link></button>
                                        }
                                    </td>
                                    }
                                </tr>
                            )
                            ) : someEmployees.map((employee, index) => (
                                <tr className='bg-gray-100'>
                                    <td className=' border px-4 py-2'>{employee.firstName} {" "} {employee.lastName}</td>
                                    <td className=' border px-4 py-2'>{employee.age}</td>
                                    <td className=' border px-4 py-2'>{employee.position}</td>
                                    <td className=' border px-4 py-2'>{employee.department}</td>
                                    <td className='  border px-4 py-2' >{employee.salary}</td>
                                    {
                                        isAuthenticated &&
                                    
                                    <td className=' border px-4 py-2'>
                                        {
                                            isAuthenticated && <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/updateEployee/${employee.id}`}>Update</Link></button>
                                        }
                                    </td>
                                    }
                                   {
                                    isAuthenticated &&
                                   
                                    <td className=' border px-4 py-2'>
                                        {
                                            isAuthenticated && <button className=" bg-red-800 text-white p-1 px-2 ml-8 mt-5" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        }
                                    </td>
                                    }

                                    {
                                        isAuthenticated &&
                                    
                                    <td className=' border px-4 py-2'>
                                        {
                                            isAuthenticated && <button className=" bg-green-800 text-white p-1 px-2 ml-8 mt-5"><Link to={`/details/${employee.id}`}>Details</Link></button>
                                        }
                                    </td>
                                    }
                                </tr>
                            ))
                    }
                </tbody>
            </table>
            <div className='mb-10 flex '>
                {
                    pageNumbers.map(number => <button key={number}
                        className={currentPage === number + 1 ? ' bg-gray-800 text-white px-4 py-2' : 'px-4 py-2 bg-slate-400 text-white'}
                        onClick={() => setCurrentPage(number + 1)}
                    >{number + 1}</button>)
                }
            </div>
        </motion.div>
       
</>
    )
}

export default Employees
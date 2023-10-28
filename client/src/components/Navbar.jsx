import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/employee.jpg'
const Navbar = () => {
 const navigate = useNavigate()
  return (
    <div className='items-center bg-gradient-to-b from-gray-700 to-gray-900 text-white flex justify-between h-20 pl-10 pr-10 text-xl'>
        <div className='flex gap-2'>
            <img src={image} className='h-10 w-10 rounded'/>
            <p className='text-2xl'>Employee Management</p>
        </div>
        <div className='flex gap-10'>
        <button onClick={() => navigate("/")} className='border-red-300'>Home</button>
        <button onClick={() => navigate("/employees")}>Employees</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <div className='flex'>
        <button onClick={() => navigate("/login")} className='bg-slate-600 px-3 py-2 rounded'>Login</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
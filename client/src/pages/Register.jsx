import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate()
    
const handleSubmit=(event) =>{
    event.preventDefault()
    const form = event.target;
    axios.post('http://localhost:5000/api/admin/register', {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    })
    .then((response)=> {
      alert("Registration successfull")
      navigate("/")
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    });
}

  return (
         <div className=" bg-slate-400 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl border-green-900 ">
    
      <form className="p-8" onSubmit={handleSubmit}>
      <div className="flex items-center text-lg mb-6 md:mb-8"> 
        <input type="text" name="username" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8"> 
        <input type="text" name="email" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type="password" name="password" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
      </div>
      <button type ="submit" className="border-gray-50 bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Register</button>
    </form>
  </div>
 </div>
  )
}

export default Register
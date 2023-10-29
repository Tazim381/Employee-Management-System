import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
   
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        try {
           const response = await axios.post('http://localhost:5000/api/admin/login/', {
            email: form.email.value,
            password: form.password.value,
          });
          console.log(form.email.value)
          localStorage.setItem('set-token-for-user', response.data);
          alert("login successfull")
          form.reset();
          navigate("/");
          window.location.reload()
        } catch (error) {
          console.log(error);
          alert("email or password wrong")
        }
      };

    return (
           <div className=" bg-slate-400 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl border-green-900 ">
    
      <form className="p-8" onSubmit={handleSubmit}>
      <div className="flex items-center text-lg mb-6 md:mb-8"> 
        <input type="text" name="email" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type="password" name="password" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
      </div>
      <button type ="submit" className="border-gray-50 bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Login</button>
      <div className='mt-10 text-right'>
       <p>Don't hava account ? <Link to="/register" className='text-xl font-bold '>Register</Link></p>
       </div>
    </form>
  </div>
 </div>
    );
};

export default Login;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/employee.jpg';
import Sidebar from './Sidebar';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminProfile, setAdminProfile] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const isUser = localStorage.getItem('set-token-for-user');
    if (isUser) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/profile", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
    })
      .then(response => response.json())
      .then(data => {
        setAdminProfile(data)
      }
      )
  }, [isAuthenticated])



  const handleLogout = () => {
    localStorage.removeItem('set-token-for-user');
    setIsAuthenticated(false);
    setAdminProfile('');
    alert('Logged out successfully');
    window.location.reload();
  };

 
  return (
    <div className='items-center  dark:bg-gray-900 text-gray-100 flex justify-between h-20 pl-10 pr-10 text-xl'>
      <div className='flex gap-2'>
        <img src={image} className="h-10 w-10 rounded hidden sm:block" />
        <p className="font-bold text-3xl">
          <span className="hidden sm:inline">Employee</span> <span className="text-orange-400 hidden sm:inline">Management</span>
          <span className="inline sm:hidden ">E<span className='text-orange-400'>M</span></span>
        </p>      </div>
      <div className='flex gap-10 '>
        <button onClick={() => navigate('/')} className='border-red-300'>
          Home
        </button>
        <button onClick={() => navigate('/employees')}>Employees</button>
       
        {isAuthenticated && (
          <div className='relative group'>
            <button onClick={() => setShowSidebar(!showSidebar)} className='bg-slate-600 px-3 py-2 rounded'>
              {adminProfile.username || 'User'}
            </button>
            {showSidebar && (
               <Sidebar isSidebar={showSidebar} handleLogout={handleLogout} />
            )}
          </div>
        )}
        {!isAuthenticated ? (
          <button onClick={() => navigate('/login')} className='bg-slate-600 px-3 py-2 rounded'>
            Login
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

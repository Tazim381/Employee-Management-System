import React from 'react';

export const Auth = () => {
  const isAuthenticated = () => {
    const isUser = localStorage.getItem('set-token-for-user');
    return !!isUser; // Convert to a boolean
  };

  const onLogout = () => {
    localStorage.removeItem('set-token-for-user');
    alert('Logout Successfully');
    window.location.reload()
  };

  return {
    isAuthenticated,
    onLogout,
  };
};

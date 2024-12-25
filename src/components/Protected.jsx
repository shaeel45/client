import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const token = localStorage.getItem('token');

  // Redirect to login if not authenticated
  if (!token) {
    return <Navigate to="/login-form" replace />;
  }

  // Render children if authenticated
  return children;
};

export default Protected;

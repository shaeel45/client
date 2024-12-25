import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to login
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  
      // If login is successful
      localStorage.setItem('token', data.token);
      toast.success('Login successful!');
      navigate('/add-header'); // Redirect to Dashboard
    } catch (err) {
      // Handle error
      toast.error(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };
  

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
  
    // If the token is not present, redirect to login page
    if (!token) {
      return <Navigate to="/" replace />;
    }
  
    // If the token is present, render the children components
    return children;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <ToastContainer />
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup-form" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

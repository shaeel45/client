import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      toast.success('Sign Up successful!');
      navigate('/login-form'); // Redirect to Login
    } catch (err) {
      toast.error(err.response?.data?.message || 'Sign Up failed. Please try again.');
    }
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
             
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              
              onChange={(e) =>setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              
              onChange={(e) =>setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
          <ToastContainer/>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <Link to="/login-form" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup

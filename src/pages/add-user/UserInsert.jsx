import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserInsert = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
    
    const HandleName = (e) => {
      const { value } = e.target;
      setName(value);
    };
  
    const HandleEmail = (e) => {
      const { value } = e.target;
      setEmail(value);
    };

    const handlePassword = (e) => {
        const { value } = e.target;
      setPassword(value);
    };
  
    // Insert Mission
    const addMissionData = async (e) => {
      e.preventDefault();
  
      var formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const res = await axios.post(
          "http://localhost:5000/api/user/insert-user",
          formData,
          config
        );
        if (!res.data.status === 401 || !res.data) {
          console.error("Error");
        } else {
          navigate("/add-user");
        }
      } catch (error) {
        console.error("Error submitting form:", error.response || error.message);
      }
    };

  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="grow">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Dashboard actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                Users
              </h1>
            </div>
          </div>

          <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
            <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
              <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                Insert User
              </h2>
            </header>
            <div className="p-3">
              {/* Form */}
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={HandleName}
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter the Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                  type="email"
                    id="email"
                    name="email"
                    onChange={HandleEmail}
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter the Email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                  type="password"
                    id="password"
                    name="password"
                    onChange={handlePassword}
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter the Password"
                    required
                  />
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={addMissionData}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default UserInsert

import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PhoneInsert = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [phoneHeading, setPhoneHeading] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneImage, setPhoneImage] = useState(null);
  
    const navigate = useNavigate();
  
    const HandlePhoneHeading = (e) => {
        const { value } = e.target;
        setPhoneHeading(value);
      };
      const HandlePhone = (e) => {
        const { value } = e.target;
        setPhone(value);
      };
      const handlePhoneImage = (e) => {
        setPhoneImage(e.target.files[0]);
      };
  
    // Insert Mission
    const addMissionData = async (e) => {
      e.preventDefault();
  
      var formData = new FormData();
      formData.append("phoneHeading", phoneHeading);
    formData.append("phone", phone);
    formData.append("phoneImage", phoneImage);
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
  
      try {
        const res = await axios.post(
          "http://localhost:5000/api/contact/insert-phone",
          formData,
          config
        );
        if (!res.data.status === 401 || !res.data) {
          console.error("Error");
        } else {
          navigate("/add-phone");
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
                Mission Section
              </h1>
            </div>
          </div>

          <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
            <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
              <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                Insert Mission
              </h2>
            </header>
            <div className="p-3">
              {/* Form */}
              <form>
                <div className="mb-4 mt-4">
                    <label
                      htmlFor="phoneHeading"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Heading for Phone Card
                    </label>
                    <input
                      type="text"
                      id="phoneHeading"
                      name="phoneHeading"
                      onChange={HandlePhoneHeading}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Heading for Phone Card"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      onChange={HandlePhone}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Phone"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phoneImage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Image for Phone Card
                    </label>
                    <input
                      type="file"
                      id="phoneImage"
                      name="phoneImage"
                      onChange={handlePhoneImage}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

export default PhoneInsert

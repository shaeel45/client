import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactInsert = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [emailHeading, setEmailHeading] = useState("");
  const [email, setEmail] = useState("");
  const [emailImage, setEmailImage] = useState(null);

  const HandleEmailHeading = (e) => {
    const { value } = e.target;
    setEmailHeading(value);
  };
  const HandleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleEmailImage = (e) => {
    setEmailImage(e.target.files[0]);
  };


  const navigate = useNavigate();

  // Insert Mission
  const addMissionData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("emailHeading", emailHeading);
    formData.append("email", email);
    formData.append("emailImage", emailImage);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact/insert-contact",
        formData,
        config
      );
      if (!res.data.status === 401 || !res.data) {
        console.error("Error");
      } else {
        navigate("/add-contact");
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
                  Contact Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Email Card
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="emailHeading"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Heading for Email Card
                    </label>
                    <input
                      type="text"
                      id="emailHeading"
                      name="emailHeading"
                      onChange={HandleEmailHeading}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Heading for Email Card"
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
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="emailImage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Image for Email Card
                    </label>
                    <input
                      type="file"
                      id="emailImage"
                      name="emailImage"
                      onChange={handleEmailImage}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  

                  {/* <div className="mb-4 mt-4">
                    <label
                      htmlFor="addressHeading"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Heading for Address Card
                    </label>
                    <input
                      type="text"
                      id="addressHeading"
                      name="addressHeading"
                      onChange={HandleAddressHeading}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Heading for Address Card"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Address
                    </label>
                    <input
                      type="address"
                      id="address"
                      name="address"
                      onChange={HandleAddress}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Address"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="addressImage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Image for Address Card
                    </label>
                    <input
                      type="file"
                      id="addressImage"
                      name="addressImage"
                      onChange={handleAddressImage}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div> */}

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
  );
};

export default ContactInsert;

import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TextEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    heading: "",
    desc: "",
    firstPoint: "",
    secondPoint: "",
    thirdPoint: "",
  });
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const fetchText = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/text/get-text/${id}`
      );
      const { heading, desc, firstPoint, secondPoint, thirdPoint } = res.data.text;
      setFormData({ heading, desc, firstPoint, secondPoint, thirdPoint });

    } catch (error) {
      console.error("Error fetching data:", error.response || error.message);
    }
  };

  useEffect(() => {
    fetchText();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("heading", formData.heading);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("firstPoint", formData.firstPoint);
    formDataToSend.append("secondPoint", formData.secondPoint);
    formDataToSend.append("thirdPoint", formData.thirdPoint);

    try {
      await axios.put(
        `http://localhost:5000/api/text/get-text/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "application/json" }, // Important for file upload
        }
      );
      navigate("/add-text");
    } catch (error) {
      console.error("Error updating data:", error.response || error.message);
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
                  Text Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Edit Text
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="heading"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Heading
                    </label>
                    <input
                      type="text"
                      name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Heading"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="desc"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Description
                    </label>
                    <textarea
                      name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Description"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="firstPoint"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      First Point
                    </label>
                    <input
                      type="text"
                      name="firstPoint"
                        value={formData.firstPoint}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter First Point"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="secondPoint"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Second Point
                    </label>
                    <input
                      type="text"
                      name="secondPoint"
                        value={formData.secondPoint}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Second Point (Optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="thirdPoint"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Third Point
                    </label>
                    <input
                      type="text"
                      name="thirdPoint"
                        value={formData.thirdPoint}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Third Point (Optianal)"
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default TextEdit;

import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TextInsert = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [firstPoint, setFirstPoint] = useState("");
  const [secondPoint, setSecondPoint] = useState("");
  const [thirdPoint, setThirdPoint] = useState("");

  const navigate = useNavigate();

  const HandleHeading = (e) => {
    const { value } = e.target;
    setHeading(value);
  };
  const HandleDesc = (e) => {
    const { value } = e.target;
    setDesc(value);
  };
  const HandleFirstPoint = (e) => {
    const { value } = e.target;
    setFirstPoint(value);
  };
  const HandleSecondPoint = (e) => {
    const { value } = e.target;
    setSecondPoint(value);
  };
  const HandleThirdPoint = (e) => {
    const { value } = e.target;
    setThirdPoint(value);
  };

  // Insert text
  const addTextData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("heading", heading);
    formData.append("desc", desc);
    formData.append("firstPoint", firstPoint);
    formData.append("secondPoint", secondPoint);
    formData.append("thirdPoint", thirdPoint);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/text/insert-text",
        formData,
        config
      );
      if (!res.data.status === 401 || !res.data) {
        console.error("Error");
      } else {
        navigate("/add-text");
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
                  Text Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Insert Text
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="heading"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Heading
                    </label>
                    <input
                      type="text"
                      id="heading"
                      name="heading"
                        onChange={HandleHeading}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the heading"
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
                      id="desc"
                      name="desc"
                        onChange={HandleDesc}
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the description"
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
                      id="firstPoint"
                      name="firstPoint"
                        onChange={HandleFirstPoint}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the First Point"
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
                      id="secondPoint"
                      name="secondPoint"
                        onChange={HandleSecondPoint}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Second Point (optional)"
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
                      id="thirdPoint"
                      name="thirdPoint"
                        onChange={HandleThirdPoint}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Third Point (optional)"
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={addTextData}
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

export default TextInsert;

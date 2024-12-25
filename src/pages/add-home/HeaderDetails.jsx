import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

const HeaderDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams(); // Extract ID from URL
  const [headerData, setHeaderData] = useState(null);

  const fetchHeaderDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/home/get-header/${id}`
      );
      setHeaderData(res.data.header);
    } catch (error) {
      console.error("Error fetching header details:", error);
    }
  };

  useEffect(() => {
    fetchHeaderDetails();
  }, [id]);

  if (!headerData) {
    return <p>Loading...</p>;
  }

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
                  Header Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Full Details
                </h2>
              </header>
              <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto text-center">

                  {/* Image Section */}
                  <div className="flex justify-center mb-8">
                    <img
                      src={`http://localhost:5000/public/Home/${headerData.imgPath}`}
                      alt={headerData.title}
                      className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Title Section */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold">Title</h2>
                    <p className="pt-2 text-gray-700 dark:text-gray-300">
                      {headerData.title}
                    </p>
                  </div>

                  {/* Description Section */}
                  <div>
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="pt-2 text-gray-700 dark:text-gray-300">
                      {headerData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeaderDetails;

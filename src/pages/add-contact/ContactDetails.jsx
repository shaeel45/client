import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContactDetails = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { id } = useParams(); // Extract ID from URL
    const [missionData, setMissionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchMissionDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/contact/get-contact/${id}`
        );
        setMissionData(res.data.mission); // Ensure this matches your API response structure
      } catch (err) {
        console.error("Error fetching mission details:", err);
        setError("Failed to load mission details.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchMissionDetails();
    }, [id]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!missionData) return <p>No data available.</p>;
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
                Email Card
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
              <div className="overflow-x-auto">
                <div className="flex justify-center mb-8">
                  <img
                    src={`http://localhost:5000/Contact/${missionData.emailImage}`}
                    alt={missionData.emailHeading}
                    className="w-52 h-52 rounded-full shadow-lg object-cover"
                  />
                </div>
                <h1 className="text-4xl pt-5">Heading</h1>
                <p className="pt-5">{missionData.emailHeading}</p>
                <h1 className="text-4xl pt-10">Description</h1>
                <div className="pt-5">
                  <p>
                      {missionData.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default ContactDetails

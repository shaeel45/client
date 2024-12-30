import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const MessageDetails = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { id } = useParams(); // Extract ID from URL
    const [messageData, setMessageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTextDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/message/get-message/${id}`
        );
        setMessageData(res.data.message); // Ensure this matches your API response structure
      } catch (err) {
        console.error("Error fetching message details:", err);
        setError("Failed to load message details.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTextDetails();
    }, [id]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!messageData) return <p>No data available.</p>;

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
                  Users Message
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
                  <h1 className="text-4xl pt-5">Name</h1>
                  <p className="pt-5">{messageData.name}</p>
                  <h1 className="text-4xl pt-10">Email</h1>
                  <div className="pt-5">
                    <p>{messageData.email}</p>
                  </div>
                  <h1 className="text-4xl pt-10">Phone</h1>
                  <div className="pt-5">
                    <p>{messageData.phone}</p>
                  </div>
                  <h1 className="text-4xl pt-10">Subject</h1>
                  <div className="pt-5">
                    <p>{messageData.subject ? messageData.subject : "Not Inserted"}</p>
                  </div>
                  <h1 className="text-4xl pt-10">Message</h1>
                  <div className="pt-5">
                    <p>{messageData.message}</p>
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

export default MessageDetails

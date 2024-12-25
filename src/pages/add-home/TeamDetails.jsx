import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const TeamDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                <div className="overflow-x-auto">
                  <h1 className="text-4xl pt-5">Full Name</h1>
                  <p className="pt-5">Shahriar Muhammad</p>
                  <h1 className="text-4xl pt-10">Position</h1>
                  <p className="pt-5">CEO & Founder</p>

                  <h1 className="text-4xl pt-10">Social Media Links</h1>
                  <div className="flex justify-around items-center pt-5">
                    <div className="flex gap-5">
                      <p className="pt-1">
                        <FaInstagramSquare />
                      </p>
                      <p>shahriarmuhammad1234</p>
                    </div>
                    <div className="flex gap-5">
                      <p className="pt-1">
                        <FaFacebookSquare />
                      </p>
                      <p>shahriarmuhammad1234</p>
                    </div>
                    <div className="flex gap-5">
                      <p className="pt-1">
                        <FaLinkedin />
                      </p>
                      <p>shahriarmuhammad1234</p>
                    </div>
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

export default TeamDetails;

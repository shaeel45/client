import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TeamEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    teamMemberName: "",
    teamMemberPosition: "",
    teamMemberInsta: "",
    teamMemberFacebook: "",
    teamMemberLinkedin: "",
    teamMemberImage: null,
  });
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Fetch data for the selected ID
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/home/get-team/${id}`
        );
        const {
          teamMemberName,
          teamMemberPosition,
          teamMemberInsta,
          teamMemberFacebook,
          teamMemberLinkedin,
        } = res.data.team;
        setFormData({
          teamMemberName,
          teamMemberPosition,
          teamMemberInsta,
          teamMemberFacebook,
          teamMemberLinkedin,
        });
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message);
      }
    };
    fetchTeam();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    //console.log("Selected file:", file); // Debug log
    setFormData((prev) => ({ ...prev, teamMemberImage : file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("teamMemberName", formData.teamMemberName);
    formDataToSend.append("teamMemberPosition", formData.teamMemberPosition);
    formDataToSend.append("teamMemberInsta", formData.teamMemberInsta);
    formDataToSend.append("teamMemberFacebook", formData.teamMemberFacebook);
    formDataToSend.append("teamMemberLinkedin", formData.teamMemberLinkedin);
  
    if (formData.teamMemberImage) {
      formDataToSend.append("teamMemberImage", formData.teamMemberImage); // Include the new image
    }
  
    // console.log(formData.title); 
    // console.log(formData.description); 
    // console.log(formData.image); 
    try {
      await axios.put(
        `http://localhost:5000/api/home/get-team/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Important for file upload
        }
      );
      navigate("/add-team");
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
                  Header Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Edit Header
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="teamMemberName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="teamMemberName"
                      value={formData.teamMemberName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="teamMemberPosition"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="teamMemberPosition"
                      value={formData.teamMemberPosition}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter position"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="teamMemberInsta"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Instagram
                    </label>
                    <input
                      type="text"
                      name="teamMemberInsta"
                      value={formData.teamMemberInsta}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="username (optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="teamMemberFacebook"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Facebook
                    </label>
                    <input
                      type="text"
                      name="teamMemberFacebook"
                      value={formData.teamMemberFacebook}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="username (optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="teamMemberLinkedin"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      name="teamMemberLinkedin"
                      value={formData.teamMemberLinkedin}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="username (optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      name="teamMemberImage"
                      onChange={handleFileChange}
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

export default TeamEdit;

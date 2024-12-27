import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeamInsert = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [insta, setInsta] = useState("");
    const [facebook, setFacebook] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [teamImage, setteamImage] = useState(null);

    const handleImage = (e) => {
      setteamImage(e.target.files[0]);
    };
    const handleName = (e) => {
      const { value } = e.target;
      setName(value);
    };
    const handlPosition = (e) => {
      const { value } = e.target;
      setPosition(value);
    };
    const handlInstagram = (e) => {
      const { value } = e.target;
      setInsta(value);
    };
    const handlFacebook = (e) => {
      const { value } = e.target;
      setFacebook(value);
    };
    const handlLinkedin = (e) => {
      const { value } = e.target;
      setLinkedin(value);
    };

    const navigate = useNavigate();

    // add Team
  const addTeamData = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !position || !teamImage) {
      alert("Please fill all required fields");
      return;
    };

    var formData = new FormData();
    formData.append("teamMemberName", name);
    formData.append("teamMemberPosition", position);
    formData.append("teamMemberInsta", insta);
    formData.append("teamMemberFacebook", facebook);
    formData.append("teamMemberLinkedin", linkedin);
    formData.append("teamMemberImage", teamImage);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/home/insert-team",
        formData,
        config
      );
      if (!res.data.status === 401 || !res.data) {
        console.error("Error");
      }else{
        navigate("/add-team")
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
                  Header Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Insert Team
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
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleName}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="positon"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      onChange={handlPosition}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter position"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="insta"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Instagram
                    </label>
                    <input
                      type="text"
                      id="insta"
                      name="insta"
                      onChange={handlInstagram}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="username (optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Facebook
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      onChange={handlFacebook}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="username (optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      onChange={handlLinkedin}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="username (optional)"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImage}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={addTeamData}
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

export default TeamInsert

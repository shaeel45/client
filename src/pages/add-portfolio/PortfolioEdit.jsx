import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PortfolioEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    niche: "",
    link: "",
    heading: "",
    paragraph: "",
    image: null,
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
          `http://localhost:5000/api/portfolio/get-portfolio/${id}`
        );
        const { name, niche, link, heading, paragraph } = res.data.portfolio;
        setFormData({ name, niche, link, heading, paragraph });
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
    setFormData((prev) => ({ ...prev, image : file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("niche", formData.niche);
    formDataToSend.append("link", formData.link);
    formDataToSend.append("heading", formData.heading);
    formDataToSend.append("paragraph", formData.paragraph);
  
    if (formData.image) {
      formDataToSend.append("image", formData.image); // Include the new image
    }

    try {
      await axios.put(
        `http://localhost:5000/api/portfolio/get-portfolio/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Important for file upload
        }
      );
      navigate("/add-portfolio");
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
                  Portfolio Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Edit Portfolio
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Portfolio
                    </label>
                    <input
                      type="text"
                      name="name"
                        value={formData.name}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Portfolio"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="niche"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Niche
                    </label>
                    <input
                      type="text"
                      name="niche"
                        value={formData.niche}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Portfolio"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="link"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Link
                    </label>
                    <input
                      type="text"
                      name="link"
                        value={formData.link}
                        onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Portfolio"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                        onChange={handleFileChange}
                    />
                  </div>

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
                      placeholder="Enter Portfolio"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="paragraph"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Paragraph
                    </label>
                    <textarea
                      name="paragraph"
                        value={formData.paragraph}
                        onChange={handleChange}
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter paragraph"
                    ></textarea>
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

export default PortfolioEdit;

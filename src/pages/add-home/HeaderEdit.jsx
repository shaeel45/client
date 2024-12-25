import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const HeaderEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
    const fetchHeader = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/home/get-header/${id}`);
        const { title, description } = res.data.header;
        setFormData({ title, description });
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message);
      }
    };
    fetchHeader();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.image) formDataToSend.append("image", formData.image);

    try {
      await axios.put(
        `http://localhost:5000/api/home/${id}`,
        formDataToSend,
        config
      );
      navigate("/add-header"); // Navigate back to the previous page
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
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <input type="file" onChange={handleFileChange} />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white"
              >
                Save Changes
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeaderEdit;

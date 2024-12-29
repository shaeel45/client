import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BlogEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    postedBy: "",
    likes: "",
    views: "",
    date: "",
    image: null,
  });
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/blog/get-blog/${id}`
      );
      const { title, desc, postedBy, likes, views, date, image } = res.data.blog;
      setFormData({ title, desc, postedBy, likes, views, date, image });
    } catch (error) {
      console.error("Error fetching data:", error.response || error.message);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("postedBy", formData.postedBy);
    formDataToSend.append("likes", formData.likes);
    formDataToSend.append("views", formData.views);
    formDataToSend.append("date", formData.desc);

    if (formData.image) {
      formDataToSend.append("image", formData.image); // Include the new image
    }
    
    try {
      await axios.put(
        `http://localhost:5000/api/blog/get-blog/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Important for file upload
        }
      );
      navigate("/add-blog");
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
                  Blog Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Edit Blog
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Title"
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
                      placeholder="Enter description"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="postedBy"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Posted By
                    </label>
                    <input
                      type="text"
                      name="postedBy"
                      value={formData.postedBy}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Posted By"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="likes"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Likes
                    </label>
                    <input
                      type="text"
                      name="likes"
                      value={formData.likes}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Likes"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="views"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Views
                    </label>
                    <input
                      type="text"
                      name="views"
                      value={formData.views}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Views"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Date
                    </label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter <Dir></Dir>ate"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      image
                    </label>
                    <input
                      type="file"
                      name="image"
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
  )
}

export default BlogEdit

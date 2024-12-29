import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogInsert = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [likes, setLikes] = useState("");
  const [views, setViews] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const HandleTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const HandleDesc = (e) => {
    const { value } = e.target;
    setDesc(value);
  };
  const HandlePostedBy = (e) => {
    const { value } = e.target;
    setPostedBy(value);
  };
  const HandleLikes = (e) => {
    const { value } = e.target;
    setLikes(value);
  };
  const HandleViews = (e) => {
    const { value } = e.target;
    setViews(value);
  };
  const HandleDate = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  // Insert Blog
  const addBlogData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("postedBy", postedBy);
    formData.append("likes", likes);
    formData.append("views", views);
    formData.append("date", date);
    formData.append("image", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/blog/insert-blog",
        formData,
        config
      );
      if (!res.data.status === 401 || !res.data) {
        console.error("Error");
      } else {
        navigate("/add-blog");
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
                  Blog Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Insert Blog
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      onChange={HandleTitle}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Title"
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
                      htmlFor="postedBy"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Posted By
                    </label>
                    <input
                      type="text"
                      id="postedBy"
                      name="postedBy"
                      onChange={HandlePostedBy}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Posted By"
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
                      id="likes"
                      name="likes"
                      onChange={HandleLikes}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Likes"
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
                      id="views"
                      name="views"
                      onChange={HandleViews}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Views"
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
                      id="date"
                      name="date"
                      onChange={HandleDate}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the Date"
                      required
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
                        onChange={handleImageChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={addBlogData}
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

export default BlogInsert;

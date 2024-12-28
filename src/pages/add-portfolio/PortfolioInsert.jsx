import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PortfolioInsert = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

    const [name, setName] = useState("");
    const [niche, setNiche] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState(null);
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");
  
    const navigate = useNavigate();

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const HandlePortfolio = (e) => {
      const { value } = e.target;
      setName(value);
    };
  
    const HandleNiche = (e) => {
      const { value } = e.target;
      setNiche(value);
    };

    const HandleLink = (e) => {
      const { value } = e.target;
      setLink(value);
    };
  
    const HandleHeading = (e) => {
      const { value } = e.target;
      setHeading(value);
    };

    const HandleParagraph = (e) => {
      const { value } = e.target;
      setParagraph(value);
    };

    // Insert Portfolio
  const addPortfolioData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("name", name);
    formData.append("niche", niche);
    formData.append("link", link);
    formData.append("heading", heading);
    formData.append("paragraph", paragraph);
    formData.append("image", image);

    console.log({ name, niche, link, heading, paragraph, image });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/portfolio/insert-portfolio",
        formData,
        config
      );
      if (!res.data.status === 401 || !res.data) {
        console.error("Error");
      } else {
        navigate("/add-portfolio");
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
                Portfolio Section
                </h1>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-900 shadow-sm rounded-xl">
              <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  Insert Portfolio
                </h2>
              </header>
              <div className="p-3">
                {/* Form */}
                <form onSubmit={addPortfolioData}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Portfolio
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={HandlePortfolio}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the portfolio"
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
                      id="niche"
                      name="niche"
                      onChange={HandleNiche}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter portfolio niche"
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
                      id="link"
                      name="link"
                      onChange={HandleLink}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter portfolio link"
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
                      required
                      onChange={handleImageChange}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="heading"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Section Heading
                    </label>
                    <input
                      type="text"
                      id="heading"
                      name="heading"
                      onChange={HandleHeading}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the heading for section (Optional)"
                      
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="paragraph"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Portfolio
                    </label>
                    <textarea
                      type="text"
                      id="paragraph"
                      name="paragraph"
                      onChange={HandleParagraph}
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the paragraph for section (Optional)"
                      
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      // onClick={addPortfolioData}
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

export default PortfolioInsert


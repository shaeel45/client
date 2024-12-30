import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { CgDetailsMore } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Message = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
  
    const [messageData, setMessage] = useState([]);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const getTextData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/message/get-message",
          config
        );
        if (!res.data.status === 401 || !res.data) {
          console.error("Error");
        } else {
            setMessage(res.data.getMessage);
        }
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message);
      }
    };
  
    const deleteText = async (id) => {
      try {
        const res = await axios.delete(
          `http://localhost:5000/api/message/get-message/${id}`,
          config
        );
        if (!res.data.status === 401 || !res.data) {
          console.error("Error");
        } else {
          setIsModalOpen(false);
          setDeleteItem(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message);
      }
    };
  
    useEffect(() => {
      getTextData();
    }, [deleteText]);
  
    const handleDeleteClick = (itemId) => {
      setDeleteItem(itemId);
      setIsModalOpen(true);
    };
  
    const handleConfirmDelete = async () => {
      if (deleteItem) {
        await deleteText(deleteItem);
        getTextData(); // Refresh header data after delete
      }
      setIsModalOpen(false);
      setDeleteItem(null);
    };
  
    const handleCancelDelete = () => {
      setIsModalOpen(false);
      setDeleteItem(null);
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
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  User Messages
                </h1>
              </div>
            </div>

            {/* Add Content Button */}

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
              <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full dark:text-gray-300">
                    {/* Table header */}
                    <thead className="text-sm uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
                      <tr>
                        <th className="p-2 w-1/6">
                          {/* Title column */}
                          <div className="font-semibold text-left">Name</div>
                        </th>
                        <th className="p-2 w-3/5">
                          {/* Description column */}
                          <div className="font-semibold text-left">
                            Message
                          </div>
                        </th>
                        <th className="p-2 w-1/6">
                          {/* Options column */}
                          <div className="font-semibold text-center">
                            Options
                          </div>
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
                      {/* Row */}
                      {messageData.map((item) => (
                        <tr key={item._id}>
                          <td className="p-2 w-1/6">
                            <div className="text-gray-800 dark:text-gray-100">
                              {item.name.slice(0,15)}{" ...."}
                            </div>
                          </td>
                          <td className="p-2 w-3/5">
                            <div>{item.email.slice(0,80)}{" ...."}</div>
                          </td>
                          <td className="p-2 w-1/6">
                            <div className="text-center text-gray-500 flex justify-center text-3xl gap-4">
                              <span className="cursor-pointer">
                                <NavLink to={`/message-details/${item._id}`}>
                                  <CgDetailsMore />
                                </NavLink>
                              </span>
                              <span
                                className="cursor-pointer text-red-800"
                                onClick={() => handleDeleteClick(item._id)}
                              >
                                <MdDelete />
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Delete Confirmation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Confirm Delete
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Message

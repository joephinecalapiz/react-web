/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../component/Topbar";
import Sidebar from "../../component/Sidebar";
import "../../sorter.css";
import "../../datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Sorters = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSorterName, setNewSorterName] = useState("");
  const [newSorterPhoneNumber, setNewSorterPhoneNumber] = useState("");
  const [newSorterAddress, setNewSorterAddress] = useState("");
  const [newSorterDateHired, setNewSorterDateHired] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewSorterName("");
    setNewSorterPhoneNumber("");
    setNewSorterAddress("");
    setNewSorterDateHired("");
  };

  const handleAddNewSorter = (e) => {
    e.preventDefault();
    // Replace this logic with the code to add a new sorter
    console.log("New sorter details:");
    console.log("Name:", newSorterName);
    console.log("Phone Number:", newSorterPhoneNumber);
    console.log("Address:", newSorterAddress);
    console.log("Date Hired:", newSorterDateHired);
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleSeeMore = (sorterName) => {
    // For demonstration purposes, we'll display an alert with the sorter's name as the history
    alert(
      `History for ${sorterName}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    );
  };

  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="m-auto p-4 sm:ml-64">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
              }}
              className="text-black mt-16 mb-3"
            >
              Sorters
            </h1>
            <button
              onClick={openModal}
              className="px-4 py-2 text-white rounded focus:outline-none ml-3 mt-12"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#C4A484";
                e.target.style.transition = "background-color 0.3s ease";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#512615";
                e.target.style.transition = "background-color 0.3s ease";
              }}
              style={{
                backgroundColor: "#512615",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Add New
            </button>
          </div>
        </div>

        <div className="mb-4 poppins-font">
          <input
            type="text"
            placeholder="Search Sorters"
            className="px-4 py-2 border rounded focus:outline-none search-bar"
          />
        </div>

        <div className="overflow-x-auto">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="sorters-table divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider table-header poppins-font"
                  >
                    Id num
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider table-header poppins-font"
                  >
                    Sorter's Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider table-header poppins-font"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider table-header poppins-font"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider table-header poppins-font"
                  >
                    Date Hired
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sorterData.map((sorter) => (
                  <tr key={sorter.id} className="sort-table">
                    <td className="poppins-font">{sorter.id}</td>
                    <td className="poppins-font">{sorter.name}</td>
                    <td className="poppins-font">{sorter.phoneNumber}</td>
                    <td className="poppins-font">{sorter.address}</td>
                    <td className="poppins-font">{sorter.dateHired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="modal-overlay fixed inset-0 bg-black opacity-50 cursor-pointer"
            onClick={closeModal}
          ></div>
          <div className="modal-container bg-white p-10 max-w-sm mx-auto rounded z-50">
            <span
              className="modal-close absolute top-4 right-4 text-xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-2xl font-semibold mb-4 poppins-font">
              Add New Sorter
            </h2>

            <form onSubmit={handleAddNewSorter}>
              <div className="mb-4">
                <label
                  htmlFor="newSorterName"
                  className="block font-medium poppins-font"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="newSorterName"
                  value={newSorterName}
                  onChange={(e) => setNewSorterName(e.target.value)}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 poppins-font"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="newSorterPhoneNumber"
                  className="block font-medium poppins-font"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="newSorterPhoneNumber"
                  value={newSorterPhoneNumber}
                  onChange={(e) => setNewSorterPhoneNumber(e.target.value)}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 poppins-font"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="newSorterAddress"
                  className="block font-medium poppins-font"
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="newSorterAddress"
                  value={newSorterAddress}
                  onChange={(e) => setNewSorterAddress(e.target.value)}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 poppins-font"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="newSorterDateHired"
                  className="block font-medium poppins-font"
                >
                  Date Hired:
                </label>
                {/*DatePicker*/}
                <DatePicker
                  id="newSorterDateHired"
                  selected={newSorterDateHired}
                  onChange={(date) => setNewSorterDateHired(date)}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 poppins-font"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none poppins-font"
                >
                  Add Sorter
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none poppins-font"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const sorterData = [
  {
    id: 1,
    name: "John Dela Cruz",
    phoneNumber: "0912-345-6789",
    address: "123 Kagay-anon St., Cagayan de Oro City",
    dateHired: "2023-07-25",
  },
  {
    id: 2,
    name: "Jenny Santos",
    phoneNumber: "0987-654-3210",
    address: "456 Xavier St., Cagayan de Oro City",
    dateHired: "2023-07-26",
  },
  {
    id: 3,
    name: "Alfredo Reyes",
    phoneNumber: "0922-123-4567",
    address: "789 Limketkai Ave., Cagayan de Oro City",
    dateHired: "2023-07-27",
  },
];

export default Sorters;

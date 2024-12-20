"use client";

import { useState } from "react";

export default function General() {
  const [formData, setFormData] = useState({
    displayName: "Andre",
    email: "andresamosa@mail.com",
    firstName: "Andre",
    lastName: "Samosa",
    address: "B/80 - A north America 27029",
    dateOfBirth: "1999-03-03",
    country: "United Kingdom",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="">
      {/* Profile Information */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
          className="w-24 h-24 mr-4 md:w-16 md:h-16 rounded-full"
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200">
            {formData.displayName}
          </h2>
          <p className=" text-gray-600 dark:text-gray-400">{formData.email}</p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400">
              Display Name
            </label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 font-medium text-xs  border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
        </div>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs text-gray-600 dark:text-gray-400">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 w-full p-2 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
          />
        </div>

        {/* Date of Birth and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400">
              Country of Residence
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            >
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
            </select>
          </div>
        </div>

        {/* Close Account */}
        <div className=" dark:bg-black p-4 rounded-lg flex border dark:gray-100 space-y-2">
          <div>
          <h3 className="text-sm font-medium text-black dark:text-white">
            Close Account
          </h3>
          <p className="text-xs text-black dark:text-white">
            Closing your account can’t be undone. Please make sure your account balance is
            $0.00 before you begin.
          </p>
          </div>
         
          <button
            type="button"
            className=" px-4 py-2 border border-red-400 bg-white hover:bg-red-600 text-red-400 rounded-md text-xs font-medium"
          >
            Close account
          </button>
          
        </div>
      </form>
    </div>
  );
}

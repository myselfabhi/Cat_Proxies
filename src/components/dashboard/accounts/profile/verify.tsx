"use client";

import { AlertTriangle, Upload } from "lucide-react";
import { useState } from "react";

export default function Verify() {
  const [activeLevel, setActiveLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const handleSubmit = (level: number) => {
    if (!completedLevels.includes(level)) {
      setCompletedLevels((prev) => [...prev, level]);
    }
    setActiveLevel(level + 1);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Level 1 */}
      <div className="bg-white rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(1)}
        >
          <h2 className="text-lg font-medium text-gray-800">Level 1</h2>
          <span className="text-gray-500">{activeLevel === 1 ? "-" : "+"}</span>
        </div>
        {activeLevel === 1 && (
          <div className="p-6 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm your details
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Please fill in your details to confirm your identity to unlock
              additional services. All information is private & secure.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    First name
                  </label>
                  <input
                    type="text"
                    defaultValue="Andre"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Last name
                  </label>
                  <input
                    type="text"
                    defaultValue="Samosa"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Display name
                  </label>
                  <input
                    type="text"
                    defaultValue="Andre"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="andresamosa@mail.com"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Occupation Industry
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300">
                    <option value="service" selected>
                      Service
                    </option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    defaultValue="1999-03-03"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => handleSubmit(1)}
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                Submit
              </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Level 2 */}
      <div className="bg-white rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(2)}
        >
          <h2 className="text-lg font-medium text-gray-800">Level 2</h2>
          <span className="text-gray-500">{activeLevel === 2 ? "-" : "+"}</span>
        </div>
        {activeLevel === 2 && (
          <div className="p-6 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Upload identification
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Please upload your identification. This step will unlock more
              capabilities such as higher betting limits and enhanced account
              security.
            </p>
            <form className="space-y-6">
              {/* Document Type */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Document Type
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                >
                  <option>Driver License</option>
                  <option>Passport</option>
                  <option>ID Card</option>
                </select>
                <p className="mt-1 text-xs text-red-500">
                  Following file types are accepted: .png, .jpeg, .pdf
                </p>
              </div>

              {/* Upload Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-center">
                  <Upload className="w-10 h-10 text-gray-500 mb-2" /> {/* Upload Icon */}
                  <p className="text-sm font-medium text-gray-600">
                    Front side
                  </p>
                  <p className="text-xs text-gray-400">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
                <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-center">
                  <Upload className="w-10 h-10 text-gray-500 mb-2" /> {/* Upload Icon */}
                  <p className="text-sm font-medium text-gray-600">
                    Back side
                  </p>
                  <p className="text-xs text-gray-400">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleSubmit(2)}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Level 3 */}
      <div className="bg-white rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(3)}
        >
          <h2 className="text-lg font-medium text-gray-800">Level 3</h2>
          <span className="text-gray-500">{activeLevel === 3 ? "-" : "+"}</span>
        </div>
        {activeLevel === 3 && (
          <div className="p-6 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Verification
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Please upload your proof of address. All documents must be laying
              on a flat surface with all 4 corners inside the frame. All
              information should be clear and identifiable.
            </p>
            <div className="bg-red-100 border border-red-300 text-red-600 p-3 rounded-md mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-sm">
                Please complete level two verification first.
              </p>
            </div>
            <form className="space-y-6">
              {/* Proof of Address */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Proof of Address<span className="text-red-500">*</span>
                </label>
                <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-center">
                  <Upload className="w-10 h-10 text-gray-500 mb-2" />
                  <p className="text-sm font-medium text-gray-600">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
                <p className="mt-2 text-xs text-red-500">
                  Following file types are accepted: .png, .jpeg, .pdf
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleSubmit(3)}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Level 4 */}
      <div className="bg-white rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(4)}
        >
          <h2 className="text-lg font-medium text-gray-800">Level 4</h2>
          <span className="text-gray-500">{activeLevel === 4 ? "-" : "+"}</span>
        </div>
        {activeLevel === 4 && (
          <div className="p-6 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Verification
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Please upload supporting documentation for your Source of Funds.
              Document laying on a flat surface must show all 4 corners and all
              information should be clear and identifiable.
            </p>
            <div className="bg-red-100 border border-red-300 text-red-600 p-3 rounded-md mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-sm">
                Please complete level three verification first.
              </p>
            </div>
            <form className="space-y-6">
              {/* Source of Funds */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Source of Funds<span className="text-red-500">*</span>
                </label>
                <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-center">
                  <Upload className="w-10 h-10 text-gray-500 mb-2" />
                  <p className="text-sm font-medium text-gray-600">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
                <p className="mt-2 text-xs text-red-500">
                  Following file types are accepted: .png, .jpeg, .pdf
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
              <button
                type="button"
                onClick={() => alert("Verification Complete!")}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

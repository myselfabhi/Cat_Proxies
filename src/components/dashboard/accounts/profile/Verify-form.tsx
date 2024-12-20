"use client";

import { Upload } from "lucide-react";
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
      <div className="bg-white dark:bg-[#1E2327] rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(1)}
        >
          <h2 className="text-base font-medium text-[#05C067] dark:text-gray-200">
            Level 1
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 1 ? "-" : "+"}
          </span>
        </div>
        {activeLevel === 1 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className=" font-medium text-gray-800 dark:text-gray-200 mb-4">
              Confirm your details
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
              Please fill in your details to confirm your identity to unlock
              additional services. All information is private & secure.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    First name
                  </label>
                  <input
                    type="text"
                    defaultValue="Andre"
                    className="w-full p-2 border text-xs font-medium border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                    Last name
                  </label>
                  <input
                    type="text"
                    defaultValue="Samosa"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                    Display name
                  </label>
                  <input
                    type="text"
                    defaultValue="Andre"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="andresamosa@mail.com"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Occupation Industry
                  </label>
                  <select className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600">
                    <option value="service" selected>
                      Service
                    </option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    defaultValue="1999-03-03"
                    className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => handleSubmit(1)}
                  className="px-6 py-2 bg-[#FB9400] text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Level 2 */}
      <div className="bg-white dark:bg-[#1E2327] rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(2)}
        >
          <h2 className="text-base font-medium text-[#05C067] dark:text-gray-200">
            Level 2
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 2 ? "-" : "+"}
          </span>
        </div>
        {activeLevel === 2 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className=" font-medium text-gray-800 dark:text-gray-200 mb-4">
              Upload identification
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
              Please upload your identification. This step will unlock more
              capabilities such as higher betting limits and enhanced account
              security.
            </p>
            <form className="space-y-6">
              {/* Document Type */}
              <div>
                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Document Type
                </label>
                <select className="w-full p-2 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600">
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
                <div className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-[#161B1E]">
                  <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Front side
                  </p>
                  <p className="text-xs text-gray-400">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
                <div className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-[#161B1E]">
                  <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Back side
                  </p>
                  <p className="text-xs text-gray-400">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => handleSubmit(2)}
                  className="mt-4 px-6 py-2 bg-[#FB9400] text-white rounded-md hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

     {/* Level 3 */}
     <div className="bg-white dark:bg-[#1E2327] rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(3)}
        >
          <h2 className="text-base font-medium text-[#05C067] dark:text-gray-200">
            Level 3
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 3 ? "-" : "+"}
          </span>
        </div>
        {activeLevel === 3 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className=" text-sm text-gray-800 dark:text-gray-200 mb-4">
              Verification
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Please upload your proof of address. All documents must be laying on a flat surface with all 4 corners inside the frame. All information should be clear and identifiable.
            </p>
            <div className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-[#161B1E]">
                  <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2" />
                  <p className="text-xs text-gray-400">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleSubmit(3)}
                className="px-6 py-2 bg-[#FB9400] mt-4 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Level 4 */}
      <div className="bg-white dark:bg-[#1E2327] rounded-lg shadow-md">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(4)}
        >
          <h2 className="text-base font-medium text-[#05C067] dark:text-gray-200">
            Level 4
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 4 ? "-" : "+"}
          </span>
        </div>
        {activeLevel === 4 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className=" text-sm text-gray-800 dark:text-gray-200 mb-4">
              Source of Funds
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Please upload supporting documentation for your Source of Funds. Document laying on a flat surface must show all 4 corners and all information should be clear and identifiable.
            </p>
            <div className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-[#161B1E]">
                  <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2" />
                  <p className="text-xs text-gray-400">
                    Click to Upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => alert("Verification Complete!")}
                className="px-6 py-2 bg-[#FB9400] mt-4 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
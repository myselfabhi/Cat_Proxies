"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function Verify() {
  const [activeLevel, setActiveLevel] = useState(1)
  const [completedLevels, setCompletedLevels] = useState<number[]>([])

  const handleSubmit = (level: number) => {
    if (!completedLevels.includes(level)) {
      setCompletedLevels((prev) => [...prev, level])
    }
    setActiveLevel(level + 1)
  }

  return (
    <div className="container font-satoshi mx-auto px-4 py-6 space-y-4 dark:border-[#1E2327] border border-[#F4F4F4] rounded-lg">
      {/* Level 1 */}
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-deep">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(1)}
        >
          <h2 className="font-medium text-[#05C067] dark:text-gray-200">
            Level 1
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 1 ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </span>
        </div>
        {activeLevel === 1 && (
          <div className="p-6 border-t border-[#C6C6C6] dark:border-gray-700">
            <h3 className=" text- font-medium text-black dark:text-gray-200 mb-1">
              Confirm your details
            </h3>
            <p className="text-xs text-[#525252] lg:w-[433px] dark:text-gray-400 mb-6">
              Please fill in your details to confirm your identity to unlock
              additional services. All information is private & secure.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    First name
                  </label>
                  <input
                    type="text"
                    defaultValue="Andre"
                    className="w-full px-3 py-4 border text-xs font-medium border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                    Last name
                  </label>
                  <input
                    type="text"
                    defaultValue="Samosa"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                    Display name
                  </label>
                  <input
                    type="text"
                    defaultValue="Andre"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="andresamosa@mail.com"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    defaultValue="B/80 - A north America 27029"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Occupation Industry
                  </label>
                  <select className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600">
                    <option value="service" selected>
                      Service
                    </option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs text-gray-600 dark:text-gray-400">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    defaultValue="1999-03-03"
                    className="w-full px-3 py-4 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => handleSubmit(1)}
                  className="px-10 py-2  rounded-lg font-medium  hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-600"
                  style={{
                    background:
                      "linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Level 2 */}
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-deep">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(2)}
        >
          <h2 className="font-medium text-[#05C067] dark:text-gray-200">
            Level 2
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 1 ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </span>
        </div>
        {activeLevel === 2 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className=" font-medium text-black dark:text-gray-200 mb-2">
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
                  Document Type*
                </label>
                <select className="w-full px-2 py-3 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600">
                  <option>Driver License</option>
                  <option>Passport</option>
                  <option>ID Card</option>
                </select>
                <p className="mt-1 text-[10px] font-medium text-red-500">
                  Following file types are accepted: .png, .jpeg, .pdf
                </p>
              </div>

              {/* Upload Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-dashed border-2 border-[#CACACA] dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-[#FFFFFF] dark:bg-[#161B1E]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2"
                  >
                    <rect
                      y="6.10352e-05"
                      width="44"
                      height="44"
                      rx="22"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M19 27.75C18.59 27.75 18.25 27.41 18.25 27V22.81L17.53 23.53C17.24 23.82 16.76 23.82 16.47 23.53C16.18 23.24 16.18 22.76 16.47 22.47L18.47 20.47C18.68 20.26 19.01 20.19 19.29 20.31C19.57 20.42 19.75 20.7 19.75 21V27C19.75 27.41 19.41 27.75 19 27.75Z"
                      fill="url(#paint0_linear_0_2690)"
                    />
                    <path
                      d="M21 23.7501C20.81 23.7501 20.62 23.6801 20.47 23.5301L18.47 21.5301C18.18 21.2401 18.18 20.7601 18.47 20.4701C18.76 20.1801 19.24 20.1801 19.53 20.4701L21.53 22.4701C21.82 22.7601 21.82 23.2401 21.53 23.5301C21.38 23.6801 21.19 23.7501 21 23.7501Z"
                      fill="url(#paint1_linear_0_2690)"
                    />
                    <path
                      d="M25 32.7501H19C13.57 32.7501 11.25 30.4301 11.25 25.0001V19.0001C11.25 13.5701 13.57 11.2501 19 11.2501H24C24.41 11.2501 24.75 11.5901 24.75 12.0001C24.75 12.4101 24.41 12.7501 24 12.7501H19C14.39 12.7501 12.75 14.3901 12.75 19.0001V25.0001C12.75 29.6101 14.39 31.2501 19 31.2501H25C29.61 31.2501 31.25 29.6101 31.25 25.0001V20.0001C31.25 19.5901 31.59 19.2501 32 19.2501C32.41 19.2501 32.75 19.5901 32.75 20.0001V25.0001C32.75 30.4301 30.43 32.7501 25 32.7501Z"
                      fill="url(#paint2_linear_0_2690)"
                    />
                    <path
                      d="M32 20.75H28C24.58 20.75 23.25 19.42 23.25 16V12C23.25 11.7 23.43 11.42 23.71 11.31C23.99 11.19 24.31 11.26 24.53 11.47L32.53 19.47C32.74 19.68 32.81 20.01 32.69 20.29C32.57 20.57 32.3 20.75 32 20.75ZM24.75 13.81V16C24.75 18.58 25.42 19.25 28 19.25H30.19L24.75 13.81Z"
                      fill="url(#paint3_linear_0_2690)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_2690"
                        x1="19.75"
                        y1="27.75"
                        x2="15.3195"
                        y2="27.1509"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_2690"
                        x1="21.7475"
                        y1="23.7501"
                        x2="17.5883"
                        y2="22.545"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_2690"
                        x1="32.75"
                        y1="32.7501"
                        x2="7.16693"
                        y2="25.3325"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_0_2690"
                        x1="32.7485"
                        y1="20.75"
                        x2="21.4461"
                        y2="17.473"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-xs font-medium text-[#353535] dark:text-gray-400">
                    Front side
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm font-medium text-[#019B83]">
                      Click to Upload
                    </p>
                    <p className="text-sm text-[#353535] dark:text-white">
                      or drag and drop
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">
                    (Max. File size: 25 MB)
                  </p>
                </div>
                <div className="border-dashed border-2 border-[#CACACA] dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-[#FFFFFF] dark:bg-[#161B1E]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2"
                  >
                    <rect
                      y="6.10352e-05"
                      width="44"
                      height="44"
                      rx="22"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M19 27.75C18.59 27.75 18.25 27.41 18.25 27V22.81L17.53 23.53C17.24 23.82 16.76 23.82 16.47 23.53C16.18 23.24 16.18 22.76 16.47 22.47L18.47 20.47C18.68 20.26 19.01 20.19 19.29 20.31C19.57 20.42 19.75 20.7 19.75 21V27C19.75 27.41 19.41 27.75 19 27.75Z"
                      fill="url(#paint0_linear_0_2690)"
                    />
                    <path
                      d="M21 23.7501C20.81 23.7501 20.62 23.6801 20.47 23.5301L18.47 21.5301C18.18 21.2401 18.18 20.7601 18.47 20.4701C18.76 20.1801 19.24 20.1801 19.53 20.4701L21.53 22.4701C21.82 22.7601 21.82 23.2401 21.53 23.5301C21.38 23.6801 21.19 23.7501 21 23.7501Z"
                      fill="url(#paint1_linear_0_2690)"
                    />
                    <path
                      d="M25 32.7501H19C13.57 32.7501 11.25 30.4301 11.25 25.0001V19.0001C11.25 13.5701 13.57 11.2501 19 11.2501H24C24.41 11.2501 24.75 11.5901 24.75 12.0001C24.75 12.4101 24.41 12.7501 24 12.7501H19C14.39 12.7501 12.75 14.3901 12.75 19.0001V25.0001C12.75 29.6101 14.39 31.2501 19 31.2501H25C29.61 31.2501 31.25 29.6101 31.25 25.0001V20.0001C31.25 19.5901 31.59 19.2501 32 19.2501C32.41 19.2501 32.75 19.5901 32.75 20.0001V25.0001C32.75 30.4301 30.43 32.7501 25 32.7501Z"
                      fill="url(#paint2_linear_0_2690)"
                    />
                    <path
                      d="M32 20.75H28C24.58 20.75 23.25 19.42 23.25 16V12C23.25 11.7 23.43 11.42 23.71 11.31C23.99 11.19 24.31 11.26 24.53 11.47L32.53 19.47C32.74 19.68 32.81 20.01 32.69 20.29C32.57 20.57 32.3 20.75 32 20.75ZM24.75 13.81V16C24.75 18.58 25.42 19.25 28 19.25H30.19L24.75 13.81Z"
                      fill="url(#paint3_linear_0_2690)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_2690"
                        x1="19.75"
                        y1="27.75"
                        x2="15.3195"
                        y2="27.1509"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_2690"
                        x1="21.7475"
                        y1="23.7501"
                        x2="17.5883"
                        y2="22.545"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_2690"
                        x1="32.75"
                        y1="32.7501"
                        x2="7.16693"
                        y2="25.3325"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_0_2690"
                        x1="32.7485"
                        y1="20.75"
                        x2="21.4461"
                        y2="17.473"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#019B83" />
                        <stop offset="1" stop-color="#18C6AB" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-xs font-medium text-[#353535] dark:text-gray-400">
                    Back side
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm font-medium text-[#019B83]">
                      Click to Upload
                    </p>
                    <p className="text-sm text-[#353535] dark:text-white">
                      or drag and drop
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">
                    (Max. File size: 25 MB)
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => handleSubmit(2)}
                  className="px-10 py-2  rounded-lg font-medium  hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-600"
                  style={{
                    background:
                      "linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Level 3 */}
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-deep">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(3)}
        >
          <h2 className="font-medium text-[#05C067] dark:text-gray-200">
            Level 3
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 1 ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </span>
        </div>
        {activeLevel === 3 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-black dark:text-gray-200 mb-2">
              Verification
            </h3>
            <p className="text-xs text-[#525252] lg:w-693px dark:text-gray-400 mb-2">
              Please upload your proof of address. All documents must be laying
              on a flat surface with all 4 corners inside the frame. All
              information should be clear and identifiable.
            </p>
            <p className="text-[10px] text-[#161616] bg-[#ffdfdf]  px-[5px] py-[5px] rounded-[34px] mb-8 w-[244px] h-[24px] flex items-center">
              ⚠️ Please complete level two verification first.
            </p>

            <label
              htmlFor="bonus-code"
              className="block text-xs text-[#131316] dark:text-gray-400 mb-1"
            >
              Proof of Address<span>*</span>
            </label>
            <div className="border-dashed border-2 border-[#CACACA] dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-[#FFFFFF] dark:bg-[#161B1E]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                <rect
                  y="6.10352e-05"
                  width="44"
                  height="44"
                  rx="22"
                  fill="#F5F5F5"
                />
                <path
                  d="M19 27.75C18.59 27.75 18.25 27.41 18.25 27V22.81L17.53 23.53C17.24 23.82 16.76 23.82 16.47 23.53C16.18 23.24 16.18 22.76 16.47 22.47L18.47 20.47C18.68 20.26 19.01 20.19 19.29 20.31C19.57 20.42 19.75 20.7 19.75 21V27C19.75 27.41 19.41 27.75 19 27.75Z"
                  fill="url(#paint0_linear_0_2690)"
                />
                <path
                  d="M21 23.7501C20.81 23.7501 20.62 23.6801 20.47 23.5301L18.47 21.5301C18.18 21.2401 18.18 20.7601 18.47 20.4701C18.76 20.1801 19.24 20.1801 19.53 20.4701L21.53 22.4701C21.82 22.7601 21.82 23.2401 21.53 23.5301C21.38 23.6801 21.19 23.7501 21 23.7501Z"
                  fill="url(#paint1_linear_0_2690)"
                />
                <path
                  d="M25 32.7501H19C13.57 32.7501 11.25 30.4301 11.25 25.0001V19.0001C11.25 13.5701 13.57 11.2501 19 11.2501H24C24.41 11.2501 24.75 11.5901 24.75 12.0001C24.75 12.4101 24.41 12.7501 24 12.7501H19C14.39 12.7501 12.75 14.3901 12.75 19.0001V25.0001C12.75 29.6101 14.39 31.2501 19 31.2501H25C29.61 31.2501 31.25 29.6101 31.25 25.0001V20.0001C31.25 19.5901 31.59 19.2501 32 19.2501C32.41 19.2501 32.75 19.5901 32.75 20.0001V25.0001C32.75 30.4301 30.43 32.7501 25 32.7501Z"
                  fill="url(#paint2_linear_0_2690)"
                />
                <path
                  d="M32 20.75H28C24.58 20.75 23.25 19.42 23.25 16V12C23.25 11.7 23.43 11.42 23.71 11.31C23.99 11.19 24.31 11.26 24.53 11.47L32.53 19.47C32.74 19.68 32.81 20.01 32.69 20.29C32.57 20.57 32.3 20.75 32 20.75ZM24.75 13.81V16C24.75 18.58 25.42 19.25 28 19.25H30.19L24.75 13.81Z"
                  fill="url(#paint3_linear_0_2690)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_2690"
                    x1="19.75"
                    y1="27.75"
                    x2="15.3195"
                    y2="27.1509"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_2690"
                    x1="21.7475"
                    y1="23.7501"
                    x2="17.5883"
                    y2="22.545"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_2690"
                    x1="32.75"
                    y1="32.7501"
                    x2="7.16693"
                    y2="25.3325"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_2690"
                    x1="32.7485"
                    y1="20.75"
                    x2="21.4461"
                    y2="17.473"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex gap-1">
                <p className="text-sm font-medium text-[#019B83]">
                  Click to Upload
                </p>
                <p className="text-sm text-[#353535] dark:text-gray-400">
                  or drag and drop
                </p>
              </div>
              <p className="text-xs text-[#353535] dark:text-gray-400">
                (Max. File size: 25 MB)
              </p>
            </div>
            <p className="mt-1 text-[10px] font-medium text-center text-red-500">
              Following file types are accepted: .png, .jpeg, .pdf
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleSubmit(3)}
                className="px-10 py-2  rounded-lg font-medium  hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-600"
                style={{
                  background:
                    "linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Level 4 */}
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-deep">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setActiveLevel(4)}
        >
          <h2 className="font-medium text-[#05C067] dark:text-gray-200">
            Level 4
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {activeLevel === 1 ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </span>
        </div>
        {activeLevel === 4 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-black dark:text-gray-200 mb-2">
              Verification
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Please upload supporting documentation for your Source of Funds.
              Document laying on a flat surface must show all 4 corners and all
              information should be clear and identifiable.
            </p>
            <p className="text-[10px] text-[#161616] bg-[#ffdfdf]  px-[5px] py-[5px] rounded-[34px] mb-8 w-[244px] h-[24px] flex items-center">
              ⚠️ Please complete level two verification first.
            </p>
            <label
              htmlFor="bonus-code"
              className="block text-xs text-[#131316] dark:text-gray-400 mb-1"
            >
              Source of Fund<span>*</span>
            </label>
            <div className="border-dashed border-2 border-[#CACACA] dark:border-gray-700 rounded-md p-6 flex flex-col justify-center items-center text-center bg-[#FFFFFF] dark:bg-[#161B1E]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                <rect
                  y="6.10352e-05"
                  width="44"
                  height="44"
                  rx="22"
                  fill="#F5F5F5"
                />
                <path
                  d="M19 27.75C18.59 27.75 18.25 27.41 18.25 27V22.81L17.53 23.53C17.24 23.82 16.76 23.82 16.47 23.53C16.18 23.24 16.18 22.76 16.47 22.47L18.47 20.47C18.68 20.26 19.01 20.19 19.29 20.31C19.57 20.42 19.75 20.7 19.75 21V27C19.75 27.41 19.41 27.75 19 27.75Z"
                  fill="url(#paint0_linear_0_2690)"
                />
                <path
                  d="M21 23.7501C20.81 23.7501 20.62 23.6801 20.47 23.5301L18.47 21.5301C18.18 21.2401 18.18 20.7601 18.47 20.4701C18.76 20.1801 19.24 20.1801 19.53 20.4701L21.53 22.4701C21.82 22.7601 21.82 23.2401 21.53 23.5301C21.38 23.6801 21.19 23.7501 21 23.7501Z"
                  fill="url(#paint1_linear_0_2690)"
                />
                <path
                  d="M25 32.7501H19C13.57 32.7501 11.25 30.4301 11.25 25.0001V19.0001C11.25 13.5701 13.57 11.2501 19 11.2501H24C24.41 11.2501 24.75 11.5901 24.75 12.0001C24.75 12.4101 24.41 12.7501 24 12.7501H19C14.39 12.7501 12.75 14.3901 12.75 19.0001V25.0001C12.75 29.6101 14.39 31.2501 19 31.2501H25C29.61 31.2501 31.25 29.6101 31.25 25.0001V20.0001C31.25 19.5901 31.59 19.2501 32 19.2501C32.41 19.2501 32.75 19.5901 32.75 20.0001V25.0001C32.75 30.4301 30.43 32.7501 25 32.7501Z"
                  fill="url(#paint2_linear_0_2690)"
                />
                <path
                  d="M32 20.75H28C24.58 20.75 23.25 19.42 23.25 16V12C23.25 11.7 23.43 11.42 23.71 11.31C23.99 11.19 24.31 11.26 24.53 11.47L32.53 19.47C32.74 19.68 32.81 20.01 32.69 20.29C32.57 20.57 32.3 20.75 32 20.75ZM24.75 13.81V16C24.75 18.58 25.42 19.25 28 19.25H30.19L24.75 13.81Z"
                  fill="url(#paint3_linear_0_2690)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_2690"
                    x1="19.75"
                    y1="27.75"
                    x2="15.3195"
                    y2="27.1509"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_2690"
                    x1="21.7475"
                    y1="23.7501"
                    x2="17.5883"
                    y2="22.545"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_2690"
                    x1="32.75"
                    y1="32.7501"
                    x2="7.16693"
                    y2="25.3325"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_2690"
                    x1="32.7485"
                    y1="20.75"
                    x2="21.4461"
                    y2="17.473"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#019B83" />
                    <stop offset="1" stop-color="#18C6AB" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex gap-1">
                <p className="text-sm font-medium text-[#019B83]">
                  Click to Upload
                </p>
                <p className="text-sm text-[#353535] dark:text-gray-400">
                  or drag and drop
                </p>
              </div>
              <p className="text-xs text-[#353535] dark:text-gray-400">
                (Max. File size: 25 MB)
              </p>
            </div>
            <p className="mt-1 text-[10px] font-medium text-center text-red-500">
              Following file types are accepted: .png, .jpeg, .pdf
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => alert("Verification Complete!")}
                className="px-10 py-2 mt-3 rounded-lg font-medium  hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-600"
                style={{
                  background:
                    "linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

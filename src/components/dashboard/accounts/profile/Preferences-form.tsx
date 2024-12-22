"use client"

import { useState } from "react"

export default function Preferences() {
  const [currency, setCurrency] = useState("USD($)")
  const [language, setLanguage] = useState("EN")
  const [emailOffers, setEmailOffers] = useState(true)
  const [appearance, setAppearance] = useState("Light")

  return (
    <div className="container mx-auto px-4 py-6 dark:border-[#1E2327] border border-[#F4F4F4] rounded-lg">
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-md p-6 container">
        {/* Header */}
        <div className="text-gray-800 dark:text-gray-200 mb-6">
          <h2 className="text-2xl font-medium">Account Preferences</h2>
        </div>

        {/* Preferences Form */}
        <form className="space-y-6">
          {/* Currency */}
          <div className="flex justify-between items-center">
            <label className="block text-gray-600 dark:text-gray-400">
              View in currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="text-xs font-medium rounded-md dark:bg-[#161B1E] text-[#454545] dark:text-gray-200 focus:outline-none"
            >
              <option value="USD($)">USD($)</option>
              <option value="EUR(€)">EUR(€)</option>
              <option value="GBP(£)">GBP(£)</option>
            </select>
          </div>

          <hr className="border-[#E0E0E0] dark:border-gray-700 my-4" />

          {/* Language */}
          <div className="flex justify-between items-center">
            <label className="block text-gray-600 dark:text-gray-400">
              Change Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className=" text-xs font-medium rounded-md dark:bg-[#161B1E] text-[#454545] dark:text-gray-200 focus:outline-none "
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </div>

          {/* Divider */}
          <hr className="border-[#E0E0E0] dark:border-gray-700 my-4" />

          {/* Email Offers */}
          <div className="flex justify-between items-center">
            <label className="block text-gray-600 dark:text-gray-400">
              Receive email offers from us
            </label>
            <div
              className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer ${
                emailOffers ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => setEmailOffers(!emailOffers)}
            >
              <div
                className={`absolute w-5 h-5 bg-white dark:bg-[#1E2327] rounded-full shadow-md transform transition-transform ${
                  emailOffers ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2">
              Dashboard Appearance
            </label>
            <div className="flex space-x-32 mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="appearance"
                  value="Light"
                  checked={appearance === "Light"}
                  onChange={() => setAppearance("Light")}
                  className="w-4 h-4 text-black bg-black border-black focus:ring-green-500 dark:focus:ring-green-300 dark:bg-gray-800 dark:border-gray-600"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Light Mode
                </span>
              </label>
              <label className="flex items-center space-x-2 ">
                <input
                  type="radio"
                  name="appearance"
                  value="Dark"
                  checked={appearance === "Dark"}
                  onChange={() => setAppearance("Dark")}
                  className="w-4 h-4 text-black bg-black border-black focus:ring-green-500 dark:focus:ring-green-300 dark:bg-gray-800 dark:border-gray-600"
                />
                <span className="text-sm text-gray-600  dark:text-gray-400">
                  Dark Mode
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

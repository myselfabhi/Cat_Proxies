"use client";

import { useState } from "react";

export default function Preferences() {
  const [currency, setCurrency] = useState("USD($)");
  const [language, setLanguage] = useState("EN");
  const [emailOffers, setEmailOffers] = useState(true);
  const [appearance, setAppearance] = useState("Light");

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white dark:bg-[#1E2327] rounded-lg shadow-md p-6 container">
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
              className="p-2 text-xs font-medium rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            >
              <option value="USD($)">USD($)</option>
              <option value="EUR(€)">EUR(€)</option>
              <option value="GBP(£)">GBP(£)</option>
            </select>
          </div>

          <hr className="border-gray-400 dark:border-gray-700 my-4" />

          {/* Language */}
          <div className="flex justify-between items-center">
            <label className="block  text-gray-600 dark:text-gray-400">
              Change Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 text-xs font-medium rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </div>

          {/* Divider */}
          <hr className="border-gray-400 dark:border-gray-700 my-4" />

          {/* Email Offers */}
          <div className="flex justify-between items-center">
            <label className="block  text-gray-600 dark:text-gray-400">
              Receive email offers from us
            </label>
            <div
              className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer ${
                emailOffers ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => setEmailOffers(!emailOffers)}
            >
              <div
                className={`absolute w-6 h-6 bg-white dark:bg-[#1E2327] rounded-full shadow-md transform transition-transform ${
                  emailOffers ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <label className="block  text-gray-600 dark:text-gray-400 mb-2">
              Dashboard Appearance
            </label>
            <div className="flex justify-between items-center">
              <span className=" text-gray-600 dark:text-gray-400">
                {appearance === "Light" ? "Light Mode" : "Dark Mode"}
              </span>
              <div
                className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer ${
                  appearance === "Dark" ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() =>
                  setAppearance(appearance === "Light" ? "Dark" : "Light")
                }
              >
                <div
                  className={`absolute w-6 h-6 bg-white dark:bg-[#1E2327] rounded-full shadow-md transform transition-transform ${
                    appearance === "Dark" ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Preferences() {
  const [currency, setCurrency] = useState("USD($)");
  const [language, setLanguage] = useState("EN");
  const [emailOffers, setEmailOffers] = useState(true);
  const [appearance, setAppearance] = useState("Light");

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white rounded-lg shadow-md p-6 container">
        {/* Header */}
        <div className="text-gray-800 mb-6">
          <h2 className="text-xl font-bold">Account Preferences</h2>
        </div>

        {/* Preferences Form */}
        <form className="space-y-6">
          {/* Currency */}
          <div className="flex justify-between items-center">
            <label className="block text-md font-medium text-gray-600">
              View in currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-2 text-sm rounded-md focus:outline-none focus:ring focus:ring-green-300"
            >
              <option value="USD($)">USD($)</option>
              <option value="EUR(€)">EUR(€)</option>
              <option value="GBP(£)">GBP(£)</option>
            </select>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Language */}
          <div className="flex justify-between items-center">
            <label className="block text-md font-medium text-gray-600">
              Change Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 text-md  rounded-md focus:outline-none focus:ring focus:ring-green-300"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </div>

          {/* Divider */}
          <hr className="border-gray-400 my-4" />

          {/* Email Offers */}
          <div className="flex justify-between items-center">
            <label className="block text-md font-medium text-gray-600">
              Receive email offers from us
            </label>
            <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="emailOffers"
                id="toggle-email"
                checked={emailOffers}
                onChange={() => setEmailOffers(!emailOffers)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle-email"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  emailOffers ? "bg-green-500" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <label className="block text-md font-medium text-gray-600 mb-2">
              Dashboard Appearance
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-md">
                <input
                  type="radio"
                  name="appearance"
                  value="Light"
                  checked={appearance === "Light"}
                  onChange={() => setAppearance("Light")}
                  className="w-4 h-4"
                />
                Light Mode
              </label>
              <label className="flex items-center gap-2 text-md">
                <input
                  type="radio"
                  name="appearance"
                  value="Dark"
                  checked={appearance === "Dark"}
                  onChange={() => setAppearance("Dark")}
                  className="w-4 h-4"
                />
                Dark Mode
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

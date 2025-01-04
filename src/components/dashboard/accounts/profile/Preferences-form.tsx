"use client"

import { useState } from "react"


export default function Preferences() {
  const [currency, setCurrency] = useState("USD($)")
  const [language, setLanguage] = useState("EN")
  const [emailOffers, setEmailOffers] = useState(true)
  const [appearance, setAppearance] = useState("Light")

  const languages = [
    {
      value: "EN",
      label: "EN",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6342 16.3888L14.6363 8.00684C14.4258 7.45539 13.9545 7.1145 13.4131 7.1145C12.8717 7.1145 12.4105 7.45539 12.1799 8.02689L9.19204 16.3888C9.05167 16.7799 9.2522 17.211 9.64322 17.3514C10.0342 17.4917 10.4654 17.2912 10.6057 16.9002L11.2274 15.1656H15.5888L16.2105 16.9002C16.3207 17.211 16.6115 17.4015 16.9223 17.4015C17.0025 17.4015 17.0928 17.3915 17.173 17.3614C17.564 17.221 17.7645 16.7899 17.6242 16.3989L17.6342 16.3888ZM11.7788 13.6517L13.4231 9.04958L15.0675 13.6517H11.7788ZM9.22212 4.83853C6.95616 8.41792 4.9108 10.5836 2.42427 12.0274C2.30396 12.0976 2.17362 12.1277 2.0533 12.1277C1.79262 12.1277 1.54196 11.9973 1.40159 11.7567C1.19104 11.3957 1.31135 10.9345 1.6723 10.734C3.77782 9.51079 5.50235 7.75618 7.43743 4.84855H1.13088C0.719801 4.84855 0.378906 4.50766 0.378906 4.09658C0.378906 3.6855 0.719801 3.34461 1.13088 3.34461H4.89075V1.3594C4.89075 0.948317 5.23164 0.607422 5.64272 0.607422C6.05379 0.607422 6.3947 0.948317 6.3947 1.3594V3.34461H10.1546C10.5656 3.34461 10.9065 3.6855 10.9065 4.09658C10.9065 4.50766 10.5656 4.84855 10.1546 4.84855H9.21209L9.22212 4.83853ZM9.26222 12.1277C9.13188 12.1277 9.00154 12.0976 8.88122 12.0274C8.22951 11.6464 7.59785 11.2253 7.00629 10.7841C6.67542 10.5335 6.60525 10.0622 6.85591 9.73137C7.10656 9.4005 7.5778 9.33031 7.90867 9.58097C8.45009 9.99205 9.04164 10.3731 9.64322 10.724C10.0042 10.9345 10.1245 11.3957 9.91393 11.7567C9.77356 11.9973 9.52291 12.1277 9.26222 12.1277Z"
            fill="#454545"
          />
        </svg>
      ),
    },
    { value: "FR", label: "FR", icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6342 16.3888L14.6363 8.00684C14.4258 7.45539 13.9545 7.1145 13.4131 7.1145C12.8717 7.1145 12.4105 7.45539 12.1799 8.02689L9.19204 16.3888C9.05167 16.7799 9.2522 17.211 9.64322 17.3514C10.0342 17.4917 10.4654 17.2912 10.6057 16.9002L11.2274 15.1656H15.5888L16.2105 16.9002C16.3207 17.211 16.6115 17.4015 16.9223 17.4015C17.0025 17.4015 17.0928 17.3915 17.173 17.3614C17.564 17.221 17.7645 16.7899 17.6242 16.3989L17.6342 16.3888ZM11.7788 13.6517L13.4231 9.04958L15.0675 13.6517H11.7788ZM9.22212 4.83853C6.95616 8.41792 4.9108 10.5836 2.42427 12.0274C2.30396 12.0976 2.17362 12.1277 2.0533 12.1277C1.79262 12.1277 1.54196 11.9973 1.40159 11.7567C1.19104 11.3957 1.31135 10.9345 1.6723 10.734C3.77782 9.51079 5.50235 7.75618 7.43743 4.84855H1.13088C0.719801 4.84855 0.378906 4.50766 0.378906 4.09658C0.378906 3.6855 0.719801 3.34461 1.13088 3.34461H4.89075V1.3594C4.89075 0.948317 5.23164 0.607422 5.64272 0.607422C6.05379 0.607422 6.3947 0.948317 6.3947 1.3594V3.34461H10.1546C10.5656 3.34461 10.9065 3.6855 10.9065 4.09658C10.9065 4.50766 10.5656 4.84855 10.1546 4.84855H9.21209L9.22212 4.83853ZM9.26222 12.1277C9.13188 12.1277 9.00154 12.0976 8.88122 12.0274C8.22951 11.6464 7.59785 11.2253 7.00629 10.7841C6.67542 10.5335 6.60525 10.0622 6.85591 9.73137C7.10656 9.4005 7.5778 9.33031 7.90867 9.58097C8.45009 9.99205 9.04164 10.3731 9.64322 10.724C10.0042 10.9345 10.1245 11.3957 9.91393 11.7567C9.77356 11.9973 9.52291 12.1277 9.26222 12.1277Z"
          fill="#454545"
        />
      </svg>
    ), }, 
    { value: "ES", label: "ES", icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6342 16.3888L14.6363 8.00684C14.4258 7.45539 13.9545 7.1145 13.4131 7.1145C12.8717 7.1145 12.4105 7.45539 12.1799 8.02689L9.19204 16.3888C9.05167 16.7799 9.2522 17.211 9.64322 17.3514C10.0342 17.4917 10.4654 17.2912 10.6057 16.9002L11.2274 15.1656H15.5888L16.2105 16.9002C16.3207 17.211 16.6115 17.4015 16.9223 17.4015C17.0025 17.4015 17.0928 17.3915 17.173 17.3614C17.564 17.221 17.7645 16.7899 17.6242 16.3989L17.6342 16.3888ZM11.7788 13.6517L13.4231 9.04958L15.0675 13.6517H11.7788ZM9.22212 4.83853C6.95616 8.41792 4.9108 10.5836 2.42427 12.0274C2.30396 12.0976 2.17362 12.1277 2.0533 12.1277C1.79262 12.1277 1.54196 11.9973 1.40159 11.7567C1.19104 11.3957 1.31135 10.9345 1.6723 10.734C3.77782 9.51079 5.50235 7.75618 7.43743 4.84855H1.13088C0.719801 4.84855 0.378906 4.50766 0.378906 4.09658C0.378906 3.6855 0.719801 3.34461 1.13088 3.34461H4.89075V1.3594C4.89075 0.948317 5.23164 0.607422 5.64272 0.607422C6.05379 0.607422 6.3947 0.948317 6.3947 1.3594V3.34461H10.1546C10.5656 3.34461 10.9065 3.6855 10.9065 4.09658C10.9065 4.50766 10.5656 4.84855 10.1546 4.84855H9.21209L9.22212 4.83853ZM9.26222 12.1277C9.13188 12.1277 9.00154 12.0976 8.88122 12.0274C8.22951 11.6464 7.59785 11.2253 7.00629 10.7841C6.67542 10.5335 6.60525 10.0622 6.85591 9.73137C7.10656 9.4005 7.5778 9.33031 7.90867 9.58097C8.45009 9.99205 9.04164 10.3731 9.64322 10.724C10.0042 10.9345 10.1245 11.3957 9.91393 11.7567C9.77356 11.9973 9.52291 12.1277 9.26222 12.1277Z"
          fill="#454545"
        />
      </svg>
    ), }, 
  ];

  return (
    <div className="container font-satoshi mx-auto px-4 py-6 dark:border-[#1E2327] border border-[#F4F4F4] rounded-lg">
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-extrasoft p-6 container">
        {/* Header */}
        <div className="text-black dark:text-gray-200 mb-6">
          <h2 className="text-2xl font-bold">Account Preferences</h2>
        </div>

        {/* Preferences Form */}
        <form className="space-y-6">
          {/* Currency */}
          <div className="flex justify-between items-center">
            <label className="block text-black font-bold dark:text-gray-400">
              View in currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className=" font-bold rounded-md dark:bg-[#161B1E] text-[#454545] dark:text-gray-200 focus:outline-none"
            >
              <option value="USD($)">USD($)</option>
              <option value="EUR(€)">EUR(€)</option>
              <option value="GBP(£)">GBP(£)</option>
            </select>
          </div>

          <hr className="border-[#E0E0E0] dark:border-gray-700 my-4" />

          {/* Language */}
          <div className="flex justify-between items-center">
            <label className="block text-black font-bold dark:text-gray-400">
              Change Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="  font-bold rounded-md dark:bg-[#161B1E] text-[#454545] dark:text-gray-200 focus:outline-none "
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
            <label className="block text-black font-bold dark:text-gray-400">
              Receive email offers from us
            </label>
            <div
              className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer ${
                emailOffers ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => setEmailOffers(!emailOffers)}
            >
              <div
                className={`absolute w-5 h-5 bg-white dark:bg-[#1E2327] rounded-full shadow-deep transform transition-transform ${
                  emailOffers ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <label className="block text-black font-bold dark:text-gray-400 mb-2">
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
                <span className="t text-black font-bold  dark:text-gray-400">
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
                <span className=" text-black font-bold  dark:text-gray-400">
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

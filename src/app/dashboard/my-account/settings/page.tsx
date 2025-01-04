"use client"

import General from "@/components/dashboard/accounts/profile/General-form"
import Offers from "@/components/dashboard/accounts/profile/Offers-form"
import Preferences from "@/components/dashboard/accounts/profile/Preferences-form"
import Social from "@/components/dashboard/accounts/profile/Social-form"
import Verify from "@/components/dashboard/accounts/profile/Verify-form"
import { useState } from "react"
import { Menu } from "lucide-react"
import DashboardLayout from "@/components/DashboardLayout"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("General")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const tabs = [
    { id: "General", component: <General /> },
    { id: "Preferences", component: <Preferences /> },
    { id: "Verify", component: <Verify /> },
    { id: "Offers", component: <Offers /> },
    { id: "Social", component: <Social /> },
  ]

  const currentTab = tabs.find((tab) => tab.id === activeTab)?.component

  return (
    <DashboardLayout>
      <div className="container font-satoshi ">
        {/* Mobile Dropdown for Tabs */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full p-3 bg-[#FCFCFC] dark:bg-[#1E2327] dark:text-gray-300 rounded-lg shadow-md text-gray-700 font-medium"
          >
            {activeTab}
            <Menu className="w-5 h-5" />
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 bg-white dark:bg-[#1E2327] rounded-lg shadow-md">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`cursor-pointer py-2 px-4 hover:bg-green-100 dark:hover:bg-green-900 ${
                    activeTab === tab.id
                      ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 font-medium"
                      : "text-gray-800 dark:text-gray-300"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsDropdownOpen(false)
                  }}
                >
                  {tab.id}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* Sidebar */}
          <div className="hidden md:block lg:w-[236px] bg-[#fcfcfc] dark:bg-[#1E2327] dark:border-[#1E2327] border border-[#F4F4F4] lg:h-[260px] rounded-lg p-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`cursor-pointer py-2 px-4 rounded-md ${
                    activeTab === tab.id
                      ? "bg-[#05C06738] font-bold text-black dark:bg-green-900  dark:text-green-300 "
                      : "text-[#525252] font-bold dark:text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.id}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 dark:bg-[#1E2327] ">{currentTab}</div>
        </div>
      </div>
    </DashboardLayout>
  )
}

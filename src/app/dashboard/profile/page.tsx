"use client";

import General from "@/components/dashboard/accounts/profile/General-form";
import Offers from "@/components/dashboard/accounts/profile/Offers-form";
import Preferences from "@/components/dashboard/accounts/profile/Preferences-form";
import Social from "@/components/dashboard/accounts/profile/Social-form";
import Verify from "@/components/dashboard/accounts/profile/Verify-form";
import DashboardLayout from "@/components/layout";
import { useState } from "react";
import { Menu } from "lucide-react"; // Icon for dropdown menu

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("General");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Mobile dropdown toggle

  const tabs = [
    { id: "General", component: <General /> },
    { id: "Preferences", component: <Preferences /> },
    { id: "Verify", component: <Verify /> },
    { id: "Offers", component: <Offers /> },
    { id: "Social", component: <Social /> },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Mobile Dropdown for Tabs */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full p-3 bg-white rounded-lg shadow-md text-gray-700 font-medium"
          >
            {activeTab}
            <Menu className="w-5 h-5" />
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 bg-white rounded-lg shadow-md">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`cursor-pointer py-2 px-4 hover:bg-green-100 ${
                    activeTab === tab.id
                      ? "bg-green-100 text-green-600 font-medium"
                      : "text-gray-800"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsDropdownOpen(false);
                  }}
                >
                  {tab.id}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Sidebar */}
          <div className="hidden md:block md:w-1/4 bg-white rounded-lg shadow-md p-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`cursor-pointer py-2 px-4 rounded-md ${
                    activeTab === tab.id
                      ? "bg-green-100 text-green-600 font-medium"
                      : "text-gray-800"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.id}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6">
            {currentTab}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

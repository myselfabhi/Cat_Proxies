"use client";
import General from "@/components/dashboard/accounts/profile/general";
import Offers from "@/components/dashboard/accounts/profile/offers";
import Preferences from "@/components/dashboard/accounts/profile/preferences";
import Social from "@/components/dashboard/accounts/profile/social";
import Verify from "@/components/dashboard/accounts/profile/verify";
import DashboardLayout from "@/components/layout";
import { useState } from "react";

 // This enables client-side functionality



export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("General");

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
      <div className="flex space-x-8 container">
        {/* Sidebar */}
        <div className=" w-1/5 bg-white rounded-lg shadow-md p-4">
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
        <div className=" w-3/4 bg-white rounded-lg shadow-md p-6">{currentTab}</div>
      </div>
    </DashboardLayout>
  );
}

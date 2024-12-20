"use client";

import DashboardLayout from "../../DashboardLayout";
import { useState } from "react";

const PurchasePlan = () => {
  const plansData = [
    {
      id: "1",
      title: "30GB Plan",
      price: "$30",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "2",
      title: "60GB Plan",
      price: "$50",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "3",
      title: "100GB Plan",
      price: "$80",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "4",
      title: "200GB Plan",
      price: "$150",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "5",
      title: "200GB Plan",
      price: "$150",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "6",
      title: "200GB Plan",
      price: "$150",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "7",
      title: "200GB Plan",
      price: "$150",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "8",
      title: "200GB Plan",
      price: "$150",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "9",
      title: "200GB Plan",
      price: "$150",
      duration: "Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("Residential");
  const [bandwidthPrice, setBandwidthPrice] = useState(19);

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 space-y-8 py-8">
        {/* Header Section */}
        <div className="text-gray-800 dark:text-gray-100 text-center md:text-left">
          <h1 className="text-2xl font-medium">Pricing Plans</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Boost security with proxies, shielding your network, filtering
            traffic, and preserving anonymity online.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 pb-2">
          {["Residential", "Mobile", "Datacenter", "IPv6", "ISP"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`flex-1 text-center px-4 py-2 rounded-xl font-medium transition-all ${
                selectedTab === tab
                  ? "bg-[#fd980c] font-medium"
                  : " text-gray-800 hover:bg-gray-200 dark:bg-[#161B1E] dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Section */}
        {selectedTab === "Residential" ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Plans */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {plansData.map((plan) => (
                <div
                  key={plan.id}
                  className="p-6 bg-white dark:bg-[#1E2327] rounded-lg  hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="font-medium text-gray-800 dark:text-gray-100">
                        {plan.title}
                      </h2>
                      <div className="flex flex-col items-end">
                        <p className="text-2xl text-black dark:text-white">
                          {plan.price}
                        </p>
                        <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                          {plan.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] font-normal text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="lg:col-span-1 bg-white dark:bg-[#1E2327] p-4 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <div className="bg-[#05C067] text-white text-[11px] font-bold uppercase px-2 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <p className="text-base font-medium text-gray-800 dark:text-gray-100">
                  Bandwidth
                </p>
              </div>
              <div className="flex">
              <p className="text-md font-bold ">
                  $
                </p>
                <p className="text-4xl font-bold ">
                  {bandwidthPrice}
                </p>
                <p className="font-medium  text-gray-600 dark:text-gray-400 ml-2">
                  / per month
                </p>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={bandwidthPrice}
                onChange={(e) => setBandwidthPrice(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-[#161B1E] rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #fd980c ${
                    (bandwidthPrice - 10) * 2
                  }%, ${
                    bandwidthPrice >= 50
                      ? "#e5e5e5"
                      : "rgba(255, 255, 255, 0.1)"
                  } ${(bandwidthPrice - 10) * 2.5}%)`,
                }}
                aria-label="Bandwidth Price Slider"
              />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                Up To 5GB Emails / mo 
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-300 text-center">
                No daily sending limit
              </p>
              <ul className=" space-y-2 text-sm text-gray-600 dark:text-gray-400 text-left">
                <li>✔️ 10M+ Real Residential Peers</li>
                <li>✔️ IP & User-Pass Authentication</li>
                <li>✔️ Country, State, City & ISP Targeting</li>
                <li>✔️ Rotating & Sticky Sessions</li>
                <li>✔️ Unlimited Concurrent Connections</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400 text-lg py-20">
            No plans available for {selectedTab}.
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PurchasePlan;

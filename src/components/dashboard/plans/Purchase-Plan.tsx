"use client"

import DashboardLayout from "../../DashboardLayout"
import { useState } from "react"

const PurchasePlan = () => {
  const plansData = [
    {
      id: "1",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online. Boost security with proxies, shielding Network",
    },
    {
      id: "2",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online. Boost security with proxies, shielding your network.",
    },
    {
      id: "3",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "4",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online. Boost security with proxies, shielding Network",
    },
    {
      id: "5",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online. Boost security with proxies, shielding your network.",
    },
    {
      id: "6",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
    {
      id: "7",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online. Boost security with proxies, shielding Network",
    },
    {
      id: "8",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online. Boost security with proxies, shielding your network.",
    },
    {
      id: "9",
      title: "30GB Plan",
      price: "30",
      duration: "/Per month",
      description:
        "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
    },
  ]

  const [selectedTab, setSelectedTab] = useState("Residential (new)")
  const [bandwidthPrice, setBandwidthPrice] = useState(19)

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 space-y-8 py-8 font-satoshi">
        {/* Header Section */}
        <div className="text-gray-800 dark:text-gray-100 text-center md:text-left space-y-2">
          <h1 className="text-2xl font-medium">Pricing Plans</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Boost security with proxies, shielding your network, filtering
            traffic, and preserving anonymity online.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 pb-2 lg:w-[95%]">
          {["Residential (new)", "Mobile", "Datacenter", "IPv6", "ISP"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`flex-1 text-center px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                  selectedTab === tab
                    ? "bg-gradient-to-r from-[#FB9400] to-[#FFAB38] font-medium "
                    : "text-gray-800 hover:bg-gray-200 dark:bg-[#161B1E] dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Main Content Section */}
        {selectedTab === "Residential (new)" ? (
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
            {/* Plans */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
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
                        <div className="flex items-baseline">
                          <sup className="text-sm text-black dark:text-white mr-1">
                            $
                          </sup>
                          <p className="text-2xl text-black dark:text-white">
                            {plan.price}
                          </p>
                        </div>
                        <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                          {plan.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] mt-8 font-normal text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="lg:col-span-1 bg-white dark:bg-[#1E2327] p-4 rounded-lg shadow-sm flex flex-col items-center space-y-8">
              <div className="space-y-3">
                <div className="bg-[#05C067] text-white text-[10px] font-normal uppercase px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div>
                  <p className="text-base font-medium text-gray-800 dark:text-gray-100">
                    Bandwidth
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-md font-bold self-start">$</p>
                <p className="text-4xl font-bold ml-1">{bandwidthPrice}</p>
                <p className="font-medium text-gray-600 dark:text-gray-400 ml-2">
                  / per month
                </p>
              </div>

              <input
                type="range"
                min="10"
                max="50"
                value={bandwidthPrice}
                onChange={(e) => setBandwidthPrice(parseInt(e.target.value))}
                className="w-full  h-1 bg-gray-200 dark:bg-[#161B1E] rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #fd980c ${
                    (bandwidthPrice - 10) * 2
                  }%, ${
                    bandwidthPrice >= 50
                      ? "#e5e5e5"
                      : "rgba(255, 255, 255, 0.1)"
                  } ${(bandwidthPrice - 10) * 2.8}%)`,
                }}
                aria-label="Bandwidth Price Slider"
              />

              <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  background: linear-gradient(
                    286.17deg,
                    #fb9400 0%,
                    #ffab38 100%
                  );
                  cursor: pointer;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                input[type="range"]::-moz-range-thumb {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: linear-gradient(
                    286.17deg,
                    #fb9400 0%,
                    #ffab38 100%
                  );
                  cursor: pointer;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
              `}</style>

              <div>
                <p className="text-sm font-medium mt-4  text-gray-700 dark:text-gray-300 text-center">
                  Up To 5GB Emails / mo
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 text-center">
                  No daily sending limit
                </p>
              </div>

              <div>
                <ul className=" space-y-2 text-sm text-gray-600 dark:text-gray-400 text-left">
                  <li className="flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0083 17.7664C14.2268 17.7664 17.6466 14.3466 17.6466 10.128C17.6466 5.90944 14.2268 2.48962 10.0083 2.48962C5.78969 2.48962 2.36987 5.90944 2.36987 10.128C2.36987 14.3466 5.78969 17.7664 10.0083 17.7664ZM13.5158 8.18823C13.7101 7.93848 13.6651 7.57856 13.4153 7.38431C13.1656 7.19007 12.8057 7.23506 12.6114 7.4848L9.55071 11.42C9.48265 11.5075 9.35463 11.5188 9.27223 11.4447L7.33614 9.70221C7.10097 9.49056 6.73874 9.50962 6.52709 9.74479C6.31543 9.97997 6.3345 10.3422 6.56967 10.5538L8.50576 12.2963C9.08255 12.8154 9.97869 12.736 10.4551 12.1234L13.5158 8.18823Z"
                        fill="#34C759"
                      />
                    </svg>
                    10M+ Real Residential Peers
                  </li>
                  <li className="flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0083 17.7664C14.2268 17.7664 17.6466 14.3466 17.6466 10.128C17.6466 5.90944 14.2268 2.48962 10.0083 2.48962C5.78969 2.48962 2.36987 5.90944 2.36987 10.128C2.36987 14.3466 5.78969 17.7664 10.0083 17.7664ZM13.5158 8.18823C13.7101 7.93848 13.6651 7.57856 13.4153 7.38431C13.1656 7.19007 12.8057 7.23506 12.6114 7.4848L9.55071 11.42C9.48265 11.5075 9.35463 11.5188 9.27223 11.4447L7.33614 9.70221C7.10097 9.49056 6.73874 9.50962 6.52709 9.74479C6.31543 9.97997 6.3345 10.3422 6.56967 10.5538L8.50576 12.2963C9.08255 12.8154 9.97869 12.736 10.4551 12.1234L13.5158 8.18823Z"
                        fill="#34C759"
                      />
                    </svg>{" "}
                    IP & User-Pass Authentication
                  </li>
                  <li className="flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0083 17.7664C14.2268 17.7664 17.6466 14.3466 17.6466 10.128C17.6466 5.90944 14.2268 2.48962 10.0083 2.48962C5.78969 2.48962 2.36987 5.90944 2.36987 10.128C2.36987 14.3466 5.78969 17.7664 10.0083 17.7664ZM13.5158 8.18823C13.7101 7.93848 13.6651 7.57856 13.4153 7.38431C13.1656 7.19007 12.8057 7.23506 12.6114 7.4848L9.55071 11.42C9.48265 11.5075 9.35463 11.5188 9.27223 11.4447L7.33614 9.70221C7.10097 9.49056 6.73874 9.50962 6.52709 9.74479C6.31543 9.97997 6.3345 10.3422 6.56967 10.5538L8.50576 12.2963C9.08255 12.8154 9.97869 12.736 10.4551 12.1234L13.5158 8.18823Z"
                        fill="#34C759"
                      />
                    </svg>{" "}
                    Country, State, City & ISP Targeting
                  </li>
                  <li className="flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0083 17.7664C14.2268 17.7664 17.6466 14.3466 17.6466 10.128C17.6466 5.90944 14.2268 2.48962 10.0083 2.48962C5.78969 2.48962 2.36987 5.90944 2.36987 10.128C2.36987 14.3466 5.78969 17.7664 10.0083 17.7664ZM13.5158 8.18823C13.7101 7.93848 13.6651 7.57856 13.4153 7.38431C13.1656 7.19007 12.8057 7.23506 12.6114 7.4848L9.55071 11.42C9.48265 11.5075 9.35463 11.5188 9.27223 11.4447L7.33614 9.70221C7.10097 9.49056 6.73874 9.50962 6.52709 9.74479C6.31543 9.97997 6.3345 10.3422 6.56967 10.5538L8.50576 12.2963C9.08255 12.8154 9.97869 12.736 10.4551 12.1234L13.5158 8.18823Z"
                        fill="#34C759"
                      />
                    </svg>{" "}
                    Rotating & Sticky Sessions
                  </li>
                  <li className="flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0083 17.7664C14.2268 17.7664 17.6466 14.3466 17.6466 10.128C17.6466 5.90944 14.2268 2.48962 10.0083 2.48962C5.78969 2.48962 2.36987 5.90944 2.36987 10.128C2.36987 14.3466 5.78969 17.7664 10.0083 17.7664ZM13.5158 8.18823C13.7101 7.93848 13.6651 7.57856 13.4153 7.38431C13.1656 7.19007 12.8057 7.23506 12.6114 7.4848L9.55071 11.42C9.48265 11.5075 9.35463 11.5188 9.27223 11.4447L7.33614 9.70221C7.10097 9.49056 6.73874 9.50962 6.52709 9.74479C6.31543 9.97997 6.3345 10.3422 6.56967 10.5538L8.50576 12.2963C9.08255 12.8154 9.97869 12.736 10.4551 12.1234L13.5158 8.18823Z"
                        fill="#34C759"
                      />
                    </svg>{" "}
                    Unlimited Concurrent Connections
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400 text-lg py-20">
            No plans available for {selectedTab}.
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default PurchasePlan

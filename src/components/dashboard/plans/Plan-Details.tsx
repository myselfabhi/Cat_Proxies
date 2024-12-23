"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { useState } from "react"

interface PlanDetailsProps {
  planId: string
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ planId }) => {
  const plansData = [
    {
      id: "1",
      name: "Residential Proxy Generator",
      bandwidthLeft: "74 GB",
      totalBandwidth: "250 GB",
      paidAt: "25/05/2025",
      validUntil: "25/05/2026",
      username: "adam",
      password: "PASSWORD",
      hostname: "rp.catproxy.com",
      port: "1000",
      planId: "1247",
    },
  ]

  const plan = plansData.find((p) => p.id === planId)
  const [sessionType, setSessionType] = useState<"rotating" | "sticky">(
    "sticky"
  )

  if (!plan) {
    return (
      <DashboardLayout>
        <p className="text-center text-red-500 text-lg mt-4 dark:text-red-300">
          Plan not found
        </p>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 container mx-auto px-6 py-8 font-satoshi">
        {/* Left Section */}
        <div className="p-6 bg-white dark:bg-[#1E2327] rounded-lg shadow-sm space-y-4">
          <h1 className="text-2xl font-medium text-[#121118] dark:text-gray-100">
            {plan.name}
          </h1>
          <p className="text-[#525252] dark:text-gray-400 text-sm font-normal">
            Boost security with proxies, shielding your network, filtering
            traffic, and preserving anonymity online.
          </p>
          <div className="space-y-6">
            {/* Bandwidth */}
            <div>
              <div className="w-full h-3 bg-gray-200 dark:bg-[#161B1E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${
                      (parseInt(plan.bandwidthLeft) /
                        parseInt(plan.totalBandwidth)) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="flex gap-5 justify-end mt-2">
                <div>
                  <p className="text-[#525252] text-[8px] dark:text-gray-400">
                    Bandwidth Left:
                  </p>
                  <p className="font-medium text-[10px] text-[#121118] dark:text-gray-100">
                    {plan.bandwidthLeft}
                  </p>
                </div>
                <div className="lg:ml-6">
                  <p className="text-[#525252] text-[8px] dark:text-gray-400">
                    Total Bandwidth:
                  </p>
                  <p className="font-medium text-[10px] text-[#121118] dark:text-gray-100">
                    {plan.totalBandwidth}
                  </p>
                </div>
              </div>
            </div>

            {/* Protocol */}
            <div>
              <h2 className="text-sm font-medium text-[#121118] dark:text-gray-100">
                Protocol
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <button className=" flex gap-1 px-4 py-2 text-xs font-medium border rounded-md bg-green-50 text-green-700 dark:bg-[#161B1E] dark:text-green-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.6875C10.0095 16.6875 11.0092 16.4887 11.9419 16.1023C12.8746 15.716 13.722 15.1497 14.4359 14.4359C15.1497 13.722 15.716 12.8746 16.1023 11.9419C16.4887 11.0092 16.6875 10.0095 16.6875 9C16.6875 7.99046 16.4887 6.99081 16.1023 6.05812C15.716 5.12543 15.1497 4.27797 14.4359 3.56412C13.722 2.85027 12.8746 2.28401 11.9419 1.89768C11.0092 1.51134 10.0095 1.3125 9 1.3125M9 16.6875C7.99046 16.6875 6.99081 16.4887 6.05812 16.1023C5.12543 15.716 4.27797 15.1497 3.56412 14.4359C2.85027 13.722 2.28401 12.8746 1.89768 11.9419C1.51134 11.0092 1.3125 10.0095 1.3125 9C1.3125 7.99046 1.51134 6.99081 1.89768 6.05812C2.28401 5.12543 2.85027 4.27797 3.56412 3.56412C4.27797 2.85027 5.12543 2.28401 6.05812 1.89768C6.99081 1.51134 7.99046 1.3125 9 1.3125M9 16.6875C11.3584 16.6875 12.3663 12.2774 12.3663 9C12.3663 5.72256 11.3584 1.3125 9 1.3125M9 16.6875C6.64165 16.6875 5.63373 12.2774 5.63373 9C5.63373 5.72256 6.64165 1.3125 9 1.3125M1.73958 6.4375H16.2604H1.73958ZM1.73958 11.5625H16.2604H1.73958Z"
                      fill="white"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M9 16.6875C10.0095 16.6875 11.0092 16.4887 11.9419 16.1023C12.8746 15.716 13.722 15.1497 14.4359 14.4359C15.1497 13.722 15.716 12.8746 16.1023 11.9419C16.4887 11.0092 16.6875 10.0095 16.6875 9C16.6875 7.99046 16.4887 6.99081 16.1023 6.05812C15.716 5.12543 15.1497 4.27797 14.4359 3.56412C13.722 2.85027 12.8746 2.28401 11.9419 1.89768C11.0092 1.51134 10.0095 1.3125 9 1.3125M9 16.6875C7.99046 16.6875 6.99081 16.4887 6.05812 16.1023C5.12543 15.716 4.27797 15.1497 3.56412 14.4359C2.85027 13.722 2.28401 12.8746 1.89768 11.9419C1.51134 11.0092 1.3125 10.0095 1.3125 9C1.3125 7.99046 1.51134 6.99081 1.89768 6.05812C2.28401 5.12543 2.85027 4.27797 3.56412 3.56412C4.27797 2.85027 5.12543 2.28401 6.05812 1.89768C6.99081 1.51134 7.99046 1.3125 9 1.3125M9 16.6875C11.3584 16.6875 12.3663 12.2774 12.3663 9C12.3663 5.72256 11.3584 1.3125 9 1.3125M9 16.6875C6.64165 16.6875 5.63373 12.2774 5.63373 9C5.63373 5.72256 6.64165 1.3125 9 1.3125M1.73958 6.4375H16.2604M1.73958 11.5625H16.2604"
                      stroke="#121118"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  HTTP
                </button>
                <button className=" flex gap-1 px-4 py-2 border text-xs font-medium rounded-md bg-gray-100 text-gray-600 dark:bg-[#161B1E] dark:text-gray-400">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9131 7.75923H6.08553C5.92092 7.75923 5.76304 7.69383 5.64664 7.57743C5.53024 7.46103 5.46484 7.30315 5.46484 7.13854V4.96612C5.46484 2.74157 7.27477 0.931641 9.49933 0.931641C11.7239 0.931641 13.5338 2.74157 13.5338 4.96612V7.13854C13.5338 7.30315 13.4684 7.46103 13.352 7.57743C13.2356 7.69383 13.0777 7.75923 12.9131 7.75923ZM6.70622 6.51785H12.2924V4.96612C12.2924 3.42619 11.0393 2.17302 9.49933 2.17302C7.9594 2.17302 6.70622 3.42619 6.70622 4.96612V6.51785Z"
                      fill="#6F6F6F"
                    />
                    <path
                      d="M14.7771 17.0693H4.22535C3.19873 17.0693 2.36328 16.2339 2.36328 15.2072V8.37965C2.36328 7.35303 3.19873 6.51758 4.22535 6.51758H14.7771C15.8037 6.51758 16.6391 7.35303 16.6391 8.37965V15.2072C16.6391 16.2339 15.8037 17.0693 14.7771 17.0693ZM4.22535 7.75896C4.06073 7.75896 3.90286 7.82435 3.78646 7.94075C3.67005 8.05716 3.60466 8.21503 3.60466 8.37965V15.2072C3.60466 15.3719 3.67005 15.5297 3.78646 15.6461C3.90286 15.7625 4.06073 15.8279 4.22535 15.8279H14.7771C14.9417 15.8279 15.0996 15.7625 15.216 15.6461C15.3324 15.5297 15.3978 15.3719 15.3978 15.2072V8.37965C15.3978 8.21503 15.3324 8.05716 15.216 7.94075C15.0996 7.82435 14.9417 7.75896 14.7771 7.75896H4.22535Z"
                      fill="#6F6F6F"
                    />
                  </svg>
                  SOCKS5
                </button>
              </div>
            </div>

            {/* Format */}
            <div className="space-y-2">
              <h2 className="text-xs font-normal text-[#121118] dark:text-gray-100">
                Format
              </h2>
              <select className="w-full p-2 border rounded-md text-xs text-[#525252] font-medium bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                <option>hostname:port:username:password</option>
                <option>username:password@hostname:port</option>
              </select>
            </div>

            {/* Location Settings */}
            <div>
              <h2 className="text-sm font-medium text-[#121118] dark:text-gray-100">
                Location Settings
              </h2>
              <p className="text-sm text-[#525252] dark:text-gray-400">
                Select a precise proxy location or leave it random.
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-xs font-normal text-[#121118] dark:text-gray-100 mt-2">
                  Country
                </h2>
                <select className="p-2 border text-xs text-[#525252] font-medium rounded-md bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                  <option>United States of America</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                </select>
                <h2 className="text-xs font-normal text-[#121118] dark:text-gray-100 mt-2">
                  State
                </h2>
                <select className="p-2 border text-xs text-[#525252] font-medium rounded-md bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                  <option>Random</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
                <h2 className="text-xs font-normal text-[#121118] dark:text-gray-100 mt-2">
                  ISP
                </h2>
                <select className="p-2 border text-xs text-[#525252] font-medium rounded-md bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                  <option>Random</option>
                  <option>AT&T</option>
                  <option>Verizon</option>
                </select>
              </div>
            </div>

            {/* Session Settings */}
            <div>
              <h2 className="text-sm font-medium text-[#121118] dark:text-gray-100">
                Session Settings
              </h2>
              <p className="text-sm text-[#525252] dark:text-gray-400">
                Keep the same IP address for up to 120 minutes with a sticky
                session or get a new IP address with each request.
              </p>
              <h2 className="text-sm font-medium text-[#121118] dark:text-gray-100 mt-4">
                Type
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <button
                  className={`px-4 py-2 border rounded-md flex gap-1 ${
                    sessionType === "rotating"
                      ? "bg-green-50 text-green-700 text-xs font-medium dark:bg-[#161B1E] dark:text-green-400"
                      : "bg-gray-100 text-gray-600 text-xs font-medium dark:bg-[#161B1E] dark:text-gray-400"
                  }`}
                  onClick={() => setSessionType("rotating")}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.6875C10.0095 16.6875 11.0092 16.4887 11.9419 16.1023C12.8746 15.716 13.722 15.1497 14.4359 14.4359C15.1497 13.722 15.716 12.8746 16.1023 11.9419C16.4887 11.0092 16.6875 10.0095 16.6875 9C16.6875 7.99046 16.4887 6.99081 16.1023 6.05812C15.716 5.12543 15.1497 4.27797 14.4359 3.56412C13.722 2.85027 12.8746 2.28401 11.9419 1.89768C11.0092 1.51134 10.0095 1.3125 9 1.3125M9 16.6875C7.99046 16.6875 6.99081 16.4887 6.05812 16.1023C5.12543 15.716 4.27797 15.1497 3.56412 14.4359C2.85027 13.722 2.28401 12.8746 1.89768 11.9419C1.51134 11.0092 1.3125 10.0095 1.3125 9C1.3125 7.99046 1.51134 6.99081 1.89768 6.05812C2.28401 5.12543 2.85027 4.27797 3.56412 3.56412C4.27797 2.85027 5.12543 2.28401 6.05812 1.89768C6.99081 1.51134 7.99046 1.3125 9 1.3125M9 16.6875C11.3584 16.6875 12.3663 12.2774 12.3663 9C12.3663 5.72256 11.3584 1.3125 9 1.3125M9 16.6875C6.64165 16.6875 5.63373 12.2774 5.63373 9C5.63373 5.72256 6.64165 1.3125 9 1.3125M1.73958 6.4375H16.2604H1.73958ZM1.73958 11.5625H16.2604H1.73958Z"
                      fill="white"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M9 16.6875C10.0095 16.6875 11.0092 16.4887 11.9419 16.1023C12.8746 15.716 13.722 15.1497 14.4359 14.4359C15.1497 13.722 15.716 12.8746 16.1023 11.9419C16.4887 11.0092 16.6875 10.0095 16.6875 9C16.6875 7.99046 16.4887 6.99081 16.1023 6.05812C15.716 5.12543 15.1497 4.27797 14.4359 3.56412C13.722 2.85027 12.8746 2.28401 11.9419 1.89768C11.0092 1.51134 10.0095 1.3125 9 1.3125M9 16.6875C7.99046 16.6875 6.99081 16.4887 6.05812 16.1023C5.12543 15.716 4.27797 15.1497 3.56412 14.4359C2.85027 13.722 2.28401 12.8746 1.89768 11.9419C1.51134 11.0092 1.3125 10.0095 1.3125 9C1.3125 7.99046 1.51134 6.99081 1.89768 6.05812C2.28401 5.12543 2.85027 4.27797 3.56412 3.56412C4.27797 2.85027 5.12543 2.28401 6.05812 1.89768C6.99081 1.51134 7.99046 1.3125 9 1.3125M9 16.6875C11.3584 16.6875 12.3663 12.2774 12.3663 9C12.3663 5.72256 11.3584 1.3125 9 1.3125M9 16.6875C6.64165 16.6875 5.63373 12.2774 5.63373 9C5.63373 5.72256 6.64165 1.3125 9 1.3125M1.73958 6.4375H16.2604M1.73958 11.5625H16.2604"
                      stroke="#121118"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Rotating
                </button>
                <button
                  className={`px-4 py-2 border rounded-md gap-1 flex ${
                    sessionType === "sticky"
                      ? "bg-green-50 text-green-700 text-xs font-medium dark:bg-[#161B1E] dark:text-green-400"
                      : "bg-gray-100 text-gray-600 text-xs font-medium dark:bg-[#161B1E] dark:text-gray-400"
                  }`}
                  onClick={() => setSessionType("sticky")}
                >
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15.5C3.35059 15.5 0 12.1272 0 8C0 3.85059 3.37278 0.5 7.5 0.5C11.6272 0.5 15 3.87278 15 8C15 12.1272 11.6494 15.5 7.5 15.5ZM7.5 1.29882C3.81657 1.29882 0.798817 4.29438 0.798817 7.97781C0.798817 11.6612 3.79438 14.679 7.5 14.679C11.2056 14.679 14.2012 11.6834 14.2012 7.97781C14.2012 4.29438 11.1834 1.29882 7.5 1.29882Z"
                      fill="url(#paint0_linear_0_5444)"
                    />
                    <path
                      d="M10.1608 11.0393C10.0498 11.0393 9.96106 10.995 9.8723 10.9284L7.20958 8.26566C7.14301 8.19909 7.09863 8.08814 7.09863 7.9772V3.11773C7.09863 2.89584 7.27615 2.71832 7.49804 2.71832C7.71993 2.71832 7.89745 2.89584 7.89745 3.11773V7.82187L10.427 10.3515C10.5824 10.5068 10.5824 10.7731 10.427 10.9284C10.3605 10.995 10.2495 11.0393 10.1608 11.0393Z"
                      fill="url(#paint1_linear_0_5444)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_5444"
                        x1="7.5"
                        y1="0.5"
                        x2="7.5"
                        y2="15.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#555555" />
                        <stop offset="1" stop-color="#2C2C2C" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_5444"
                        x1="8.82108"
                        y1="2.71832"
                        x2="8.82108"
                        y2="11.0393"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#555555" />
                        <stop offset="1" stop-color="#2C2C2C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Sticky Session
                </button>
              </div>

              {sessionType === "sticky" ? (
                <div className="mt-4">
                  <label className="text-xs text-gray-600 dark:text-gray-400">
                    Lifetime (minutes)
                  </label>
                  <input
                    type="number"
                    defaultValue={60}
                    className="w-full text-xs  p-2 border rounded-md mt-2 bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300"
                  />
                </div>
              ) : (
                <div className="mt-4 text-sm text-[#525252] dark:text-gray-400">
                  <p>
                    If proxies are set as{" "}
                    <span className="font-bold text-green-600 dark:text-green-400">
                      rotating
                    </span>
                    , they will rotate with each request, and you will get a new
                    IP from the pool every second, based on your settings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Plan Details */}
          <div className="p-6 bg-green-50 dark:bg-[#1E2327] rounded-lg shadow-sm space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <p className="text-[#525252] dark:text-gray-400 text-xs font-medium">
                Plan Name:{" "}
                <span className="text-xs ml-3 font-medium">{plan.name}</span>
              </p>
              <p className="text-[#525252] dark:text-gray-400 text-xs font-medium">
                Paid at:{" "}
                <span className="text-xs ml-3 font-medium">{plan.paidAt}</span>
              </p>
              <p className="text-[#525252] dark:text-gray-400 text-xs font-medium">
                Plan ID:{" "}
                <span className="text-xs ml-3 font-medium">{plan.planId}</span>
              </p>
              <p className="text-[#525252] dark:text-gray-400 text-xs font-medium">
                Valid until:{" "}
                <span className="text-xs ml-3 font-medium">
                  {plan.validUntil}
                </span>
              </p>
              <p className="text-[#525252] dark:text-gray-400 text-xs font-medium">
                Bandwidth left:{" "}
                <span className="text-xs ml-3 font-medium">
                  {plan.bandwidthLeft}
                </span>
              </p>
            </div>
          </div>

          {/* Copy Proxy Details */}
          <div className="p-6 bg-white dark:bg-[#1E2327] rounded-lg ">
            <h2 className="text-sm font-medium text-[#121118] dark:text-gray-100 mb-4">
              Copy proxy details manually:
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-[#525252] text-xs font-medium dark:text-gray-400">
                Username:{" "}
                <span className=" text-[#525252] text-xs font-medium ml-3">
                  {plan.username}
                </span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium ml-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25004 0.895874C2.39759 0.895874 0.895874 2.39759 0.895874 4.25004V8.39571C0.895874 8.63734 1.09175 8.83321 1.33337 8.83321C1.575 8.83321 1.77087 8.63734 1.77087 8.39571V4.25004C1.77087 2.88083 2.88083 1.77087 4.25004 1.77087H8.34087C8.5825 1.77087 8.77837 1.575 8.77837 1.33337C8.77837 1.09175 8.5825 0.895874 8.34087 0.895874H4.25004Z"
                      fill="#020611"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.73486 2.96278C7.84431 2.75148 5.90579 2.75148 4.01524 2.96278C3.47666 3.02297 3.04386 3.44682 2.98038 3.98957C2.75616 5.90668 2.75616 7.8434 2.98038 9.76051C3.04386 10.3033 3.47666 10.7271 4.01524 10.7873C5.90579 10.9986 7.84431 10.9986 9.73486 10.7873C10.2734 10.7271 10.7062 10.3033 10.7697 9.76051C10.9939 7.8434 10.9939 5.90668 10.7697 3.98957C10.7062 3.44682 10.2734 3.02297 9.73486 2.96278ZM4.11243 3.83236C5.93839 3.62828 7.81171 3.62828 9.63768 3.83236C9.77613 3.84784 9.88498 3.95733 9.90064 4.09122C10.117 5.94079 10.117 7.80928 9.90064 9.65886C9.88498 9.79275 9.77613 9.90224 9.63768 9.91772C7.81171 10.1218 5.93839 10.1218 4.11243 9.91772C3.97397 9.90224 3.86512 9.79275 3.84946 9.65886C3.63313 7.80928 3.63313 5.94079 3.84946 4.09122C3.86512 3.95733 3.97397 3.84784 4.11243 3.83236Z"
                      fill="#020611"
                    />
                  </svg>
                </button>
              </p>
              <p className="text-[#525252] text-xs font-medium dark:text-gray-400">
                Hostname:{" "}
                <span className=" text-[#525252] text-xs font-medium ml-3">
                  {plan.hostname}
                </span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium ml-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25004 0.895874C2.39759 0.895874 0.895874 2.39759 0.895874 4.25004V8.39571C0.895874 8.63734 1.09175 8.83321 1.33337 8.83321C1.575 8.83321 1.77087 8.63734 1.77087 8.39571V4.25004C1.77087 2.88083 2.88083 1.77087 4.25004 1.77087H8.34087C8.5825 1.77087 8.77837 1.575 8.77837 1.33337C8.77837 1.09175 8.5825 0.895874 8.34087 0.895874H4.25004Z"
                      fill="#020611"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.73486 2.96278C7.84431 2.75148 5.90579 2.75148 4.01524 2.96278C3.47666 3.02297 3.04386 3.44682 2.98038 3.98957C2.75616 5.90668 2.75616 7.8434 2.98038 9.76051C3.04386 10.3033 3.47666 10.7271 4.01524 10.7873C5.90579 10.9986 7.84431 10.9986 9.73486 10.7873C10.2734 10.7271 10.7062 10.3033 10.7697 9.76051C10.9939 7.8434 10.9939 5.90668 10.7697 3.98957C10.7062 3.44682 10.2734 3.02297 9.73486 2.96278ZM4.11243 3.83236C5.93839 3.62828 7.81171 3.62828 9.63768 3.83236C9.77613 3.84784 9.88498 3.95733 9.90064 4.09122C10.117 5.94079 10.117 7.80928 9.90064 9.65886C9.88498 9.79275 9.77613 9.90224 9.63768 9.91772C7.81171 10.1218 5.93839 10.1218 4.11243 9.91772C3.97397 9.90224 3.86512 9.79275 3.84946 9.65886C3.63313 7.80928 3.63313 5.94079 3.84946 4.09122C3.86512 3.95733 3.97397 3.84784 4.11243 3.83236Z"
                      fill="#020611"
                    />
                  </svg>
                </button>
              </p>
              <p className="text-[#525252] text-xs font-medium dark:text-gray-400">
                Password:{" "}
                <span className=" text-[#525252] text-xs font-medium ml-3">
                  {plan.password}
                </span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium ml-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25004 0.895874C2.39759 0.895874 0.895874 2.39759 0.895874 4.25004V8.39571C0.895874 8.63734 1.09175 8.83321 1.33337 8.83321C1.575 8.83321 1.77087 8.63734 1.77087 8.39571V4.25004C1.77087 2.88083 2.88083 1.77087 4.25004 1.77087H8.34087C8.5825 1.77087 8.77837 1.575 8.77837 1.33337C8.77837 1.09175 8.5825 0.895874 8.34087 0.895874H4.25004Z"
                      fill="#020611"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.73486 2.96278C7.84431 2.75148 5.90579 2.75148 4.01524 2.96278C3.47666 3.02297 3.04386 3.44682 2.98038 3.98957C2.75616 5.90668 2.75616 7.8434 2.98038 9.76051C3.04386 10.3033 3.47666 10.7271 4.01524 10.7873C5.90579 10.9986 7.84431 10.9986 9.73486 10.7873C10.2734 10.7271 10.7062 10.3033 10.7697 9.76051C10.9939 7.8434 10.9939 5.90668 10.7697 3.98957C10.7062 3.44682 10.2734 3.02297 9.73486 2.96278ZM4.11243 3.83236C5.93839 3.62828 7.81171 3.62828 9.63768 3.83236C9.77613 3.84784 9.88498 3.95733 9.90064 4.09122C10.117 5.94079 10.117 7.80928 9.90064 9.65886C9.88498 9.79275 9.77613 9.90224 9.63768 9.91772C7.81171 10.1218 5.93839 10.1218 4.11243 9.91772C3.97397 9.90224 3.86512 9.79275 3.84946 9.65886C3.63313 7.80928 3.63313 5.94079 3.84946 4.09122C3.86512 3.95733 3.97397 3.84784 4.11243 3.83236Z"
                      fill="#020611"
                    />
                  </svg>
                </button>
              </p>
              <p className="text-[#525252] text-xs font-medium dark:text-gray-400">
                Port:{" "}
                <span className=" text-[#525252] text-xs font-medium ml-3">
                  {plan.port}
                </span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium ml-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25004 0.895874C2.39759 0.895874 0.895874 2.39759 0.895874 4.25004V8.39571C0.895874 8.63734 1.09175 8.83321 1.33337 8.83321C1.575 8.83321 1.77087 8.63734 1.77087 8.39571V4.25004C1.77087 2.88083 2.88083 1.77087 4.25004 1.77087H8.34087C8.5825 1.77087 8.77837 1.575 8.77837 1.33337C8.77837 1.09175 8.5825 0.895874 8.34087 0.895874H4.25004Z"
                      fill="#020611"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.73486 2.96278C7.84431 2.75148 5.90579 2.75148 4.01524 2.96278C3.47666 3.02297 3.04386 3.44682 2.98038 3.98957C2.75616 5.90668 2.75616 7.8434 2.98038 9.76051C3.04386 10.3033 3.47666 10.7271 4.01524 10.7873C5.90579 10.9986 7.84431 10.9986 9.73486 10.7873C10.2734 10.7271 10.7062 10.3033 10.7697 9.76051C10.9939 7.8434 10.9939 5.90668 10.7697 3.98957C10.7062 3.44682 10.2734 3.02297 9.73486 2.96278ZM4.11243 3.83236C5.93839 3.62828 7.81171 3.62828 9.63768 3.83236C9.77613 3.84784 9.88498 3.95733 9.90064 4.09122C10.117 5.94079 10.117 7.80928 9.90064 9.65886C9.88498 9.79275 9.77613 9.90224 9.63768 9.91772C7.81171 10.1218 5.93839 10.1218 4.11243 9.91772C3.97397 9.90224 3.86512 9.79275 3.84946 9.65886C3.63313 7.80928 3.63313 5.94079 3.84946 4.09122C3.86512 3.95733 3.97397 3.84784 4.11243 3.83236Z"
                      fill="#020611"
                    />
                  </svg>
                </button>
              </p>
            </div>
          </div>

          {/* Proxy Details Box */}
          <div className="p-6 bg-[#161B1E] text-white rounded-lg shadow-md relative">
            {/* Plan ID Dropdown */}
            <div className="mb-4">
              <select className="w-full p-2 border border-gray-700 rounded-md text-sm font-medium bg-gray-900 text-gray-300 focus:outline-none">
                <option>{`Plan ID: ${plan.planId}`}</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mb-4">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-700 rounded-md hover:bg-gray-700 text-xs font-medium">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 2.9375C4.86827 2.9375 2.9375 4.86827 2.9375 7.25V12.5802C2.9375 12.8908 3.18934 13.1427 3.5 13.1427C3.81066 13.1427 4.0625 12.8908 4.0625 12.5802V7.25C4.0625 5.48959 5.48959 4.0625 7.25 4.0625H12.5096C12.8203 4.0625 13.0721 3.81066 13.0721 3.5C13.0721 3.18934 12.8203 2.9375 12.5096 2.9375H7.25Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3019 5.59494C11.8712 5.32328 9.37882 5.32328 6.94811 5.59494C6.25565 5.67234 5.6992 6.21728 5.61758 6.91511C5.3293 9.37997 5.3293 11.87 5.61758 14.3349C5.6992 15.0327 6.25565 15.5777 6.94811 15.6551C9.37882 15.9267 11.8712 15.9267 14.3019 15.6551C14.9944 15.5777 15.5508 15.0327 15.6324 14.3349C15.9207 11.87 15.9207 9.37997 15.6324 6.91511C15.5508 6.21728 14.9944 5.67234 14.3019 5.59494ZM7.07307 6.71298C9.42073 6.4506 11.8293 6.4506 14.177 6.71298C14.355 6.73288 14.4949 6.87366 14.5151 7.0458C14.7932 9.42383 14.7932 11.8262 14.5151 14.2042C14.4949 14.3763 14.355 14.5171 14.177 14.537C11.8293 14.7994 9.42073 14.7994 7.07307 14.537C6.89505 14.5171 6.7551 14.3763 6.73497 14.2042C6.45683 11.8262 6.45683 9.42383 6.73497 7.0458C6.7551 6.87366 6.89505 6.73288 7.07307 6.71298Z"
                    fill="white"
                  />
                </svg>
                COPY
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-700 rounded-md hover:bg-gray-700 text-xs font-medium">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.1875 13.25C2.1875 15.2175 3.78249 16.8125 5.75 16.8125L13.25 16.8125C15.2175 16.8125 16.8125 15.2175 16.8125 13.25L16.8125 10.25C16.8125 8.28249 15.2175 6.6875 13.25 6.6875L12.875 6.6875C12.5643 6.6875 12.3125 6.93934 12.3125 7.25C12.3125 7.56066 12.5643 7.8125 12.875 7.8125L13.25 7.8125C14.5962 7.8125 15.6875 8.90381 15.6875 10.25L15.6875 13.25C15.6875 14.5962 14.5962 15.6875 13.25 15.6875L5.75 15.6875C4.40381 15.6875 3.3125 14.5962 3.3125 13.25L3.3125 10.25C3.3125 8.90381 4.40381 7.8125 5.75 7.8125L6.125 7.8125C6.43566 7.8125 6.6875 7.56066 6.6875 7.25C6.6875 6.93934 6.43566 6.6875 6.125 6.6875L5.75 6.6875C3.78249 6.6875 2.1875 8.28249 2.1875 10.25L2.1875 13.25ZM6.85225 9.89775C6.63258 9.67808 6.63258 9.32192 6.85225 9.10225C7.07192 8.88258 7.42808 8.88258 7.64775 9.10225L8.9375 10.392L8.9375 2.75C8.9375 2.43934 9.18934 2.1875 9.5 2.1875C9.81066 2.1875 10.0625 2.43934 10.0625 2.75L10.0625 10.392L11.3523 9.10225C11.5719 8.88258 11.9281 8.88258 12.1477 9.10225C12.3674 9.32192 12.3674 9.67808 12.1477 9.89775L9.89775 12.1477C9.67808 12.3674 9.32192 12.3674 9.10225 12.1477L6.85225 9.89775Z"
                    fill="white"
                  />
                </svg>
                DOWNLOAD
              </button>
            </div>

            {/* Line Numbers and Code Content */}
            <div className="flex">
              {/* Line Numbers */}
              <div className="text-[#525252] text-sm pr-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
              {/* Code Content */}
              <div className="overflow-x-auto max-h-40">
                <pre className="text-sm text-white whitespace-pre-wrap break-words">
                  Residential-
                  <span className="text-green-400">Www.Catproxies.Com</span>
                  :16666:Quzymgdycnvny94326-Zone-Resi:
                  <span className="text-yellow-400">Xkqzdjzsu</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PlanDetails

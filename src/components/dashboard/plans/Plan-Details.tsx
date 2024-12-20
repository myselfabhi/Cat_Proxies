"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

interface PlanDetailsProps {
  planId: string;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ planId }) => {
  const plansData = [
    {
      id: "1",
      name: "Residential Proxy",
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
  ];

  const plan = plansData.find((p) => p.id === planId);
  const [sessionType, setSessionType] = useState<"rotating" | "sticky">("sticky");

  if (!plan) {
    return (
      <DashboardLayout>
        <p className="text-center text-red-500 text-lg mt-4 dark:text-red-300">
          Plan not found
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 container mx-auto px-6 py-8">
        {/* Left Section */}
        <div className="p-6 bg-white dark:bg-[#1E2327] rounded-lg shadow-sm space-y-4">
          <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100">{plan.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
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
                      (parseInt(plan.bandwidthLeft) / parseInt(plan.totalBandwidth)) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="flex gap-5 justify-end mt-2">
              <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">
                      Bandwidth Left:
                      </p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.bandwidthLeft}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">
                      Total Bandwidth:
                      </p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.totalBandwidth}
                      </p>
                    </div>
              </div>
            </div>

            {/* Protocol */}
            <div>
              <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100">Protocol</h2>
              <div className="flex items-center gap-4 mt-2">
                <button className="px-4 py-2 text-xs font-medium border rounded-md bg-green-50 text-green-700 dark:bg-[#161B1E] dark:text-green-400">
                  HTTP
                </button>
                <button className="px-4 py-2 border text-xs font-medium rounded-md bg-gray-100 text-gray-600 dark:bg-[#161B1E] dark:text-gray-400">
                  SOCKS5
                </button>
              </div>
            </div>

            {/* Format */}
            <div className="space-y-2">
              <h2 className="text-xs font-normal text-gray-800 dark:text-gray-100">Format</h2>
              <select className="w-full p-2 border rounded-md text-xs font-medium bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                <option>hostname:port:username:password</option>
                <option>username:password@hostname:port</option>
              </select>
            </div>

            {/* Location Settings */}
            <div>
              <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100">Location Settings</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Select a precise proxy location or leave it random.
              </p>
              <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-xs font-normal text-gray-800 dark:text-gray-100 mt-2">Country</h2>
                <select className="p-2 border text-xs font-medium rounded-md bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                  <option>United States of America</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                </select>
                <h2 className="text-xs font-normal text-gray-800 dark:text-gray-100 mt-2">State</h2>
                <select className="p-2 border text-xs font-medium rounded-md bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                  <option>Random</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
                <h2 className="text-xs font-normal text-gray-800 dark:text-gray-100 mt-2">ISP</h2>
                <select className="p-2 border text-xs font-medium rounded-md bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300">
                  <option>Random</option>
                  <option>AT&T</option>
                  <option>Verizon</option>
                </select>
              </div>
            </div>

            {/* Session Settings */}
            <div>
              <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100">Session Settings</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Keep the same IP address for up to 120 minutes with a sticky session or get a new IP address with each
                request.
              </p>
              <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100 mt-4">Type</h2>
              <div className="flex items-center gap-4 mt-2">
              
                <button
                  className={`px-4 py-2 border rounded-md ${
                    sessionType === "rotating"
                      ? "bg-green-50 text-green-700 text-xs font-medium dark:bg-[#161B1E] dark:text-green-400"
                      : "bg-gray-100 text-gray-600 text-xs font-medium dark:bg-[#161B1E] dark:text-gray-400"
                  }`}
                  onClick={() => setSessionType("rotating")}
                >
                  Rotating
                </button>
                <button
                  className={`px-4 py-2 border rounded-md ${
                    sessionType === "sticky"
                      ? "bg-green-50 text-green-700 text-xs font-medium dark:bg-[#161B1E] dark:text-green-400"
                      : "bg-gray-100 text-gray-600 text-xs font-medium dark:bg-[#161B1E] dark:text-gray-400"
                  }`}
                  onClick={() => setSessionType("sticky")}
                >
                  Sticky Session
                </button>
              </div>

              {sessionType === "sticky" ? (
                <div className="mt-4">
                  <label className="text-xs text-gray-600 dark:text-gray-400">Lifetime (minutes)</label>
                  <input
                    type="number"
                    defaultValue={60}
                    className="w-full text-xs  p-2 border rounded-md mt-2 bg-gray-50 dark:bg-[#161B1E] dark:text-gray-300"
                  />
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    If proxies are set as <span className="font-bold text-green-600 dark:text-green-400">rotating</span>,
                    they will rotate with each request, and you will get a new IP from the pool every second, based on
                    your settings.
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
              <p className="text-gray-700 dark:text-gray-400 text-xs font-medium">
                Plan Name: <span className="text-xs ml-3 font-medium">{plan.name}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-xs font-medium">
                Paid at: <span className="text-xs ml-3 font-medium">{plan.paidAt}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-xs font-medium">
                Plan ID: <span className="text-xs ml-3 font-medium">{plan.planId}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-xs font-medium">
                Valid until: <span className="text-xs ml-3 font-medium">{plan.validUntil}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-xs font-medium">
                Bandwidth left: <span className="text-xs ml-3 font-medium">{plan.bandwidthLeft}</span>
              </p>
            </div>
          </div>

          {/* Copy Proxy Details */}
          <div className="p-6 bg-white dark:bg-[#1E2327] rounded-lg ">
            <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-4">
              Copy proxy details manually:
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-700 text-xs font-medium dark:text-gray-400">
                Username:{" "}
                <span className="text-xs font-medium">{plan.username}</span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium">
                  Copy
                </button>
              </p>
              <p className="text-gray-700 text-xs font-medium dark:text-gray-400">
                Hostname:{" "}
                <span className="text-xs font-medium">{plan.hostname}</span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium">
                  Copy
                </button>
              </p>
              <p className="text-gray-700 text-xs font-medium dark:text-gray-400">
                Password:{" "}
                <span className="text-xs font-medium">{plan.password}</span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium">
                  Copy
                </button>
              </p>
              <p className="text-gray-700 text-xs font-medium dark:text-gray-400">
                Port: <span className="text-xs font-medium">{plan.port}</span>{" "}
                <button className="text-blue-500 hover:underline text-xs font-medium">
                  Copy
                </button>
              </p>
            </div>
          </div>

          {/* Proxy Details Box */}
          <div className="p-6 bg-black text-white rounded-lg shadow-md">
            <div className="justify-between mb-2 flex flex-col space-y-4">
            <select className="w-full p-2 border rounded-md text-sm font-medium bg-black dark:bg-[#161B1E] dark:text-gray-300">
                <option>{`Plan ID: ${plan.planId}`}</option>
              </select>
              <div className="flex gap-2">
                <button className="px-2 py-1 border border-gray-50 rounded-md hover:bg-gray-600 text-xs font-medium">COPY</button>
                <button className="px-2 py-1 border border-gray-50 rounded-md hover:bg-gray-600 text-xs font-medium">DOWNLOAD</button>
              </div>
            </div>
            <div className="overflow-x-auto max-h-40 p-4 rounded-lg">
              <pre className="text-sm text-green-400 whitespace-pre-wrap break-words">
                Residential-
                <span className="text-blue-400">Www.Catproxies.Com</span>:16666:Quzymgdycnvny94326-Zone-Resi:
                <span className="text-yellow-400">Xkqzdjzsu</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlanDetails;

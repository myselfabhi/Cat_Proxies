"use client";

import DashboardLayout from "@/components/layout";
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
        <p className="text-center text-red-500 text-lg mt-4">Plan not found</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 container mx-auto px-6 py-8">
        {/* Left Section */}
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
          <h1 className="text-2xl font-bold">{plan.name}</h1>
          <p className="text-gray-600">
            Boost security with proxies, shielding your network, filtering
            traffic, and preserving anonymity online.
          </p>
          <div className="space-y-6">
            {/* Bandwidth */}
            <div>
              <p className="text-sm text-gray-600">{`Bandwidth Left: ${plan.bandwidthLeft}`}</p>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
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
              <p className="text-sm text-gray-600">{`Total Bandwidth: ${plan.totalBandwidth}`}</p>
            </div>

            {/* Protocol */}
            <div>
              <h2 className="text-lg font-bold">Protocol</h2>
              <div className="flex items-center gap-4 mt-2">
                <button className="px-4 py-2 border rounded-md bg-green-50 text-green-700">
                  HTTP
                </button>
                <button className="px-4 py-2 border rounded-md bg-gray-100 text-gray-600">
                  SOCKS5
                </button>
              </div>
            </div>

            {/* Format */}
            <div>
              <h2 className="text-lg font-bold">Format</h2>
              <select className="w-full p-2 border rounded-md">
                <option>hostname:port:username:password</option>
                <option>username:password@hostname:port</option>
              </select>
            </div>

            {/* Location Settings */}
            <div>
              <h2 className="text-lg font-bold">Location Settings</h2>
              <p className="text-sm text-gray-600">
                Select a precise proxy location or leave it random.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <select className="p-2 border rounded-md">
                  <option>United States of America</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                </select>
                <select className="p-2 border rounded-md">
                  <option>Random</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
                <select className="p-2 border rounded-md">
                  <option>Random</option>
                  <option>AT&T</option>
                  <option>Verizon</option>
                </select>
              </div>
            </div>

            {/* Session Settings */}
            <div>
      <h2 className="text-lg font-bold">Session Settings</h2>
      <p className="text-sm text-gray-600">
        Keep the same IP address for up to 120 minutes with a sticky session or get a new IP address with each request.
      </p>

      {/* Buttons to Select Session Type */}
      <div className="flex items-center gap-4 mt-4">
        <button
          className={`px-4 py-2 border rounded-md ${
            sessionType === "rotating" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setSessionType("rotating")}
        >
          Rotating
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${
            sessionType === "sticky" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setSessionType("sticky")}
        >
          Sticky Session
        </button>
      </div>

      {/* Conditional Rendering Based on Selected Session Type */}
      {sessionType === "sticky" ? (
        <div className="mt-4">
          <label className="text-sm text-gray-600">Lifetime (minutes)</label>
          <input
            type="number"
            defaultValue={60}
            className="w-full p-2 border rounded-md mt-2"
          />
        </div>
      ) : (
        <div className="mt-4 text-sm text-gray-600">
          <p>
            If proxies are set as <span className="font-bold text-green-600">rotating</span>, they will rotate with each request, and you will get a new IP from the pool every second, based on your settings.
          </p>
        </div>
      )}
    </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Plan Details */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-700 font-medium">
                Plan Name: <span className="font-normal">{plan.name}</span>
              </p>
              <p className="text-gray-700 font-medium">
                Paid at: <span className="font-normal">{plan.paidAt}</span>
              </p>
              <p className="text-gray-700 font-medium">
                Plan ID: <span className="font-normal">{plan.planId}</span>
              </p>
              <p className="text-gray-700 font-medium">
                Valid until:{" "}
                <span className="font-normal">{plan.validUntil}</span>
              </p>
              <p className="text-gray-700 font-medium">
                Bandwidth left:{" "}
                <span className="font-normal">{plan.bandwidthLeft}</span>
              </p>
            </div>
          </div>

          {/* Copy Proxy Details */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Copy proxy details manually:
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-700">
                Username:{" "}
                <span className="font-medium">{plan.username}</span>{" "}
                <button className="text-blue-500 hover:underline text-sm">
                  Copy
                </button>
              </p>
              <p className="text-gray-700">
                Hostname:{" "}
                <span className="font-medium">{plan.hostname}</span>{" "}
                <button className="text-blue-500 hover:underline text-sm">
                  Copy
                </button>
              </p>
              <p className="text-gray-700">
                Password:{" "}
                <span className="font-medium">{plan.password}</span>{" "}
                <button className="text-blue-500 hover:underline text-sm">
                  Copy
                </button>
              </p>
              <p className="text-gray-700">
                Port: <span className="font-medium">{plan.port}</span>{" "}
                <button className="text-blue-500 hover:underline text-sm">
                  Copy
                </button>
              </p>
            </div>
          </div>

          {/* Proxy Details Box */}
          <div className="p-6 bg-black text-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">{`Plan ID: ${plan.planId}`}</p>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-600 text-sm">COPY</button>
                <button className="px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-600 text-sm">DOWNLOAD</button>
              </div>
            </div>
            <div className="overflow-x-auto max-h-40 bg-gray-800 p-4 rounded-lg">
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

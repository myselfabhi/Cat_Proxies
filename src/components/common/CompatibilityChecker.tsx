"use client"

import { useState } from "react"
import axios from "@/utils/axios"
import { FaLink, FaCircleCheck } from "react-icons/fa6"
import { IoIosCloseCircle } from "react-icons/io"
import toast from "react-hot-toast"

const initialIpv6Compatibility = {
  compatible: false,
  a4Records: [],
  domain: "",
}

export default function CompatibilityChecker() {
  const [domain, setDomain] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [ipv6Compatibility, setIpv6Compatibility] = useState(
    initialIpv6Compatibility
  )

  async function checkIpv6Compatibility() {
    try {
      if (!domain || !domain.includes(".")) {
        return toast.error("Please enter a valid domain")
      }

      setIpv6Compatibility(initialIpv6Compatibility)
      setIsLoading(true)

      const res = await axios.post("users/compatibility-checker", {
        domain,
        proxyType: "Ipv6",
      })
      const data = res.data.payload

      if (data.compatible) {
        setIpv6Compatibility(data)
        toast.success("Domain is compatible with IPv6")
      } else {
        toast.error("Domain is not compatible with IPv6")
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message || "Error checking IPv6 compatibility")
    } finally {
      setIsLoading(false)
    }
  }

  // Skeleton component for loading
  function LoadingSkeleton() {
    return (
      <div className="mt-10 p-6 border border-gray-300 rounded-lg bg-gray-50 animate-pulse">
        <div className="space-y-5">
          <div className="bg-gray-200 p-4 rounded-md h-8 w-3/4"></div>
          <div className="bg-gray-200 p-4 rounded-md h-5 w-1/2"></div>
          <div className="bg-gray-200 p-4 rounded-md h-5 w-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12" id="prices">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">IPv6 Compatibility Checker</h1>
        <p className="text-lg text-gray-500">
          Check if your website is compatible with IPv6
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <FaLink />
            </span>
            <input
              type="text"
              name="domain"
              placeholder="www.example.com"
              className="w-full sm:w-auto pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 text-gray-900"
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          <button
            className={`px-4 py-2 text-white font-semibold rounded-md transition ${
              isLoading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={isLoading}
            onClick={checkIpv6Compatibility}
          >
            Check{isLoading ? "ing..." : ""}
          </button>
        </div>
      </div>

      {/* Show skeleton loader if loading, else show result */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="mt-10 p-6 border border-green-500 rounded-lg bg-green-50">
          <div className="space-y-5">
            <div className="bg-green-100 p-4 rounded-md">
              <h2 className="text-md font-semibold">IPv6 Compatibility Info</h2>
              <div className="mt-2 flex items-center">
                <p className="font-semibold">IPv6 Fully Compatible:</p>
                <div
                  className={`ml-2 w-6 h-6 rounded-full flex items-center justify-center`}
                >
                  {ipv6Compatibility.compatible ? (
                    <FaCircleCheck size={24} color="green" />
                  ) : (
                    <IoIosCloseCircle size={24} color="red" />
                  )}
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-md">
              <h2 className="text-md font-semibold">AAAA Web Server Records</h2>
              {ipv6Compatibility?.compatible ? (
                ipv6Compatibility.a4Records.map((record, index) => (
                  <p key={index} className="mt-2">
                    <span className="font-semibold">
                      {ipv6Compatibility.domain}
                    </span>{" "}
                    {record}
                  </p>
                ))
              ) : (
                <p className="mt-2">No AAAA records found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

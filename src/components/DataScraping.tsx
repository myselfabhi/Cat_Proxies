import { title } from "process"
import React from "react"
import Residental from "./assets/DataScraping/Residental"
import Datacenter from "./assets/DataScraping/Datacenter"
import Ipv6 from "./assets/DataScraping/Ipv6"
import Staticisp from "./assets/DataScraping/Staticisp"
import Image from "next/image"
import BuyNow from "./BuyNow"

const Data = [
  {
    image: <Residental />,
    title: "Residential Proxies",
    description: "Real IPs from ISPs for reliable and secure web scraping",
    rate: "$2/GB",
    action: "Buy Now",
    color: "pinkg",
  },
  {
    image: <Datacenter />,
    title: "Datacenter Proxies",
    description:
      "High-speed, scalable proxies from data centers for bulk web scraping",
    rate: "$4.3/day",
    action: "Buy Now",
    color: "primary",
  },
  {
    image: <Ipv6 />,
    title: "IPV6 Proxies",
    description:
      "Modern, high-availability proxies with vast address space for advanced needs",
    rate: "$3.1/day",
    action: "Buy Now",
    color: "purple",
  },
  {
    image: <Staticisp />,
    title: "Static ISP Proxies",
    description:
      "Consistent IPs from ISPs for stable and uninterrupted connections",
    rate: "$2.5/IP",
    action: "Buy Now",
    color: "yellowg",
  },
]

const DataScraping = () => {
  return (
    <div className="relative  py-10 my-10 px-2 sm:px-0 ">
      <Image
        src="/hero2.svg"
        alt=""
        width={1000}
        height={1000}
        className="border w-full absolute -z-10 opacity-30"
      />
      <div className="py-28 mx-auto z-10  ">
        <div className="text-center  flex justify-center">
          <div className="max-w-3xl">
            <h1 className="text-[32px] leading-10">
              Efficient Data Scraping For{" "}
              <span className="font-bold">Projects Of Any Scale</span>
            </h1>
            <p className="text-[18px] text-[#A8A8A8] mt-2">
              From Premium Residential Proxies or responsive datacenter to
              static ISP solutions for any needs, experience the quality with
              CatProxies.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[956px] mt-12">
            {Data.map((data, index) => (
              <div
                key={index}
                className="flex  md:w-[462px] flex-col md:h-[307px] p-7 bg-white rounded-2xl gap-2 shadow-custom"
              >
                {data.image}
                <div className="text-2xl ">{data.title}</div>
                <div className="text-sm text-[#A8A8A8]">{data.description}</div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <p className="relative -mt-4 text-[14px] text-[#A8A8A8]">
                        Starting from
                      </p>
                      <div className="text-2xl mt-2 font-semibold text-[#020611]">
                        {data.rate}
                      </div>
                    </div>
                    <BuyNow
                      color={
                        data.color as "pinkg" | "primary" | "purple" | "yellowg"
                      }
                      action={data.action}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataScraping

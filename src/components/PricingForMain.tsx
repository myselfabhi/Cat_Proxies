import { title } from "process"
import React from "react"

import Image from "next/image"
import { Button } from "./ui/Button"
import Link from "next/link"
import { REGISTER_URL } from "@/lib/constants"
import { redirectToRegister } from "@/lib/utils"

const plans = [
  "Unlimited concurrent sessions",
  "Rotating or Static",
  "Free geo-targeting",
  "Avg. 0.6s response time",
  "Avg. 99.9% success rates",
  "HTTP/HTTPS/SOCKS5 protocols",
]
type ExploreInterface = {
  plan: string
  pricePerGB: string
  totalCost: string
  action: string
  variant: string
  to: string
}
const Explore: ExploreInterface[] = [
  {
    plan: "Free Trial",
    pricePerGB: "FREE",
    totalCost: "FREE",
    action: "Contact Us",
    variant: "white",
    to: "/contact-us",
  },
  {
    plan: "1GB",
    pricePerGB: "$3.5",
    totalCost: "$3.5",
    action: "Buy Now",
    variant: "blue",
    to: REGISTER_URL,
  },
  {
    plan: "5GB",
    pricePerGB: "Price Per GB",
    totalCost: "$3",
    action: "$15",
    variant: "blue",
    to: REGISTER_URL,
  },
  {
    plan: "25GB",
    pricePerGB: "Price Per GB",
    totalCost: "$2.7",
    action: "$67.5",
    variant: "blue",
    to: REGISTER_URL,
  },
  {
    plan: "100GB",
    pricePerGB: "Price Per GB",
    totalCost: "$250",
    action: "Buy Now",
    variant: "blue",
    to: REGISTER_URL,
  },
]

type typeInterface = "blue" | "green" | "purple"

const PricingForMain = ({
  type,
  plans,
  Explore,
  setTab,
  tab,
}: {
  type: typeInterface
  plans: string[]
  Explore: ExploreInterface[]
  setTab: Function
  tab: string
}) => {
  return (
    <div className="bg-white sm:px-4 lg:px-20 px-2 my-10 py-20">
      <div className="sm:p-4 py-8 md:p-8 lg:p-16 mx-auto   sm:shadow-pricingCard ">
        <div className="text-center  flex  justify-center">
          <div className="max-w-[487px]">
            <h1 className="text-[32px] leading-10">
              Clear Pricing, No Hidden{" "}
              <span className="font-bold">Costs whatsoever</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <div className="w-full md:w-[600px]">
            <div className="border-b ">
              <ul className="flex justify-between w-full -mb-px text-lg  text-center text-gray-800 ">
                <li className=" basis-1/3">
                  <a
                    href="#"
                    onClick={() => setTab("residential")}
                    className={`inline-flex items-center justify-center w-full py-4 pb-1 px-0 text-md ${
                      tab == "residential"
                        ? "text-[#5089FD] border-b-[3px] font-semibold border-[#5089FD] rounded-t-lg active "
                        : "border-b-2 border-transparent hover:text-gray-600"
                    } `}
                  >
                    Residential
                  </a>
                </li>
                <li className="basis-1/3">
                  <a
                    href="#"
                    onClick={() => setTab("datacenter")}
                    className={`inline-flex items-center justify-center w-full py-4 pb-1 px-0  text-md  ${
                      tab == "datacenter"
                        ? "text-[#18C6AB] border-b-[3px] font-semibold border-[#18C6AB]  rounded-t-lg active  "
                        : "border-b-2 border-transparent hover:text-gray-600"
                    } `}
                    aria-current="page"
                  >
                    Datacenter
                  </a>
                </li>
                <li className=" basis-1/3">
                  <a
                    href="#"
                    onClick={() => setTab("ipv6")}
                    className={`inline-flex items-center justify-center w-full py-4 pb-1 px-0  text-md  ${
                      tab == "ipv6"
                        ? "text-[#7E00BE] border-b-[3px] font-semibold border-[#7E00BE]  rounded-t-lg active  "
                        : "border-b-2 border-transparent hover:text-gray-600 "
                    } `}
                  >
                    Ipv6
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* font - Satoshi Variable */}
          <div className="flex justify-center mt-10">
            <div className="flex flex-col lg:flex-row max-w-5xl gap-8">
              <div className="lg:w-1/5 text-[16px] text-center font-medium">
                All Plans Include:
              </div>
              <div className="flex lg:w-4/5 gap-5 flex-wrap justify-center ">
                {plans.map((plan, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        type == "green"
                          ? "bg-[#DFFFFD]"
                          : type == "blue"
                            ? "bg-[#DBF6FF]"
                            : "bg-[#F9F2FD]"
                      } font-medium rounded-[34px] px-[18px] py-[8px] text-[14px] w-fit`}
                    >
                      {plan}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 ">
            <div className="flex flex-col  max-w-6xl w-full overflow-x-scroll md:overflow-x-auto  mt-12">
              <div className="flex border-b border-[#E4E4E4] pb-10 w-full">
                <div className="basis-1/4"></div>
                <div className="basis-1/4 text-center">
                  Price Per {type == "blue" ? "GB" : "Day"}
                </div>
                <div className="basis-1/4 text-center">Total Cost</div>
                <div className="basis-1/4"></div>
              </div>
              <div className="flex flex-col min-w-[390px]">
                {Explore.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={` text-sm flex border-2 border-t-transparent border-x-white border-b border-[#E4E4E4]  ${
                        type == "green"
                          ? "hover:border-[#019B83] hover:bg-[#ECFBFA]"
                          : type == "blue"
                            ? "hover:border-[#246BFD] hover:bg-[#ECF5FF]"
                            : "hover:border-[#AF52DE] hover:bg-[#F9F2FD]"
                      } hover:border-2 hover:rounded-xl py-8 px-2  md:py-10 md:px-10 text-xl w-full items-center`}
                    >
                      <div className="basis-1/4 text-sm sm:text-xl md:text-2xl font-bold">
                        {item.plan}
                      </div>
                      <div
                        className={`basis-1/4 text-sm sm:text-xl md:text-2xl ${
                          type == "green"
                            ? "text-[#18C6AB]"
                            : type == "blue"
                              ? "text-[#5089FD]"
                              : "text-[#7E00BE]"
                        } text-center`}
                      >
                        {item.pricePerGB}
                      </div>
                      <div
                        className={`basis-1/4 text-sm sm:text-xl md:text-2xl ${
                          type == "green"
                            ? "text-[#18C6AB]"
                            : type == "blue"
                              ? "text-[#5089FD]"
                              : "text-[#7E00BE]"
                        } text-center`}
                      >
                        {item.totalCost}
                      </div>
                      <div className="basis-1/4 flex justify-end">
                        <Link
                          href={item.to}
                          target={
                            item.action.includes("Contact Us")
                              ? "_self"
                              : "_blank"
                          }
                        >
                          <Button
                            className="min-w-[100px] lg:min-w-[180px] px-2 lg:px-[30px] "
                            variant={
                              item.variant == "white"
                                ? "white"
                                : type == "blue"
                                  ? "blue"
                                  : type == "green"
                                    ? "greendg"
                                    : "purpledg"
                            }
                          >
                            {" "}
                            {item.action}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <Button
              variant="white"
              className="mt-10 sm:min-w-[382px] font-medium text-[#2C2C2C]"
              onClick={redirectToRegister}
            >
              Explore more plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PricingForMain

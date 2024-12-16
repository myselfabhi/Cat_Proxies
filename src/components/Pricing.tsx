import React from "react"

import { Button } from "./ui/Button"
import Link from "next/link"
import { REGISTER_URL } from "@/lib/constants"

type ExploreInterface = {
  plan: string
  pricePerGB: string
  totalCost: string
  action: string
  variant: string
  to: string
}

type typeInterface = "blue" | "green" | "purple"

const Pricing = ({
  type,
  plans,
  Explore,
}: {
  type: typeInterface
  plans: string[]
  Explore: ExploreInterface[]
}) => {
  return (
    <div className="bg-white px-4 lg:px-20  py-10 my-10">
      <div className="p-4 py-8 md:p-8 lg:p-16 mx-auto  shadow-pricingCard ">
        <div className="text-center  flex  justify-center">
          <div className="max-w-[487px]">
            <h1 className="text-[32px] leading-10">
              Clear Pricing, No Hidden{" "}
              <span className="font-bold">Costs whatsoever</span>
            </h1>
          </div>
        </div>
        {/* font - Satoshi Variable */}
        <div className="flex justify-center mt-8">
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
                          ? "bg-[#90E4FF]"
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
        <div className="flex justify-center mt-16 ">
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
                    className={` flex border-2 border-t-transparent border-x-white border-b border-[#E4E4E4]  ${
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
                      className={`basis-1/4 text-sm sm:text-xl md:text-2xl  ${
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
                    <div className="basis-1/4 text-sm sm:text-xl md:text-2xl flex justify-end">
                      <Link
                        href={item.to}
                        target={
                          item.action.includes("Contact Us")
                            ? "_self"
                            : "_blank"
                        }
                      >
                        <Button
                          className="min-w-[100px] lg:min-w-[180px] px-5 lg:px-[30px] "
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
        <div className="flex justify-center">
          <Link href={REGISTER_URL} target="_blank">
            <Button
              variant="white"
              className="mt-10 sm:min-w-[382px] font-medium text-[#2C2C2C] "
            >
              Explore more plans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Pricing

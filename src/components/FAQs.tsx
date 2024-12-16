"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"

export default function FAQs({
  colortheme,
  proxyType,
  faqs,
}: {
  colortheme: string
  proxyType:
    | "All"
    | "Ipv6 proxies"
    | "Datacenter proxies"
    | "Residential proxies"
  faqs: any
}) {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]) // Default open FAQ box is the first one
  const myStyle = {
    color: "#121118",
  }

  const handleToggle = (index: number) => {
    setOpenFaqs((prevOpenFaqs) =>
      prevOpenFaqs.includes(index)
        ? prevOpenFaqs.filter((faqIndex) => faqIndex !== index)
        : [...prevOpenFaqs, index]
    )
  }

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-20 my-10">
        <div className="flex justify-center items-center mb-8">
          <Image
            src="/images/illustration/cat.svg"
            alt="Cat Illustration"
            className="w-28 h-52"
            height={400}
            width={400}
          />
        </div>

        {/* Component */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h2 className="mx-auto text-center text-black text-[32px] lg:text-[32px]">
            Any Questions ?<br /> Read our{" "}
            <span
              style={{
                color: "#121118",
                fontFamily: "Sora",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              {"FAQ's"}
            </span>
          </h2>
        </div>
        {/* FAQs */}
        <div className="mt-10 flex flex-col justify-between lg:flex-row lg:flex-wrap">
          {faqs.map((faq: any, index: any) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className="cursor-pointer mx-4 flex max-w-[50%] flex-col lg:shrink lg:grow lg:basis-96"
            >
              {/* FAQ BLOCK */}
              <div
                className={`relative my-2 w-full 
                 ${
                   colortheme === "blue"
                     ? "hover:border-[#246BFD]"
                     : colortheme === "green"
                       ? "hover:border-[#05C067]"
                       : colortheme === "purple"
                         ? "hover:border-[#AF52DE]"
                         : "hover:border-[#019B83]"
                 } 
                 rounded-[10px] border px-12 py-8 ${
                   openFaqs.includes(index)
                     ? "border-[1px] border-image-source-[linear-gradient(133.32deg,#05C067_-18.1%,#50EA48_118.55%)]"
                     : "border-gray-300"
                 }`}
              >
                <h2
                  className={`font-normal text-[18px] ${
                    openFaqs.includes(index)
                      ? colortheme === "blue"
                        ? "text-[#246BFD]"
                        : colortheme === "green"
                          ? "text-[#05C067]"
                          : colortheme === "purple"
                            ? "text-[#AF52DE]"
                            : "text-[#019B83]"
                      : "text-black"
                  }`}
                >
                  {faq.question}
                </h2>
                {openFaqs.includes(index) && (
                  <p className="font-inter mt-4 text-base font-light text-gray-500">
                    {faq.answer}
                  </p>
                )}
                <button
                  onClick={() => handleToggle(index)}
                  className="absolute -z-10 right-5 top-9 cursor-pointer"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={12} cy={12} r={12} fill="white" />
                    {openFaqs.includes(index) ? (
                      <path
                        d="M7.05078 12H16.9508"
                        stroke={
                          colortheme === "blue"
                            ? "#246BFD"
                            : colortheme === "green"
                              ? "#05C067"
                              : colortheme === "purple"
                                ? "#AF52DE"
                                : "#019B83"
                        }
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : (
                      <>
                        <path
                          d="M7.05078 12H16.9508"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 7.05005V16.95"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"
import { useState } from "react"
import Image from "next/image"
import { Disclosure } from "@headlessui/react"
import { Button } from "./ui/Button"
import ActiveSvg from "./assets/active"
import InactiveSvg from "./assets/inactive"
import useRedirect from "@/hooks/useRedirect"

const faqs = [
  {
    icon: "/images/icons/seo-icon.svg",
    question: "E-Commerce",
    answer:
      "Secure and high-speed proxies tailored for e-commerce platforms. Enhance your online business operations with reliable and scalable proxy solutions.",
    to: "/Solutions/ad-verification",
  },
  {
    icon: "/images/icons/market.svg",
    question: "Social Media Marketing",
    answer:
      "Boost your social media campaigns with our dedicated proxies. Ensure seamless access and manage multiple accounts without restrictions.",
    to: "/Solutions/social-media",
  },
  {
    icon: "/images/icons/ad-icon.svg",
    question: "Market Research",
    answer:
      "Conduct thorough market research with our anonymous proxies. Gather accurate data and insights while maintaining your privacy and security.",
    to: "/Solutions/market-research",
  },
  {
    icon: "/images/icons/web-scraping-icon.svg",
    question: "Cybersecurity",
    answer:
      "Protect your online activities with our robust proxies. Safeguard your data and ensure anonymity with our secure and reliable proxy services.",
    to: "/Solutions/cyber-security",
  },
  {
    icon: "/images/icons/social-media-icon.svg",
    question: "SEO Monitoring",
    answer:
      "Monitor your SEO efforts with our dedicated proxies. Track rankings and gather data from search engines with our reliable and anonymous proxy solutions.",
    to: "/Solutions/seo-monitoring",
  },
  {
    icon: "/images/icons/e-commerce-icon.svg",
    question: "Ad Tech",
    answer:
      "Optimize your ad campaigns using our high-performance proxies. Access ad platforms without limitations and enhance your targeting strategies.",
    to: "/Solutions/ad-tech",
  },
]

type data = {
  image: string
  color: "blueOutline" | "greenOutline" | "purpleOutline" | "outline"
}

export default function WhySection({ Data }: { Data: data }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { redirectTo } = useRedirect()

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="bg-white py-20 my-10">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-secondary">
              <span
                style={{
                  color: "#121118",
                  fontFamily: "Sora",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
              >
                Popular
              </span>{" "}
              <span
                style={{
                  color: "#121118",
                  fontFamily: "Sora",
                  fontSize: "32px",
                  fontWeight: "600",
                }}
              >
                Use Cases
              </span>
            </h3>
            <p className="flex-col max-w-xl mx-auto mt-4 text-2xl text-[#525252]">
              Explore how our customers use our proxies
            </p>
            <div className="sm:flex sm:justify-center lg:justify-start">
              <Image
                src={Data.image}
                alt="Cat Proxies Illustration"
                className="w-[500px] h-[500px]"
                height={400}
                width={400}
              />
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="max-w-xl p-4 mx-auto bg-white border rounded-2xl border-gray-200 shadow-md "
                >
                  {({ open }) => (
                    <>
                      <dt className="">
                        <Disclosure.Button
                          className="flex items-center justify-between w-full"
                          onClick={() => handleToggle(index)}
                        >
                          <div className="flex items-center space-x-3 rounded-2xl">
                            <Image
                              src={faq.icon}
                              alt={faq.question}
                              className="w-[48px] h-[48px]"
                              height={400}
                              width={400}
                            />
                            <span className="text-[16px] text-[#6F6F6F]">
                              {faq.question}
                            </span>
                          </div>
                          <span className="flex items-center ml-6 h-7">
                            {openIndex === index ? (
                              <ActiveSvg />
                            ) : (
                              <InactiveSvg />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      {openIndex === index ? (
                        <div className="flex flex-col gap-8 items-start mt-4 ">
                          <p className="text-base font-normal text-[#6F6F6F]">
                            {faq.answer}
                          </p>
                          <Button
                            variant={Data.color}
                            className="w-full"
                            onClick={() => redirectTo(faq.to)}
                          >
                            Read more
                          </Button>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

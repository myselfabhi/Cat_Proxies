import React from "react"

import Image from "next/image"
import { Button } from "./ui/Button"
import Link from "next/link"

interface DataItem {
  image: string
  title: string
  description: string
  action?: string
  color: string
  direction: string
}

const Data: DataItem[] = [
  {
    image: "/images/illustration/green/CatNetwork.svg",
    title: "Integrity",
    description:
      "We prioritize quality over quantity in every proxy we offer. Our commitment to excellence is not just a promise; it's a reflection of our genuine care for our customers.",
    action: "Contact Us Now",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/green/CatSecurity.svg",
    title: "Privacy",
    description:
      "With our strict no-log policy, your usage remains completely private and untracked. Your online activities are your business, and we respect that.",
    action: "Contact Us Now",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/green/CatWithDesk.svg",
    title: "Cat Care Support",
    description:
      "Our dedicated team is here to address your questions and requests, every day, even on holidays. Not only that, but we are donating a part of our profit every month to animal shelters.",
    action: "Contact Us Now",
    color: "primary",
    direction: "left",
  },
]

type titleProps = {
  title: string
  span: string
  other: string
}

const title: titleProps = {
  title: "Why 2000+ clients choose",
  span: "CatProxies",
  other: "",
}

const WhyToChoose = ({
  title,
  Data,
}: {
  title: titleProps
  Data: DataItem[]
}) => {
  return (
    <div className="my-10 py-20">
      <div className="p-6 mx-auto  ">
        <div className="text-center  flex justify-center">
          <div className="max-w-2xl">
            <h1 className="text-[32px] leading-9">
              {title.title} <span className="font-bold">{title.span}</span>
              {title.other}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-7 max-w-6xl  mt-12">
            <div
              className={`flex justify-between max-w-[1150px] items-center xl:gap-48 gap-4 flex-col md:flex-row`}
            >
              <div className="flex flex-col gap-4 max-w-[544px] basis-1/2">
                <h1 className="text-[#121118] text-[34px] font-semibold">
                  {Data[0].title}
                </h1>
                <p className="text-[18px] leading-[26px] opacity-75">
                  {Data[0].description}
                </p>
                {Data[0].action ? (
                  <Button variant={"outline"}>
                    <Link href="/contact-us">{Data[0].action}</Link>
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <div className="xl:min-w-[450px] xl:min-h-[450px]">
                <Image
                  src={Data[0].image}
                  alt={Data[0].title}
                  className="w-[450px] h-[450px] "
                  width={500}
                  height={400}
                />
              </div>
            </div>

            <div
              className={`flex justify-between max-w-[1150px] items-center xl:gap-48 gap-4 flex-col md:flex-row-reverse`}
            >
              <div className="flex flex-col gap-4 max-w-[544px] basis-1/2">
                <h1 className="text-[#121118] text-[34px] font-semibold">
                  {Data[1].title}
                </h1>
                <p className="text-[18px] leading-[26px] opacity-75">
                  {Data[1].description}
                </p>
                {Data[1].action ? (
                  <Button variant={"outline"}>
                    <Link href="/contact-us">{Data[1].action}</Link>
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <div className="xl:min-w-[450px] xl:min-h-[450px]">
                <Image
                  src={Data[1].image}
                  alt={Data[1].title}
                  className="w-[450px] h-[450px] "
                  width={500}
                  height={400}
                />
              </div>
            </div>

            <div
              className={`flex justify-between max-w-[1150px] items-center xl:gap-48 gap-4 flex-col md:flex-row`}
            >
              <div className="flex flex-col gap-4 max-w-[544px] basis-1/2">
                <h1 className="text-[#121118] text-[34px] font-semibold">
                  {Data[2].title}
                </h1>
                <p className="text-[18px] leading-[26px] opacity-75">
                  {Data[2].description}
                </p>
                {Data[2].action ? (
                  <Button variant={"outline"}>
                    <Link href="/contact-us">{Data[2].action}</Link>
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <div className="xl:min-w-[450px] xl:min-h-[450px]">
                <Image
                  src={Data[2].image}
                  alt={Data[2].title}
                  className="w-[450px] h-[450px] "
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WhyToChoose

import Image from "next/image"
import { Button } from "./ui/Button"
import HeroPoints from "./assets/HeroPoints"
import GetStartedButton from "./GetStartedButton"
import GoogleLogin from "./GoogleLogin"

interface HeroContainer {
  title: string
  description: string
  points: string[]
  pointsColor: string
  image: string
  alt: string
  buttonColor:
    | "primary"
    | "blue"
    | "blueg"
    | "white"
    | "purple"
    | "purpleg"
    | "pinkg"
    | "yellowg"
    | "greendg"
    | "greenlg"
    | "purpledg"
    | "outline"
}

export default function HeroSection({ data }: { data: HeroContainer }) {
  return (
    <div className="py-16  pb-1 overflow-hidden z-10">
      <div className=" z-10  mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-4 flex  items-center lg:items-start">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:flex-auto">
              <div className="flex items-center text-base text-gray-600 gap-x-4 justify-center lg:justify-start">
                <span className="flex items-center justify-center gap-x-1">
                  <Image
                    src="/images/icons/single-star.svg"
                    alt=""
                    className="w-3 h-3 "
                    height={400}
                    width={400}
                  />
                  <p className="mt-1 font-medium text-sm text-gray-900">
                    Trustpilot
                  </p>
                  <Image
                    src="/images/icons/five-stars.svg"
                    alt=""
                    className="mt-1 h-4 w-24 "
                    height={400}
                    width={400}
                  />
                </span>
                <span className="flex items-center justify-center gap-x-1 text-gray-900">
                  <Image
                    src="/images/icons/red-star.svg"
                    alt=""
                    className="w-4 h-4"
                    height={400}
                    width={400}
                  />
                  <p className="mt-1 font-medium text-sm text-gray-900 ">G2</p>
                  <Image
                    src="/images/icons/red-5-stars.svg"
                    alt=""
                    className="mt-1 w-20 h-4"
                    height={400}
                    width={400}
                  />
                </span>
              </div>
              <h1 className="max-w-xl mt-2 text-wrap  font-semibold tracking-tight text-center lg:text-left text-gray-900 text-3xl sm:text-[42px] sm:leading-[60px]  ">
                {data.title}
              </h1>
              <p className="mt-6 capitalize font-normal leading-7 text-[18px] text-center lg:text-left text-gray-600">
                {data.description}
              </p>
              <div className="flex justify-center lg:justify-start ">
                {data.points.length == 0 ? (
                  ""
                ) : (
                  <ul className="text-[#121118] text-[16px] leading-6 flex flex-col gap-4 mt-3">
                    {data.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-[10px] text-base"
                      >
                        <HeroPoints
                          width={6}
                          height={6}
                          color={data.pointsColor}
                        />{" "}
                        <span className="opacity-85 text-[#121118]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col justify-center lg:justify-start items-center gap-6 mt-10 sm:flex-row">
                <GetStartedButton variant={data.buttonColor} />
                <GoogleLogin />
              </div>
              <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
                <p className="inline-flex gap-4 items-center text-base text-gray-600 height={400} width={400}">
                  <Image
                    src="/images/icons/tick.svg"
                    alt=""
                    className="h-[12.5px] w-[12.5px]"
                    height={100}
                    width={100}
                  />{" "}
                  Free trials
                </p>
                <p className="inline-flex items-center gap-4 text-base text-gray-600">
                  <Image
                    src="/images/icons/tick.svg"
                    alt=""
                    className="h-[12.5px] w-[12.5px]"
                    height={100}
                    width={100}
                  />{" "}
                  No credit card required
                </p>
              </div>
            </div>
          </div>
          <div className="mx-4 sm:mx-auto max-w-7xl">
            <Image
              src={data.image}
              alt={data.alt}
              className="w-[530px] h-[502px]"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

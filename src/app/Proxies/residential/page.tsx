import React from "react"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import ProxyLocations from "@/components/ProxyLocations"
import ResidentialProxies from "@/components/ResidentialProxies"
import Pricing from "@/components/Pricing"
import LogoSection from "@/components/LogoSection"
import WhySection from "@/components/WhySection"
import { HeroContainer } from "@/types/types"
import { Explore1, plans1 } from "@/utils/Data"
import AllFaqs from "@/components/AllFaqs"

const HomeContentHero: HeroContainer = {
  title: "Residential Proxies",
  description:
    "Bypass limitations with our high-performance residential proxies.",
  points: [
    "10M+ residential IPs",
    "Country, State, City & ISP Targeting",
    "HTTP & SOCKS5 Support",
  ],
  pointsColor: "blue",
  image: "/images/illustration/proxies/Residential.svg",
  alt: "Hero Banner",
  buttonColor: "blue",
}
type data = {
  image: string
  color: "blueOutline" | "greenOutline" | "purpleOutline" | "outline"
}
const Data1: data = {
  image: "/images/illustration/BlueUseCase.svg",
  color: "blueOutline",
}

type ProxiesDataInterface = {
  color: string
  title: string
  description: string
}
const ProxiesData = [
  {
    color: "/RectanglePurple.svg",
    title: "Clean Residential Proxy IP Pool",
    description: "There are 10M+ clean residential IPs in our network",
  },
  {
    color: "/RectangleDGreen.svg",
    title: "Precise Geo Targeting",
    description:
      "Option to target any city ,state and ISP in 195 countries available",
  },
  {
    color: "/RectangleYellow.svg",
    title: "Good compatibility",
    description: "Our proxies support both HTTP and SOCKS5 protocols",
  },
  {
    color: "/RectangleBlue.svg",
    title: "Stable performance",
    description: "99.9% Uptime. Proven performance, not just words",
  },
  {
    color: "RectangleGreen.svg",
    title: "Rotating and Static",
    description: "Rotating by default and option for static IPs",
  },
  {
    color: "/RectanglePink.svg",
    title: "Top Residential Proxy Speeds",
    description: "99.9% success rate , ready for any task available",
  },
]

export default function page() {
  return (
    <div>
      <div className="relative  lg:mb-24 ">
        <div className="absolute -top-28 -z-10 w-full h-[980px]">
          <Image
            src="/11heroBanner.svg"
            alt=""
            className="border-black w-full h-[980px]"
            height={600}
            width={600}
          />
        </div>
        <HeroSection data={HomeContentHero} />
      </div>
      <ProxyLocations flagsType="residential" />
      <ResidentialProxies type={"Residential"} data={ProxiesData} />
      <Pricing type="blue" plans={plans1} Explore={Explore1} />
      <LogoSection />
      <WhySection Data={Data1} />
      <AllFaqs colortheme="blue" proxyType="Residential proxies" />
    </div>
  )
}

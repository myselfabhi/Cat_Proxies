import React from "react"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import ProxyLocations from "@/components/ProxyLocations"
import Residental from "@/components/assets/DataScraping/Residental"
import ResidentialProxies from "@/components/ResidentialProxies"
import Pricing from "@/components/Pricing"
import LogoSection from "@/components/LogoSection"
import WhyToChoose from "@/components/whyToChoose"
import WhySection from "@/components/WhySection"
import { HeroContainer } from "@/types/types"
import { Explore2, plans2 } from "@/utils/Data"
import AllFaqs from "@/components/AllFaqs"

const HomeContentHero: HeroContainer = {
  title: "Datacenter Proxies",
  description:
    "A vast IP pool. Scale your tasks with our rotating Datacenter IPs.",
  points: [
    "20.000+ ethical datacenter proxies",
    "Unlimited concurrent connections",
    "Unlimited bandwidth",
  ],
  pointsColor: "green",
  image: "/images/illustration/proxies/Datacenter.svg",
  alt: "Hero Banner",
  buttonColor: "greenlg",
}
type data = {
  image: string
  color: "blueOutline" | "greenOutline" | "purpleOutline" | "outline"
}
const Data1: data = {
  image: "/images/illustration/DarkGreenUse.svg",
  color: "greenOutline",
}

type ProxiesDataInterface = {
  color: string
  title: string
  description: string
}
const ProxiesData = [
  {
    color: "/RectanglePurple.svg",
    title: "Discover our Clean Proxy IP Pool",
    description:
      "There are 20.000+ clean and fast IPs in our datacenter network",
  },
  {
    color: "/RectangleDGreen.svg",
    title: "Only Top Geo Available",
    description:
      "Only 5 major countries available in the IP pool , primarily USA.",
  },
  {
    color: "/RectangleYellow.svg",
    title: "Good compatibility",
    description: "Our datacenter proxies support HTTP protocols",
  },
  {
    color: "/RectangleBlue.svg",
    title: "Stable performance",
    description: "99.9% Uptime. Proven performance, not just words",
  },
  {
    color: "RectangleGreen.svg",
    title: "Rotating instantly",
    description: "Rotating by default every millisecond",
  },
  {
    color: "/RectanglePink.svg",
    title: "Top Proxy Speeds",
    description: "99.9% success rate , ready to automate your tasks",
  },
]

export default function page() {
  return (
    <div>
      <div className=" relative lg:mb-24">
        <div className="absolute -top-28 -z-10 w-full h-[80vh]">
          <Image
            src="/11heroBanner.svg"
            alt=""
            className="border-black  w-full h-screen"
            height={600}
            width={600}
          />
        </div>
        <HeroSection data={HomeContentHero} />
      </div>
      <ProxyLocations flagsType="datacenter" />
      <ResidentialProxies type={"Datacenter"} data={ProxiesData} />
      <Pricing type="green" plans={plans2} Explore={Explore2} />
      <LogoSection />
      <WhySection Data={Data1} />
      <AllFaqs colortheme="darkgreen" proxyType="Datacenter proxies" />
    </div>
  )
}

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
import { Explore3, plans3 } from "@/utils/Data"
import AllFaqs from "@/components/AllFaqs"
const HomeContentHero: HeroContainer = {
  title: "IPv6 Proxies",
  description:
    "Extensive IP range. Scale your operations with our rotating IPv6 proxies",
  points: [
    "Billions of billions of IPv6 IPs available",
    "Unlimited concurrent connections",
    "Unlimited bandwidth",
  ],
  pointsColor: "purple",
  image: "/images/illustration/proxies/Ipv6.svg",
  alt: "Hero Banner",
  buttonColor: "purpledg",
}
type data = {
  image: string
  color: "blueOutline" | "greenOutline" | "purpleOutline" | "outline"
}
const Data1: data = {
  image: "/images/illustration/purpleUseCase.svg",
  color: "purpleOutline",
}

type ProxiesDataInterface = {
  color: string
  title: string
  description: string
}
const ProxiesData = [
  {
    color: "/RectanglePurple.svg",
    title: "Clean Proxy IP Pool",
    description:
      "There are truly billions of billions of clean IPs in our IPV6 network",
  },
  {
    color: "/RectangleDGreen.svg",
    title: "Only Top Geo Available",
    description: "Only 6 major countries available in the IP pool",
  },
  {
    color: "/RectangleYellow.svg",
    title: "Good compatibility",
    description: "Our IPV6 proxies support HTTP protocols",
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
        <div className="absolute -z-10 -top-28 w-full h-[680px]">
          <Image
            src="/11heroBanner.svg"
            alt=""
            className="border-black  w-full h-[980px]"
            height={600}
            width={600}
          />
        </div>
        <HeroSection data={HomeContentHero} />
      </div>
      {/* <ProxyLocations /> */}
      <ResidentialProxies type={"IPV6"} data={ProxiesData} />
      <Pricing type="purple" plans={plans3} Explore={Explore3} />
      <LogoSection />
      <WhySection Data={Data1} />
      <AllFaqs colortheme="purple" proxyType="Ipv6 proxies" />
    </div>
  )
}

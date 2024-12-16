import React from "react"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import ProxyLocations from "@/components/ProxyLocations"
import Residental from "@/components/assets/DataScraping/Residental"
import ResidentialProxies from "@/components/ResidentialProxies"
import Pricing from "@/components/Pricing"
import LogoSection from "@/components/LogoSection"
import FAQs from "@/components/FAQs"
import WhyToChoose from "@/components/whyToChoose"
import DataScraping from "@/components/DataScraping"
import UseCases from "@/components/UseCases"

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
    | "white"
    | "purple"
    | "purpleg"
    | "pinkg"
    | "yellowg"
    | "greendg"
    | "greenlg"
    | "outline"
}

const HomeContentHero: HeroContainer = {
  title: "Proxies for AD Tech",
  description:
    "Enhance advertising technology with proxies for efficient campaign management.",
  points: [
    "Optimize ad targeting and performance metrics",
    "Ensure reliable and secure ad placement across platforms",
    "Manage campaigns efficiently",
  ],
  pointsColor: "green",
  image: "/images/illustration/ad-tech/main.svg",
  alt: "Hero Banner",
  buttonColor: "greendg",
}

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
    image: "/images/illustration/ad-tech/1.svg",
    title: "Global AD Reach",
    description:
      "Enhance your global advertising reach with proxies that bypass geo restrictions. Access worldwide locations to optimize engagement and effectively target diverse markets, ensuring your ads reach the right audiences across borders with precision",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/ad-tech/2.svg",
    title: "Ad Verifications with no IP blocks",
    description:
      "Ensure uninterrupted ad verification ,eliminating IP blocking risks. Rotate IP addresses seamlessly to evade fraudsters and maintain a smooth verification process. This approach supports continuous operations and scalability, enabling ad monitoring companies to focus on business growth without disruptions.",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/ad-tech/3.svg",
    title: "Brand Protection and Monitoring",
    description:
      "Protect your brand with comprehensive monitoring. Track copyright, domain name abuse, and misuse of branded content in real-time. Monitor unlawful competitor activities accurately to prevent misinformation derived from your IP address.",
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
  title: "Enhance your ",
  span: "advertising technology",
  other: " using proxies.",
}

export default function page() {
  return (
    <div>
      <HeroSection data={HomeContentHero} />
      <WhyToChoose Data={Data} title={title} />
      <DataScraping />
      <LogoSection />
      <UseCases type="Ad Tech" />
    </div>
  )
}

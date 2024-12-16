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
  title: "Proxies for E-Commerce Data Collection",
  description: "Enhance Your E-commerce Insights with Public Data",
  points: [
    "Geo-targeted Product Data",
    "Less IP Blocks and CAPTCHA Issues",
    "Instantly Usable E-commerce Data",
  ],
  pointsColor: "green",
  image: "/images/illustration/ad-verification/main.svg",
  alt: "Hero Banner",
  buttonColor: "pinkg",
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
    image: "/images/illustration/ad-verification/1.svg",
    title: "Global Data Collection",
    description:
      "Utilize proxies to access geo-specific product information from major e-commerce platforms worldwide. Proxies facilitate the collection of detailed product data tailored to specific countries, states, or cities, ensuring you obtain the most pertinent and localized information for your business needs.",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/ad-verification/2.svg",
    title: "Overcome Blocks and CAPTCHAs",
    description:
      "Ensure uninterrupted access to essential data by using proxies to circumvent anti-bot measures implemented by many e-commerce sites. Proxies effectively bypass IP bans and CAPTCHA challenges, enabling seamless retrieval of critical information without interruptions.",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/ad-verification/3.svg",
    title: "Seamless Data Acquisition",
    description:
      "Streamline your data collection process with proxies, ensuring instant access to structured, analysis-ready e-commerce data. By obtaining ready-to-use information, you eliminate the tedious tasks of data cleaning and organization, allowing you to focus on strategic analysis and informed decision-making",
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
  title: "Unlock Your",
  span: "E-commerce Potential",
  other: " with Proxies",
}

export default function page() {
  return (
    <div>
      <HeroSection data={HomeContentHero} />
      <WhyToChoose Data={Data} title={title} />
      <DataScraping />
      <LogoSection />
      <UseCases type="E-Commerce" />
    </div>
  )
}

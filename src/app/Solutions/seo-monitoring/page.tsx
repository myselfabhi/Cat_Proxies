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
  title: "Proxies for SEO Monitoring",
  description:
    "Control Rankings, Analyze Traffic, and Discover Trends with proxies",
  points: [
    "Optimize search engine rankings",
    "Analyze website traffic and keyword performance",
    "Utilize data for strategic product placement",
  ],
  pointsColor: "green",
  image: "/images/illustration/seo-monitoring/main.svg",
  alt: "Hero Banner",
  buttonColor: "yellowg",
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
    image: "/images/illustration/seo-monitoring/1.svg",
    title: "Enhance SEO and Brand Monitoring",
    description:
      "Track organic search results for brand reputation, product development, and SEO optimization using proxies. Gather real-time data on keywords, competitors, and content performance. Gain insights for creating high-quality, traffic-driving content and discover backlink opportunities from social media and website mentions",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/seo-monitoring/2.svg",
    title: "Identify New Trends",
    description:
      "Use proxies to track emerging trends by analyzing data from multiple sources. By accessing this information and bypassing restrictions, you can identify market shifts early, adjust your strategies, and capitalize on new opportunities",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/seo-monitoring/3.svg",
    title: "Maximize Content Strategy Effectiveness",
    description:
      "Boost your content strategy's effectiveness using proxies, thorough analysis and optimization. By accessing diverse data sources without geographic restrictions, you can refine targeting, uncover competitive advantages, and enhance engagement. This guarantees that your content connects well with your audience and achieves peak performance.",
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
  title: "Begin analyzing your traffic and improving",
  span: "SEO with proxies",
  other: "",
}

export default function page() {
  return (
    <div>
      <HeroSection data={HomeContentHero} />
      <WhyToChoose Data={Data} title={title} />
      <DataScraping />
      <LogoSection />
      <UseCases type="SEO Monitoring" />
    </div>
  )
}

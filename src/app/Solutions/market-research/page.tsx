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
    | "purpledg"
    | "outline"
}

const HomeContentHero: HeroContainer = {
  title: "Proxies for Optimized Market Research",
  description:
    "Utilize proxies to enhance and streamline your market research efforts, ensuring comprehensive insights and improved data accuracy for informed business decisions.",
  points: [
    "Efficient data gathering",
    "Enhanced data accuracy and reliability",
    "Targeted audience profiling",
  ],
  pointsColor: "purple",
  image: "/images/illustration/market-research/main.svg",
  alt: "Hero Banner",
  buttonColor: "purpledg",
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
    image: "/images/illustration/market-research/1.svg",
    title: "Enhanced Data Collection and Analysis",
    description:
      "Utilize proxies to gather and analyze data from reviews, forums, social media, and search keywords. This allows for enhanced audience understanding, refined marketing strategies, and the identification of new business opportunities. Advanced filtering methods with extensive data also help analyze competitors and identify influencers in your industry.",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/market-research/2.svg",
    title: "Refine your product features and pricing",
    description:
      "Use proxies to analyze market data for refining product features and pricing strategies. This helps ensure your products meet customer needs effectively and are competitively priced, enhancing overall market success.",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/market-research/3.svg",
    title: "Better Market Insights through Proxies",
    description:
      "Use proxies to gather and analyze feedback, reviews, and social media data for deep market insights. Understand customer preferences through behavioral data from various platforms, and optimize marketing strategies by monitoring brand mentions and content reach. Filter data from reviews and group pages by keywords, location, and industry for customized insights.",
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
  title: "Start enhancing your",
  span: "Market Research",
  other: " with Proxies.",
}

export default function page() {
  return (
    <div>
      <HeroSection data={HomeContentHero} />
      <WhyToChoose Data={Data} title={title} />
      <DataScraping />
      <LogoSection />
      <UseCases type="Market Research" />
    </div>
  )
}

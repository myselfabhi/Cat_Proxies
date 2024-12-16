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
  title: "Proxies for Social Media Marketing",
  description: "Excel in social media marketing using web data",
  points: [
    "Elevate your industry's social media presence",
    "Anticipate emerging trends",
    "Gain real-time insights",
  ],
  pointsColor: "green",
  image: "/images/illustration/social-media/main.svg",
  alt: "Hero Banner",
  buttonColor: "purpleg",
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
    image: "/images/illustration/social-media/1.svg",
    title: "Reach out to your target audience",
    description:
      "Use proxies to expand your audience reach anonymously across different online platforms. This helps you execute targeted marketing effectively, ensuring you comply with regulations and build credibility with your audience.",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/social-media/2.svg",
    title: "Understand Customer Behavior and Predict Trends",
    description:
      "Analyze customer behavior across platforms to predict trends and personalize customer experiences. Track sentiments and competitor perceptions through diverse data sources, filtering by keywords and other parameters for targeted insights",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/social-media/3.svg",
    title: "Understand Customer Behavior and Predict Trends",
    description:
      "Enhance marketing budget efficiency by simplifying market research, analyzing competition, and effectively targeting your audience. This optimization maximizes the impact of your campaigns, ensuring resources are allocated strategically for optimal results.",
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
  title: "Begin your",
  span: "Social Media Marketing",
  other: " journey with Proxies.",
}

export default function page() {
  return (
    <div>
      <HeroSection data={HomeContentHero} />
      <WhyToChoose Data={Data} title={title} />
      <DataScraping />
      <LogoSection />
      <UseCases type="Social Media Marketing" />
    </div>
  )
}

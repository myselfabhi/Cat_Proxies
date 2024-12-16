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

const HomeContentHero: HeroContainer = {
  title: "Proxies for Real Cybersecurity",
  description:
    "Boost security with proxies, shielding your network, filtering traffic, and preserving anonymity online.",
  points: [
    "Overcome blocks and limitations",
    "Protect your real IP address",
    "Secure your digital assets",
  ],
  pointsColor: "blue",
  image: "/images/illustration/cyber-security/main.svg",
  alt: "Hero Banner",
  buttonColor: "blueg",
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
    image: "/images/illustration/cyber-security/1.svg",
    title: "Monitor viruses and malware",
    description:
      "Use proxies to monitor viruses, malware, and internet-exposed attacks efficiently. This enables proactive detection, mapping of vulnerabilities, and swift response to cyber threats, bolstering overall cybersecurity defenses.",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/cyber-security/2.svg",
    title: "Stay undetected and anonymous",
    description:
      "Achieve anonymity and evade detection using proxies. By masking your IP address and encrypting your online activities, proxies ensure your privacy and security online, allowing you to browse freely and securely without revealing your identity.",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/cyber-security/3.svg",
    title: "Combat fraud and mitigate risks",
    description:
      "Proxies anonymize online activities, secure transactions, and enhance threat intelligence, protecting sensitive data from malicious actors. Integrating proxies strengthens cybersecurity measures by monitoring fraudulent activities and preventing unauthorized access, ensuring a secure digital environment",
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
  title: "Start your ",
  span: "cybersecurity journey",
  other: " with Proxies",
}

export default function page() {
  return (
    <div>
      <HeroSection data={HomeContentHero} />
      <WhyToChoose Data={Data} title={title} />
      <DataScraping />
      <LogoSection />
      <UseCases type="Cybersecurity" />
    </div>
  )
}

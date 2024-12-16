import HeroSection from "@/components/HeroSection"
import LogoSection from "@/components/LogoSection"
import WhySection from "@/components/WhySection"
import Features from "@/components/Features"
import Image from "next/image"
import DataScraping from "@/components/DataScraping"
import WhyToChoose from "@/components/whyToChoose"
import ProxyLocations from "@/components/ProxyLocations"
import AllFaqs from "@/components/AllFaqs"

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
  title: "Unlock the Power of Residential Proxies",
  description:
    "Reliable and secure proxies for your needs. Avoid captcha blocks while scraping with the most reliable and fast Residential Proxies.",
  points: [],
  pointsColor: "blue",
  image: "/images/illustration/cat-illustration.svg",
  alt: "Hero Banner",
  buttonColor: "primary",
}

interface DataItem {
  image: string
  title: string
  description: string
  action: string
  color: string
  direction: string
}

const Data: DataItem[] = [
  {
    image: "/images/illustration/green/CatNetwork.svg",
    title: "Integrity",
    description:
      "We prioritize quality over quantity in every proxy we offer. Our commitment to excellence is not just a promise; it's a reflection of our genuine care for our customers.",
    action: "Contact Us Now",
    color: "primary",
    direction: "left",
  },
  {
    image: "/images/illustration/green/CatSecurity.svg",
    title: "Privacy",
    description:
      "With our strict no-log policy, your usage remains completely private and untracked. Your online activities are your business, and we respect that.",
    action: "Contact Us Now",
    color: "primary",
    direction: "right",
  },
  {
    image: "/images/illustration/green/CatWithDesk.svg",
    title: "Cat Care Support",
    description:
      "Our dedicated team is here to address your questions and requests, every day, even on holidays. Not only that, but we are donating a part of our profit every month to animal shelters.",
    action: "Contact Us Now",
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
  title: "Why 2000+ clients choose",
  span: "CatProxies",
  other: "",
}

type data = {
  image: string
  color: "blueOutline" | "greenOutline" | "purpleOutline" | "outline"
}
const Data1: data = {
  image: "/images/illustration/three-cat-illustration.svg",
  color: "outline",
}

export default function Home() {
  return (
    <main className="font-sora">
      <div className="z-10 relative">
        <div className="absolute -top-28 -z-10 w-full h-[980px]">
          <Image
            src="/11heroBanner.svg"
            alt=""
            className="border-black  w-full h-[980px]"
            height={600}
            width={600}
          />
        </div>
        <HeroSection data={HomeContentHero} />
        <Features />
      </div>
      <DataScraping />
      <WhySection Data={Data1} />
      <LogoSection />
      <WhyToChoose Data={Data} title={title} />
      <ProxyLocations flagsType="residential" />
      <AllFaqs colortheme="green" proxyType="All" />
    </main>
  )
}

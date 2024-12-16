"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Button } from "./ui/Button"
import AdVerification from "./assets/usecases/AdVerification"
import SeoMonitoring from "./assets/usecases/SeoMonitoring"
import Webscraping from "./assets/usecases/Webscraping"
import MarketResearch from "./assets/usecases/MarketResearch"
import SocialMedia from "./assets/usecases/SocialMedia"
import AdTech from "./assets/usecases/AdTech"
// import { redirectToLogin, redirectToRegister } from "@/lib/utils";
import axios from "@/utils/axios"
import Announcement from "./Announcement"

const products = [
  {
    name: "Residential Proxies",
    description: "Real IPs from ISPs for reliable and secure web scraping",
    href: "/Proxies/residential",
    icon: "/images/icons/residential.svg",
  },

  {
    name: "Datacenter Proxies",
    description:
      "High-speed, scalable proxies from data centers for bulk web scraping",
    href: "/Proxies/datacenter",
    icon: "/images/icons/datacenter.svg",
  },
  {
    name: "IPv6 Proxies",
    description:
      "Modern, high-availability proxies with vast address space for advanced needs",
    href: "/Proxies/ipv6",
    icon: "/images/icons/ipv6.svg",
  },
  // {
  //   name: "Static ISP Proxies",
  //   description: "Usce consequat mi elementum, semper massa sit amet",
  //   href: "#",
  //   icon: "/images/icons/static-isp-icon.svg",
  //   price: "$4.99",
  // },
  // {
  //   name: "Unlimited Residential",
  //   description: "Usce consequat mi elementum, semper massa sit amet",
  //   href: "#",
  //   icon: "/images/icons/residential-icon.svg",
  //   price: "$4.99",
  // },
  // {
  //   name: "Mobile Proxies",
  //   description: "Usce consequat mi elementum, semper massa sit amet",
  //   href: "#",
  //   icon: "/images/icons/mobile-icon.svg",
  //   price: "$4.99",
  // },
]

const services = [
  {
    name: "E-Commerce",
    href: "/Solutions/ad-verification",
    icon: <AdVerification />,
  },
  {
    name: "Social Media Marketing",
    href: "/Solutions/social-media",
    icon: <MarketResearch />,
  },
  {
    name: "Market Research",
    href: "/Solutions/market-research",
    icon: <SocialMedia />,
  },
  {
    name: "Cybersecurity",
    href: "/Solutions/cyber-security",
    icon: <Webscraping />,
  },
  {
    name: "SEO Monitoring",
    href: "/Solutions/seo-monitoring",
    icon: <AdTech />,
  },
  { name: "Ad Tech", href: "/Solutions/ad-tech", icon: <SeoMonitoring /> },
]
const resources = [
  { name: "FAQ", href: "/FAQ", icon: "/images/icons/FAQ.svg" },
  { name: "Blog", href: "/Blog", icon: "/images/icons/BLOG.svg" },
  { name: "Guides", href: "/Blog?text=guide", icon: "/images/icons/guide.svg" },
  {
    name: "Integration",
    href: "/Blog?text=Integration",
    icon: "/images/icons/integration.svg",
  },
  { name: "Support", href: "/contact-us", icon: "/images/icons/support.svg" },
  {
    name: "Ipv6 Compatibility Checker",
    href: "/compatibility-checker/ipv6",
    icon: "/images/icons/integration.svg",
  },
]
const explore = [
  {
    name: "Blog",
    description: "Usce consequat mi elementum, semper massa sit amet",
    href: "/Blog",
    icon: <AdVerification />,
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [announcement, setAnnouncement] = useState<any>({})

  useEffect(() => {
    const getAnnoncement = async () => {
      try {
        const res = await axios.get(`landing/data`)
        const data = res.data
        const announcement = data?.payload?.data?.announcement || {}
        setAnnouncement(announcement)
      } catch (error) {
        console.log("Error fetching announcement", error)
      }
    }

    getAnnoncement()
  }, [])

  return (
    <header className="relative isolate z-20 ">
      {/* Navbar */}
      {announcement && announcement?.announcement_enabled && (
        <Announcement announcement={announcement} />
      )}
      <nav
        className="flex relative items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex gap-5 items-center">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Lightning Proxies</span>
              <Image
                className="w-auto h-16 "
                src="/logo.png"
                height={400}
                width={400}
                alt=""
              />
            </a>
          </div>

          <PopoverGroup className="items-start justify-start hidden lg:flex lg:gap-x-6">
            <Popover>
              <PopoverButton className="flex items-start gap-x-1 rounded-md px-1.5 text-sm leading-6 text-gray-900 focus-visible:bg-gray-100 focus-visible:outline-none font-normal">
                Proxies
                <ChevronDownIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <PopoverPanel className="absolute -left-10 top-full pt-2 bg-white shadow-lg z-10 ring-1 ring-gray-900/5">
                  <div className="grid grid-cols-3 px-6 py-8 mx-auto max-w-7xl gap-x-4 lg:px-8">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => window.open(item.href, "_self")}
                        className="flex items-center cursor-pointer gap-3 p-6 text-sm leading-6 rounded-lg group hover:bg-gray-50"
                      >
                        <Image
                          src={item.icon}
                          height={150}
                          width={150}
                          alt=""
                        />
                        <div>
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                          </a>
                          <p className="mt-1 text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>
            <a
              href="/Pricing"
              className="text-sm font-normal leading-6 text-gray-900"
            >
              Pricing
            </a>
            {/* <Popover>
            <PopoverButton className="flex items-center gap-x-1 rounded-md px-1.5 text-sm font-normal leading-6 text-gray-900 focus-visible:bg-gray-100 focus-visible:outline-none">
              Pricing
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <PopoverPanel className="absolute left-14 top-full pt-2 bg-white shadow-lg z-10 ring-1 ring-gray-900/5">
                <div className="grid grid-cols-3 px-6 py-8 mx-auto max-w-7xl gap-x-4 lg:px-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 p-6 text-sm leading-6 rounded-lg group hover:bg-gray-50"
                    >
                      {item.icon}
                      <div>
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-sm text-gray-600">{item.price}</p>
                        <p className="text-sm text-gray-600">onwards</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover> */}
            <Popover>
              <PopoverButton className="flex items-center gap-x-1 rounded-md px-1.5 text-sm font-normal leading-6 text-gray-900 focus-visible:bg-gray-100 focus-visible:outline-none">
                Use Cases
                <ChevronDownIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <PopoverPanel className="absolute left-20 top-full pt-2 bg-white shadow-lg z-10 ring-1 ring-gray-900/5">
                  <div className="grid grid-cols-3 px-6 py-8 mx-auto max-w-7xl gap-x-4 lg:px-8">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => window.open(item.href, "_self")}
                        className="flex items-center cursor-pointer gap-3 p-6 text-sm leading-6 rounded-lg group hover:bg-gray-50"
                      >
                        {item.icon}
                        <div>
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            {/* <Popover>
            <PopoverButton className="flex items-center gap-x-1 rounded-md px-1.5 text-sm font-normal leading-6 text-gray-900 focus-visible:bg-gray-100 focus-visible:outline-none">
              Solutions
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <PopoverPanel className="absolute left-0 top-full pt-2 bg-white shadow-lg z-10 ring-1 ring-gray-900/5">
                <div className="grid grid-cols-3 px-6 py-8 mx-auto max-w-7xl gap-x-4 lg:px-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 p-6 text-sm leading-6 rounded-lg group hover:bg-gray-50"
                    >
                       {item.icon}
                      <div>
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-sm text-gray-600">{item.price}</p>
                        <p className="text-sm text-gray-600">onwards</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover> */}
            <Popover>
              <PopoverButton className="flex items-center  gap-x-1 rounded-md px-1.5 text-sm font-normal leading-6 text-gray-900 focus-visible:bg-gray-100 focus-visible:outline-none">
                Resources
                <ChevronDownIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <PopoverPanel className="absolute left-64 top-full pt-2 bg-white shadow-lg z-10 ring-1 ring-gray-900/5">
                  <div className="grid grid-cols-3 px-6 py-8 mx-auto max-w-7xl gap-x-4 lg:px-8">
                    {resources.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => window.open(item.href, "_self")}
                        className="flex cursor-pointer items-center gap-3 p-4 text-sm leading-6 rounded-lg group hover:bg-gray-50"
                      >
                        <img
                          src={item.icon}
                          className="h-[70px] w-[70px]"
                          alt="#"
                        />
                        <div>
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            <a
              href="/contact-us"
              className="text-sm font-normal leading-6 text-gray-900"
            >
              Contact
            </a>
          </PopoverGroup>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="items-center hidden gap-8 lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant={"white"}
            className=" py-[16px] text-sm"
            // onClick={redirectToRegister}
          >
            Sign up
          </Button>
          <Button
            variant={"primary"}
            className=" py-[16px] text-sm"
            // onClick={redirectToLogin}
          >
            Login
          </Button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="./" className="-m-1.5 p-1.5">
              <span className="sr-only">Lightning Proxies</span>
              <Image
                className="w-auto h-8"
                src="/logo.svg"
                height={400}
                width={400}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            ></button>
          </div>
          <div className="flow-root mt-10">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Explore
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {resources.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {services.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/Pricing"
                  className="flex w-full items-center justify-between rounded-lg  text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>
              </div>
              <div className="py-6">
                <div className="flex flex-col items-center gap-8">
                  <a
                    href="#"
                    className="w-full px-10 py-4 text-base font-semibold text-center text-white rounded-md shadow-sm bg-[#05C067] hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    // onClick={redirectToLogin}
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="w-full px-10 py-4 text-base font-semibold text-center text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
                    // onClick={redirectToRegister}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

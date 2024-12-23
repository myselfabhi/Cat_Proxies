"use client"

import {
  LogOut,
  Home,
  Settings, X,
  WalletIcon,
  User,
  Bookmark,
  Bell,
  Headphones
} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { FaDiscord, FaTelegram } from "react-icons/fa6"

interface SidebarProps {
  activePath: string
  isOpen: boolean
  onClose: () => void
}

const sidebarItems = [
  {
    sections: [
      {
        name: "Deposit Balance",
        href: "/dashboard/deposit-balance",
        icon: <WalletIcon className="w-5 h-5 text-green-500" />,
      },

      {
        name: "My Plans",
        icon: <Bookmark className="w-5 h-5 text-green-500" />,
        subItems: [
          {
            name: "Active Plans",
            href: "/dashboard/my-plans/active-plans",
            icon: (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.90835 15.0358C3.41322 15.0358 2.20117 13.8238 2.20117 12.3286V5.56067C2.20117 4.06553 3.41322 2.85349 4.90835 2.85349H13.0299C14.525 2.85349 15.7371 4.06553 15.7371 5.56067V9.17689C15.7371 9.38518 15.7131 9.591 15.6666 9.79064H13.7067C11.9312 9.79064 10.4919 11.2299 10.4919 13.0054V14.9653C10.2923 15.0118 10.0865 15.0358 9.87816 15.0358H4.90835ZM11.5071 14.4909C11.6073 14.4154 11.7027 14.3326 11.7924 14.2429L14.9442 11.0912C15.0339 11.0014 15.1167 10.906 15.1922 10.8058H13.7067C12.4919 10.8058 11.5071 11.7906 11.5071 13.0054V14.4909ZM5.07755 6.91426C5.07755 6.63392 5.30481 6.40666 5.58515 6.40666H12.3531C12.6334 6.40666 12.8607 6.63392 12.8607 6.91426C12.8607 7.1946 12.6334 7.42186 12.3531 7.42186H5.58515C5.30481 7.42186 5.07755 7.1946 5.07755 6.91426ZM5.58515 9.79064C5.30481 9.79064 5.07755 10.0179 5.07755 10.2982C5.07755 10.5786 5.30481 10.8058 5.58515 10.8058H8.96913C9.24947 10.8058 9.47673 10.5786 9.47673 10.2982C9.47673 10.0179 9.24947 9.79064 8.96913 9.79064H5.58515Z"
                  stroke="url(#paint0_linear_0_3105)"
                  stroke-width="0.580111"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3105"
                    x1="2.20117"
                    y1="8.94465"
                    x2="15.7371"
                    y2="8.94465"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AF52DE" />
                    <stop offset="1" stop-color="#7E00BE" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          
          {
            name: "Purchase Plans",
            href: "/dashboard/my-plans/purchase-plan",
            icon: (
              <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.53131 3.37625H8.40695C9.1937 2.31356 8.13375 0.826271 6.81711 1.25101L6.1892 1.45357C6.04624 1.49969 5.89203 1.49969 5.74906 1.45357L5.12115 1.25101C3.80451 0.826271 2.74457 2.31356 3.53131 3.37625Z"
                  stroke="url(#paint0_linear_281_1283)"
                  stroke-width="0.696133"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.33376 4.39145H3.60453C2.71165 4.88583 2.01409 5.71128 1.69468 6.73339L0.848688 9.44058C0.0315458 12.0554 1.98505 14.7126 4.72462 14.7126H7.21367C9.95324 14.7126 11.9067 12.0554 11.0896 9.44058L10.2436 6.7334C9.9242 5.71128 9.22664 4.88583 8.33376 4.39145ZM8.24588 12.4492C8.49099 12.3132 8.5794 12.0042 8.44334 11.7591C8.30729 11.5139 7.9983 11.4255 7.75319 11.5616C6.96193 12.0008 6.41954 12.1747 5.92862 12.1727C5.44024 12.1707 4.92734 11.9943 4.19447 11.5669C3.95231 11.4257 3.6415 11.5075 3.50028 11.7497C3.35905 11.9918 3.44088 12.3027 3.68304 12.4439C4.47594 12.9063 5.17377 13.1848 5.9245 13.1879C6.6727 13.1909 7.39782 12.9199 8.24588 12.4492Z"
                  stroke="url(#paint1_linear_281_1283)"
                  stroke-width="0.696133"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_281_1283"
                    x1="11.2773"
                    y1="14.7126"
                    x2="-1.74374"
                    y2="11.7516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6949FF" />
                    <stop offset="1" stop-color="#876DFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_281_1283"
                    x1="11.2773"
                    y1="14.7126"
                    x2="-1.74374"
                    y2="11.7516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6949FF" />
                    <stop offset="1" stop-color="#876DFF" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          
        ],
      },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: <WalletIcon className="w-5 h-5 text-green-500" />,
      },
    ],
  },
  {
    sections: [
      {
        name: "My Account",
        icon: <User className="w-5 h-5 text-green-500" />,
        subItems: [
          {
            name: "Settings",
            href: "/dashboard/my-account/settings",
            icon: <Settings className="w-4 h-4 text-purple-500" />,
          },
          {
            name: "Get Bonus",
            href: "/dashboard/my-account/get-bonus",
            icon: <Bell className="w-4 h-4 text-purple-500" />,
          },
        ],
      },
      {
        name: "Discord Server",
        href: "https://discord.com/",
        icon: <FaDiscord className="w-5 h-5 text-green-500" />,
      },
        {
          name: "Telegram ",
          href: "https://t.me/catproxies",
          icon: <FaTelegram className="w-5 h-5 text-green-500" />,
        },
    ],
  },
  {
    sections: [
      {
        name: "Support",
        icon: <User className="w-5 h-5 text-green-500" />,
        subItems: [
          {
            name: "Guide",
            href: "/dashboard/support/guide",
            icon: (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60681 5.82865C4.45066 5.95934 5.392 6.17661 6.27348 6.51748M3.60681 8.49532C4.03314 8.56135 4.48434 8.64947 4.94014 8.76447M8.27348 4.36114V13.8606M2.93636 2.33308C4.41528 2.50019 6.40223 2.94977 7.81803 3.94186C8.09013 4.13253 8.45682 4.13253 8.72893 3.94186C10.1447 2.94977 12.1317 2.50019 13.6106 2.33308C14.3425 2.25037 14.9401 2.86158 14.9401 3.61568V11.1255C14.9401 11.8796 14.3425 12.4911 13.6106 12.5738C12.1317 12.7409 10.1447 13.1905 8.72893 14.1826C8.45682 14.3732 8.09013 14.3732 7.81803 14.1826C6.40223 13.1905 4.41528 12.7409 2.93636 12.5738C2.20443 12.4911 1.60681 11.8796 1.60681 11.1255V3.61568C1.60681 2.86158 2.20443 2.25037 2.93636 2.33308Z"
                  stroke="url(#paint0_linear_0_3152)"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3152"
                    x1="14.9401"
                    y1="14.3256"
                    x2="-0.641888"
                    y2="9.30571"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#019B83" />
                    <stop offset="1" stopColor="#18C6AB" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          
          {
            name: "Contact Us",
            href: "/dashboard/support/contact-us",
            icon: <Headphones className="w-4 h-4 text-pink-500" />,
          },
          {
            name: "Integrations",
            href: "/dashboard/support/integrations",
            icon: (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_3158)">
                  <ellipse
                    cx="4.42337"
                    cy="2.79227"
                    rx="1.38333"
                    ry="1.38333"
                    fill="url(#paint0_linear_0_3158)"
                  />
                  <ellipse
                    opacity="0.4"
                    cx="4.42339"
                    cy="5.55893"
                    rx="2.075"
                    ry="1.38333"
                    fill="url(#paint1_linear_0_3158)"
                  />
                  <circle
                    cx="12.7233"
                    cy="11.0923"
                    r="1.38333"
                    fill="url(#paint2_linear_0_3158)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.05461 1.40895C8.05461 1.12245 8.28686 0.890198 8.57336 0.890198C12.6798 0.890198 16.0088 4.21915 16.0088 8.32561C16.0088 8.61211 15.7765 8.84436 15.49 8.84436C15.2035 8.84436 14.9713 8.61211 14.9713 8.32561C14.9713 4.79214 12.1068 1.9277 8.57336 1.9277C8.28686 1.9277 8.05461 1.69545 8.05461 1.40895ZM1.65669 7.80686C1.94319 7.80686 2.17544 8.03912 2.17544 8.32561C2.17544 11.8591 5.03988 14.7235 8.57336 14.7235C8.85985 14.7235 9.09211 14.9558 9.09211 15.2423C9.09211 15.5288 8.85985 15.761 8.57336 15.761C4.46689 15.761 1.13794 12.4321 1.13794 8.32561C1.13794 8.03912 1.37019 7.80686 1.65669 7.80686Z"
                    fill="url(#paint3_linear_0_3158)"
                  />
                  <ellipse
                    opacity="0.4"
                    cx="12.7233"
                    cy="13.8589"
                    rx="2.075"
                    ry="1.38333"
                    fill="url(#paint4_linear_0_3158)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3158"
                    x1="3.04004"
                    y1="2.79227"
                    x2="5.80671"
                    y2="2.79227"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_3158"
                    x1="2.34839"
                    y1="5.55893"
                    x2="6.49839"
                    y2="5.55893"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_3158"
                    x1="11.34"
                    y1="11.0923"
                    x2="14.1066"
                    y2="11.0923"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_3158"
                    x1="1.13794"
                    y1="8.32561"
                    x2="16.0088"
                    y2="8.32561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_0_3158"
                    x1="10.6483"
                    y1="13.8589"
                    x2="14.7983"
                    y2="13.8589"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <clipPath id="clip0_0_3158">
                    <rect
                      width="16.6"
                      height="16.6"
                      fill="white"
                      transform="translate(0.273438 0.0255737)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
          },
          
        ],
      },
    ],
  },
]

const Sidebar: React.FC<SidebarProps> = ({ activePath, isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 left-1/2 w-11/12 max-w-sm h-5/6  dark:bg-[#09090B] rounded-lg  transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 overflow-y-auto lg:translate-x-0 lg:translate-y-0 lg:top-0 lg:left-0 lg:w-64 lg:h-screen lg:opacity-100 lg:scale-100 ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none lg:pointer-events-auto"
        } sidebar-container`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full lg:hidden"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        {/* Profile Section */}
        <div className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800 lg:hidden ">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-sm  font-satoshi font-medium dark:text-white">Hi Maxlin!</p>
            <p className="text-xs  font-satoshi font-medium text-gray-500 dark:text-gray-400">
              support@MaxLin.com
            </p>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="px-6 py-8 bg-cream-800">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 bg-[#fffefe] rounded-3xl">
            <img src="/logo.svg" alt="Cat Proxies" className="w-10 h-11" />
            <h1 className="text-base  font-satoshi font-medium text-gray-800 dark:text-gray-200">
              Cat Proxies
            </h1>
          </div>

          {/* Dashboard Link */}
          <p className="text-sm  font-satoshi font-medium text-gray-500 dark:text-gray-400">
            MAIN MENU
          </p>
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-3xl hover:bg-green-100 dark:hover:bg-gray-700 mt-4 transition ${
              activePath === "/dashboard"
                ? " dark:bg-[#161B1E] dark:border-[#05C067] dark:border-2 "
                : "text-gray-800 dark:text-gray-300"
            }`}
          >
            <Home className="w-8 h-8 bg-[#05C067] p-2 text-white rounded-md" />
            <span className= "font-satoshi font-medium text-sm">Dashboard</span>
          </Link>

          {/* Sidebar Items */}
          <div className="mt-6 ml-2 space-y-8 gap-3">
            {sidebarItems.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                {group.sections.map((item, index) =>
                  item.subItems ? (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem value={item.name}>
                      <AccordionTrigger className="flex justify-between items-center gap-3 px-3 py-2 rounded-3xl dark:hover:bg-gray-700">
  <div className="flex items-center gap-3">
    <span
      className={`${
        activePath.includes(item.name.toLowerCase()) ? "text-white" : "text-gray-600 dark:text-gray-400"
      }`}
    >
      {item.icon}
    </span>
    <span className="text-sm font-satoshi font-normal">
      {item.name}
    </span>
  </div>
  <div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 transition-transform transform ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
  </div>
</AccordionTrigger>

                        <AccordionContent className="ml-5 border-l-[1px] border-gray-200 dark:border-gray-700 pl-3">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className={`flex items-center gap-2 px-2 py-1 mt-3 rounded-3xl  dark:hover:bg-gray-700 transition ${
                                activePath === subItem.href
                                  ? "text-white bg-[#05C067] rounded-3xl  dark:bg-[#161B1E] dark:border-[#05C067] dark:border-2"
                                  : "text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              {subItem.icon}
                              <span className="text-sm font-satoshi">{subItem.name}</span>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-3xl hover:bg-green-50 dark:hover:bg-gray-700 transition ${
                        activePath === item.href
                          ? "dark:bg-[#161B1E] dark:border-[#05C067] dark:border-2"
                          : "text-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-32">
            <Link
              href="/logout"
              className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-md transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Translucent Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  )
}

export default Sidebar

"use client";

import {
  LogOut,
  Home, Settings, Package,
  X,
  WalletIcon,
  User,
  Bookmark,
  Bell,
  Headphones,
  CircleDashed
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaDiscord, FaGuilded, FaTelegram } from "react-icons/fa6";

interface SidebarProps {
  activePath: string;
  isOpen: boolean;
  onClose: () => void;
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
            icon: <Package className="w-4 h-4 text-purple-500" />,
          },
          {
            name: "Purchase Plans",
            href: "/dashboard/my-plans/purchase-plan",
            icon: <Package className="w-4 h-4 text-blue-600" />,
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
            icon: <FaGuilded className="w-4 h-4 text-green-500" />,
          },
          {
            name: "Contact Us",
            href: "/dashboard/support/contact-us",
            icon: <Headphones className="w-4 h-4 text-pink-500" />,
          },
          {
            name: "Integrations",
            href: "/dashboard/support/integrations",
            icon: <CircleDashed className="w-4 h-4 text-purple-500 " />,
          },
        ],
      },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ activePath, isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 left-1/2 w-11/12 max-w-sm h-5/6 bg-white dark:bg-[#09090B] rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 overflow-y-auto lg:translate-x-0 lg:translate-y-0 lg:top-0 lg:left-0 lg:w-64 lg:h-screen lg:opacity-100 lg:scale-100 ${
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

        {/* Sidebar Content */}
        <div className="px-6 py-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/logo.svg" alt="Cat Proxies" className="w-10 h-11" />
            <h1 className="text-base font-medium text-gray-800 dark:text-gray-200">
              Cat Proxies
            </h1>
          </div>

          {/* Dashboard Link */}
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            MAIN MENU
          </p>
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 mt-4 transition ${
              activePath === "/dashboard"
                ? " dark:bg-[#161B1E] dark:text-green-300"
                : "text-gray-800 dark:text-gray-300"
            }`}
          >
            <Home className="w-8 h-8 bg-[#05C067] p-2 text-white rounded-md" />
            <span className="font-medium text-sm">Dashboard</span>
          </Link>

          {/* Sidebar Items */}
          <div className="mt-6 ml-2 space-y-8">
            {sidebarItems.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                {group.sections.map((item, index) =>
                  item.subItems ? (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem value={item.name}>
                        <AccordionTrigger className="flex items-center gap-3 px-3 py-2 rounded-md  dark:hover:bg-gray-700 ">
                          {item.icon}
                          <span className="text-sm font-normal ">{item.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="ml-6">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition ${
                                activePath === subItem.href
                                  ? "text-white bg-[#05C067] rounded-full p-1 dark:text-green-300"
                                  : "text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              {subItem.icon}
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition ${
                        activePath === item.href
                          ? "dark:bg-[#161B1E] text-green-500 dark:text-green-300"
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
          <div className="mt-12">
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
  );
};

export default Sidebar;

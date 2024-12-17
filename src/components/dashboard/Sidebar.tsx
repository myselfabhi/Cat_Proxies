"use client";

import {
  LogOut,
  Home,
  File,
  Folder,
  Gift,
  MessageCircle,
  Phone,
  Bell,
  Settings,
  DollarSign,
  Package,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useState } from "react";

interface SidebarProps {
  activePath: string;
}

const sidebarItems = [
  {
    sections: [
      {
        name: "Deposit Balance",
        href: "/dashboard/deposit",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
      },
      {
        name: "My Plans",
        icon: <Folder className="w-5 h-5 text-green-500" />,
        subItems: [
          {
            name: "Active Plans",
            href: "/dashboard/activeplan",
            icon: <Package className="w-4 h-4 text-purple-500" />,
          },
          {
            name: "Purchase Plans",
            href: "/dashboard/purchaseplan",
            icon: <Package className="w-4 h-4 text-purple-500" />,
          },
        ],
      },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: <File className="w-5 h-5 text-green-500" />,
      },
    ],
  },
  {
    sections: [
      {
        name: "My Account",
        icon: <Settings className="w-5 h-5 text-green-500" />,
        subItems: [
          {
            name: "Settings",
            href: "/dashboard/profile",
            icon: <Settings className="w-4 h-4 text-purple-500" />,
          },
          {
            name: "Get Bonus",
            href: "/dashboard/getbonus",
            icon: <Gift className="w-4 h-4 text-purple-500" />,
          },
        ],
      },
      {
        name: "Discord Server",
        href: "/dashboard/discord",
        icon: <MessageCircle className="w-5 h-5 text-green-500" />,
      },
      {
        name: "Telegram ",
        href: "/dashboard/telegram",
        icon: <Phone className="w-5 h-5 text-green-500" />,
      },
    ],
  },
  {
    sections: [
      {
        name: "Support",
        icon: <Bell className="w-5 h-5 text-green-500" />,
        subItems: [
          {
            name: "Guide",
            href: "/dashboard/support/guide",
            icon: <File className="w-4 h-4 text-green-500" />,
          },
          {
            name: "Contact Us",
            href: "/dashboard/contactus",
            icon: <MessageCircle className="w-4 h-4 text-pink-500" />,
          },
          {
            name: "Integrations",
            href: "/dashboard/support/integrations",
            icon: <Folder className="w-4 h-4 text-purple-500" />,
          },
        ],
      },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ activePath }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  return (
    <>
      {/* Hamburger Menu for Smaller Screens */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-100 rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-68 bg-cream-800 px-6 py-8 overflow-y-auto z-50 transform transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/logo.svg" alt="Cat Proxies" className="w-16 h-16" />
          <h1 className="text-lg font-semibold text-gray-800">Cat Proxies</h1>
        </div>

        {/* Dashboard Link */}
        <p className="text-xs font-semibold text-gray-500 mt-12">MAIN MENU</p>
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 mt-6 transition ${
            activePath === "/dashboard"
          }`}
        >
          <Home className="w-8 h-8 text-white p-1 bg-green-500 rounded-md " />
          <span className="text-lg font-medium">Dashboard</span>
        </Link>

        {/* Sidebar Items */}
        <div className="mt-6 space-y-4">
          {sidebarItems.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              {group.sections.map((item, index) =>
                item.subItems ? (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={item.name}>
                      <AccordionTrigger
                        className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 transition ${
                          activePath === item.href
                            ? "bg-green-50 text-green-500"
                            : "text-gray-800"
                        }`}
                      >
                        {item.icon}
                        <span className=" font-medium ">{item.name}</span>
                      </AccordionTrigger>
                      <AccordionContent className="ml-8 mt-2">
                        <ul className="space-y-0">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 transition ${
                                  activePath === subItem.href
                                    ? "text-green-500"
                                    : "text-gray-600"
                                }`}
                              >
                                {subItem.icon}
                                <span className="text-sm">{subItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 transition ${
                      activePath === item.href
                        ? "bg-green-50 text-green-500"
                        : "text-gray-800"
                    }`}
                  >
                    {item.icon}
                    <span className=" font-medium">{item.name}</span>
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-4">
          <Link
            href="/logout"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-md"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Background Overlay for Mobile View */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

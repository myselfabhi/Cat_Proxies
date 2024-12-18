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
            href: "/dashboard/purchase-plan",
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
            href: "/dashboard/get-bonus",
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
            href: "/dashboard/contact-us",
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
      {/* Hamburger Menu for Mobile */}
      <button
        className="fixed top-44 left-4 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 left-1/2 w-11/12 max-w-sm h-5/6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 overflow-y-auto lg:translate-x-0 lg:translate-y-0 lg:top-0 lg:left-0 lg:w-1/5 lg:h-screen lg:opacity-100 lg:scale-100 lg:pointer-events-auto ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none lg:pointer-events-auto"
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-200 rounded-full lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Sidebar Content */}
        <div className="px-6 py-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/logo.svg" alt="Cat Proxies" className="w-12 h-12" />
            <h1 className="text-lg font-semibold text-gray-800">Cat Proxies</h1>
          </div>

          {/* Dashboard Link */}
          <p className="text-xs font-semibold text-gray-500 mt-12">MAIN MENU</p>
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 mt-6 transition ${
              activePath === "/dashboard" ? "bg-green-50 text-green-500" : "text-gray-800"
            }`}
          >
            <Home className="w-8 h-8 text-white p-1 bg-green-500 rounded-md" />
            <span className="text-lg font-medium">Dashboard</span>
          </Link>

          {/* Sidebar Items */}
          <div className="space-y-8 mt-6">
            {sidebarItems.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                {group.sections.map((item, index) =>
                  item.subItems ? (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem value={item.name}>
                        <AccordionTrigger
                          className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-50 transition ${
                            activePath === item.href ? "bg-green-50 text-green-500" : "text-gray-800"
                          }`}
                        >
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
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
                        activePath === item.href ? "bg-green-50 text-green-500" : "text-gray-800"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
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
              className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 rounded-md transition"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

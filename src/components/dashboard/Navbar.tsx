"use client";

import { Settings, Wallet } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const Navbar = () => {
  const [language, setLanguage] = useState("English");

  return (
    <nav className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg container">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="User Profile"
          className="w-12 h-12 rounded-full shadow-md"
        />
        <div>
          <p className="text-lg font-semibold">Hi Maxlin!!</p>
          <p className="text-sm text-gray-600">support@MaxLin.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <Accordion type="single" collapsible className="w-24">
          <AccordionItem value="language">
            <AccordionTrigger className="flex items-center px-2 py-2">
              <span className="text-sm text-gray-700 mr-2">{language}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="p-2 bg-white rounded-md shadow-md">
                <li
                  onClick={() => setLanguage("English")}
                  className="cursor-pointer text-sm text-gray-600 hover:text-green-500 hover:bg-gray-50 px-2 py-1 rounded"
                >
                  English
                </li>
                <li
                  onClick={() => setLanguage("French")}
                  className="cursor-pointer text-sm text-gray-600 hover:text-green-500 hover:bg-gray-50 px-2 py-1 rounded"
                >
                  French
                </li>
                <li
                  onClick={() => setLanguage("German")}
                  className="cursor-pointer text-sm text-gray-600 hover:text-green-500 hover:bg-gray-50 px-2 py-1 rounded"
                >
                  German
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Wallet Balance */}
        <div className="flex flex-col items-start w-40 bg-gray-100 rounded-md shadow-md px-3 py-2">
          <div className="flex items-center">
            <Wallet className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-500">Wallet Balance</span>
          </div>
          <span
            className="text-lg font-semibold text-[#019B83] "
          >
            $1870
          </span>
        </div>

        {/* Settings Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

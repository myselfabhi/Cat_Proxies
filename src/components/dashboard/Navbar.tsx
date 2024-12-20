"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Wallet, Menu, X, Settings, Sun, Moon } from "lucide-react";

interface NavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onSidebarToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-full bg-green-500 text-white shadow-md lg:hidden"
          onClick={onSidebarToggle}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
          alt="Profile"
          className="w-12 h-12 rounded-full shadow-md"
        />
        <div className="hidden lg:block">
          <p className="text-sm font-medium dark:text-white">Hi Maxlin!</p>
          <p className="text-sm font-medium text-gray-500 dark:text-white">support@MaxLin.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mr-8">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`w-14 h-7 flex items-center rounded-full p-1 ${
              isDarkMode ? "bg-blue-600" : "bg-yellow-400"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform transform ${
                isDarkMode ? "translate-x-6 bg-blue-300" : "translate-x-0 bg-yellow-200"
              }`}
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-white" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          </button>
        </div>

        <div className="hidden lg:flex flex-col w-24 bg-[#f4f4f4] dark:bg-gray-700 rounded-md p-2">
        <div className="flex items-center">
            <Wallet className="w-2 h-2 text-black dark:text-gray-400 mr-1" />
            <span className="text-[5px] font-normal font-sora text-black dark:text-gray-400">Wallet Balance</span>
          </div>
          <span className="text-xs font-normal text-[#019B83]">$1870</span>
        </div>

        <div className="flex items-center lg:hidden bg-[#f4f4f4] dark:bg-gray-700 rounded-md shadow-md px-3 py-2">
          <Wallet className="w-2 h-2 text-gray-600 dark:text-gray-400 mr-2" />
          <span className="text-sm font-semibold text-[#019B83]">$1870</span>
        </div>

        <Link href="/dashboard/my-account/settings">
          <button className="hidden lg:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <Settings className="w-3 h-3 text-[#6f6f6f] dark:text-gray-400" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

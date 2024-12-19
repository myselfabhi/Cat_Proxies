"use client";

import { useState, useEffect } from "react";
import { Settings, Wallet, Menu, X } from "lucide-react";

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
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      {/* Left Section: Hamburger Icon and Profile Image */}
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
          <p className="text-lg font-semibold dark:text-gray-200">Hi Maxlin!</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">support@MaxLin.com</p>
        </div>
      </div>

      {/* Right Section: Dark Mode Toggle, Wallet Balance, and Settings */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm dark:text-gray-200">Light</span>
          <button
            onClick={toggleDarkMode}
            className={`w-16 h-8 flex items-center rounded-full p-1 ${
              isDarkMode ? "bg-blue-600" : "bg-yellow-400"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full transition-transform transform ${
                isDarkMode ? "translate-x-8 bg-blue-300" : "translate-x-0 bg-yellow-200"
              }`}
            ></div>
          </button>
          <span className="text-sm dark:text-gray-200">Dark</span>
        </div>

        {/* Wallet Balance */}
        <div className="hidden lg:flex flex-col items-end w-40 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md px-3 py-2">
          <div className="flex items-center">
            <Wallet className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Wallet Balance</span>
          </div>
          <span className="text-lg font-semibold text-[#019B83]">$1870</span>
        </div>

        {/* Wallet Balance for Mobile */}
        <div className="flex items-center lg:hidden bg-gray-100 dark:bg-gray-700 rounded-md shadow-md px-3 py-2">
          <Wallet className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
          <span className="text-sm font-semibold text-[#019B83]">$1870</span>
        </div>

        {/* Settings Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition">
          <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

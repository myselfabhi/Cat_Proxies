"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Wallet, Menu, X, Settings, Sun, Moon } from "lucide-react"

interface NavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onSidebarToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <nav className="flex items-center lg:border-[16px] border-[5px] dark:border-[#1E2327] border-white gap-[8px] justify-between bg-white dark:bg-[#1E2327] rounded-xl shadow-deep">
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-full bg-green-500 text-white shadow-md lg:hidden"
          onClick={onSidebarToggle}
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>


          <div className="hidden lg:block">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
              alt="Profile"
              className="w-12 h-12 rounded-full shadow-md"
            />
          </div>
        

        <div className="hidden lg:block">
          <p className="text-sm font-medium dark:text-white font-satoshi">Hi Maxlin!</p>
          <p className="text-sm font-medium text-gray-500 dark:text-white font-satoshi">
            support@MaxLin.com
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:mr-8">
        {/* Creative Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`relative w-12 h-6 flex items-center rounded-full ${
              isDarkMode
                ? "bg-purple-600"
                : "bg-yellow-400"
            } transition-colors duration-500`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform transform shadow-md ${
                isDarkMode
                  ? "translate-x-6 bg-purple-300"
                  : "translate-x-0 bg-yellow-200"
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

        {/* Wallet Balance */}
        <div className="hidden lg:flex flex-col w-24 bg-[#f4f4f4] dark:bg-[#161B1E] rounded-md p-2">
          <div className="flex items-center">
            <Wallet className="w-2 h-2 text-black dark:text-gray-400 mr-1" />
            <span className="text-[5px] font-normal font-sora text-black dark:text-gray-400">
              Wallet Balance
            </span>
          </div>
          <span className="text-xs font-normal font-sora text-[#019B83]">$1870</span>
        </div>

        <div className="flex items-center lg:hidden bg-[#f4f4f4] dark:bg-[#161B1E] rounded-md shadow-md px-3 py-2">
          <Wallet className="w-2 h-2 text-gray-600 dark:text-gray-400 mr-2" />
          <span className="text-sm font-semibold text-[#019B83]">$1870</span>
        </div>

        <Link href="/dashboard/my-account/settings">
          <button className="hidden lg:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <Settings className="w-3 h-3 dark:w-6 dark:h-6 text-[#6f6f6f] dark:text-white dark:bg-[#161B1E] dark:rounded-full dark:p-1" />
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

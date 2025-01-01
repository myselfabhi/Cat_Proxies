"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"

interface NavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onSidebarToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")

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

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang)
  }

  return (
    <nav className="flex items-center lg:border-[16px] border-[5px] dark:border-[#1E2327] border-white gap-[8px] justify-between bg-white dark:bg-[#1E2327] rounded-xl shadow-extrasoft">
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
          <p className="text-sm font-medium dark:text-white font-satoshi">
            Hi Maxlin!
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-white font-satoshi">
            support@MaxLin.com
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:mr-5">
        {/* Creative Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`relative w-12 h-5 flex items-center rounded-full ${
              isDarkMode ? "bg-purple-600" : "bg-yellow-400"
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

        <div className="relative flex items-center gap-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6342 16.3888L14.6363 8.00684C14.4258 7.45539 13.9545 7.1145 13.4131 7.1145C12.8717 7.1145 12.4105 7.45539 12.1799 8.02689L9.19204 16.3888C9.05167 16.7799 9.2522 17.211 9.64322 17.3514C10.0342 17.4917 10.4654 17.2912 10.6057 16.9002L11.2274 15.1656H15.5888L16.2105 16.9002C16.3207 17.211 16.6115 17.4015 16.9223 17.4015C17.0025 17.4015 17.0928 17.3915 17.173 17.3614C17.564 17.221 17.7645 16.7899 17.6242 16.3989L17.6342 16.3888ZM11.7788 13.6517L13.4231 9.04958L15.0675 13.6517H11.7788ZM9.22212 4.83853C6.95616 8.41792 4.9108 10.5836 2.42427 12.0274C2.30396 12.0976 2.17362 12.1277 2.0533 12.1277C1.79262 12.1277 1.54196 11.9973 1.40159 11.7567C1.19104 11.3957 1.31135 10.9345 1.6723 10.734C3.77782 9.51079 5.50235 7.75618 7.43743 4.84855H1.13088C0.719801 4.84855 0.378906 4.50766 0.378906 4.09658C0.378906 3.6855 0.719801 3.34461 1.13088 3.34461H4.89075V1.3594C4.89075 0.948317 5.23164 0.607422 5.64272 0.607422C6.05379 0.607422 6.3947 0.948317 6.3947 1.3594V3.34461H10.1546C10.5656 3.34461 10.9065 3.6855 10.9065 4.09658C10.9065 4.50766 10.5656 4.84855 10.1546 4.84855H9.21209L9.22212 4.83853ZM9.26222 12.1277C9.13188 12.1277 9.00154 12.0976 8.88122 12.0274C8.22951 11.6464 7.59785 11.2253 7.00629 10.7841C6.67542 10.5335 6.60525 10.0622 6.85591 9.73137C7.10656 9.4005 7.5778 9.33031 7.90867 9.58097C8.45009 9.99205 9.04164 10.3731 9.64322 10.724C10.0042 10.9345 10.1245 11.3957 9.91393 11.7567C9.77356 11.9973 9.52291 12.1277 9.26222 12.1277Z"
              fill="#454545"
            />
          </svg>
          <span className="text-sm font-medium font-satoshi text-[#020611] dark:text-white">
            {selectedLanguage}
          </span>
          <ChevronDown className="w-4 h-4 text-[#454545] dark:text-white" />
        </div>

        {/* Wallet Balance */}
        <div
          className="flex items-center bg-[#F0FBF3] border border-[#05C067] rounded-xl px-2 py-1 gap-2"
          style={{
            width: "119px",
            height: "33px",
          }}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.988 6.78054H14.908V4.5951C14.908 3.91302 14.4029 3.34838 13.7473 3.25142V2.75974C13.7473 2.00982 13.1372 1.39974 12.3873 1.39974H11.7848L11.4675 0.55414C11.4458 0.496391 11.4028 0.449199 11.3472 0.422357C11.2917 0.395515 11.228 0.391082 11.1692 0.40998L8.09709 1.39974H1.82557C1.18733 1.39974 0.667969 1.9191 0.667969 2.55734V12.2418C0.667969 12.9917 1.27805 13.6018 2.02797 13.6018H13.548C14.2979 13.6018 14.908 12.9917 14.908 12.2418V10.0564H14.988C15.2968 10.0564 15.548 9.80518 15.548 9.49638V7.34054C15.548 7.0319 15.2968 6.78054 14.988 6.78054ZM11.9649 1.8799H12.3873C12.8724 1.8799 13.2673 2.27462 13.2673 2.7599V3.23526H12.4736L12.4257 3.10774L11.9649 1.8799ZM11.2721 1.3999L11.662 2.43894L11.9609 3.23526H3.96541L11.0985 0.93734L11.2721 1.3999ZM1.82557 1.8799H6.60701L3.59261 2.8511L2.40013 3.23526H1.82557C1.45197 3.23526 1.14797 2.93126 1.14797 2.55766C1.14797 2.18406 1.45197 1.8799 1.82557 1.8799ZM14.428 12.2418C14.428 12.7271 14.0331 13.1218 13.548 13.1218H2.02797C1.79466 13.1216 1.57097 13.0288 1.406 12.8638C1.24102 12.6988 1.14822 12.4751 1.14797 12.2418V3.49558C1.15133 3.49814 1.15533 3.49974 1.15885 3.5023C1.20077 3.5319 1.24445 3.55894 1.29021 3.58294C1.29869 3.58742 1.30765 3.59126 1.31629 3.59558C1.35869 3.61654 1.40237 3.63494 1.44749 3.65062C1.45517 3.65334 1.46253 3.65638 1.47021 3.65894C1.52013 3.6751 1.57149 3.68726 1.62413 3.69654C1.63581 3.69862 1.64765 3.70022 1.65949 3.70198C1.71389 3.70982 1.76909 3.71526 1.82557 3.71526H13.548C14.0331 3.71526 14.428 4.10998 14.428 4.59526V6.7807H12.8379C12.088 6.7807 11.4779 7.39078 11.4779 8.1407V8.69654C11.4779 9.44646 12.088 10.0565 12.8379 10.0565H14.428V12.2418ZM15.068 9.49638C15.068 9.5176 15.0595 9.53794 15.0445 9.55295C15.0295 9.56795 15.0092 9.57638 14.988 9.57638H12.8379C12.6046 9.57613 12.3809 9.48333 12.2159 9.31835C12.0509 9.15338 11.9581 8.92969 11.9579 8.69638V8.14054C11.9579 7.65526 12.3528 7.26054 12.8379 7.26054H14.988C15.0092 7.26054 15.0295 7.26897 15.0445 7.28397C15.0595 7.29897 15.068 7.31932 15.068 7.34054V9.49638Z"
              fill="#05C067"
            />
          </svg>

          <div className="flex font-sora gap-1">
            <span className="text-[11px]  text-black">Balance</span>
            <span className="text-[11px]  text-[#05C067]">$100</span>
          </div>
        </div>

        {/* <Link href="/dashboard/my-account/settings">
          <button className="hidden lg:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <Settings className="w-3 h-3 dark:w-6 dark:h-6 text-[#6f6f6f] dark:text-white dark:bg-[#161B1E] dark:rounded-full dark:p-1" />
          </button>
        </Link> */}
      </div>
    </nav>
  )
}

export default Navbar

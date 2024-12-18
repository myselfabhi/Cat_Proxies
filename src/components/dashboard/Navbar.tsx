"use client";

import { Settings, Wallet, Menu, X } from "lucide-react";

interface NavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onSidebarToggle }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg">
      {/* Left Section: Hamburger Icon and Profile Image */}
      <div className="flex items-center gap-4">
        {/* Hamburger Icon for Mobile */}
        <button
          className="p-2 rounded-full bg-green-500 text-white shadow-md lg:hidden"
          onClick={onSidebarToggle}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Profile Image */}
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
          alt="Profile"
          className="w-12 h-12 rounded-full shadow-md"
        />
        <div className="hidden lg:block">
          <p className="text-lg font-semibold">Hi Maxlin!</p>
          <p className="text-sm text-gray-600">support@MaxLin.com</p>
        </div>
      </div>

      {/* Right Section: Wallet Balance and Settings */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex flex-col items-end w-40 bg-gray-100 rounded-md shadow-md px-3 py-2">
          <div className="flex items-center">
            <Wallet className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-500">Wallet Balance</span>
          </div>
          <span className="text-lg font-semibold text-[#019B83]">$1870</span>
        </div>

        {/* Wallet Balance for Mobile */}
        <div className="flex items-center lg:hidden bg-gray-100 rounded-md shadow-md px-3 py-2">
          <Wallet className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-sm font-semibold text-[#019B83]">$1870</span>
        </div>

        {/* Settings Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

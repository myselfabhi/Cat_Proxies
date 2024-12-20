"use client";

import {
  CreditCard,
  LayoutDashboard,
  Watch,
  Hourglass,
  Settings,
  BellIcon,
} from "lucide-react";

const Card = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-col p-3 md:p-4 bg-white dark:bg-[#1E2327] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 relative">
      <div className="flex flex-col gap-2 flex-grow space-y-2">
        <p className="text-xs font-medium text-[#525252] dark:text-gray-400 truncate">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-100 dark:bg-[#161B1E] rounded-full">
            {icon}
          </div>
          <p className="text-xl md:text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
            {value}
          </p>
        </div>
      </div>
      <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-4 h-4 text-gray-400 dark:text-gray-300"
        >
          <rect x="4" y="4" width="12" height="12" rx="2" ry="2" />
        </svg>
      </button>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="p-4 bg-white dark:bg-[#1E2327] rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="px-3 py-5">
        <BellIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
          Notification
        </p>
        <p className="text-[10px] font-normal text-[#525252] dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis congue odio, at condimentum nisl. Nam vitae scelerisque mauris, ac efficitur ex. 
        </p>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      title: "Balance",
      value: "$17,500.90",
      icon: <CreditCard className="w-3 h-3 text-gray-400 dark:text-gray-300" />,
    },
    {
      title: "Active Plans",
      value: "122",
      icon: (
        <LayoutDashboard className="w-3 h-3 text-gray-400 dark:text-gray-300" />
      ),
    },
    {
      title: "Contact Us",
      value: "2232",
      icon: <Watch className="w-3 h-3 text-gray-400 dark:text-gray-300" />,
    },
    {
      title: "Support",
      value: "22",
      icon: <Hourglass className="w-3 h-3 text-gray-400 dark:text-gray-300" />,
    },
    {
      title: "Settings",
      value: "$17,500.90",
      icon: <Settings className="w-3 h-3 text-gray-400 dark:text-gray-300" />,
    },
  ];

  return (
    <div className="container mx-auto space-y-4">
      {/* Notification */}
      <Notification />

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

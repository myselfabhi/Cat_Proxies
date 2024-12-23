"use client"

import {
  CreditCard,
  LayoutDashboard,
  Watch,
  Hourglass,
  Settings,
  BellIcon,
} from "lucide-react"

const Card = ({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: JSX.Element
}) => {
  return (
    <div className="flex flex-col border-[14px] dark:border-[#1E2327] border-white gap-[10px] bg-white dark:bg-[#1E2327] rounded-lg shadow-soft hover:shadow-md transition-shadow duration-200 relative">
      <div className="flex flex-col gap-3 flex-grow space-y-2">
        <p className="text-xs font-medium font-satoshi text-[#525252] dark:text-gray-400 truncate">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-100 dark:bg-[#161B1E] rounded-full">
            {icon}
          </div>
          <p className="text-xl md:text-lg font-bold font-satoshi text-gray-800 dark:text-gray-200 truncate">
            {value}
          </p>
        </div>
      </div>
      <button className="absolute top-1 right-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.83252 3.50053C0.83252 1.75163 2.25028 0.333862 3.99919 0.333862H5.33252C5.60866 0.333862 5.83252 0.55772 5.83252 0.833862C5.83252 1.11 5.60866 1.33386 5.33252 1.33386H3.99919C2.80257 1.33386 1.83252 2.30391 1.83252 3.50053V4.83386C1.83252 5.11 1.60866 5.33386 1.33252 5.33386C1.05638 5.33386 0.83252 5.11 0.83252 4.83386V3.50053ZM10.1659 0.833862C10.1659 0.55772 10.3897 0.333862 10.6659 0.333862H11.9992C13.7481 0.333862 15.1659 1.75163 15.1659 3.50053V4.83386C15.1659 5.11 14.942 5.33386 14.6659 5.33386C14.3897 5.33386 14.1659 5.11 14.1659 4.83386V3.50053C14.1659 2.30391 13.1958 1.33386 11.9992 1.33386H10.6659C10.3897 1.33386 10.1659 1.11 10.1659 0.833862ZM1.33252 9.6672C1.60866 9.6672 1.83252 9.89105 1.83252 10.1672V11.5005C1.83252 12.6971 2.80257 13.6672 3.99919 13.6672H5.33252C5.60866 13.6672 5.83252 13.8911 5.83252 14.1672C5.83252 14.4433 5.60866 14.6672 5.33252 14.6672H3.99919C2.25028 14.6672 0.83252 13.2494 0.83252 11.5005V10.1672C0.83252 9.89105 1.05638 9.6672 1.33252 9.6672ZM14.6659 9.6672C14.942 9.6672 15.1659 9.89105 15.1659 10.1672V11.5005C15.1659 13.2494 13.7481 14.6672 11.9992 14.6672H10.6659C10.3897 14.6672 10.1659 14.4433 10.1659 14.1672C10.1659 13.8911 10.3897 13.6672 10.6659 13.6672H11.9992C13.1958 13.6672 14.1659 12.6971 14.1659 11.5005V10.1672C14.1659 9.89105 14.3897 9.6672 14.6659 9.6672Z"
            fill="#A8A8A8"
          />
        </svg>
      </button>
    </div>
  )
}

const Notification = () => {
  return (
    <div className="border-[14px] dark:border-[#1E2327] border-white gap-[8px] p-[8px] bg-white dark:bg-[#1E2327] rounded-lg shadow-soft flex flex-col sm:flex-row items-start sm:items-center">
      <div className="px-3">
        <BellIcon className="w-6 h-6 dark:fill-white dark:bg-[#F9AA4B] dark:p-2 text-gray-400 dark:text-white dark:rounded-full dark:w-10 dark:h-10" />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium font-satoshi text-gray-800 dark:text-gray-200">
          Notification
        </p>
        <p className="text-[10px] w-full sm:w-[617px] font-normal font-satoshi text-[#525252] dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          congue odio, at condimentum nisl. Nam vitae scelerisque mauris, ac
          efficitur ex.
        </p>
      </div>
    </div>
  )
}

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
  ]

  return (
    <div className="w-full space-y-4">
      {/* Notification */}
      <Notification />

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

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
  )
}

export default Cards

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
    <div className="flex flex-col p-3 md:p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 relative">
      <div className="flex flex-col gap-2 flex-grow">
        <p className="text-xs md:text-sm font-medium text-gray-500 truncate">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
          <p className="text-xl md:text-lg font-semibold text-gray-800 truncate">
            {value}
          </p>
        </div>
      </div>
      <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-4 h-4 text-gray-400"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        </svg>
      </button>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="px-3 py-5">
        <BellIcon className="w-6 h-6 text-gray-400" />
      </div>
      <div>
        <p className="text-xs md:text-sm font-medium text-gray-800">
          Notification
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          congue odio, et condimentum nisl.
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
      icon: <CreditCard className="w-5 h-5 text-gray-400" />,
    },
    {
      title: "Active Plans",
      value: "122",
      icon: <LayoutDashboard className="w-5 h-5 text-gray-400" />,
    },
    {
      title: "Contact Us",
      value: "2232",
      icon: <Watch className="w-5 h-5 text-gray-400" />,
    },
    {
      title: "Support",
      value: "22",
      icon: <Hourglass className="w-5 h-5 text-gray-400" />,
    },
    {
      title: "Settings",
      value: "$17,500.90",
      icon: <Settings className="w-5 h-5 text-gray-400" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 space-y-4">
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

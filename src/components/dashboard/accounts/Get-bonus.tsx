import DashboardLayout from "@/components/DashboardLayout";

const GetBonus = () => {
  const bonusData = [
    {
      id: 1,
      title: "1Gb — For everyone!",
      description:
        "If you are actively buying proxies with crypto, you can claim 1GB of residential proxies for free. If you just used proxies from other providers, let’s chat—we’re happy to offer you a trial. And if you work for a business, we’ve got a special offer: 5GB of free residential proxies.",
      buttonText: "Contact Us",
      icon: "/gift_bonus.svg", 
    },
    {
      id: 2,
      title: "5GB free",
      description:
        "Leave us a positive review on Trustpilot or G2 and enjoy 2GB of free residential proxies. Want even more? Write reviews on both platforms, and we’ll boost your reward to 5GB.",
      buttonText: "Contact Us",
      icon: "/cards_bonus.svg", 
    },
    {
      id: 3,
      title: "3-5% discount",
      description:
        "Link your social media on site and contact us to share where you found CatProxies—we’ll give you a 3-5% discount code. Want an even bigger discount? Refer a friend, and we will offer a bigger discount code for both of you!",
      buttonText: "Contact Us",
      icon: "/setting_bonus.svg", 
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {bonusData.map((bonus) => (
              <div
                key={bonus.id}
                className="relative flex flex-col items-center text-center p-6 bg-white dark:bg-[#1E2327] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-52 lg:h-40 flex items-center justify-center -mt-12">
                  <img
                    src={bonus.icon}
                    alt={bonus.title}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="mt-8 space-y-5">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200">
                    {bonus.title}
                  </h2>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 px-2">
                    {bonus.description}
                  </p>
                  <button className="px-4 py-2 bg-[#FB9400] rounded-md font-medium hover:bg-orange-600 ">
                    {bonus.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </DashboardLayout>
  );
};

export default GetBonus;

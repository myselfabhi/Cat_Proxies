import DashboardLayout from "@/components/DashboardLayout"

const GetBonus = () => {
  const bonusData = [
    {
      id: 1,
      title: "1Gb — For everyone!",
      description:
        "If you are actively buying proxies with crypto, you can claim 1GB of residential proxies for free. If you’ve just used proxies from other providers, let’s chat—we’re happy to offer you a trial. And if you work for a business, we’ve got a special offer: 3GB of free residential proxies",
      buttonText: "Contact Us",
      icon: "/gift_bonus.svg",
    },
    {
      id: 2,
      title: "5GB free",
      description:
        "Leave us a positive review on Trustpilot or G2 and enjoy 2GB of free residential proxies. Want even more? Write reviews on both platforms, and we'll boost your reward to 5GB",
      buttonText: "Contact Us",
      icon: "/cards_bonus.svg",
    },
    {
      id: 3,
      title: "3-5% discount",
      description:
        "Link your social media on site and contact us to share where you found catproxies—we’ll give you a 3-5% discount code. Want an even bigger discount? Refer a friend, and we will offer a bigger discount code for both of you!05:44 PM",
      buttonText: "Contact Us",
      icon: "/setting_bonus.svg",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8 container mx-auto font-satoshi">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-40">
          {bonusData.map((bonus) => (
            <div
              key={bonus.id}
              className="relative flex flex-col space-y-12 justify-between p-8   bg-white dark:bg-[#1E2327] rounded-lg shadow-extrasoft hover:shadow-lg border"
            >
              {/* Icon, Title, and Description */}
              <div className="text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-52 lg:h-40 flex items-center justify-center lg:-mt-24 mx-auto">
                  <img
                    src={bonus.icon}
                    alt={bonus.title}
                    className="object-contain "
                  />
                </div>
                <h2 className="mt-8 text-lg sm:text-xl lg:text-2xl font-medium text-[#000000] dark:text-gray-200">
                  {bonus.title}
                </h2>
                <p className="mt-4  text-sm font-medium text-[#6F6F6F] dark:text-gray-400 px-4 text-center  underline-offset-[from-font] [text-underline-position:from-font] font-[Satoshi Variable] leading-5">
                  {bonus.description}
                </p>
              </div>

              {/* Button */}
              <div className="mt-3 text-center">
                <button
                  className="w-1/2 px-4 py-2 text-[15.71px] text-white  rounded-lg font-medium bg-[#05C067] "
 
                >
                  {bonus.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default GetBonus

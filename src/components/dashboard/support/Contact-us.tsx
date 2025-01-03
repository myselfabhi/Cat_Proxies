import DashboardLayout from "@/components/DashboardLayout"

const Contactus_db = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Live Chat",
      description: "Chat with us",
      icon: "/live_chat.svg",
      // color: "linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)",
    },
    {
      id: 2,
      title: "discord.gg/catproxy",
      description: "Join us on Discord",
      icon: "/discord.svg",
      // color: "linear-gradient(286.17deg, #6949FF 0%, #876DFF 100%)",
    },
    {
      id: 3,
      title: "@catproxies",
      description: "Reach us on Telegram",
      icon: "/@web.svg",
      // color: "linear-gradient(286.17deg, #05C067 0%, #0FD87C 100%)",
    },
    {
      id: 4,
      title: "support@catproxies.com",
      description: "Email us",
      icon: null,
      // color: "linear-gradient(286.17deg, #246BFD 0%, #5089FD 100%)",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8 container mx-auto px-4 py-8 font-satoshi">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="relative flex flex-col items-center text-center p-6 bg-white dark:bg-[#1E2327] rounded-lg shadow-extrasoft hover:shadow-lg transition-shadow"
            >


              {/* Icon */}
              {method.icon ? (
                <img
                  src={method.icon}
                  alt={method.title}
                  className="w-9 h-7 mb-4 mt-4"
                />
              ) : (
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 mt-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75 4.125C4.54086 4.125 2.75 5.91586 2.75 8.125V9.3885L14.7355 18.1052C15.7874 18.8703 17.2126 18.8703 18.2645 18.1052L30.25 9.3885V8.125C30.25 5.91586 28.4591 4.125 26.25 4.125H6.75ZM30.25 11.8615L19.4409 19.7227C17.6876 20.9978 15.3124 20.9978 13.5591 19.7227L2.75 11.8615V24.875C2.75 27.0841 4.54086 28.875 6.75 28.875H26.25C28.4591 28.875 30.25 27.0841 30.25 24.875V11.8615Z"
                    fill="url(#paint0_linear_0_4492)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_4492"
                      x1="2.73853"
                      y1="4.10533"
                      x2="34.8411"
                      y2="13.9293"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#88E2FF" />
                      <stop offset="1" stopColor="#00B5E7" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {/* Title */}
              <h2 className="text-sm font-bold text-[#020611] dark:text-gray-200 break-words">
                {method.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-[#1E2327] p-6 md:p-8 rounded-lg shadow-extrasoft">
          <div className="flex justify-center mb-6">
            <img
              src="/cat_contact.svg"
              alt="Contact Cat"
              className="w-20 h-20"
            />
          </div>

          <form className="space-y-6">
            {/* Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium my-4 text-[#161616] dark:text-gray-400 ">
                  FULL NAME*
                </label>
                <input
                  type="text"
                  className="mt-1 w-full pb-3 text-sm border-b border-[#E0E0E0] dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#393939] dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="So we know how to address you"
                />
              </div>
              <div>
                <label className="block text-sm font-medium my-4 text-[#161616] dark:text-gray-400">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  className="mt-1 w-full pb-3 text-sm border-b border-[#E0E0E0] dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#393939]  dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="Tailor the services to your business needs"
                />
              </div>
            </div>

            {/* Email and Referral */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium my-4 text-[#161616] dark:text-gray-400">
                  EMAIL*
                </label>
                <input
                  type="email"
                  className="mt-1 w-full pb-3 text-sm border-b border-[#E0E0E0] dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#393939] dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="So we can respond promptly to your inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium my-4 text-[#161616] dark:text-gray-400">
                  WHO REFERRED YOU TO US?
                </label>
                <input
                  type="text"
                  className="mt-1 w-full pb-3 text-sm border-b border-[#E0E0E0] dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#393939] dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="So we can say thank you"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium my-4 text-[#161616] dark:text-gray-400">
                MESSAGE
              </label>
              <textarea
                className="mt-1 w-full pb-3 text-sm border-b border-[#E0E0E0] dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#393939]   dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                placeholder="Provide details about your request"
                rows={1}
              ></textarea>
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium my-2 text-[#161616] dark:text-gray-400">
                Any Document to Upload for Us
              </label>
              <div className="flex items-center gap-2 rounded-md cursor-pointer bg-white dark:bg-[#161B1E]">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M3.5 6.00018C3.5 3.79104 5.29086 2.00018 7.5 2.00018H14.5L21.5 9.00018V18.0002C21.5 20.2093 19.7091 22.0002 17.5 22.0002H7.5C5.29086 22.0002 3.5 20.2093 3.5 18.0002V6.00018Z"
                    fill="#28303F"
                  />
                  <path
                    d="M21.5 9.00018L14.5 2.00018V5.00018C14.5 7.20932 16.2909 9.00018 18.5 9.00018H21.5Z"
                    fill="#28303F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.75 11.0002C7.75 10.586 8.08579 10.2502 8.5 10.2502L12.5 10.2502C12.9142 10.2502 13.25 10.586 13.25 11.0002C13.25 11.4144 12.9142 11.7502 12.5 11.7502L8.5 11.7502C8.08579 11.7502 7.75 11.4144 7.75 11.0002Z"
                    fill="#28303F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.75 16.0002C7.75 15.586 8.08579 15.2502 8.5 15.2502H16.5C16.9142 15.2502 17.25 15.586 17.25 16.0002C17.25 16.4144 16.9142 16.7502 16.5 16.7502H8.5C8.08579 16.7502 7.75 16.4144 7.75 16.0002Z"
                    fill="#28303F"
                  />
                </svg>
                <p className="text-sm text-[#525252] underline dark:text-gray-400">
                  Click here to upload document
                </p>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start justify-between space-x-2 ">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  id="privacy-policy"
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-xs text-gray-600 dark:text-gray-400"
                >
                  I agree and consent to the Privacy Policy, its terms of
                  processing of my personal data.
                </label>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-16 py-2 text-[15.71px] rounded-md font-medium hover:opacity-90 transition bg-[#05C067] text-white"

                >
                  Get It
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Contactus_db

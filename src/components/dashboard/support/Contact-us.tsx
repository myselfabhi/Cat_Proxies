import DashboardLayout from "@/components/DashboardLayout";
import { Mail } from "lucide-react";

const Contactus_db = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Live Chat",
      description: "Chat with us",
      icon: "/live_chat.svg",
    },
    {
      id: 2,
      title: "discord.gg/catproxy",
      description: "Join us on Discord",
      icon: "/discord.svg",
    },
    {
      id: 3,
      title: "@catproxies",
      description: "Reach us on Telegram",
      icon: "/@web.svg",
    },
    {
      id: 4,
      title: "support@catproxies.com",
      description: "Email us",
      icon: null, 
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="flex flex-col border border-t-4 border-t-red-500 items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              {method.icon ? (
                <img
                  src={method.icon}
                  alt={method.title}
                  className="w-9 h-7 mb-4"
                />
              ) : (
                <Mail className="w-10 h-8 text-white fill-blue-400 dark:text-gray-300 mb-4" />
              )}

              {/* Title */}
              <h2 className="text-sm font-medium text-gray-800 dark:text-gray-200 break-words">
                {method.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md">
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
                <label className="block text-sm font-medium my-4 text-gray-600 dark:text-gray-400 ">
                  FULL NAME*
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 text-sm border-b border-gray-500 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="So we know how to address you"
                />
              </div>
              <div>
                <label className="block text-sm font-medium my-4 text-gray-600 dark:text-gray-400">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 text-sm border-b border-gray-500 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="Tailor the services to your business needs"
                />
              </div>
            </div>

            {/* Email and Referral */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium my-4 text-gray-600 dark:text-gray-400">
                  EMAIL*
                </label>
                <input
                  type="email"
                  className="mt-1 w-full p-3 text-sm border-b border-gray-500 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="So we can respond promptly to your inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium my-4 text-gray-600 dark:text-gray-400">
                  WHO REFERRED YOU TO US?
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 text-sm border-b border-gray-500 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                  placeholder="So we can say thank you"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium my-4 text-gray-600 dark:text-gray-400">
                MESSAGE
              </label>
              <textarea
                className="mt-1 w-full p-3 text-sm border-b border-gray-500 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
                placeholder="Provide details about your request"
                rows={1}
              ></textarea>
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium my-4 text-gray-600 dark:text-gray-400">
                Any Document to Upload for Us
              </label>
              <div className="border-b border-gray-300 dark:border-gray-700 rounded-md ml-4 cursor-pointer bg-white dark:bg-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click here to upload document
                </p>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1"
                id="privacy-policy"
              />
              <label
                htmlFor="privacy-policy"
                className="text-xs text-gray-600 dark:text-gray-400 mt-1"
              >
                I agree and consent to the Privacy Policy, its terms of
                processing of my personal data.
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="px-10 py-2 bg-[#FB9400]  text-sm rounded-md font-medium hover:bg-orange-600 transition"
              >
                Get It
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contactus_db;

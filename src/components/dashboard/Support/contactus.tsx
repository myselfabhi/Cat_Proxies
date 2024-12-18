import DashboardLayout from '@/components/layout';
import { Mail } from 'lucide-react';

const Contactus_db = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Live Chat",
      description: "Chat with us",
      icon: "/live_chat.svg", // Path for card 1
    },
    {
      id: 2,
      title: "discord.gg/catproxy",
      description: "Join us on Discord",
      icon: "/discord.svg", // Path for card 2
    },
    {
      id: 3,
      title: "@catproxies",
      description: "Reach us on Telegram",
      icon: "/@web.svg", // Path for card 3
    },
    {
      id: 4,
      title: "support@catproxies.com",
      description: "Email us",
      icon: null, // Mail icon from Lucide
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-gray-800">
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              {method.icon ? (
                <img
                  src={method.icon}
                  alt={method.title}
                  className="w-12 h-12 mb-4"
                />
              ) : (
                <Mail className="w-12 h-12 text-gray-700 mb-4" />
              )}

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800">{method.title}</h2>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
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
                <label className="block text-sm font-medium text-gray-600">
                  FULL NAME*
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="So we know how to address you"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="So we can tailor the services to your business needs"
                />
              </div>
            </div>

            {/* Email and Referral */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  EMAIL*
                </label>
                <input
                  type="email"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="So we can respond promptly to your inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  WHO REFERRED YOU TO US?
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="So we can say thank you"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                MESSAGE
              </label>
              <textarea
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"
                rows={4}
              ></textarea>
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Any Document to Upload for Us
              </label>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center cursor-pointer">
                <p className="text-sm text-gray-600">Click here to upload document</p>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1"
              />
              <label className="text-sm text-gray-600">
                I agree and consent to the Privacy Policy, its terms of
                processing of my personal data.
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
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

import { MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="container mx-auto px-2">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="text-gray-800 dark:text-gray-200 mb-6">
          <h2 className="text-xl font-bold">Social</h2>
        </div>

        {/* Social Accounts */}
        <div className="space-y-6">
          {/* Telegram */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-green-500" />
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Telegram</label>
            </div>
            <input
              type="text"
              value="@tgfigure"
              className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>

          {/* Discord */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="w-6 h-6 text-green-500" />
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Discord</label>
            </div>
            <input
              type="text"
              value="@dglxyz"
              className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

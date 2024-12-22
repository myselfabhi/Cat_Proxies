import { FaDiscord, FaTelegram } from "react-icons/fa6"

export default function Social() {
  return (
    <div className="container mx-auto px-2">
      <div className="bg-white dark:bg-[#1E2327] rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {/* Telegram */}
          <div className="flex flex-col  gap-4">
            <div className="flex  items-center gap-2">
              <FaTelegram className="w-6 h-6 text-green-500" />
              <label className="text-sm  text-gray-600 dark:text-gray-400">
                Telegram
              </label>
            </div>
            <input
              type="text"
              value="@tgfigure"
              className="flex-1 p-3 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>

          {/* Discord */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaDiscord className="w-6 h-6 text-green-500" />
              <label className="text-sm  text-gray-600 dark:text-gray-400">
                Discord
              </label>
            </div>
            <input
              type="text"
              value="@dglxyz"
              className="flex-1 p-3 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

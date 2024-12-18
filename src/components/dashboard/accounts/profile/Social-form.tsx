import { MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="container mx-auto px-2">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="text-gray-800 mb-6">
          <h2 className="text-xl font-bold">Social</h2>
        </div>

        {/* Social Accounts */}
        <div className="space-y-6">
          {/* Telegram */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-green-500" />
              <label className="text-sm font-medium text-gray-600">Telegram</label>
            </div>
            <input
              type="text"
              value="@tgfigure"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          {/* Discord */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="w-6 h-6 text-green-500" />
              <label className="text-sm font-medium text-gray-600">Discord</label>
            </div>
            <input
              type="text"
              value="@dglxyz"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

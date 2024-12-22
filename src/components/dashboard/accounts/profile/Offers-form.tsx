export default function Offers() {
  return (
    <div className="container mx-auto px-4 py-6 border border-[#F4F4F4] rounded-lg">
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="text-gray-800 dark:text-gray-200 mb-6 space-y-1">
          <h2 className=" font-medium">Redeem Your Bonus Code</h2>
          <p className="text-[10px] font-medium text-[#525252] dark:text-gray-400">
            Have a Bonus Code? Enter it Below to Unlock Your Special Reward!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Code Input */}
          <div className="w-full">
            <label
              htmlFor="bonus-code"
              className="block text-xs text-[#131316] dark:text-gray-400"
            >
              Code<span>*</span>
            </label>
            <input
              type="text"
              id="bonus-code"
              placeholder="ENTER THE CODE HERE"
              className="mt-2 w-full p-3 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-2  rounded-lg font-medium  hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-600"
              style={{
                background:
                  "linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

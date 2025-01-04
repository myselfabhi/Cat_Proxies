export default function Offers() {
  return (
    <div className="container font-satoshi mx-auto px-4 py-6 border border-[#F4F4F4] dark:border-[#1E2327] rounded-lg">
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-extrasoft p-6">
        {/* Header */}
        <div className="  mb-6 space-y-1">
          <h2 className=" text-black font-bold dark:text-gray-200">Redeem Your Bonus Code</h2>
          <p className="text-sm font-bold text-[#525252] dark:text-gray-400">
            Have a Bonus Code? Enter it Below to Unlock Your Special Reward!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Code Input */}
          <div className="w-full">
            <label
              htmlFor="bonus-code"
              className="block text-sm font-bold text-[#131316] dark:text-gray-400"
            >
              Code<span>*</span>
            </label>
            <input
              type="text"
              id="bonus-code"
              placeholder="ENTER THE CODE HERE"
              className="mt-2 w-full p-3 font-bold text-sm border border-[#EEEEEE] dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-600"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-2  bg-[#05C067]  text-white rounded-xl font-medium   focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-600"

            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

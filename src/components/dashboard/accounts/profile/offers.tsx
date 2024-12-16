export default function Offers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="text-gray-800 mb-6">
          <h2 className="text-xl font-bold">Redeem Your Bonus Code</h2>
          <p className="text-sm text-gray-600">
            Have a Bonus Code? Enter it Below to Unlock Your Special Reward!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Code Input */}
          <div className="w-full">
            <label
              htmlFor="bonus-code"
              className="block text-sm font-medium text-gray-600"
            >
              Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bonus-code"
              placeholder="ENTER THE CODE HERE"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300 placeholder-gray-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

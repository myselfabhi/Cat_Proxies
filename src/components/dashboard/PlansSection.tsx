const PlansSection = () => {
  const plansData = [
    {
      id: "1",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-purple-500",
    },
    {
      id: "2",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-orange-500",
    },
    {
      id: "3",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="w-full bg-[#F8FAF8] dark:bg-[#1E2327] rounded-2xl shadow-soft px-6 py-7 mb-12 mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h2 className=" font-satoshi font-medium text-[#262626] dark:text-gray-200">
          My Plans
        </h2>
        <div className="flex items-center">
          <span className="text-sm text-[#020611] dark:text-gray-400">
            Plan type:
          </span>
          <select
            className="text-sm font-satoshi font-medium text-[#020611] dark:text-gray-300 dark:bg-[#161B1E] border-none rounded-md dark:p-1 bg-transparent focus:outline-none"
            defaultValue="ongoing"
          >
            <option value="ongoing">Ongoing</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </div>

      {/* Plan Items */}
      <div className="space-y-4">
        {plansData.map((plan) => (
          <div
            key={plan.id}
            className="bg-[#FFFFFF] dark:bg-[#161B1E] rounded-2xl p-4 hover:shadow-md transition-shadow flex flex-col space-y-6"
          >
            {/* Left and Right Section */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full ${plan.color}`}></div>
                <div>
                  <p className="text-xs font-medium text-[#A8A8A8] dark:text-gray-300">{`Plan ID ${plan.id}`}</p>
                  <p className="text-sm font-satoshi font-medium text-[#27272E] dark:text-gray-100">
                    {plan.name}
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col sm:flex-row items-end sm:items-center text-right sm:gap-3">
                <p className=" font-satoshi font-medium text-[#27272E] dark:text-gray-100">
                  {plan.price}
                </p>
                <p className=" text-[#718096] dark:text-gray-400">
                  per year
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-medium text-[#8D8D8D] dark:text-gray-400">
                  Bandwidth Left:
                </p>
                <p className="text-sm font-satoshi font-medium text-[#27272E] dark:text-gray-200">
                  {plan.bandwidth}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#8D8D8D] dark:text-gray-400">
                  Status:
                </p>
                <p className="text-sm font-satoshi font-medium text-[#27272E] dark:text-gray-200">
                  {plan.status}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#8D8D8D] dark:text-gray-400">
                  Due Date:
                </p>
                <p className="text-sm font-satoshi font-medium text-[#27272E] dark:text-gray-200">
                  {plan.dueDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlansSection

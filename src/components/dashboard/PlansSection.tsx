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
  ];

  return (
    <div className="w-full bg-[#f8fbf9] rounded-2xl shadow-md px-6 py-7 mb-10">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h2 className="text-lg font-bold text-gray-800">My Plans</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Plan type:</span>
          <select
            className="text-sm font-medium text-gray-700 border-none bg-transparent focus:outline-none"
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
            className="bg-[#fffefe] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-6"
          >
            {/* Left and Right Section */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full ${plan.color}`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-700">{`Plan ID ${plan.id}`}</p>
                  <p className="text-md font-bold text-gray-900">{plan.name}</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col sm:flex-row items-end sm:items-center text-right gap-1 sm:gap-3">
                <p className="text-2xl font-semibold text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500">per year</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Bandwidth Left:</p>
                <p className="text-sm font-medium text-gray-800">
                  {plan.bandwidth}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status:</p>
                <p className="text-sm font-medium text-gray-800">
                  {plan.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Due Date:</p>
                <p className="text-sm font-medium text-gray-800">
                  {plan.dueDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansSection;

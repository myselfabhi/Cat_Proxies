import DashboardLayout from "@/components/layout";
import Link from "next/link";

const plansData = {
  active: [
    {
      id: "1",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-purple-500",
      link: "/dashboard/activeplan/1",
    },
    {
      id: "2",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-orange-500",
      link: "/dashboard/activeplan/2",
    },
    {
      id: "3",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-teal-500",
      link: "/dashboard/activeplan/3",
    },
    {
      id: "4",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-yellow-500",
      link: "/dashboard/activeplan/4",
    },
  ],
  expired: [
    {
      id: "5",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Expired",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-purple-500",
      link: "/dashboard/activeplan/5",
    },
    {
      id: "6",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Expired",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-orange-500",
      link: "/dashboard/activeplan/6",
    },
    {
      id: "7",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Expired",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-teal-500",
      link: "/dashboard/activeplan/7",
    },
    {
      id: "8",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Expired",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-yellow-500",
      link: "/dashboard/activeplan/8",
    },
  ],
};

const ActivePlans = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 container mx-auto px-4">
        {/* Active Plans Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-700">Active Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {plansData.active.map((plan) => (
              <Link href={`/dashboard/activeplan/${plan.id}`} key={plan.id}>
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full ${plan.color}`} />
                      <div>
                        <p className="text-sm font-semibold text-gray-500">{`Plan ID ${plan.id}`}</p>
                        <p className="text-lg font-bold text-gray-800">{plan.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">{plan.price}</p>
                      <p className="text-sm text-gray-500">per year</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Bandwidth Left</p>
                      <p className="font-semibold text-gray-800">{plan.bandwidth}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="font-semibold text-gray-800">{plan.status}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Due Date</p>
                      <p className="font-semibold text-gray-800">{plan.dueDate}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Expired Plans Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-700">Expired Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {plansData.expired.map((plan) => (
              <Link href={`/dashboard/activeplan/${plan.id}`} key={plan.id}>
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full ${plan.color}`} />
                      <div>
                        <p className="text-sm font-semibold text-gray-500">{`Plan ID ${plan.id}`}</p>
                        <p className="text-lg font-bold text-gray-800">{plan.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">{plan.price}</p>
                      <p className="text-sm text-gray-500">per year</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Bandwidth Left</p>
                      <p className="font-semibold text-gray-800">{plan.bandwidth}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="font-semibold text-gray-800">{plan.status}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Due Date</p>
                      <p className="font-semibold text-gray-800">{plan.dueDate}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ActivePlans;

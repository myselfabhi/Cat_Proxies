import DashboardLayout from "@/components/DashboardLayout";
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
      color: "bg-purple-500",
      link: "/dashboard/activeplan/3",
    },
    {
      id: "4",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Ongoing",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-orange-500",
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
      color: "bg-blue-500",
      link: "/dashboard/activeplan/7",
    },
    {
      id: "8",
      name: "Plan Name",
      bandwidth: "74 GB",
      status: "Expired",
      price: "$59",
      dueDate: "25/05/2025",
      color: "bg-teal-500",
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
          <h2 className="text-base font-medium text-gray-700 dark:text-gray-200">
            Active Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {plansData.active.map((plan) => (
              <Link href={`/dashboard/my-plans/active-plans/${plan.id}`} key={plan.id}>
                <div className="p-6 bg-white dark:bg-[#1E2327] rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full ${plan.color}`} />
                      <div>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{`Plan ID ${plan.id}`}</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                          {plan.name}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex gap-3">
                      <p className=" text-gray-800 dark:text-gray-100">
                        {plan.price}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        per year
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-[8px] text-gray-500 dark:text-gray-400">
                        Bandwidth Left
                      </p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.bandwidth}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">Status</p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">
                        Due Date
                      </p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Expired Plans Section */}
        <div className="space-y-6">
          <h2 className="text-base font-medium text-gray-700 dark:text-gray-200">
            Expired Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {plansData.expired.map((plan) => (
              <Link href={`/dashboard/my-plans/active-plans/${plan.id}`} key={plan.id}>
                <div className="p-6 bg-white dark:bg-[#1E2327] rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full ${plan.color}`} />
                      <div>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{`Plan ID ${plan.id}`}</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                          {plan.name}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex gap-3 ">
                      <p className=" text-gray-800 dark:text-gray-100">
                        {plan.price}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        per year
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">
                        Bandwidth Left
                      </p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.bandwidth}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">Status</p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[8px] dark:text-gray-400">
                        Due Date
                      </p>
                      <p className="font-medium text-[10px] text-gray-800 dark:text-gray-100">
                        {plan.dueDate}
                      </p>
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

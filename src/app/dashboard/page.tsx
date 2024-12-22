import NewsSection from "@/components/dashboard/NewsSection"
import Cards from "@/components/dashboard/Cards"
import PlansSection from "@/components/dashboard/PlansSection"
import DashboardLayout from "@/components/DashboardLayout"

const Dashboard = () => {
  return (
    <div className="flex bg-cream-800">
      <DashboardLayout>
        <div>
          <Cards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 container">
            <PlansSection />
            <NewsSection />
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Dashboard

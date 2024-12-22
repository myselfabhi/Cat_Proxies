import DashboardLayout from "@/components/DashboardLayout"
import Link from "next/link"

const PageNotFound = () => {
  const facts = [
    "Did you know? Proxies help improve security and privacy!",
    "Fun Fact: The first web proxy server was created in 1993.",
    "Proxy Tip: Use sticky sessions for better user tracking.",
  ]

  const randomFact = facts[Math.floor(Math.random() * facts.length)]

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6 text-center">
        {/* Image Section */}
        <div className="w-20 h-20">
          <img
            src="/cat_contact.svg"
            alt="404 Cat Contact"
            className="object-contain"
          />
        </div>

        {/* 404 Heading */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          404 - Page Not Found
        </h1>

        {/* Fun Fact */}
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm font-medium text-green-600 dark:text-green-400">
          {randomFact}
        </p>

        {/* Return to Dashboard Button */}
        <Link href="/dashboard">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition">
            Return to Dashboard
          </button>
        </Link>
      </div>
    </DashboardLayout>
  )
}

export default PageNotFound

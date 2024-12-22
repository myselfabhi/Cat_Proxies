"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/dashboard/Sidebar"
import Navbar from "@/components/dashboard/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-cream-800">
      {/* Sidebar */}
      <Sidebar
        activePath={pathname}
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 p-6  lg:ml-64 xl:ml-72">
        {/* Navbar */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={() => setSidebarOpen(!isSidebarOpen)}
        />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  )
}

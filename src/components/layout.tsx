"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-cream-800 dark-dashboard">
      {/* Sidebar */}
      <Sidebar activePath={pathname} />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 lg:ml-64 xl:ml-72">
        {/* lg:ml-64 ensures margin for sidebar width */}
        <Navbar />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}

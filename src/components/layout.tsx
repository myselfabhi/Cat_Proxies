"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 

  return (
    <div className="flex h-screen bg-cream-800 dark-dashboard">
      <Sidebar activePath={pathname} />
      <div className="p-6 space-y-6 ml-60">
        <Navbar  />
        <main className="mt-6" >{children}</main>
      </div>
    </div>
  );
}

"use client" // Keep this for client-side functionality

import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const noLayoutRoutes = [
    "/dashboard",
    "/dashboard/activeplan",
    "/dashboard/purchase-plan",
    "/dashboard/get-bonus",
    "/dashboard/contact-us",
    "/dashboard/invoices",
    "/dashboard/settings",
    "/dashboard/page-not-found",
  ]

  const shouldShowLayout =
    !noLayoutRoutes.includes(pathname) && !pathname.startsWith("/dashboard/activeplan/")

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sora`}>
        <Suspense fallback={<></>}>
          {/* Conditionally render Header and Footer */}
          {shouldShowLayout && <Header />}
          {children}
          {shouldShowLayout && <Footer />}
          {/* Keep all other functionalities */}
          <Script src="/crisp.js"></Script>
          <Toaster position="top-center" reverseOrder={false} />
        </Suspense>
      </body>
    </html>
  )
}

"use client"

import FAQs from "./FAQs"
import axios from "@/utils/axios"
import { useEffect, useState } from "react"

export default async function AllFaqs({
  colortheme,
  proxyType,
}: {
  colortheme: string
  proxyType:
    | "All"
    | "Ipv6 proxies"
    | "Datacenter proxies"
    | "Residential proxies"
}) {
  const [faqs, setFaqs] = useState<any[]>([])
  useEffect(() => {
    const allFaqs = async () => {
      try {
        const res = await axios.get(`landing/data`)
        const data = res.data
        const faqs = data?.payload?.data?.faqs || []
        setFaqs(faqs)
      } catch (error) {
        console.log(error, "error in allFaqs")
        return []
      }
    }

    allFaqs()
  }, [])

  const filteredFaqs = faqs.filter((faq: any) => faq.proxyType === proxyType)
  return (
    <FAQs colortheme={colortheme} proxyType={proxyType} faqs={filteredFaqs} />
  )
}

"use client"

import React, { useEffect } from "react"

const Page = (props: any) => {
  const slug = props.params.referral

  useEffect(() => {
    if (slug && typeof window !== "undefined") {
      window.location.href = `https://dashboard.catproxies.com/r/${slug}`
    }
  }, [slug])

  return <div>{slug}</div>
}

export default Page

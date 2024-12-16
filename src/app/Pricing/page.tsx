"use client"
import React, { useState } from "react"
import PricingForMain from "@/components/PricingForMain"
import {
  Explore2,
  plans2,
  Explore1,
  Explore3,
  plans1,
  plans3,
} from "@/utils/Data"
export default function Page() {
  const [tab, setTab] = useState("datacenter")
  return (
    <div className="">
      <div className="mt-[-120px]">
        {tab === "datacenter" ? (
          <PricingForMain
            type="green"
            plans={plans2}
            Explore={Explore2}
            setTab={setTab}
            tab={tab}
          />
        ) : tab === "residential" ? (
          <PricingForMain
            type="blue"
            plans={plans1}
            Explore={Explore1}
            setTab={setTab}
            tab={tab}
          />
        ) : tab === "ipv6" ? (
          <PricingForMain
            type="purple"
            plans={plans3}
            Explore={Explore3}
            setTab={setTab}
            tab={tab}
          />
        ) : null}
      </div>
    </div>
  )
}

"use client"

import PlanDetails from "@/components/dashboard/plans/Plan-Details"
import { useParams } from "next/navigation"

const PlanDetailPage = () => {
  const params = useParams()
  const id = params?.id

  return (
    <div>
      {id && typeof id === "string" ? (
        <PlanDetails planId={id} />
      ) : (
        <p className="text-center text-red-500 mt-4">Invalid Plan ID</p>
      )}
    </div>
  )
}

export default PlanDetailPage

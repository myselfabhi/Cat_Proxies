"use client"

import { redirectToRegister } from "@/lib/utils"
import { Button } from "./ui/Button"

export default function BuyNow(data: { action: string; color: string }) {
  return (
    <Button
      variant={data.color as "pinkg" | "primary" | "purple" | "yellowg"}
      className="px-[15px] py-[10px] sm:py-[14px] sm:px-[34px]"
      onClick={redirectToRegister}
    >
      {data.action}
    </Button>
  )
}

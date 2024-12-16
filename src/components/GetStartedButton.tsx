"use client"

import { redirectToRegister } from "@/lib/utils"
import { Button } from "./ui/Button"

export default function GetStartedButton({
  variant,
}: {
  variant:
    | "primary"
    | "outline"
    | "pinkg"
    | "purple"
    | "yellowg"
    | "blue"
    | "blueg"
    | "greenlg"
    | "white"
    | "greendg"
    | "purpleg"
    | "purpledg"
}) {
  return (
    <Button variant={variant} className=" text-sm" onClick={redirectToRegister}>
      Get Started
    </Button>
  )
}

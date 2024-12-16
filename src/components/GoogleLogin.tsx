"use client"

import Image from "next/image"
import { Button } from "./ui/Button"
import { redirectToRegister } from "@/lib/utils"

export default function GoogleLogin() {
  return (
    <Button
      variant={"white"}
      className="flex gap-2 px-[30px] py-[14px]  text-sm items-center"
      onClick={redirectToRegister}
    >
      <Image
        src="/images/icons/google-icon.svg"
        alt=""
        className="h-[24px] w-[24px]"
        height={100}
        width={100}
      />{" "}
      Sign up with Google
    </Button>
  )
}

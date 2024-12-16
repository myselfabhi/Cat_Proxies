import messages from "@/utils/helpers/messages"
import { createResponse } from "@/utils/helpers/response"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@prisma/index"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const settings = await prisma.siteSetting.findMany()

    let res: any = {
      title: "",
      description: "",
      meta_description: "",
      faqs: "",
      social: "",
      announcement: {
        announcement_enabled: false,
        announcement_icon: "",
        announcement_header: "",
        announcement_body: "",
        announcement_url: "",
        announcement_button_text: "",
      },
    }

    settings?.map(async (item) => {
      if (item.Name === "title") {
        res.title = item.Value
      }
      if (item.Name === "description") {
        res.description = item.Value
      }
      if (item.Name === "meta_description") {
        res.meta_description = item.Value
      }
      if (item.Name === "faqs") {
        res.faqs = JSON.parse(item.Value)
      }
      if (item.Name === "social") {
        res.social = JSON.parse(item.Value)
      }
      if (item.Name.includes("announcement")) {
        res.announcement[item.Name] = item.Value
      }
    })
    // return
    return createResponse({
      message: messages.SUCCESS,
      payload: {
        data: res,
      },
    })
  } catch (error: any) {
    console.log("check", error.message)
  }
}

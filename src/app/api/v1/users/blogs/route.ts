import prisma from "@prisma/index"
import { NextRequest } from "next/server"
import { convertURLSearchParamsToObject } from "@/utils/helpers"
import { createError, createResponse } from "@/utils/helpers/response"
import messages from "@/utils/helpers/messages"
import validation from "./validation"

export const GET = async (request: NextRequest) => {
  // Validate
  const searchParams = request.nextUrl.searchParams
  const { error, value } = validation.get.validate(
    convertURLSearchParamsToObject(searchParams)
  )
  if (error) {
    return createError({
      message: messages.VALIDATION_ERROR,
      payload: error.details,
    })
  }
  const { page, pageSize, search } = value

  // Get all blogs
  const blogs = await prisma.blog.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {
      title: {
        contains: search,
        mode: "insensitive",
      },
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Category: true,
    },
  })

  // Get pagination data
  const totalBlogs = await prisma.blog.count({
    where: {
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
  })
  const Pages = Math.ceil(totalBlogs / pageSize)

  return createResponse({
    message: messages.SUCCESS,
    payload: { blogs },
    pagination: {
      page,
      pageSize,
      Total: totalBlogs,
      Pages,
    },
  })
}

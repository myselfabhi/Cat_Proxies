import { NextRequest } from "next/server"
import { convertURLSearchParamsToObject } from "@/utils/helpers"
import { createError, createResponse } from "@/utils/helpers/response"
import messages from "@/utils/helpers/messages"
import prisma from "@prisma/index"
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

  // Get all categories
  const categories = await prisma.category.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  // Get pagination data
  const totalCategories = await prisma.category.count({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  })
  const Pages = Math.ceil(totalCategories / pageSize)

  return createResponse({
    message: messages.SUCCESS,
    payload: { categories },
    pagination: {
      page,
      pageSize,
      Total: totalCategories,
      Pages,
    },
  })
}

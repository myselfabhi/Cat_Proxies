import messages from "@/utils/helpers/messages"
import { createError, createResponse } from "@/utils/helpers/response"
import prisma from "@prisma/index"
import { NextRequest } from "next/server"

export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  //   Get the blog
  const blog = await prisma.blog.findFirst({
    where: {
      slug: params.slug,
    },
  })
  if (!blog) return createError({ message: messages.NOT_FOUND })

  // increase view count
  await prisma.blog.update({
    where: {
      id: blog.id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  })

  return createResponse({
    message: messages.SUCCESS,
    payload: { blog },
  })
}

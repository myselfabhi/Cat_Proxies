"use client"

import BlogContent from "@/components/BlogContent"
import PageLoader from "@/components/ui/PageLoader"
import axios from "@/utils/axios"
import { useEffect, useState } from "react"

const getBlog = async (slug: string) => {
  try {
    const res = await axios.get(`users/blogs/${slug}`)
    const blog = res.data.payload.blog
    return blog
  } catch (error: any) {
    console.log(error.response)
    return {}
  }
}

export default async function Page(props: any) {
  const [blog, setBlog] = useState(null)
  const [loader, setLoader] = useState(true)
  const slug = props.params.title

  useEffect(() => {
    ;(async () => {
      try {
        const blog = await getBlog(slug)
        setBlog(blog)
      } catch (error) {
        console.log(error)
      } finally {
        setLoader(false)
      }
    })()
  }, [slug])

  if (loader) return <PageLoader />

  return (
    <div className="min-h-[50vh]">
      <BlogContent blog={blog} />
    </div>
  )
}

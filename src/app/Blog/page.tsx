"use client"

import BlogWithSearchParams from "@/components/BlogWithSerachParams/BlogWithSearchParams"
import PageLoader from "@/components/ui/PageLoader"
import axios from "@/utils/axios"
import { useEffect, useState } from "react"

const getBlogs = async () => {
  try {
    let config = {
      params: {
        page: 1,
        pageSize: 9999,
      },
    }
    const res = await axios.get(`users/blogs`, config)
    const blogs = res?.data?.payload.blogs
    return blogs
  } catch (error: any) {
    console.log(error.response)
    return []
  }
}
const getCategories = async () => {
  try {
    let config = {
      params: {
        page: 1,
        pageSize: 9999,
      },
    }
    const res = await axios.get(`users/blogs/categories`, config)
    const categories = res.data.payload.categories
    return categories
  } catch (error: any) {
    console.log(error.response)
    return []
  }
}

export default async function Page() {
  const [loader, setLoader] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const categories = await getCategories()
        setCategories(categories)
        const blogs = await getBlogs()
        setBlogs(blogs)
      } catch (error) {
        console.log(error)
      } finally {
        setLoader(false)
      }
    })()
  }, [])

  if (loader) return <PageLoader />

  return (
    <main className="font-giest">
      <div className="mt-5">
        <BlogWithSearchParams categories={categories} blogs={blogs} />
      </div>
    </main>
  )
}

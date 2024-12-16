import Blog from "@/components/BlockSection"

export default function BlogWithSearchParams({
  categories = [],
  blogs = [],
}: {
  categories: any
  blogs: any
}) {
  return <Blog categories={categories} blogs={blogs} />
}

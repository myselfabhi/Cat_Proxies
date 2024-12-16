"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/Button"

function getTextWithSpaces(node: HTMLDivElement | Node) {
  let text = ""
  // Loop through child nodes
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i]
    // If it's a text node, append its text content with spaces
    if (childNode.nodeType === Node.TEXT_NODE) {
      text += " " + childNode.textContent + " "
    } else {
      // If it's an element node, recursively traverse its child nodes
      text += getTextWithSpaces(childNode)
    }
  }
  return text
}

export default function Blog({
  categories,
  blogs,
}: {
  categories: any[]
  blogs: any[]
}) {
  const [filter, setFilter] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const searchField = (
    <input
      type="text"
      placeholder="Search Blogs"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
      className=" border-[#05C067] p-3 border-2 rounded-full text-[#05C067]   w-full"
    />
  )

  const filteredCards = blogs.filter((blog) =>
    blog?.title?.toLowerCase()?.includes(searchInput.toLowerCase())
  )
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Slice the filteredCards array to only include the items for the current page
  const currentCards = filteredCards
    .filter((card) =>
      filter
        ? card?.Category?.name?.toLowerCase()?.includes(filter?.toLowerCase())
        : true
    )
    .slice(indexOfFirstItem, indexOfLastItem)

  const displayCards = currentCards.map((blog, index) => {
    if (typeof window !== "undefined") {
      const htmlPayload = blog.content
      const tempDiv = document.createElement("div")
      tempDiv.innerHTML = htmlPayload
      const textWithSpaces = getTextWithSpaces(tempDiv)
      return (
        <div
          key={index}
          onClick={() => window.open(`/Blog/${blog?.slug}`)}
          className="border shadow-sm rounded-lg w-[90%] hover:bg-[#f9f7f7]  sm:w-[380px] cursor-pointer"
        >
          <div className="p-4">
            <div className="rounded-lg  overflow-hidden h-60 ">
              <Image
                src={blog?.image}
                alt="Blog Image"
                className="bg-contain h-72  "
                width={396}
                height={396}
              />
            </div>
            <div className="rounded-md  space-y-1 my-3">
              <h1 className="text-center sm:text-left  font-bold text-2xl">
                {blog?.title}
              </h1>
              <p className="text-center sm:text-left text-[16px] text-gray-700">
                {textWithSpaces.substring(0, 191) + "..."}
              </p>
            </div>
          </div>
          <div className="border-t p-5 border-[#05C067] flex justify-between">
            <div className="text-[#05C067]">By {blog?.author}</div>
            <div className="text-[#05C067]">
              {new Date(blog?.createdAt).toLocaleDateString("en-us", {
                dateStyle: "medium",
              })}
            </div>
          </div>
        </div>
      )
    }
  })
  const noBlogsMessage =
    currentCards.length === 0 ? (
      <div className="text-center my-10">
        <p className="text-xl text-gray-500">No blogs found.</p>
      </div>
    ) : null

  // Pagination controls
  const paginationControls = (
    <div className="flex justify-between p-2 w-full  space-x-4 my-4">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`px-4 py-3 w-28  rounded ${
          currentPage === 1 ? "bg-gray-300" : "bg-[#05C067] text-white"
        }`}
      >
        Previous
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`px-4 py-3 w-28 rounded ${
          currentPage === totalPages ? "bg-gray-300" : "bg-[#05C067] text-white"
        }`}
      >
        Next
      </Button>
    </div>
  )

  return (
    <section className=" overflow-hidden flex justify-center bg-white mb-10">
      <div className="flex flex-col lg:w-4/5 px-4 lg:px-0  justify-center items-center gap-5">
        <div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-[32px] ">Our Blogs</h1>
            <p className="text-[#A8A8A8] text-[18px]">
              {" "}
              Explore our latest blogs and stay updated with the latest trends
              in the industry.
            </p>
          </div>
        </div>

        {searchField}
        <div className="flex pl-4 justify-start w-full">
          <div className="flex gap-4 mb-4">
            <Button
              variant="primary"
              className={`w-fit px-4 py-2 rounded-full ${
                filter === "" ? "bg-[#05C067] text-white" : "bg-gray-300"
              }`}
              onClick={() => setFilter("")}
              disabled={filter === ""}
            >
              All
            </Button>
            {categories?.map((category: any, index: number) => (
              <Button
                key={index}
                variant="primary"
                className={`w-fit px-4 py-2 rounded-full ${
                  filter == category?.name?.toLowerCase()
                    ? "bg-[#05C067] text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => setFilter(category?.name?.toLowerCase() || "")}
                disabled={filter == category?.name?.toLowerCase()}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        {blogs.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {displayCards}
          </div>
        ) : (
          noBlogsMessage
        )}
        {paginationControls}
      </div>
    </section>
  )
}

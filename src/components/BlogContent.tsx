import React from "react"

export default function BlogContent({ blog }: { blog: any }) {
  return (
    <div className="mt-5 mb-20 md:w-4/5 mx-auto shadow-sm border">
      {blog ? (
        <div>
          <div className="flex flex-col gap-5 mt-4">
            <h1 className="text-center text-2xl font-bold">{blog?.title}</h1>
            <div className="flex justify-between p-4">
              <p>Written by: {blog?.author}</p>
              <p>
                Date:{" "}
                {new Date(blog.createdAt).toLocaleDateString("en-us", {
                  dateStyle: "medium",
                })}
              </p>
            </div>
          </div>
          <div className="border-t p-5 ">
            <div className="flex justify-center mb-5">
              <img
                src={blog?.image}
                alt={blog?.title}
                height={500}
                width={500}
              />
            </div>
            <p className="font-semibold">Description</p>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
          </div>
        </div>
      ) : (
        <p>No blog found with the title &quot;{blog?.slug}&quot;.</p>
      )}
    </div>
  )
}

"use client"

function Announcement({ announcement }: any) {
  return (
    <div
      style={{
        background: announcement?.announcement_bg_color || "whitesmoke",
      }}
      className={`w-full z-[1555]`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center p-2">
          {announcement?.announcement_icon && (
            <img
              src={announcement?.announcement_icon}
              className="w-7 h-7"
              alt="icon"
            />
          )}
          <div
            className="mr-1"
            dangerouslySetInnerHTML={{
              __html: announcement?.announcement_header,
            }}
          ></div>
          :
          <div
            className="ml-1 mr-4"
            dangerouslySetInnerHTML={{
              __html: announcement?.announcement_body,
            }}
          ></div>
          <button
            style={{
              background: announcement?.announcement_button_color || "#000",
            }}
            className={`text-xs rounded-[5px] px-3 py-1 text-white`}
            onClick={() => window.open(announcement?.announcement_url, "_self")}
          >
            {announcement?.announcement_button_text || "Learn More"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Announcement

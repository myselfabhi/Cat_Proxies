export default function Social() {
  return (
    <div className="container font-satoshi mx-auto px-4 py-6 border border-[#F4F4F4] dark:border-[#1E2327] rounded-lg">
      <div className="bg-[#FCFCFC] dark:bg-[#1E2327] rounded-lg shadow-deep p-6">
        <div className="space-y-6">
          {/* Telegram */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.523 0.377615L1.095 6.32694C0.0421003 6.74984 0.0481915 7.3372 0.901824 7.59912L4.86282 8.83476L14.0274 3.0525C14.4607 2.78884 14.8567 2.93068 14.5312 3.21958L7.10611 9.92072H7.10436L7.10611 9.92159L6.83287 14.0044C7.23315 14.0044 7.40979 13.8208 7.6343 13.6041L9.55823 11.7333L13.5601 14.6892C14.298 15.0956 14.828 14.8868 15.0116 14.0062L17.6386 1.62543C17.9075 0.547297 17.227 0.0591341 16.523 0.377615Z"
                  fill="#05C067"
                />
              </svg>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Telegram
              </label>
            </div>
            <input
              type="text"
              value="@tgfigure"
              className="flex-1 p-3 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] py-4 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>

          {/* Discord */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.92359 0.452301C5.3338 0.452301 3.55567 1.17364 3.23666 1.3178C2.91764 1.46196 2.56355 1.91197 2.16177 2.65469C1.75944 3.39741 1.4366 4.26564 0.912035 5.54279C0.388023 6.81993 0.265789 9.28213 0.28333 10.0336C0.30087 10.7851 0.386926 11.3722 1.15705 11.8167C1.92662 12.2607 2.6074 12.7255 3.32381 13.005C4.04076 13.2846 4.5297 13.4857 4.86186 13.2062C5.19403 12.9267 5.41274 12.4372 5.41274 12.4372C5.41274 12.4372 5.72736 12.0003 5.13319 11.7383C4.53901 11.4758 4.24193 11.2921 4.26769 11.0214C4.294 10.7506 4.3373 10.602 4.48585 10.6371C4.63439 10.6722 4.98465 11.3009 6.33031 11.5892C7.67597 11.8775 8.98764 11.8342 8.98764 11.8342C8.98764 11.8342 10.2999 11.8781 11.6455 11.5892C12.9912 11.3009 13.3409 10.6722 13.4894 10.6371C13.638 10.602 13.6813 10.7506 13.7076 11.0208C13.7339 11.2921 13.4368 11.4758 12.8426 11.7383C12.2485 12.0003 12.5631 12.4372 12.5631 12.4372C12.5631 12.4372 12.7818 12.9261 13.114 13.2062C13.4456 13.4857 13.9351 13.2846 14.6515 13.005C15.3679 12.7255 16.0492 12.2612 16.8188 11.8167C17.5889 11.3722 17.675 10.7851 17.6925 10.0336C17.71 9.28268 17.5878 6.81993 17.0632 5.54279C16.5392 4.26564 16.2158 3.39741 15.8135 2.65469C15.4123 1.91197 15.0576 1.46196 14.7392 1.31725C14.4202 1.17364 12.6415 0.452301 12.0517 0.452301C11.4619 0.452301 11.2876 0.863399 11.2876 0.863399L11.082 1.3178C11.082 1.3178 9.70076 1.05524 8.99696 1.0547C8.29316 1.0547 6.89378 1.3178 6.89378 1.3178L6.68823 0.862851C6.68823 0.862851 6.51393 0.452301 5.92359 0.452301ZM5.98772 5.9051H6.00965C6.86967 5.9051 7.56634 6.65769 7.56634 7.58567C7.56634 8.5142 6.86967 9.26624 6.00965 9.26624C5.14963 9.26624 4.45296 8.5142 4.45296 7.58567C4.45241 6.66646 5.13648 5.91771 5.98772 5.9051ZM11.9662 5.9051H11.9881C12.8394 5.91771 13.5229 6.667 13.5229 7.58567C13.5229 8.5142 12.8262 9.26624 11.9662 9.26624C11.1056 9.26624 10.4095 8.5142 10.4095 7.58567C10.4095 6.65769 11.1056 5.9051 11.9662 5.9051Z"
                  fill="#05C067"
                />
              </svg>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Discord
              </label>
            </div>
            <input
              type="text"
              value="@dglxyz"
              className="flex-1 p-3 font-medium text-xs border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161B1E] text-[#525252] py-4 dark:text-gray-200 focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

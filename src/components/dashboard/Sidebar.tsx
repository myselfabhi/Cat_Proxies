"use client"

import { LogOut, X } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { FaDiscord } from "react-icons/fa6"

interface SidebarProps {
  activePath: string
  isOpen: boolean
  onClose: () => void
}

const sidebarItems = [
  {
    sections: [
      {
        name: "Deposit Balance",
        href: "/dashboard/deposit-balance",
        icon: (
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_607_8114)">
              <path
                d="M17.6651 9.9984H17.5723V7.46281C17.5723 6.67144 16.9863 6.01633 16.2257 5.90384V5.33338C16.2257 4.46331 15.5179 3.75548 14.6478 3.75548H13.9487L13.5806 2.7744C13.5555 2.7074 13.5055 2.65264 13.4411 2.6215C13.3767 2.59036 13.3027 2.58522 13.2346 2.60714L9.6702 3.75548H2.39385C1.65335 3.75548 1.05078 4.35805 1.05078 5.09855V16.3347C1.05078 17.2048 1.75861 17.9126 2.62868 17.9126H15.9944C16.8645 17.9126 17.5723 17.2048 17.5723 16.3347V13.7991H17.6651C18.0234 13.7991 18.3149 13.5076 18.3149 13.1494V10.6481C18.3149 10.29 18.0234 9.9984 17.6651 9.9984ZM14.1578 4.31257H14.6478C15.2107 4.31257 15.6688 4.77054 15.6688 5.33357V5.88509H14.7479L14.6924 5.73714L14.1578 4.31257ZM13.354 3.75567L13.8063 4.96118L14.1531 5.88509H4.87654L13.1525 3.219L13.354 3.75567ZM2.39385 4.31257H7.94138L4.44401 5.43938L3.06047 5.88509H2.39385C1.96039 5.88509 1.60769 5.53238 1.60769 5.09892C1.60769 4.66547 1.96039 4.31257 2.39385 4.31257ZM17.0154 16.3347C17.0154 16.8977 16.5573 17.3557 15.9944 17.3557H2.62868C2.35799 17.3554 2.09847 17.2477 1.90706 17.0563C1.71565 16.8649 1.60798 16.6054 1.60769 16.3347V6.18712C1.61159 6.19009 1.61623 6.19195 1.62031 6.19492C1.66895 6.22926 1.71963 6.26063 1.77272 6.28848C1.78256 6.29367 1.79295 6.29813 1.80298 6.30314C1.85217 6.32746 1.90285 6.34881 1.9552 6.367C1.96411 6.37016 1.97265 6.37368 1.98156 6.37665C2.03948 6.3954 2.09906 6.40951 2.16014 6.42028C2.17369 6.42269 2.18743 6.42455 2.20116 6.42659C2.26428 6.43569 2.32832 6.442 2.39385 6.442H15.9944C16.5573 6.442 17.0154 6.89996 17.0154 7.46299V9.99858H15.1706C14.3005 9.99858 13.5927 10.7064 13.5927 11.5765V12.2214C13.5927 13.0915 14.3005 13.7993 15.1706 13.7993H17.0154V16.3347ZM17.758 13.1494C17.758 13.174 17.7482 13.1976 17.7308 13.215C17.7134 13.2324 17.6898 13.2422 17.6651 13.2422H15.1706C14.8999 13.2419 14.6404 13.1342 14.449 12.9428C14.2575 12.7514 14.1499 12.4919 14.1496 12.2212V11.5763C14.1496 11.0133 14.6077 10.5553 15.1706 10.5553H17.6651C17.6898 10.5553 17.7134 10.5651 17.7308 10.5825C17.7482 10.5999 17.758 10.6235 17.758 10.6481V13.1494Z"
                fill="#05C067"
              />
              <path
                d="M15.8961 11.0918C15.6823 11.092 15.4774 11.177 15.3263 11.3281C15.1751 11.4792 15.0901 11.6841 15.0898 11.8978C15.0898 12.3424 15.4515 12.7039 15.8961 12.7039C16.3407 12.7039 16.7021 12.3422 16.7021 11.8978C16.7018 11.6841 16.6168 11.4793 16.4657 11.3281C16.3146 11.177 16.1098 11.092 15.8961 11.0918ZM15.8961 12.1471C15.7587 12.1471 15.6467 12.0354 15.6467 11.898C15.6485 11.8331 15.6756 11.7714 15.7221 11.7261C15.7686 11.6808 15.831 11.6555 15.896 11.6555C15.9609 11.6555 16.0233 11.6808 16.0698 11.7261C16.1164 11.7714 16.1434 11.8331 16.1452 11.898C16.1452 12.0352 16.0334 12.1471 15.8961 12.1471Z"
                fill="#05C067"
              />
            </g>
            <defs>
              <clipPath id="clip0_607_8114">
                <rect
                  width="18.5635"
                  height="18.5635"
                  fill="white"
                  transform="translate(0.402344 0.972656)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
      },

      {
        name: "My Plans",
        icon: (
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_607_7822"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18"
            >
              <g clipPath="url(#clip0_607_7822)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.52734 4.92969C2.52734 3.75608 3.47874 2.80469 4.65234 2.80469H11.0273C12.2009 2.80469 13.1523 3.75608 13.1523 4.92969V17.1484C13.1523 17.3444 13.0445 17.5244 12.8718 17.6168C12.699 17.7093 12.4894 17.6991 12.3264 17.5905L7.83984 14.5994L3.35328 17.5905C3.19026 17.6991 2.98066 17.7093 2.80792 17.6168C2.63518 17.5244 2.52734 17.3444 2.52734 17.1484V4.92969ZM4.65234 3.86719C4.06554 3.86719 3.58984 4.34289 3.58984 4.92969V16.1558L7.54516 13.5189C7.72361 13.3999 7.95608 13.3999 8.13453 13.5189L12.0898 16.1558V4.92969C12.0898 4.34289 11.6141 3.86719 11.0273 3.86719H4.65234Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.93665 1.74219H13.1524C13.2257 1.74219 13.2973 1.74962 13.3665 1.76377C13.8507 1.86285 14.2149 2.29124 14.2149 2.80469V15.3078L14.4514 15.4655C14.6144 15.5741 14.824 15.5843 14.9968 15.4918C15.1695 15.3994 15.2774 15.2194 15.2774 15.0234V2.80469C15.2774 1.63108 14.326 0.679688 13.1524 0.679688H6.77736C5.99081 0.679688 5.30407 1.10702 4.93665 1.74219Z"
                  fill="black"
                />
              </g>
            </mask>
            <g mask="url(#mask0_607_7822)">
              <rect
                x="0.402344"
                y="0.679688"
                width="17"
                height="17"
                fill="#05C067"
              />
            </g>
            <defs>
              <clipPath id="clip0_607_7822">
                <rect
                  width="17"
                  height="17"
                  fill="white"
                  transform="translate(0.402344 0.679688)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
        subItems: [
          {
            name: "Active Plans",
            href: "/dashboard/my-plans/active-plans",
            icon: (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.90835 15.0358C3.41322 15.0358 2.20117 13.8238 2.20117 12.3286V5.56067C2.20117 4.06553 3.41322 2.85349 4.90835 2.85349H13.0299C14.525 2.85349 15.7371 4.06553 15.7371 5.56067V9.17689C15.7371 9.38518 15.7131 9.591 15.6666 9.79064H13.7067C11.9312 9.79064 10.4919 11.2299 10.4919 13.0054V14.9653C10.2923 15.0118 10.0865 15.0358 9.87816 15.0358H4.90835ZM11.5071 14.4909C11.6073 14.4154 11.7027 14.3326 11.7924 14.2429L14.9442 11.0912C15.0339 11.0014 15.1167 10.906 15.1922 10.8058H13.7067C12.4919 10.8058 11.5071 11.7906 11.5071 13.0054V14.4909ZM5.07755 6.91426C5.07755 6.63392 5.30481 6.40666 5.58515 6.40666H12.3531C12.6334 6.40666 12.8607 6.63392 12.8607 6.91426C12.8607 7.1946 12.6334 7.42186 12.3531 7.42186H5.58515C5.30481 7.42186 5.07755 7.1946 5.07755 6.91426ZM5.58515 9.79064C5.30481 9.79064 5.07755 10.0179 5.07755 10.2982C5.07755 10.5786 5.30481 10.8058 5.58515 10.8058H8.96913C9.24947 10.8058 9.47673 10.5786 9.47673 10.2982C9.47673 10.0179 9.24947 9.79064 8.96913 9.79064H5.58515Z"
                  stroke="url(#paint0_linear_0_3105)"
                  stroke-width="0.580111"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3105"
                    x1="2.20117"
                    y1="8.94465"
                    x2="15.7371"
                    y2="8.94465"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AF52DE" />
                    <stop offset="1" stop-color="#7E00BE" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },

          {
            name: "Purchase Plans",
            href: "/dashboard/my-plans/purchase-plan",
            icon: (
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.53045 4.37732H11.4061C12.1928 3.31463 11.1329 1.82734 9.81625 2.25208L9.18834 2.45464C9.04538 2.50076 8.89117 2.50076 8.74821 2.45464L8.1203 2.25208C6.80366 1.82734 5.74371 3.31463 6.53045 4.37732Z"
                  stroke="url(#paint0_linear_607_7890)"
                  stroke-width="0.696133"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3329 5.39251H6.60368C5.7108 5.8869 5.01324 6.71235 4.69383 7.73446L3.84783 10.4416C3.03069 13.0565 4.9842 15.7136 7.72376 15.7136H10.2128C12.9524 15.7136 14.9059 13.0565 14.0887 10.4416L13.2428 7.73446C12.9233 6.71235 12.2258 5.8869 11.3329 5.39251ZM11.245 13.4503C11.4901 13.3142 11.5785 13.0052 11.4425 12.7601C11.3064 12.515 10.9974 12.4266 10.7523 12.5627C9.96108 13.0019 9.41869 13.1758 8.92777 13.1738C8.43938 13.1718 7.92648 12.9954 7.19362 12.568C6.95145 12.4268 6.64065 12.5086 6.49942 12.7508C6.3582 12.9929 6.44002 13.3037 6.68219 13.4449C7.47508 13.9073 8.17291 14.1859 8.92365 14.189C9.67185 14.192 10.397 13.921 11.245 13.4503Z"
                  stroke="url(#paint1_linear_607_7890)"
                  stroke-width="0.696133"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_607_7890"
                    x1="14.2764"
                    y1="15.7136"
                    x2="1.2554"
                    y2="12.7526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6949FF" />
                    <stop offset="1" stop-color="#876DFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_607_7890"
                    x1="14.2764"
                    y1="15.7136"
                    x2="1.2554"
                    y2="12.7526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6949FF" />
                    <stop offset="1" stop-color="#876DFF" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
        ],
      },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: (
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_607_8114)">
              <path
                d="M17.6651 9.9984H17.5723V7.46281C17.5723 6.67144 16.9863 6.01633 16.2257 5.90384V5.33338C16.2257 4.46331 15.5179 3.75548 14.6478 3.75548H13.9487L13.5806 2.7744C13.5555 2.7074 13.5055 2.65264 13.4411 2.6215C13.3767 2.59036 13.3027 2.58522 13.2346 2.60714L9.6702 3.75548H2.39385C1.65335 3.75548 1.05078 4.35805 1.05078 5.09855V16.3347C1.05078 17.2048 1.75861 17.9126 2.62868 17.9126H15.9944C16.8645 17.9126 17.5723 17.2048 17.5723 16.3347V13.7991H17.6651C18.0234 13.7991 18.3149 13.5076 18.3149 13.1494V10.6481C18.3149 10.29 18.0234 9.9984 17.6651 9.9984ZM14.1578 4.31257H14.6478C15.2107 4.31257 15.6688 4.77054 15.6688 5.33357V5.88509H14.7479L14.6924 5.73714L14.1578 4.31257ZM13.354 3.75567L13.8063 4.96118L14.1531 5.88509H4.87654L13.1525 3.219L13.354 3.75567ZM2.39385 4.31257H7.94138L4.44401 5.43938L3.06047 5.88509H2.39385C1.96039 5.88509 1.60769 5.53238 1.60769 5.09892C1.60769 4.66547 1.96039 4.31257 2.39385 4.31257ZM17.0154 16.3347C17.0154 16.8977 16.5573 17.3557 15.9944 17.3557H2.62868C2.35799 17.3554 2.09847 17.2477 1.90706 17.0563C1.71565 16.8649 1.60798 16.6054 1.60769 16.3347V6.18712C1.61159 6.19009 1.61623 6.19195 1.62031 6.19492C1.66895 6.22926 1.71963 6.26063 1.77272 6.28848C1.78256 6.29367 1.79295 6.29813 1.80298 6.30314C1.85217 6.32746 1.90285 6.34881 1.9552 6.367C1.96411 6.37016 1.97265 6.37368 1.98156 6.37665C2.03948 6.3954 2.09906 6.40951 2.16014 6.42028C2.17369 6.42269 2.18743 6.42455 2.20116 6.42659C2.26428 6.43569 2.32832 6.442 2.39385 6.442H15.9944C16.5573 6.442 17.0154 6.89996 17.0154 7.46299V9.99858H15.1706C14.3005 9.99858 13.5927 10.7064 13.5927 11.5765V12.2214C13.5927 13.0915 14.3005 13.7993 15.1706 13.7993H17.0154V16.3347ZM17.758 13.1494C17.758 13.174 17.7482 13.1976 17.7308 13.215C17.7134 13.2324 17.6898 13.2422 17.6651 13.2422H15.1706C14.8999 13.2419 14.6404 13.1342 14.449 12.9428C14.2575 12.7514 14.1499 12.4919 14.1496 12.2212V11.5763C14.1496 11.0133 14.6077 10.5553 15.1706 10.5553H17.6651C17.6898 10.5553 17.7134 10.5651 17.7308 10.5825C17.7482 10.5999 17.758 10.6235 17.758 10.6481V13.1494Z"
                fill="#05C067"
              />
              <path
                d="M15.8961 11.0918C15.6823 11.092 15.4774 11.177 15.3263 11.3281C15.1751 11.4792 15.0901 11.6841 15.0898 11.8978C15.0898 12.3424 15.4515 12.7039 15.8961 12.7039C16.3407 12.7039 16.7021 12.3422 16.7021 11.8978C16.7018 11.6841 16.6168 11.4793 16.4657 11.3281C16.3146 11.177 16.1098 11.092 15.8961 11.0918ZM15.8961 12.1471C15.7587 12.1471 15.6467 12.0354 15.6467 11.898C15.6485 11.8331 15.6756 11.7714 15.7221 11.7261C15.7686 11.6808 15.831 11.6555 15.896 11.6555C15.9609 11.6555 16.0233 11.6808 16.0698 11.7261C16.1164 11.7714 16.1434 11.8331 16.1452 11.898C16.1452 12.0352 16.0334 12.1471 15.8961 12.1471Z"
                fill="#05C067"
              />
            </g>
            <defs>
              <clipPath id="clip0_607_8114">
                <rect
                  width="18.5635"
                  height="18.5635"
                  fill="white"
                  transform="translate(0.402344 0.972656)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ],
  },
  {
    sections: [
      {
        name: "My Account",
        icon: (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="9.39093"
              cy="13.8888"
              rx="5.41436"
              ry="2.70718"
              stroke="#05C067"
              stroke-width="1.16022"
              stroke-linejoin="round"
            />
            <circle
              cx="9.3908"
              cy="5.76775"
              r="3.09392"
              stroke="#05C067"
              stroke-width="1.16022"
              stroke-linejoin="round"
            />
          </svg>
        ),
        subItems: [
          {
            name: "Settings",
            href: "/dashboard/my-account/settings",
            icon: (
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_853_2230"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="17"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.66539 1.70422C9.41934 0.869426 8.23691 0.869425 7.99086 1.70422L7.897 2.02264C7.55967 3.16712 6.25245 3.70859 5.20465 3.13785L4.91314 2.97906C4.14886 2.56276 3.31276 3.39886 3.72906 4.16314L3.88785 4.45465C4.45859 5.50245 3.91712 6.80967 2.77264 7.147L2.45422 7.24086C1.61943 7.48691 1.61943 8.66934 2.45422 8.91539L2.77264 9.00925C3.91712 9.34658 4.45859 10.6538 3.88785 11.7016L3.72906 11.9931C3.31275 12.7574 4.14886 13.5935 4.91314 13.1772L5.20465 13.0184C6.25245 12.4477 7.55967 12.9891 7.897 14.1336L7.99086 14.452C8.23691 15.2868 9.41934 15.2868 9.66539 14.452L9.75925 14.1336C10.0966 12.9891 11.4038 12.4477 12.4516 13.0184L12.7431 13.1772C13.5074 13.5935 14.3435 12.7574 13.9272 11.9931L13.7684 11.7016C13.1977 10.6538 13.7391 9.34658 14.8836 9.00925L15.202 8.91539C16.0368 8.66934 16.0368 7.48691 15.202 7.24086L14.8836 7.147C13.7391 6.80967 13.1977 5.50245 13.7684 4.45465L13.9272 4.16314C14.3435 3.39886 13.5074 2.56275 12.7431 2.97906L12.4516 3.13785C11.4038 3.70859 10.0966 3.16712 9.75925 2.02264L9.66539 1.70422ZM7.03165 1.4215C7.5596 -0.369666 10.0967 -0.369668 10.6246 1.4215L10.7184 1.73992C10.8757 2.27332 11.4849 2.52568 11.9733 2.25968L12.2648 2.10089C13.9046 1.20765 15.6986 3.00162 14.8054 4.64148L14.6466 4.933C14.3806 5.42134 14.6329 6.03058 15.1663 6.1878L15.4847 6.28165C17.2759 6.8096 17.2759 9.34665 15.4847 9.8746L15.1663 9.96845C14.6329 10.1257 14.3806 10.7349 14.6466 11.2233L14.8054 11.5148C15.6986 13.1546 13.9046 14.9486 12.2648 14.0554L11.9733 13.8966C11.4849 13.6306 10.8757 13.8829 10.7184 14.4163L10.6246 14.7347C10.0967 16.5259 7.5596 16.5259 7.03165 14.7347L6.9378 14.4163C6.78058 13.8829 6.17134 13.6306 5.683 13.8966L5.39148 14.0554C3.75162 14.9486 1.95765 13.1546 2.85089 11.5148L3.00967 11.2233C3.27568 10.7349 3.02332 10.1257 2.48992 9.96845L2.1715 9.8746C0.380334 9.34665 0.380332 6.8096 2.1715 6.28165L2.48992 6.1878C3.02332 6.03058 3.27568 5.42134 3.00968 4.933L2.85089 4.64148C1.95765 3.00162 3.75162 1.20765 5.39148 2.10089L5.68299 2.25968C6.17134 2.52568 6.78058 2.27332 6.9378 1.73992L7.03165 1.4215Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.82779 5.83203C7.58749 5.83203 6.58203 6.83749 6.58203 8.07779C6.58203 9.31809 7.58749 10.3236 8.82779 10.3236C10.0681 10.3236 11.0736 9.31809 11.0736 8.07779C11.0736 6.83749 10.0681 5.83203 8.82779 5.83203ZM5.58203 8.07779C5.58203 6.28521 7.03521 4.83203 8.82779 4.83203C10.6204 4.83203 12.0736 6.28521 12.0736 8.07779C12.0736 9.87038 10.6204 11.3236 8.82779 11.3236C7.03521 11.3236 5.58203 9.87038 5.58203 8.07779Z"
                    fill="black"
                  />
                </mask>
                <g mask="url(#mask0_853_2230)">
                  <rect
                    x="0.828125"
                    y="0.078125"
                    width="16"
                    height="16"
                    fill="url(#paint0_linear_853_2230)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_853_2230"
                    x1="16.8281"
                    y1="16.0781"
                    x2="-2.21044"
                    y2="10.5581"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6949FF" />
                    <stop offset="1" stopColor="#876DFF" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },

          {
            name: "Get Bonus",
            href: "/dashboard/my-account/get-bonus",
            icon: (
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_607_7933"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="17"
                >
                  <path
                    d="M8.82812 16.0781C9.93269 16.0781 10.8281 15.1827 10.8281 14.0781H6.82812C6.82812 15.1827 7.72356 16.0781 8.82812 16.0781Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.82813 1.99637L8.03093 2.15738C6.20365 2.52641 4.82815 4.14275 4.82815 6.07812C4.82815 6.70595 4.69378 8.27537 4.36928 9.82029C4.20819 10.5872 3.99267 11.3858 3.70622 12.0781H13.95C13.6636 11.3857 13.4481 10.5872 13.287 9.82028C12.9625 8.27537 12.8281 6.70594 12.8281 6.07812C12.8281 4.14274 11.4526 2.52639 9.62533 2.15737L8.82813 1.99637ZM15.0474 12.0781C15.2707 12.5255 15.5296 12.8791 15.8281 13.0781H1.82812C2.12665 12.8791 2.38557 12.5255 2.60882 12.0781C3.50735 10.2775 3.82815 6.95729 3.82815 6.07812C3.82815 3.65746 5.54833 1.63857 7.83297 1.17717C7.82976 1.14459 7.82812 1.11155 7.82812 1.07812C7.82812 0.52584 8.27584 0.078125 8.82812 0.078125C9.38041 0.078125 9.82812 0.52584 9.82812 1.07812C9.82812 1.11154 9.82649 1.14458 9.82328 1.17716C12.1079 1.63855 13.8281 3.65745 13.8281 6.07812C13.8281 6.95729 14.1489 10.2775 15.0474 12.0781Z"
                    fill="black"
                  />
                </mask>
                <g mask="url(#mask0_607_7933)">
                  <rect
                    x="0.828125"
                    y="0.078125"
                    width="16"
                    height="16"
                    fill="url(#paint0_linear_607_7933)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_607_7933"
                    x1="0.828125"
                    y1="8.07812"
                    x2="16.8281"
                    y2="8.07812"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
        ],
      },
      {
        name: "Discord Server",
        href: "https://discord.com/",
        icon: <FaDiscord className="w-5 h-5 text-green-500" />,
      },
      {
        name: "Telegram",
        href: "https://t.me/catproxies",
        icon: (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.796 1.02768L1.36795 6.97701C0.315049 7.39991 0.321141 7.98727 1.17477 8.24919L5.13577 9.48483L14.3004 3.70257C14.7337 3.43891 15.1296 3.58075 14.8042 3.86965L7.37906 10.5708H7.37731L7.37906 10.5717L7.10582 14.6545C7.5061 14.6545 7.68274 14.4709 7.90724 14.2542L9.83118 12.3833L13.8331 15.3393C14.571 15.7457 15.1009 15.5368 15.2845 14.6562L17.9115 2.2755C18.1804 1.19737 17.5 0.709204 16.796 1.02768Z"
              fill="#05C067"
            />
          </svg>
        ),
      },
    ],
  },
  {
    sections: [
      {
        name: "Support",
        icon: (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="9.39093"
              cy="13.8888"
              rx="5.41436"
              ry="2.70718"
              stroke="#05C067"
              stroke-width="1.16022"
              stroke-linejoin="round"
            />
            <circle
              cx="9.3908"
              cy="5.76775"
              r="3.09392"
              stroke="#05C067"
              stroke-width="1.16022"
              stroke-linejoin="round"
            />
          </svg>
        ),
        subItems: [
          {
            name: "Guide",
            href: "/dashboard/support/guide",
            icon: (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60681 5.82865C4.45066 5.95934 5.392 6.17661 6.27348 6.51748M3.60681 8.49532C4.03314 8.56135 4.48434 8.64947 4.94014 8.76447M8.27348 4.36114V13.8606M2.93636 2.33308C4.41528 2.50019 6.40223 2.94977 7.81803 3.94186C8.09013 4.13253 8.45682 4.13253 8.72893 3.94186C10.1447 2.94977 12.1317 2.50019 13.6106 2.33308C14.3425 2.25037 14.9401 2.86158 14.9401 3.61568V11.1255C14.9401 11.8796 14.3425 12.4911 13.6106 12.5738C12.1317 12.7409 10.1447 13.1905 8.72893 14.1826C8.45682 14.3732 8.09013 14.3732 7.81803 14.1826C6.40223 13.1905 4.41528 12.7409 2.93636 12.5738C2.20443 12.4911 1.60681 11.8796 1.60681 11.1255V3.61568C1.60681 2.86158 2.20443 2.25037 2.93636 2.33308Z"
                  stroke="url(#paint0_linear_0_3152)"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3152"
                    x1="14.9401"
                    y1="14.3256"
                    x2="-0.641888"
                    y2="9.30571"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#019B83" />
                    <stop offset="1" stopColor="#18C6AB" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },

          {
            name: "Contact Us",
            href: "/dashboard/support/contact-us",
            icon: (
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7977 9.63763V11.021C14.7977 12.167 13.8686 13.096 12.7227 13.096C11.5767 13.096 10.6477 12.167 10.6477 11.021V9.63763C10.6477 8.49164 11.5767 7.56263 12.7227 7.56263C13.8686 7.56263 14.7977 8.49164 14.7977 9.63763ZM14.7977 9.63763V8.2543C14.7977 4.81632 12.0106 2.0293 8.57266 2.0293C5.13468 2.0293 2.34766 4.81632 2.34766 8.2543V9.63763M2.34766 9.63763V11.021C2.34766 12.167 3.27667 13.096 4.42266 13.096C5.56865 13.096 6.49766 12.167 6.49766 11.021V9.63763C6.49766 8.49164 5.56865 7.56263 4.42266 7.56263C3.27667 7.56263 2.34766 8.49164 2.34766 9.63763ZM14.7977 10.3293V11.7126C14.7977 14.0046 12.9396 15.8626 10.6477 15.8626H8.57266"
                  stroke="url(#paint0_linear_617_2790)"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_617_2790"
                    x1="14.7977"
                    y1="15.8626"
                    x2="-0.238263"
                    y2="11.9391"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5A5F" />
                    <stop offset="1" stop-color="#FF8A9B" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          {
            name: "Integrations",
            href: "/dashboard/support/integrations",
            icon: (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_3158)">
                  <ellipse
                    cx="4.42337"
                    cy="2.79227"
                    rx="1.38333"
                    ry="1.38333"
                    fill="url(#paint0_linear_0_3158)"
                  />
                  <ellipse
                    opacity="0.4"
                    cx="4.42339"
                    cy="5.55893"
                    rx="2.075"
                    ry="1.38333"
                    fill="url(#paint1_linear_0_3158)"
                  />
                  <circle
                    cx="12.7233"
                    cy="11.0923"
                    r="1.38333"
                    fill="url(#paint2_linear_0_3158)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.05461 1.40895C8.05461 1.12245 8.28686 0.890198 8.57336 0.890198C12.6798 0.890198 16.0088 4.21915 16.0088 8.32561C16.0088 8.61211 15.7765 8.84436 15.49 8.84436C15.2035 8.84436 14.9713 8.61211 14.9713 8.32561C14.9713 4.79214 12.1068 1.9277 8.57336 1.9277C8.28686 1.9277 8.05461 1.69545 8.05461 1.40895ZM1.65669 7.80686C1.94319 7.80686 2.17544 8.03912 2.17544 8.32561C2.17544 11.8591 5.03988 14.7235 8.57336 14.7235C8.85985 14.7235 9.09211 14.9558 9.09211 15.2423C9.09211 15.5288 8.85985 15.761 8.57336 15.761C4.46689 15.761 1.13794 12.4321 1.13794 8.32561C1.13794 8.03912 1.37019 7.80686 1.65669 7.80686Z"
                    fill="url(#paint3_linear_0_3158)"
                  />
                  <ellipse
                    opacity="0.4"
                    cx="12.7233"
                    cy="13.8589"
                    rx="2.075"
                    ry="1.38333"
                    fill="url(#paint4_linear_0_3158)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3158"
                    x1="3.04004"
                    y1="2.79227"
                    x2="5.80671"
                    y2="2.79227"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_3158"
                    x1="2.34839"
                    y1="5.55893"
                    x2="6.49839"
                    y2="5.55893"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_3158"
                    x1="11.34"
                    y1="11.0923"
                    x2="14.1066"
                    y2="11.0923"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_3158"
                    x1="1.13794"
                    y1="8.32561"
                    x2="16.0088"
                    y2="8.32561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_0_3158"
                    x1="10.6483"
                    y1="13.8589"
                    x2="14.7983"
                    y2="13.8589"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AF52DE" />
                    <stop offset="1" stopColor="#7E00BE" />
                  </linearGradient>
                  <clipPath id="clip0_0_3158">
                    <rect
                      width="16.6"
                      height="16.6"
                      fill="white"
                      transform="translate(0.273438 0.0255737)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
          },
        ],
      },
    ],
  },
]

const Sidebar: React.FC<SidebarProps> = ({ activePath, isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 left-1/2 w-11/12 max-w-sm h-5/6  dark:bg-[#09090B] rounded-lg  transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 overflow-y-auto lg:translate-x-0 lg:translate-y-0 lg:top-0 lg:left-0 lg:w-64 lg:h-screen lg:opacity-100 lg:scale-100 ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none lg:pointer-events-auto"
        } sidebar-container`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full lg:hidden"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        {/* Profile Section */}
        <div className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800 lg:hidden ">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-sm  font-satoshi font-medium dark:text-white">
              Hi Maxlin!!!
            </p>
            <p className="text-xs  font-satoshi font-medium text-gray-500 dark:text-gray-400">
              support@MaxLin.com
            </p>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="px-6 py-8 ">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8 pl-7 py-2 bg-[#ffffff] dark:bg-[#24313C]  shadow-extrasoft rounded-full">
            <img src="/logo.svg" alt="Cat Proxies" className="w-10 h-11" />
            <h1 className="text-base font-satoshi font-medium text-gray-800 dark:text-white">
              Cat Proxies
            </h1>
          </div>

          {/* Dashboard Link */}
          <div className="lg:w-52">
            <p className="text-sm  font-satoshi font-medium text-[#A8A8A8] dark:text-gray-400 mb-8">
              Main menu
            </p>
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 shadow-mid rounded-xl hover:bg-green-100 dark:hover:bg-gray-700 mt-4 transition ${
                activePath === "/dashboard"
                  ? "dark:bg-[#161B1E] dark:border-[#05C067] dark:border-2"
                  : "text-gray-800 dark:text-gray-300"
              }`}
            >
              <div className="flex items-center justify-center">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.28125"
                    y="0.28125"
                    width="37.1271"
                    height="37.1271"
                    rx="11.6022"
                    fill="#05C067"
                  />
                  <mask
                    id="mask0_607_7755"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="9"
                    y="9"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9375 25.5939V17.8752H13.125V25.5939C13.125 25.9218 13.3908 26.1877 13.7188 26.1877H24.4062C24.7342 26.1877 25 25.9218 25 25.5939V17.8752H26.1875V25.5939C26.1875 26.5777 25.39 27.3752 24.4062 27.3752H13.7188C12.735 27.3752 11.9375 26.5777 11.9375 25.5939Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 12.5314V16.6877L22.625 14.3127V12.5314C22.625 12.2035 22.8908 11.9377 23.2188 11.9377H24.4062C24.7342 11.9377 25 12.2035 25 12.5314Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.2228 11.3439C18.6866 10.8802 19.4384 10.8802 19.9022 11.3439L27.7948 19.2366C28.0267 19.4684 28.0267 19.8444 27.7948 20.0762C27.563 20.3081 27.187 20.3081 26.9552 20.0762L19.0625 12.1836L11.1698 20.0762C10.938 20.3081 10.562 20.3081 10.3302 20.0762C10.0983 19.8444 10.0983 19.4684 10.3302 19.2366L18.2228 11.3439Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_607_7755)">
                    <rect
                      x="9.5625"
                      y="9.5625"
                      width="19"
                      height="19"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <span className="font-satoshi font-medium text-sm">
                Dashboard
              </span>
            </Link>

            {/* Sidebar Items */}
            <div className="mt-4 ml-2 space-y-8 gap-3">
              {sidebarItems.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-4">
                  {group.sections.map((item, index) =>
                    item.subItems ? (
                      <Accordion type="single" collapsible key={index}>
                        <AccordionItem value={item.name}>
                          <AccordionTrigger className="flex justify-between items-center gap-3 px-3 py-2 rounded-xl dark:hover:bg-gray-700">
                            <div className="flex items-center gap-5">
                              <span
                                className={`${
                                  activePath.includes(item.name.toLowerCase())
                                    ? "text-white"
                                    : "text-gray-600 dark:text-gray-400"
                                }`}
                              >
                                {item.icon}
                              </span>
                              <span className="text-sm font-satoshi font-light">
                                {item.name}
                              </span>
                            </div>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="gray"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="ml-4 border-l-[1px] border-gray-200 dark:border-gray-700 pl-3 lg:w-36">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className={`flex items-center gap-2 px-2 py-1 mt-3 ml-3 rounded-xl  dark:hover:bg-gray-700 transition ${
                                  activePath === subItem.href
                                    ? "text-white bg-[#05C067] rounded-xl  dark:bg-[#161B1E] dark:border-[#05C067] dark:border-2"
                                    : "text-gray-600 dark:text-gray-400"
                                }`}
                              >
                                {subItem.icon}
                                <span className="text-sm font-satoshi">
                                  {subItem.name}
                                </span>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center gap-5 px-3 py-2 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700 transition ${
                          activePath === item.href
                            ? "dark:bg-[#161B1E] dark:border-[#05C067] dark:border-2"
                            : "text-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {item.icon}
                        <span className="text-sm font-satoshi">{item.name}</span>
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-32">
            <Link
              href="/logout"
              className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-md transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Translucent Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  )
}

export default Sidebar

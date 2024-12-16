import * as React from "react"
const ActiveSvg = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    viewBox="0 0 16 14"
    fill="none"
    {...props}
  >
    <path
      d="M8.34438 1.09386C8.24126 0.922004 8.05554 0.81685 7.85513 0.81685C7.65471 0.81685 7.46899 0.922004 7.36588 1.09386L0.519149 12.5051C0.413391 12.6813 0.410621 12.9009 0.511898 13.0797C0.613176 13.2586 0.802843 13.3692 1.0084 13.3692L14.7019 13.3692C14.9074 13.3692 15.0971 13.2586 15.1984 13.0797C15.2996 12.9009 15.2969 12.6813 15.1911 12.5051L8.34438 1.09386Z"
      fill="url(#paint0_linear_798_4227)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_798_4227"
        x1={8.13021}
        y1={-3.19579}
        x2={0.679674}
        y2={22.2147}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#05C067" />
        <stop offset={1} stopColor="#50EA48" />
      </linearGradient>
    </defs>
  </svg>
)
export default ActiveSvg

import * as React from "react"
const HeroPoints = ({
  height,
  width,
  color,
}: {
  height: number
  width: number
  color: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 6 6"
    fill="none"
  >
    <rect width={6} height={6} rx={3} fill="url(#paint0_linear_728_7630)" />
    <defs>
      <linearGradient
        id="paint0_linear_728_7630"
        x1={6}
        y1={6}
        x2={-1.13946}
        y2={3.92998}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor={
            color == "blue"
              ? "#246BFD"
              : color == "green"
                ? "#05C067"
                : "#AF52DE"
          }
        />
        <stop
          offset={1}
          stopColor={
            color == "blue"
              ? "#5089FD"
              : color == "green"
                ? "#50EA48"
                : "#AF52DE"
          }
        />
      </linearGradient>
    </defs>
  </svg>
)
export default HeroPoints

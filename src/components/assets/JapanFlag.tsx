import * as React from "react"
const JapanFlag = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={83}
    height={70}
    viewBox="0 0 83 70"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_dd_728_5157)">
      <g clipPath="url(#clip0_728_5157)">
        <rect
          x={-12.4629}
          y={0.0351562}
          width={107.672}
          height={71.6188}
          rx={3.37029}
          fill="white"
        />
        <mask
          id="mask0_728_5157"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={-13}
          y={0}
          width={109}
          height={72}
        >
          <path
            d="M-12.4707 0.0390625H95.201V71.6578H-12.4707V0.0390625Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_728_5157)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-19.1973 0.0390625H101.933V71.6578H-19.1973V0.0390625Z"
            fill="white"
          />
          <path
            d="M41.3812 58.2664C53.659 58.2664 63.6121 48.3133 63.6121 36.0355C63.6121 23.7578 53.659 13.8047 41.3812 13.8047C29.1035 13.8047 19.1504 23.7578 19.1504 36.0355C19.1504 48.3133 29.1035 58.2664 41.3812 58.2664Z"
            fill="#BC002D"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_728_5157"
        x={-18.3093}
        y={-1.91365}
        width={119.365}
        height={83.31}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={3.89762} />
        <feGaussianBlur stdDeviation={2.92321} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.258824 0 0 0 0 0.278431 0 0 0 0 0.298039 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_728_5157"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.243601} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.258824 0 0 0 0 0.278431 0 0 0 0 0.298039 0 0 0 0.32 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_728_5157"
          result="effect2_dropShadow_728_5157"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_728_5157"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_728_5157">
        <rect
          x={-12.4629}
          y={0.0351562}
          width={107.672}
          height={71.6188}
          rx={3.37029}
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
)
export default JapanFlag

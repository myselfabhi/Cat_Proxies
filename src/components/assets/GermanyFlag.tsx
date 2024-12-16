import * as React from "react"
const GermanyFlag = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={83}
    height={62}
    viewBox="0 0 83 62"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_728_5035"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={83}
      height={62}
    >
      <rect
        x={0.916016}
        y={0.332031}
        width={81.7021}
        height={61.2766}
        rx={6.00751}
        fill="#FAFAFA"
      />
    </mask>
    <g mask="url(#mask0_728_5035)">
      <mask
        id="mask1_728_5035"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={83}
        height={62}
      >
        <path
          d="M0.921875 0.332031H82.624V61.6086H0.921875V0.332031Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_728_5035)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.921875 41.1797H82.624V61.6052H0.921875V41.1797Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.921875 20.7578H82.624V41.1833H0.921875V20.7578Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.921875 0.332031H82.624V20.7576H0.921875V0.332031Z"
          fill="#272727"
        />
      </g>
    </g>
  </svg>
)
export default GermanyFlag

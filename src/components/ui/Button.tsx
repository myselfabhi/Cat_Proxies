import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-[8px] px-[50px] py-[18px] text-white text-sm w-fit hover:opacity-95 ",
  {
    variants: {
      variant: {
        primary: "bg-[#05C067]",
        outline: "p-[2px] bg-[#ffffff] shadow-outline",
        blueOutline: "p-[2px] bg-[#ffffff] shadow-outline",
        greenOutline: "p-[2px] bg-[#ffffff] shadow-outline",
        purpleOutline: "p-[2px] bg-[#ffffff] shadow-outline",
        pinkg: "bg-[linear-gradient(286.17deg,#FF5A5F_0%,#FF8A9B_100%)] ",
        purple: "bg-[#AF52DE] ",
        yellowg: "bg-[linear-gradient(286.17deg,#FB9400_0%,#FFAB38_100%)]",
        blue: "bg-[linear-gradient(286.17deg,#246BFD_0%,#5089FD_100%)]",
        blueg: "bg-[linear-gradient(105.4deg,#88E2FF_-0.05%,#00B5E7_100.05%)]",
        greenlg:
          "bg-[linear-gradient(133.32deg,#05C067_-18.1%,#50EA48_118.55%)]",
        white: "bg-[#ffffff] border-[#12111840] border-[1px] text-[#121118]",
        greendg: "bg-[linear-gradient(286.17deg,#019B83_0%,#18C6AB_100%)]",
        purpleg: "bg-[linear-gradient(286.17deg,#6949FF_0%,#876DFF_100%)]",
        purpledg: "bg-[linear-gradient(90deg,#AF52DE_0%,#7E00BE_100%)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {variant === "outline" ? (
          <div className="bg-[linear-gradient(133.32deg,#05C067_-18.1%,#50EA48_118.55%)] px-[32px] py-[12px] rounded-[8px] hover:opacity-95 ">
            {" "}
            {props.children}
          </div>
        ) : variant === "blueOutline" ? (
          <div className="bg-[linear-gradient(286.17deg,#246BFD_0%,#5089FD_100%)] px-[32px] py-[12px] rounded-[8px] hover:opacity-95 ">
            {" "}
            {props.children}
          </div>
        ) : variant === "purpleOutline" ? (
          <div className="bg-[linear-gradient(90deg,#AF52DE_0%,#7E00BE_100%)] px-[32px] py-[12px] rounded-[8px] hover:opacity-95 ">
            {" "}
            {props.children}
          </div>
        ) : variant === "greenOutline" ? (
          <div className="bg-[linear-gradient(286.17deg,#019B83_0%,#18C6AB_100%)] px-[32px] py-[12px] rounded-[8px] hover:opacity-95 ">
            {" "}
            {props.children}
          </div>
        ) : (
          props.children
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

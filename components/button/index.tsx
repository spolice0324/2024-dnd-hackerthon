"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef, useEffect } from "react"
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "framer-motion"
import { fadeInOutProps } from "@/constants"
import useMeasure from "react-use-measure"

const buttonVariants = cva(
  "font-pretendard duration-300 text-but1-sb disabled:cursor-not-allowed disabled:bg-bg-regular disabled:text-font-gray-05 origin-center active:scale-[0.985]",
  {
    variants: {
      variant: {
        "BG-brand":
          "hover:bg-brand-sub2/70 active:bg-brand-sub2/60  bg-brand-sub2",
        "BG-accent":
          "bg-black text-font-white hover:bg-black-800 active:bg-black-700",
        "BG-neutral":
          "hover:bg-gray-300 active:bg-gray-200 bg-bg-regular text-font-black",
        "Line-brand":
          "border-[1px] border-brand-main text-brand-main hover:bg-[#EEFFEF] active:bg-[#F5FFF6] disabled:border-bg-regular",
        "Line-accent":
          "border-[1px] border-line-regular text-brand-main hover:bg-[#F4F4F5] active:bg-[#F5F5F9] disabled:border-bg-regular [&_svg]:text-black",
        "Line-neutral":
          "text-black border-[1px] border-line-regular hover:bg-[#F4F4F5] activer:bg-[#F5F5F9] disabled:border-bg-regular [&_svg]:text-black",
      },
      rounded: {
        normal: "rounded-md",
        hard: "rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "BG-brand",
      rounded: "normal",
    },
  },
)

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    HTMLMotionProps<"button"> {
  /**
   * 색상을 기준으로 나뉘는 속성
   */
  variant?:
    | "BG-brand"
    | "BG-accent"
    | "BG-neutral"
    | "Line-brand"
    | "Line-accent"
    | "Line-neutral"

  /**
   * 라운딩 사이즈 조절 속성
   */
  rounded?: "normal" | "hard"

  /**
   * 로딩상태
   */
  isPending?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, buttonRef) => {
    const { variant, rounded, isPending, className, children, ...rest } = props
    const [ref, bounds] = useMeasure()
    const width = useMotionValue(bounds.width)
    useEffect(() => {
      width.set(bounds.width)
    }, [bounds.width, width])

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          className,
          buttonVariants({ variant, rounded }),
          isPending && "cursor-progress",
        )}
        {...rest}
        // style={{
        //   ...(width.get() > 0 ? { width } : {}),
        //   ...rest.style,
        // }}
      >
        <motion.div
          // ref={ref}
          className="flex w-fit whitespace-nowrap px-5 py-4"
        >
          <AnimatePresence mode="wait">
            {isPending ? (
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin"
                {...fadeInOutProps}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="url(#paint0_linear_258_42497)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_258_42497"
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="currentColor" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </motion.svg>
            ) : (
              <motion.div {...fadeInOutProps}>{children}</motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    )
  },
)
Button.displayName = "Button"

export { Button, type ButtonProps }

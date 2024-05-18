"use client"

import Main from "@/components/pages/main"
import OnboardTitle from "@/components/pages/onboard/title"
import { scaleInOutProps } from "@/constants/variants/scale-in-out"
import { today } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="flex grow flex-col items-center justify-center space-y-[14px]"
          {...scaleInOutProps}
        >
          <OnboardTitle />
          {/* <motion.h1
            {...fadeInOutProps}
            className="py-8 text-center text-h3-kr-b"
          >
            오늘은 <br />
            {now.month}월 {now.date}일
            <span className="text-[#767676]"> {now.day}</span> 이에요.
          </motion.h1> */}
        </motion.div>
      ) : (
        <Main />
      )}
    </AnimatePresence>
  ) : null
}

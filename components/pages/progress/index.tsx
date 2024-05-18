"use client"

import { useLayoutEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
interface ProgressProps {
  onFinish?: () => void
}
const progressList = [12, 28, 32, 45, 56, 63, 67, 73, 86, 92, 100]

export const Progress = ({ onFinish }: ProgressProps) => {
  const current = useMotionValue(0)
  const indexRef = useRef(0)

  const width = useTransform(current, (input) => `${input}%`)
  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      if (progressList.length <= indexRef.current) {
        clearInterval(intervalId)
        onFinish?.()
      } else {
        current.set(progressList[indexRef.current])
        indexRef.current += 1
      }
    }, 800)

    return () => {
      clearInterval(intervalId)
    }
  }, [current, onFinish])
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{ width: "0%" }}
      transition={{
        duration: 0.5,
      }}
      className="mb-4 py-1"
    >
      <div className="h-2 w-full rounded-lg bg-gray-200">
        <motion.div
          className="h-full rounded-lg bg-brand-sub2 duration-300 ease-in-out"
          style={{ width }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

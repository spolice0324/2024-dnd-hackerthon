"use client"
import { fadeInOutProps, loadingContent } from "@/constants"
import { upDownProps } from "@/constants/variants/up-down"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useMemo, useState } from "react"

function shuffle(array: any[]) {
  return array.toSorted(() => Math.random() - 0.5)
}

export const LoadingText = () => {
  const [mounted, setMounted] = useState(false)
  const shuffleList = useMemo(() => shuffle(loadingContent), [])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (mounted) {
      const intervalId = setInterval(() => {
        if (shuffleList.length <= progress) {
          clearInterval(intervalId)
        } else {
          setProgress((prev) => (prev + 1) % shuffleList.length)
        }
      }, 2500)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [mounted, progress, shuffleList.length])

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="flex justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        {mounted ? (
          <motion.span
            className="text-center text-h5-kr-b text-font-black"
            key={shuffleList[progress]}
            {...upDownProps}
          >
            {shuffleList[progress]}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

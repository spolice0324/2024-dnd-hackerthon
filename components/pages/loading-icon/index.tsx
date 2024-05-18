"use client"
import 도파 from "@/app/assets/icon/dopa.svg"
import 엔돌 from "@/app/assets/icon/endol.svg"
import 옥시 from "@/app/assets/icon/oxi.svg"
import 세로 from "@/app/assets/icon/sero.svg"
import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { scaleInOutProps } from "@/constants/variants/scale-in-out"
import Image from "next/image"

const MotionImage = motion(Image)
function shuffle(array: any[]) {
  return array.toSorted(() => Math.random() - 0.5)
}

export const LoadingIcon = () => {
  const [mounted, setMounted] = useState(false)
  const shuffleList = useMemo(() => shuffle([도파, 엔돌, 옥시, 세로]), [])
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
          <MotionImage
            key={shuffleList[progress].src}
            width={shuffleList[progress].width * 0.5}
            height={shuffleList[progress].height * 0.5}
            src={shuffleList[progress].src}
            alt={shuffleList[progress].src}
            {...scaleInOutProps}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}

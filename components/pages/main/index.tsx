"use client"

import { Categories } from "@/components/pages/categories"
import { LoadingIcon } from "@/components/pages/loading-icon"
import { LoadingText } from "@/components/pages/loading-text"
import { fadeInOutProps } from "@/constants"
import { today } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"

import React from "react"

const Main = () => {
  const router = useRouter()
  const now = today()
  const [pending, setPending] = useState(false)

  const handleFetch = async (prompts: string[]) => {
    setPending(true)
    try {
      const res = (await fetch("/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ prompt: prompts }),
      }).then((res) => res.json())) as { ok: boolean; result: string[] }
      localStorage.setItem("result", JSON.stringify(res.result))
      router.replace("/result")
    } catch (err) {
    } finally {
      setTimeout(() => {
        setPending(false)
      }, 1000)
    }
  }
  return (
    <AnimatePresence>
      {pending ? (
        <motion.div
          className="flex grow flex-col items-center justify-center space-y-[14px]"
          {...fadeInOutProps}
        >
          <LoadingIcon />
          <h1 className="text-t2-kr-b text-font-gray-04">혹시 그거 아세요?</h1>
          <LoadingText />
        </motion.div>
      ) : (
        <motion.div {...fadeInOutProps}>
          <AnimatePresence>
            <h1 className="py-8 text-center text-h3-kr-b">
              {now.month}월 {now.date}일
              <span className="text-[#767676]"> {now.day}</span>
              <br />
              오늘의 행동을 선택하세요
            </h1>

            <Categories onSubmit={handleFetch} />
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Main

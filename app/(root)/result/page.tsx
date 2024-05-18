"use client"

import 도파 from "@/app/assets/icon/dopa.svg"
import 엔도 from "@/app/assets/icon/endol.svg"
import 옥시 from "@/app/assets/icon/oxi.svg"
import 세로 from "@/app/assets/icon/sero.svg"

import React, { useCallback, useLayoutEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { scaleInOutProps } from "@/constants/variants/scale-in-out"
import { cn, today } from "@/lib/utils"
import { Button } from "@/components/button"
import { useRouter } from "next/navigation"

const MotionImage = motion(Image)
const ResultPage = () => {
  const router = useRouter()
  const now = today()
  const icons = useMemo(() => ({ 도파, 엔도, 옥시, 세로 }), [])
  const [isLoaded, setIsLoaded] = useState(false)
  const [content, setContent] = useState<{ title: string; content: string[] }>({
    title: "",
    content: [],
  })

  const checkNewTaskExist = useCallback(() => {
    if (content.title === "엔도") {
      return router.replace("/new-task")
    }
    return router.replace("/")
  }, [content.title, router])

  useLayoutEffect(() => {
    const prompts = localStorage.getItem("result")
    if (!prompts?.length) return
    const promptList = JSON.parse(prompts) as string[]

    setContent((prev) => ({
      ...prev,
      title: promptList[0]!,
      content: promptList.slice(1, promptList.length),
    }))
    setIsLoaded(true)
  }, [])
  return (
    <div>
      {isLoaded && content.title ? (
        <>
          <h1 className="py-8 text-center text-h3-kr-b">
            {now.month}월 {now.date}일
            <span className="text-[#767676]"> {now.day}</span>
            <br />
            오늘은 {content.title}와 만났어요.
          </h1>
          <MotionImage
            className="mx-auto"
            {...scaleInOutProps}
            src={icons[(content.title as keyof typeof icons) || "도파"].src}
            width={icons[(content.title as keyof typeof icons) || "도파"].width}
            height={
              icons[(content.title as keyof typeof icons) || "도파"].height
            }
            alt={content.title}
          />
          <div className="mx-auto mb-10 w-fit rounded-full bg-bg-light px-[64px] py-[10px] text-center text-t2-kr-b">
            {content.title}
          </div>
          {content.content.map((item, index) => (
            <>
              <p
                key={item}
                className={cn("text-center", index === 0 && "font-bold")}
              >
                {item.replaceAll("*", "")}
              </p>
              <br />
            </>
          ))}

          <Button
            type="submit"
            className="mt-4 flex w-full justify-center rounded-md"
            onClick={checkNewTaskExist}
          >
            확인
          </Button>
        </>
      ) : null}
    </div>
  )
}

export default ResultPage

"use client"

import 도파 from "@/app/assets/icon/dopa.svg"
import 엔돌 from "@/app/assets/icon/endol.svg"
import 옥시 from "@/app/assets/icon/oxi.svg"
import 세로 from "@/app/assets/icon/sero.svg"

import React, { useLayoutEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { scaleInOutProps } from "@/constants/variants/scale-in-out"
import { cn, today } from "@/lib/utils"
import { Button } from "@/components/button"
import Link from "next/link"
const icons = { 도파, 엔돌, 옥시, 세로 }
const MotionImage = motion(Image)
const ResultPage = () => {
  const now = today()
  const [isLoaded, setIsLoaded] = useState(false)
  const [content, setContent] = useState<{ title: string; content: string[] }>({
    title: "",
    content: [],
  })
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
          >
            <Link href="/new-task">확인</Link>
          </Button>
        </>
      ) : null}
    </div>
  )
}

export default ResultPage

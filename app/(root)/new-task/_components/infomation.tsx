"use client"
import React, { useState } from "react"
import Image from "next/image"
import 엔도 from "@/app/assets/icon/endol.svg"
import { motion } from "framer-motion"
import { upDownProps } from "@/constants/variants/up-down"
import { Button } from "@/components/button"
import Link from "next/link"

const Infomation = () => {
  const [isButtonShow, setIsButtonShow] = useState(false)
  return (
    <>
      <motion.div
        {...upDownProps}
        transition={{
          delay: 2,
          duration: 0.8,
          type: "spring",
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setIsButtonShow(true)
          }, 1000)
        }}
        className="mb-3 flex rounded-2xl bg-bg-light  p-5  text-b1-kr-m"
      >
        <Image src={엔도} width={80} height={80} alt="엔도" />
        <h1>
          엔도와 자주 만난 당신!
          <br />
          엔도를 만나는 새로운 태스크에
          <br />
          도전하세요.
        </h1>
      </motion.div>
      {isButtonShow && (
        <Link href="/" className="flex w-full justify-center">
          <Button className="flex w-full justify-center text-center">
            확인
          </Button>
        </Link>
      )}
    </>
  )
}

export default Infomation

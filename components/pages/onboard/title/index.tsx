"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import 도파 from "@/app/assets/icon/dopa.svg"
import 엔도 from "@/app/assets/icon/endol.svg"
import 옥시 from "@/app/assets/icon/oxi.svg"
import 세로 from "@/app/assets/icon/sero.svg"

const MotionImage = motion(Image)
const OnboardTitle = () => {
  return (
    <div>
      <h1 className="text-center text-t1-kr-m">
        내가 일으킬 수 있는
        <br />
        가장 작은 기적
      </h1>
      <h1 className="mt-[16px] text-center text-6xl font-extrabold leading-[60px] tracking-[-0.025em]">
        밍기적
      </h1>
      <MotionImage
        className="absolute left-[70%] top-[33%]"
        src={엔도}
        width={54}
        height={54}
        initial={{ y: 0 }}
        animate={{
          y: -25,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          },
        }}
        alt="엔도"
      />
      <MotionImage
        src={도파}
        className="absolute left-[10%] top-[30%]"
        width={54}
        height={54}
        initial={{
          rotateZ: 10,
          y: 0,
        }}
        animate={{
          rotateZ: 10,
          y: -25,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.75,
            delay: 0.4,
          },
        }}
        alt="도파"
      />
      <MotionImage
        src={옥시}
        className="absolute left-[12%] top-[55%]"
        width={54}
        height={54}
        initial={{
          rotateZ: -17,
          y: 0,
        }}
        animate={{
          rotateZ: -17,
          y: -10,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            delay: 0.2,
          },
        }}
        alt="옥시"
      />
      <MotionImage
        src={세로}
        className="absolute left-[70%] top-[60%]"
        width={54}
        height={54}
        initial={{
          rotateZ: 15,
          y: 0,
        }}
        animate={{
          rotateZ: 15,
          y: -15,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
            delay: 0.1,
          },
        }}
        alt="세로"
      />
    </div>
  )
}

export default OnboardTitle

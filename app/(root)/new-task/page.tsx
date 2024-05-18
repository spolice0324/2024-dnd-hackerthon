import { Button } from "@/components/button"
import Confetti from "@/components/pages/new-task/confetti"
import Camera from "@/app/assets/icon/여행관련.png"
import Image from "next/image"
import React from "react"
import Infomation from "./_components/infomation"

const NewTask = () => {
  return (
    <div className="relative flex grow flex-col pt-[91px]">
      <Confetti />

      <h1 className="pb-[60px] text-center text-h3-kr-b">
        새로운 태스크가
        <br />
        열렸습니다!
      </h1>

      <div className="flex grow flex-col space-y-[40px]">
        <Image
          className="mx-auto"
          src={Camera.src}
          width={Camera.width * 0.35}
          height={Camera.height * 0.35}
          alt="Camera"
        />
        <div className="mx-auto mb-10 w-fit rounded-full bg-bg-light px-[64px] py-[10px] text-center text-t2-kr-b">
          일상 사진 찍기
        </div>
        <Infomation />
      </div>
    </div>
  )
}

export default NewTask

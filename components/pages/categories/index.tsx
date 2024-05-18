"use client"
import 동물접촉 from "@/app/assets/icon/동물 접촉.svg"
import 목표성취 from "@/app/assets/icon/목표 성취.svg"
import 사교활동 from "@/app/assets/icon/사교 활동.svg"
import 셀프케어 from "@/app/assets/icon/셀프 케어.svg"
import 식물만지기 from "@/app/assets/icon/식물 만지기.svg"
import 신체접촉 from "@/app/assets/icon/신체 접촉.svg"
import 운동하기 from "@/app/assets/icon/운동하기.svg"
import 울기 from "@/app/assets/icon/울기.svg"
import 웃기 from "@/app/assets/icon/웃기.svg"
import 음식먹기 from "@/app/assets/icon/음식 먹기.svg"
import 취미생활 from "@/app/assets/icon/취미생활.svg"
import 햇볕쬐기 from "@/app/assets/icon/햇볕쬐기.svg"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInOutProps, fadeInOutVariants } from "@/constants"
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
const icons = [
  { icon: 동물접촉, title: "동물 접촉" },
  { icon: 목표성취, title: "목표 성취" },
  { icon: 사교활동, title: "사교 활동" },
  { icon: 셀프케어, title: "셀프 케어" },
  { icon: 식물만지기, title: "식물 만지기" },
  { icon: 신체접촉, title: "신체 접촉" },
  { icon: 운동하기, title: "운동하기" },
  { icon: 울기, title: "울기" },
  { icon: 웃기, title: "웃기" },
  { icon: 음식먹기, title: "음식 먹기" },
  { icon: 취미생활, title: "취미생활" },
  { icon: 햇볕쬐기, title: "햇볕쬐기" },
]

const schema = z.object({
  prompt: z.string().array().min(1),
  reason: z.string().optional(),
})

interface CategoriesProps {
  onSubmit?: (promt: string[]) => Promise<void>
}

export const Categories = ({ onSubmit }: CategoriesProps) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      prompt: [],
      reason: "",
    },
  })

  const onValid = (values: z.infer<typeof schema>) => {
    onSubmit?.(values.prompt)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid)}
        className="flex h-full flex-col justify-between"
      >
        <Controller
          control={form.control}
          name="prompt"
          render={({ field, fieldState }) => {
            return (
              <motion.div
                transition={{ staggerChildren: 0.05 }}
                variants={fadeInOutVariants}
                className="grid grid-cols-4 gap-x-4 gap-y-6"
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {icons.map((icon, index) => {
                  const isChecked = field.value.find(
                    (item) => item === icon.title,
                  )
                  return (
                    <motion.label
                      key={icon.title + index}
                      variants={fadeInOutVariants}
                      className={cn(
                        "shadow-base relative flex flex-col items-center space-y-2  rounded-md py-4 text-b2-kr-m duration-150",
                        isChecked && "bg-yellow-100",
                      )}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        value={icon.title}
                        checked={field.value.includes(icon.title)}
                        onChange={(e) => {
                          const newValue = [...field.value]
                          if (e.target.checked) {
                            newValue.push(icon.title)
                          } else {
                            const index = newValue.indexOf(icon.title)
                            newValue.splice(index, 1)
                          }
                          field.onChange(newValue)
                        }}
                      />
                      <Image src={icon.icon} alt={icon.title} />
                      <span className="whitespace-nowrap text-center">
                        {icon.title}
                      </span>
                      {isChecked && (
                        <motion.svg
                          {...fadeInOutProps}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute right-2 top-1"
                        >
                          <path
                            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            fill="#111111"
                          />
                          <path
                            d="M7.5 10.0002L9.16667 11.6668L12.5 8.3335"
                            stroke="white"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                    </motion.label>
                  )
                })}
              </motion.div>
            )
          }}
        />
        <div className="flex flex-col space-y-2">
          <h1 className="mt-[60px] text-t2-kr-b">오늘 어떤 일이 있었나요?</h1>
          <Controller
            control={form.control}
            name="reason"
            render={({ field }) => (
              <div className="relative rounded-md bg-bg-light p-4">
                <textarea
                  {...field}
                  className={cn(
                    "disabled:text-disabled disabled:placeholder:text-disabled bg-transparent peer flex w-full resize-none  border-none  outline-none  placeholder:text-b1-kr-m  placeholder:text-font-gray-04 disabled:cursor-not-allowed",
                  )}
                  placeholder="200글자 이내로 입력해주세요"
                  maxLength={200}
                  rows={3}
                  value={field.value + ""}
                />
                <span className="absolute bottom-[16px] right-4 text-b1-kr-m text-font-gray-04">
                  {field.value?.length}/200
                </span>
              </div>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={!!Object.keys(form.formState.errors).length}
          className="mt-4 flex w-full justify-center rounded-md"
        >
          작성 완료
        </Button>
      </form>
    </Form>
  )
}

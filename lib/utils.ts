import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const today = () => {
  const now = new Date()
  const daysOfWeekInKorean = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ]
  return {
    month: now.getMonth() + 1,
    date: now.getDate(),
    day: daysOfWeekInKorean[now.getDay()],
  }
}

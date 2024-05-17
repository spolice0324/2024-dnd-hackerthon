import { extendTailwindMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"
import { fontSize } from "@/constants"

export const twm = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": Object.keys(fontSize).map((item) => "text-" + item),
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twm(clsx(inputs))
}

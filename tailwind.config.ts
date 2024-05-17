import type { Config } from "tailwindcss"
import { fontSize } from "./constants/theme/font-size"
import { colors } from "./constants/theme/colors"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-base)", "sans-serif"],
      },
      fontSize,
    },
    colors,
  },
  plugins: [],
}
export default config

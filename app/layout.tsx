import type { Metadata } from "next"
import localFont from "next/font/local"
import { cn, today } from "@/lib/utils"
import "./globals.css"

const pretendard = localFont({
  adjustFontFallback: "Arial",
  src: [
    {
      path: "/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
  preload: true,
  display: "swap",
  variable: "--font-base",
})
const now = today()
export const metadata: Metadata = {
  title: "밍기적 | " + `${now.month}월 ${now.date}일`,
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          pretendard.className,
          pretendard.variable,
          "relative mx-auto max-w-lg overflow-x-hidden",
        )}
      >
        {children}
      </body>
    </html>
  )
}

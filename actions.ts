"use server"

import { cookies } from "next/headers"
import { CHECK_ONBOARD_KEY } from "@/constants"
import { redirect } from "next/navigation"

export async function checkInitialJoin() {
  const cookie = cookies()
  return !!cookie.get(CHECK_ONBOARD_KEY)
}

export async function updateInitialCookie() {
  const cookie = cookies()
  cookie.set(CHECK_ONBOARD_KEY, new Date().getTime().toString())
  return redirect("/")
}

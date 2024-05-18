import { updateInitialCookie } from "@/actions"
import OnboardTitle from "@/components/pages/onboard/title"
import { SubmitButton } from "@/components/pages/submit-button"

import Image from "next/image"

export default function Onboard() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center">
      <OnboardTitle />
    </div>
  )
}

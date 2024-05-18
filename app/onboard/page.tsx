import { updateInitialCookie } from "@/actions"
import { SubmitButton } from "@/components/pages/submit-button"

export default function Onboard() {
  return (
    <div>
      Onboard
      <form action={updateInitialCookie}>
        <SubmitButton type="submit">go home</SubmitButton>
      </form>
    </div>
  )
}

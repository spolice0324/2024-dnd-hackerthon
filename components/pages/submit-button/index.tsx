"use client"

import { Button, ButtonProps } from "@/components/button"
import { useFormStatus } from "react-dom"
interface SubmitButtonProps extends ButtonProps {}

export const SubmitButton = ({ ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return <Button {...rest} isPending={pending} type="submit" />
}

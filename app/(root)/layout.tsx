import { PropsWithChildren } from "react"

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col px-5 pb-6">{children}</main>
  )
}

export default layout

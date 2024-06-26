import { PropsWithChildren, cloneElement, isValidElement } from "react"

const Slot = <T,>({ children, ...props }: PropsWithChildren<T>) => {
  if (!isValidElement(children)) {
    console.warn(`Not Valid Element of ${children?.toString()}`)
    return null
  }
  return cloneElement(children, { ...props, ...children.props })
}

export default Slot

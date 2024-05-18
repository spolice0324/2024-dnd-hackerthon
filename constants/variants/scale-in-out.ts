import { Variants } from "framer-motion"

export const scaleInOutVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
}

export const scaleInOutProps = {
  variants: scaleInOutVariants,
  transition: {
    type: "tween",
  },
  ...scaleInOutVariants,
}

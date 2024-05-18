import { Variants } from "framer-motion"

export const fadeInOutVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const fadeInOutProps = {
  variants: fadeInOutVariants,
  ...fadeInOutVariants,
}

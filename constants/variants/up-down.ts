import { Variants } from "framer-motion"

export const upDownVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
}

export const upDownProps = {
  variants: upDownVariants,
  transition: {
    type: "tween",
  },
  ...upDownVariants,
}

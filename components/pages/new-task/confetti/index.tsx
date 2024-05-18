"use client"
import React, { useEffect, useState } from "react"
import Real from "react-canvas-confetti/dist/presets/realistic"
const Confetti = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <Real
      decorateOptions={(options) => {
        options.particleCount = 10
        options.spread = 70
        return options
      }}
      autorun={{
        speed: 1,
        duration: 3000,
        delay: 1000,
      }}
    />
  ) : null
}

export default Confetti

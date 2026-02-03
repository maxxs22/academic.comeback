"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = true }: GradientTextProps) {
  if (animate) {
    return (
      <motion.span
        className={cn(
          "bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 bg-clip-text text-transparent",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <span
      className={cn(
        "bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  )
}

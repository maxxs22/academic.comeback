"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function FloatingCard({
  children,
  className,
  delay = 0,
  duration = 4,
  distance = 10,
}: FloatingCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl bg-navy-light/80 backdrop-blur-xl border border-white/10 p-6 shadow-xl",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -distance, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

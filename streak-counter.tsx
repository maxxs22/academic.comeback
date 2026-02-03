"use client"

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"
import { Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface StreakCounterProps {
  streak: number
  className?: string
}

export function StreakCounter({ streak, className }: StreakCounterProps) {
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const displayValue = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    motionValue.set(streak)
  }, [streak, motionValue])

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
      </motion.div>
      <motion.span className="text-2xl font-bold text-white">
        {displayValue}
      </motion.span>
      <span className="text-zinc-400 text-sm">day streak</span>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { FloatingCard } from "@/components/ui/floating-card"
import { Sparkles, BookOpen, MessageSquare, Trophy, ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-sm font-medium">
                <Sparkles size={16} />
                Free Forever • No Limits
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Your AI Study Companion for{" "}
              <GradientText>VCE Success</GradientText>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Upload your materials, chat with AI that knows your content, generate
              flashcards, take practice quizzes, and study smarter with friends.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                variant="gradient"
                className="gap-2 text-base"
                asChild
              >
                <Link href="/signup">
                  Start Your Comeback
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                asChild
              >
                <Link href="#features">See How It Works</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-amber-500" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-purple-500" />
                <span>500,000+ Flashcards</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-pink-500" />
                <span>1M+ Study Sessions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Cards */}
          <div className="relative hidden lg:block h-[500px]">
            <FloatingCard
              className="absolute top-0 right-0 w-80"
              delay={0.3}
              duration={5}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <MessageSquare size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Study Chat</h3>
                  <p className="text-xs text-zinc-500">Ask anything about your materials</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-sm text-zinc-300">
                    "Explain photosynthesis in simple terms"
                  </p>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-3">
                  <p className="text-sm text-zinc-300">
                    Photosynthesis is how plants convert sunlight into energy...
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="absolute top-32 left-0 w-72"
              delay={0.5}
              duration={4}
              distance={8}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pink-600/20 flex items-center justify-center">
                  <BookOpen size={20} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Smart Flashcards</h3>
                  <p className="text-xs text-zinc-500">Auto-generated from your content</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-500/30 rounded-xl p-4 border border-white/10">
                <p className="text-sm text-zinc-300 mb-2">What is the powerhouse of the cell?</p>
                <p className="text-sm text-purple-400">Mitochondria</p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="absolute bottom-0 right-12 w-64"
              delay={0.7}
              duration={6}
              distance={6}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Study Streak</h3>
                <span className="text-2xl font-bold text-orange-500">12 🔥</span>
              </div>
              <div className="flex gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-8 rounded ${
                      i < 5 ? "bg-purple-600" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-purple-500"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

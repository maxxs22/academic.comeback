"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Upload, Brain, GraduationCap, Trophy } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Materials",
    description:
      "Add PDFs, Word docs, PowerPoints, or paste website links to your study set. Our system supports all major file formats.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Processes Everything",
    description:
      "Our AI reads and understands your content, ready to answer questions and create study tools personalized to your materials.",
    color: "from-pink-500 to-pink-600",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Study Your Way",
    description:
      "Chat with AI, generate flashcards, take quizzes, or record lectures - all personalized to your materials and learning style.",
    color: "from-amber-500 to-amber-600",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Ace Your Exams",
    description:
      "Track progress, compete with friends, and walk into exams confident and prepared. Your comeback starts here.",
    color: "from-green-500 to-green-600",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-light" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Get started in minutes and transform your study routine with AI-powered tools.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`inline-flex items-center gap-4 mb-4 ${
                        isEven ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-5xl font-bold text-zinc-700">{step.number}</span>
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-400 max-w-md mx-auto lg:mx-0">{step.description}</p>
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-4 h-4 relative">
                    <motion.div
                      className="absolute w-4 h-4 rounded-full bg-purple-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <div className="w-3 h-3 rounded-full bg-purple-400 border-4 border-navy-light" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

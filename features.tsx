"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  MessageSquare,
  Layers,
  HelpCircle,
  Mic,
  Calendar,
  Users,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "AI Study Chat",
    description:
      "Chat with an AI tutor that knows your materials. Ask questions, get explanations, and learn at your pace.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Layers,
    title: "Smart Flashcards",
    description:
      "Auto-generate flashcards from your PDFs, notes, and lectures. Study with spaced repetition.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: HelpCircle,
    title: "Practice Quizzes",
    description:
      "Turn any content into practice tests. Get instant feedback and track your progress.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Mic,
    title: "Lecture Recorder",
    description:
      "Record lectures, get transcripts, and generate notes automatically. Never miss a detail.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Calendar,
    title: "Study Calendar",
    description:
      "AI-powered study planning that fits your schedule and prepares you for exams.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Friend Challenges",
    description:
      "Study with friends, compete on leaderboards, and motivate each other to succeed.",
    color: "from-orange-500 to-orange-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-navy" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Zap size={16} />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ace Your Exams
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            From AI-powered study tools to collaborative learning, we have got you covered
            with everything you need to succeed.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full group hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

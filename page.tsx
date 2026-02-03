"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Palette, FileText } from "lucide-react"
import Link from "next/link"

const subjects = [
  { value: "math", label: "Mathematics", color: "blue" },
  { value: "science", label: "Science", color: "green" },
  { value: "english", label: "English", color: "amber" },
  { value: "humanities", label: "Humanities", color: "pink" },
  { value: "arts", label: "Arts", color: "purple" },
  { value: "tech", label: "Technology", color: "cyan" },
  { value: "languages", label: "Languages", color: "red" },
  { value: "other", label: "Other", color: "zinc" },
]

const colors = [
  { value: "purple", label: "Purple", class: "bg-purple-500" },
  { value: "blue", label: "Blue", class: "bg-blue-500" },
  { value: "green", label: "Green", class: "bg-green-500" },
  { value: "amber", label: "Amber", class: "bg-amber-500" },
  { value: "pink", label: "Pink", class: "bg-pink-500" },
  { value: "cyan", label: "Cyan", class: "bg-cyan-500" },
]

export default function NewStudySetPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    subject: "",
    color: "purple",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/study-sets/1")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* Back Button */}
      <Button variant="ghost" className="mb-6 gap-2" asChild>
        <Link href="/study-sets">
          <ArrowLeft size={18} />
          Back to Study Sets
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <BookOpen size={20} className="text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Create Study Set</CardTitle>
              <p className="text-sm text-zinc-400">
                Set up a new study set for your materials
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <FileText size={16} />
                Study Set Name
              </Label>
              <Input
                id="name"
                placeholder="e.g., Biology Unit 3"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-navy-light border-white/10"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="What topics will this study set cover?"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="bg-navy-light border-white/10 min-h-[100px]"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select
                value={formData.subject}
                onValueChange={(value) =>
                  setFormData({ ...formData, subject: value })
                }
              >
                <SelectTrigger className="bg-navy-light border-white/10">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="bg-navy-light border-white/10">
                  {subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Palette size={16} />
                Color Theme
              </Label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, color: color.value })
                    }
                    className={`w-10 h-10 rounded-lg ${color.class} transition-all ${
                      formData.color === color.value
                        ? "ring-2 ring-white ring-offset-2 ring-offset-navy scale-110"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => router.push("/study-sets")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="gradient"
                className="flex-1"
                disabled={isLoading || !formData.name || !formData.subject}
              >
                {isLoading ? "Creating..." : "Create Study Set"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

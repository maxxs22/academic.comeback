"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Users,
  Settings,
  HelpCircle,
  Plus,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/study-sets", label: "Study Sets", icon: BookOpen },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/friends", label: "Friends", icon: Users },
]

const bottomLinks = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/help", label: "Help", icon: HelpCircle },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-navy-light border-r border-white/10 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="font-bold text-white">Academic</h1>
            <p className="text-xs text-purple-400">Comeback</p>
          </div>
        </Link>
      </div>

      {/* Create New Button */}
      <div className="p-4">
        <Button variant="gradient" className="w-full gap-2" asChild>
          <Link href="/study-sets/new">
            <Plus size={18} />
            New Study Set
          </Link>
        </Button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/")

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-purple-600/20 text-purple-400"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon
                size={20}
                className={cn(
                  "transition-colors",
                  isActive ? "text-purple-400" : "group-hover:text-white"
                )}
              />
              <span className="font-medium">{link.label}</span>
              {isActive && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="absolute left-0 w-1 h-8 bg-purple-500 rounded-r-full"
                />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Links */}
      <div className="p-3 border-t border-white/10 space-y-1">
        {bottomLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-all"
            >
              <Icon size={20} />
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-medium">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-zinc-500 truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

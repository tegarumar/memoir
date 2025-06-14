"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"

export default function ThemeIndicator() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 bg-card shadow-md dark:shadow-white/5 rounded-full px-3 py-2 text-xs flex items-center gap-1.5 border border-border z-50 opacity-70 hover:opacity-100 transition-opacity">
      {resolvedTheme === "dark" ? (
        <Moon className="h-3.5 w-3.5" />
      ) : resolvedTheme === "light" ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Monitor className="h-3.5 w-3.5" />
      )}
      <span className="capitalize">{theme === "system" ? "System" : resolvedTheme}</span>
    </div>
  )
}

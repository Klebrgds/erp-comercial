"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    // Verifica se a página já está escura ao carregar
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all border border-gray-200 dark:border-slate-700"
      title="Alternar Tema"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
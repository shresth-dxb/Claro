'use client'

import { useAppTheme } from '@/hooks/useTheme'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useAppTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      suppressHydrationWarning
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-slate-300 transition-transform duration-300" strokeWidth={2} />
      ) : (
        <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300" strokeWidth={2} />
      )}
    </button>
  )
}


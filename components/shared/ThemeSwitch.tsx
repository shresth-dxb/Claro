'use client'

import { useAppTheme } from '@/hooks/useTheme'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeSwitch() {
  const { theme, setTheme } = useAppTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-16 h-10" />
  }

  const isDark = theme === 'dark'

  return (
    <label className="switch" aria-label="Toggle light and dark mode">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? 'light' : 'dark')}
      />
      <span className="slider" />
      <span className="sun">
        <Sun className="w-6 h-6 text-yellow-300" />
      </span>
      <span className="moon">
        <Moon className="w-6 h-6 text-sky-400" />
      </span>
    </label>
  )
}

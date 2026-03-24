'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        hasScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary transition-all duration-300 hover:scale-105"
          >
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">
              C
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent font-serif">
              Claro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              Features
            </Link>
          </div>

          {/* Right side: Theme toggle + Auth buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <Link
              href="#features"
              className="block px-4 py-2 text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              Features
            </Link>
            <div className="px-4 py-4 border-t border-gray-200 dark:border-slate-800 gap-2 flex">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-sm font-medium text-center text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex-1 px-4 py-2 text-sm font-medium text-center bg-primary text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

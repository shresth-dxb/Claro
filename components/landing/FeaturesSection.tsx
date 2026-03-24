'use client'

import { useEffect, useRef, useState } from 'react'

const FEATURES = [
  {
    icon: '📝',
    title: 'Plain English Summaries',
    description: 'Get clear, jargon-free explanations of even the most complex documents in seconds.',
  },
  {
    icon: '💰',
    title: 'Key Numbers Extracted',
    description: 'Automatically pull out dollar amounts, dates, percentages, and other critical metrics.',
  },
  {
    icon: '✓',
    title: 'Action Items & Deadlines',
    description: 'See what you need to do and when, prioritized by urgency and impact.',
  },
  {
    icon: '🚨',
    title: 'Risk Alerts',
    description: 'Get flagged on potential issues, missing info, and unexpected terms before they become problems.',
  },
  {
    icon: '💬',
    title: 'Ask Questions',
    description: 'Chat with AI about anything in your documents. Get answers instantly and in plain English.',
  },
  {
    icon: '📊',
    title: 'Track Over Time',
    description: 'Keep a searchable library of all analyzed documents with version history and comparisons.',
  },
]

export function FeaturesSection() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger animation for each feature
          FEATURES.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...new Set([...prev, idx])])
            }, idx * 100)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Why Claro?
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Powerful AI-driven features that turn overwhelming documents into clear insights in seconds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
                visibleIndexes.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDuration: '600ms',
                transitionTimingFunction: 'ease-out',
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

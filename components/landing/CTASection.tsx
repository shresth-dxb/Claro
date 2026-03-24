'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function CTASection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-emerald-500">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Ready to transform your documents?
          </h2>
          <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are saving hours every week by using Claro to understand their documents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 text-center"
            >
              Start Free Trial
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

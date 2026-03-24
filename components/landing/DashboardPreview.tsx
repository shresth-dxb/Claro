'use client'

import { useEffect, useRef, useState } from 'react'

interface Document {
  id: string
  name: string
  size: string
  status: 'completed' | 'processing' | 'pending'
  date: string
}

const SAMPLE_DOCUMENTS: Document[] = [
  {
    id: '1',
    name: '2024 Tax Return',
    size: '2.4 MB',
    status: 'completed',
    date: '2024-03-20',
  },
  {
    id: '2',
    name: 'Commercial Lease',
    size: '1.8 MB',
    status: 'completed',
    date: '2024-03-19',
  },
  {
    id: '3',
    name: 'Insurance Policy Review',
    size: '3.2 MB',
    status: 'processing',
    date: '2024-03-21',
  },
]

const SAMPLE_METRICS = [
  { label: 'Total Amount', value: '$145,000', icon: '💰' },
  { label: 'Due Date', value: 'Apr 15, 2024', icon: '📅' },
  { label: 'Action Items', value: '8 tasks', icon: '✓' },
]

function StatusBadge({ status }: { status: Document['status'] }) {
  const styles = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    pending: 'bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-slate-100',
  }
  const labels = {
    completed: 'Completed',
    processing: 'Processing',
    pending: 'Pending',
  }
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export function DashboardPreview() {
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
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
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        hasAnimated
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '500ms' }}
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:shadow-3xl transition-shadow duration-300">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Recent Documents</h3>
        </div>

        {/* Documents List */}
        <div className="divide-y divide-gray-200 dark:divide-slate-700">
          {SAMPLE_DOCUMENTS.map((doc, idx) => (
            <div
              key={doc.id}
              onMouseEnter={() => setHoveredDoc(doc.id)}
              onMouseLeave={() => setHoveredDoc(null)}
              className={`px-6 py-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer transform ${
                hoveredDoc === doc.id ? 'scale-[1.02]' : 'scale-100'
              }`}
              style={{
                animation: hasAnimated ? `fadeInUp 0.6s ease-out ${200 + idx * 100}ms both` : 'none',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{doc.name}</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">{doc.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <StatusBadge status={doc.status} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-800 grid grid-cols-3 gap-4">
          {SAMPLE_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className="text-center"
              style={{
                animation: hasAnimated ? `fadeIn 0.6s ease-out ${600 + idx * 100}ms both` : 'none',
              }}
            >
              <div className="text-lg font-semibold text-primary dark:text-emerald-400">
                {metric.icon}
              </div>
              <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">{metric.label}</p>
              <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

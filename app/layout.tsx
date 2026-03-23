import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claro - AI Document Intelligence',
  description: 'Transform complex documents into actionable insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Return Reason Analyzer — Reduce Returns with AI',
  description: 'Analyze return reasons to reduce future returns. AI-powered insights for e-commerce store owners and product managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c63f2ec1-5f65-429a-a90f-308100f8758a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

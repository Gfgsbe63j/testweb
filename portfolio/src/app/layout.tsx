import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Developer Portfolio | Professional Website Services',
  description: 'Professional web developer specializing in creating stunning websites for local businesses. Get your business online with custom, modern web solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

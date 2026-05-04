import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nguyễn Minh Anh | Internal Communications & Culture Specialist',
  description:
    'Storyteller for organizational culture at scale. 5+ years crafting culture campaigns, engagement strategies, and building meaning in organizations.',
  openGraph: {
    title: 'Nguyễn Minh Anh | Internal Communications & Culture Specialist',
    description: 'Culture strategist. Communications specialist. Storyteller.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}

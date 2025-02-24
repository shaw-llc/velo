import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Velo - AI-Powered Coding Platform',
  description: 'Create websites and applications with AI assistance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer dangerouslySetInnerHTML={{
          __html: `
            document.body.appendChild(document.createElement('div')).setAttribute('id','chatBubbleRoot');
            window.agx = '67bcf4f85831ed69d95b4525Lv2C/ST9QWF2q4cW9UjCLw==|LcBlTPfscO6C30dMLzRfm/Z+fEW88M0A1kb1Bu+iqq0=';
          `
        }} />
        <script defer src="https://storage.googleapis.com/agentx-cdn-01/agentx-chat.js" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
} 
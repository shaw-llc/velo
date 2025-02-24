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
    <html lang="en" className="dark">
      <head>
        <script defer dangerouslySetInnerHTML={{
          __html: `
            document.body.appendChild(document.createElement('div')).setAttribute('id','chatBubbleRoot');
            window.agx = '67bcf4f85831ed69d95b4525Lv2C/ST9QWF2q4cW9UjCLw==|LcBlTPfscO6C30dMLzRfm/Z+fEW88M0A1kb1Bu+iqq0=';
          `
        }} />
        <script defer src="https://storage.googleapis.com/agentx-cdn-01/agentx-chat.js" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
          <nav className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Velo
                  </span>
                </div>
              </div>
            </div>
          </nav>
          
          <main className="pt-16 min-h-screen animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          
          <footer className="bg-gray-800/50 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Velo. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 
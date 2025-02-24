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
        <div className="relative min-h-screen">
          {/* Background */}
          <div className="fixed inset-0 bg-[#0A0A0A]" />
          <div className="fixed inset-0 bg-gradient-to-b from-[rgba(17,24,39,0.8)] to-[rgba(10,10,10,1)]" />
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.02]" />

          {/* Navigation */}
          <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0A0A0A]/50 border-b border-[#222222]">
            <div className="container">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-6">
                  <a href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold heading-gradient">
                      Velo
                    </span>
                  </a>
                  <div className="hidden md:flex items-center space-x-1">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#docs" className="nav-link">Documentation</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <a href="/login" className="btn btn-secondary">
                    Sign In
                  </a>
                  <a href="/signup" className="btn btn-primary">
                    Get Started
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="pt-16 relative">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-32 border-t border-[#222222] bg-[#0A0A0A]/50 backdrop-blur-xl">
            <div className="container py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-[#222222]">
                <div className="text-center text-gray-400">
                  <p>© {new Date().getFullYear()} Velo. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script defer dangerouslySetInnerHTML={{
          __html: `
            document.body.appendChild(document.createElement('div')).setAttribute('id','chatBubbleRoot');
            window.agx = '67bcf4f85831ed69d95b4525Lv2C/ST9QWF2q4cW9UjCLw==|LcBlTPfscO6C30dMLzRfm/Z+fEW88M0A1kb1Bu+iqq0=';
          `
        }} />
        <script defer src="https://storage.googleapis.com/agentx-cdn-01/agentx-chat.js" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-950 text-gray-200`}>
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-950 -z-10" />
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.02] -z-10" />

          {/* Navigation */}
          <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-950/50 border-b border-gray-800/50">
            <div className="container mx-auto">
              <div className="flex items-center justify-between h-16 px-4">
                <div className="flex items-center space-x-8">
                  <a href="/" className="flex items-center space-x-2 group">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                      <span className="relative text-2xl font-bold heading-gradient">
                        Velo
                      </span>
                    </div>
                  </a>
                  <div className="hidden md:flex items-center space-x-1">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#docs" className="nav-link">Documentation</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/login" className="btn btn-secondary">
                    Sign In
                  </a>
                  <a href="/signup" className="btn btn-primary">
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <footer className="mt-32 border-t border-gray-800/50 bg-gray-950/50 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-gray-800/50">
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
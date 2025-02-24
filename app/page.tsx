import { CodeBracketIcon, RocketLaunchIcon, SparklesIcon, BeakerIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-28 pb-16">
        <div className="container">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Now with AI-powered code generation
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance]">
              Build Better Software with{' '}
              <span className="heading-gradient">AI Assistance</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 [text-wrap:balance]">
              Transform your development workflow with our AI-powered platform. Write better code, faster and smarter than ever before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/signup" className="btn btn-primary">
                Get Started Free
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#demo" className="btn btn-secondary">
                Watch Demo
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
            <div className="relative">
              <div className="bg-[#111111] rounded-xl border border-[#222222] overflow-hidden">
                <div className="flex items-center px-4 py-2 border-b border-[#222222]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="ml-4 text-sm text-gray-400">main.tsx</div>
                </div>
                <div className="p-4">
                  <pre className="text-sm font-mono">
                    <code className="text-gray-300">
                      <span className="text-blue-400">import</span>{' '}
                      <span className="text-purple-400">{'{ useState }'}</span>{' '}
                      <span className="text-blue-400">from</span>{' '}
                      <span className="text-green-400">'react'</span>;
                      {'\n\n'}
                      <span className="text-blue-400">function</span>{' '}
                      <span className="text-yellow-400">App</span>() {'{'}{'\n'}
                      {'  '}
                      <span className="text-blue-400">const</span>{' '}
                      [count, setCount] = useState(0);{'\n\n'}
                      {'  '}
                      <span className="text-blue-400">return</span> ({'\n'}
                      {'    '}&lt;<span className="text-purple-400">div</span>&gt;{'\n'}
                      {'      '}&lt;<span className="text-purple-400">h1</span>&gt;Hello, Velo!&lt;/<span className="text-purple-400">h1</span>&gt;{'\n'}
                      {'      '}&lt;<span className="text-purple-400">button</span> <span className="text-blue-400">onClick</span>={'{() => setCount(count + 1)}'}&gt;{'\n'}
                      {'        '}Count: {'{count}'}{'\n'}
                      {'      '}&lt;/<span className="text-purple-400">button</span>&gt;{'\n'}
                      {'    '}&lt;/<span className="text-purple-400">div</span>&gt;{'\n'}
                      {'  '});{'\n'}
                      {'}'}{'\n\n'}
                      <span className="text-blue-400">export</span>{' '}
                      <span className="text-blue-400">default</span> App;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Features for Modern Development
            </h2>
            <p className="text-gray-400">
              Everything you need to build amazing applications, powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<SparklesIcon />}
              title="AI Code Generation"
              description="Generate production-ready code with our advanced AI models trained on millions of repositories."
            />
            <FeatureCard
              icon={<CommandLineIcon />}
              title="Smart Autocomplete"
              description="Context-aware code suggestions that help you write better code faster than ever before."
            />
            <FeatureCard
              icon={<CpuChipIcon />}
              title="Intelligent Refactoring"
              description="Automatically improve your code quality with AI-powered refactoring suggestions."
            />
            <FeatureCard
              icon={<RocketLaunchIcon />}
              title="Instant Preview"
              description="See your changes in real-time with our lightning-fast preview environment."
            />
            <FeatureCard
              icon={<BeakerIcon />}
              title="Test Generation"
              description="Automatically generate comprehensive test suites for your code."
            />
            <FeatureCard
              icon={<CodeBracketIcon />}
              title="Code Analysis"
              description="Get deep insights into your code quality and potential improvements."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
            <div className="relative bg-[#111111] border border-[#222222] rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Development?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already building better software with Velo.
              </p>
              <a href="/signup" className="btn btn-primary">
                Get Started Free
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="feature-card">
      <div className="feature-icon mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
} 
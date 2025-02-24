import { CodeBracketIcon, RocketLaunchIcon, SparklesIcon, BeakerIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 heading-gradient animate-fade-up">
              Build Better Software with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-up [animation-delay:200ms]">
              Transform your development workflow with our AI-powered platform. Write better code, faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [animation-delay:400ms]">
              <a href="/signup" className="btn btn-primary">
                Get Started Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#demo" className="btn btn-secondary">
                Watch Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-20 animate-fade-up [animation-delay:600ms]">
            <div className="glass-card p-2 md:p-4 max-w-5xl mx-auto">
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image
                  src="/dashboard-preview.png"
                  alt="Velo Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 heading-gradient">
              Powerful Features for Modern Development
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to build amazing applications, powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 heading-gradient">
              Ready to Transform Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building better software with Velo.
            </p>
            <a href="/signup" className="btn btn-primary">
              Get Started Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-6 animate-scale">
      <div className="feature-icon mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
} 
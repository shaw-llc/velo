import { CodeBracketIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Welcome to Velo
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Your AI-powered coding companion. Transform ideas into reality with our intelligent code generation platform.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<SparklesIcon className="w-8 h-8" />}
              title="AI-Powered Code Generation"
              description="Generate high-quality code based on your requirements using advanced AI technology."
            />
            <FeatureCard
              icon={<RocketLaunchIcon className="w-8 h-8" />}
              title="Instant Preview"
              description="See your website or application come to life with real-time previews as you make changes."
            />
            <FeatureCard
              icon={<CodeBracketIcon className="w-8 h-8" />}
              title="Smart Code Analysis"
              description="Get intelligent suggestions and improvements for your code in real-time."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 
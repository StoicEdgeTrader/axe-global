import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Target, Rocket, TrendingUp, Building2 } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface Tool {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  benefits: string[];
  icon: any;
  accentColor: string;
  image: string;
  stat?: string;
}

// iPhone Mockup Component
function IPhoneMockup({ tool }: { tool: Tool }) {
  return (
    <div className="relative flex justify-center w-full">
      <div className="relative w-full max-w-[280px]">
        <div className="relative group">
          <div
            className="relative bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.2), rgba(239, 68, 68, 0.2)) border-box',
              border: '1.5px solid transparent',
            }}
          >
            <div
              className="relative rounded-[2.5rem] overflow-hidden"
              style={{
                aspectRatio: '390/844',
                backgroundImage: `url(${tool.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1a1a1a'
              }}
            >
              {/* Placeholder Gradient (visible when no image) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.accentColor} opacity-30`} />

              {/* Top reflection */}
              <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute top-0 left-0 right-0 p-6 text-white">
                <Badge variant="gradient" className="mb-2">
                  {tool.eyebrow}
                </Badge>
                <h3 className="text-xl font-bold mb-1 drop-shadow-lg">
                  {tool.label}
                </h3>

                {/* Icon Placeholder */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TOOLS: Tool[] = [
  {
    id: "research",
    label: "RESEARCH",
    eyebrow: "MARKET INTELLIGENCE",
    headline: "Understand WHERE the money is—not just IF there's demand",
    description: "Most brands fail because they build products nobody wants to buy. We don't launch until we've validated that customers are already spending money on the problem we're solving—we just build a better solution.",
    benefits: [
      "Market Size Analysis - DACH health market opportunity scoring across 20+ categories",
      "Competitor Research - Pricing strategies, positioning gaps, and market saturation analysis",
      "Demand Validation - Search volume, native ad spend estimates, and customer intent signals",
      "Audience Psychology - Pain points, buying triggers, and decision-making frameworks"
    ],
    icon: Target,
    accentColor: "from-orange-500 to-red-500",
    image: "/mockups/1.png",
    stat: "📊 12+ market opportunities analyzed in Q1 2025"
  },
  {
    id: "conversion",
    label: "CONVERSION",
    eyebrow: "DIRECT RESPONSE",
    headline: "Every element engineered to drive action—not just look pretty",
    description: "Beautiful design doesn't pay the bills—conversion does. Every headline, every image, every button placement is tested and optimized using Direct Response principles that have generated hundreds of millions in D2C sales.",
    benefits: [
      "Sales Page Architecture - Headline testing, benefit stacking, objection handling, and CTA optimization",
      "Checkout Flow Design - Multi-step vs single-page testing, trust signals, and friction reduction",
      "Upsell Sequences - Post-purchase offers, AOV maximization, and bundle strategies",
      "Email Automation - Cart abandonment, welcome series, and retention campaigns"
    ],
    icon: Rocket,
    accentColor: "from-amber-500 to-orange-500",
    image: "/mockups/2.png",
    stat: "🎯 Target: 3.5%+ checkout conversion rate before scaling"
  },
  {
    id: "infrastructure",
    label: "INFRASTRUCTURE",
    eyebrow: "BUILT TO SCALE",
    headline: "The time to build infrastructure is before you need it",
    description: "Most brands scramble when they hit scale—payment processors get nervous, fulfillment breaks down, compliance becomes a nightmare. We build like we're already doing $10M/year, so when growth comes, we're ready.",
    benefits: [
      "Payment Processing - Multi-processor setup, chargeback management, and high-risk mitigation strategies",
      "Fulfillment & Logistics - 3PL partnerships, international shipping, and inventory management systems",
      "Compliance Framework - DSGVO, health claims review, advertising compliance, and payment processor requirements",
      "Customer Service - Ticketing systems, refund policies, and satisfaction monitoring across all brands"
    ],
    icon: Building2,
    accentColor: "from-red-500 to-amber-500",
    image: "/mockups/3.png",
    stat: "⚡ Infrastructure capacity: Built for 8-figure annual revenue"
  }
];

export default function ToolsShowCase() {
  const [activeTab, setActiveTab] = useState<string>('research');
  const activeToolData = TOOLS.find(tool => tool.id === activeTab)!;

  return (
    <section id="services" className="relative py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background with Animated Blobs */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Blob 1 - Red */}
        <div
          className="absolute animate-blob animation-delay-2000"
          style={{
            top: '5%',
            left: '15%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.03) 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Gradient Blob 2 - Amber */}
        <div
          className="absolute animate-blob animation-delay-4000"
          style={{
            bottom: '15%',
            right: '20%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.02) 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="gradient" className="mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Our Infrastructure
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The Infrastructure Behind Every Successful Brand Launch
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            No guesswork, no shortcuts—just proven systems that we use to validate, build, and scale every brand in our portfolio.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tool.id
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tool.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: iPhone Mockup */}
                <div className="flex justify-center lg:justify-start">
                  <IPhoneMockup tool={activeToolData} />
                </div>

                {/* Right: Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeToolData.accentColor} flex items-center justify-center`}>
                      <activeToolData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-400 uppercase tracking-wider">
                        {activeToolData.eyebrow}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {activeToolData.label}
                      </h3>
                    </div>
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {activeToolData.headline}
                  </h4>

                  <p className="text-base text-gray-300 leading-relaxed mb-6">
                    {activeToolData.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {activeToolData.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm lg:text-base text-gray-300">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Stat */}
                  {activeToolData.stat && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-sm text-gray-400">{activeToolData.stat}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="group">
            Schedule a Partnership Call
          </Button>
          <p className="text-gray-400 text-sm mt-4">
            See how our infrastructure can accelerate your brand
          </p>
        </div>
      </div>
    </section>
  );
}
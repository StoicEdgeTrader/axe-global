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
    id: 'research',
    label: 'RESEARCH',
    eyebrow: 'Market Intelligence',
    headline: 'Data-driven market validation',
    description: 'We identify high-potential products through rigorous market research, competitive analysis, and customer insights. Launch with confidence knowing your product has validated demand.',
    benefits: [
      'Comprehensive market opportunity analysis',
      'Competitive landscape mapping',
      'Customer demand validation',
      'Product-market fit testing'
    ],
    icon: Target,
    accentColor: 'from-orange-500 to-red-500',
    image: '/mockups/1.png'
  },
  {
    id: 'infrastructure',
    label: 'INFRASTRUCTURE',
    eyebrow: 'Battle-Tested Systems',
    headline: 'Enterprise eCommerce infrastructure',
    description: 'Leverage our proven tech stack and operational systems. From Shopify optimization to fulfillment automation - we handle the complexity so you can focus on growth.',
    benefits: [
      'Optimized Shopify stores with conversion-focused design',
      'Automated fulfillment & logistics integration',
      'Payment processing & fraud prevention',
      'Customer service automation & CRM'
    ],
    icon: Building2,
    accentColor: 'from-red-500 to-amber-500',
    image: '/mockups/2.png'
  },
  {
    id: 'marketing',
    label: 'MARKETING',
    eyebrow: 'Direct Response',
    headline: 'Performance marketing that scales',
    description: 'Our marketing framework is built for scale. We optimize every touchpoint from ad creative to landing pages, turning cold traffic into loyal customers at industry-leading ROAS.',
    benefits: [
      'Multi-channel acquisition (Meta, Google, TikTok, Native)',
      'Conversion rate optimization & A/B testing',
      'Email & SMS automation workflows',
      'Influencer & affiliate partnership management'
    ],
    icon: Rocket,
    accentColor: 'from-amber-500 to-orange-500',
    image: '/mockups/3.png'
  },
  {
    id: 'analytics',
    label: 'ANALYTICS',
    eyebrow: '24/7 Monitoring',
    headline: 'Real-time insights & analytics',
    description: 'Track every metric that matters. Our analytics dashboard gives you complete visibility into performance, from CAC to LTV, empowering data-driven decisions at every stage.',
    benefits: [
      'Real-time P&L tracking across all channels',
      'Customer acquisition cost & LTV monitoring',
      'Cohort analysis & retention metrics',
      'Predictive analytics & forecasting'
    ],
    icon: TrendingUp,
    accentColor: 'from-orange-600 to-red-600',
    image: '/mockups/4.png'
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
            The complete ecosystem for D2C success
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to launch, scale, and dominate - all in one proven system
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
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Background with Animated Blobs */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Blob 1 - Orange */}
        <div
          className="absolute animate-blob"
          style={{
            top: '30%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 40%, rgba(255, 107, 53, 0.03) 100%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Gradient Blob 2 - Red */}
        <div
          className="absolute animate-blob animation-delay-2000"
          style={{
            bottom: '30%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.03) 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <Badge variant="gradient" size="lg" className="mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            Ready to Scale Your Brand?
          </Badge>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build the next{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              multi-million dollar
            </span>{' '}
            D2C brand together
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 15+ successful brands that trust AXE Global with their growth.
            From concept to category leader - we handle everything.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 text-lg">$50M+ Revenue Generated</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 text-lg">250% Average ROAS</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 text-lg">15+ Active Brands</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="gradient" size="lg" className="group shadow-2xl">
              Schedule Partnership Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all">
              View Case Studies
            </button>
          </div>

          {/* Small Print */}
          <p className="text-sm text-gray-500">
            No upfront fees • Partnership-based model • Full transparency
          </p>
        </motion.div>
      </div>
    </section>
  );
}
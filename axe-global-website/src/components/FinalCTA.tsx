import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to build the next generation of{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              D2C brands
            </span>
            ?
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're launching 4-6 new brands in 2026. If you're a supplier, media partner, or service provider who wants to work with a serious operator — let's talk.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 text-lg">Backed by performance marketing veterans</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 text-lg">Infrastructure built for multi-brand scale</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 text-lg">Focused on profitable, sustainable growth</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="gradient"
              size="lg"
              className="group shadow-2xl"
              onClick={() => setIsModalOpen(true)}
            >
              Get in touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="relative">
              {/* Coming Soon Badge */}
              <div className="absolute -top-2 -right-2 z-10">
                <span className="px-2 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                  Coming Soon
                </span>
              </div>
              <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all">
                Download our Brand Deck
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-400">
            Currently building our next brand launch
          </p>
        </motion.div>
      </div>
    </section>
    </>
  );
}
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { VolumeX, Volume2, CheckCircle, Activity, ArrowRight, Sparkles, Play } from 'lucide-react';

// Live Counter Component
function LiveCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = target / (duration / 10);
    const interval = setInterval(() => {
      setCount(prev => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(interval);
          return target;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-gray-300">
      {label} <span className="font-semibold text-white">#{Math.floor(count).toLocaleString()}</span>
      </span>
    </div>
  );
}

// Activity Ticker
function ActivityTicker() {
  const activities = [
    'Infrastructure built for 8-figure scale',
'Direct Response at the core',
'Health & Wellness focus'
  ];

  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentActivity}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center gap-2 text-sm text-gray-400"
      >
        <Activity className="w-4 h-4 text-orange-500" />
        {activities[currentActivity]}
      </motion.div>
    </AnimatePresence>
  );
}

interface HeroVideoSectionProps {
  videoUrl?: string;
  thumbnailUrl?: string;
}

export default function HeroVideoSection({
  videoUrl = '/videos/axe-hero.mp4',
  thumbnailUrl = '/images/video-thumbnail.jpg'
}: HeroVideoSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // 75% speed
      videoRef.current.play().catch(() => {});
    }
  }, []);



  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with Animated Blobs */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Blob 1 - Orange */}
        <div
          className="absolute animate-blob"
          style={{
            top: '25%',
            left: '5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 40%, rgba(255, 107, 53, 0.04) 100%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Gradient Blob 2 - Red */}
        <div
          className="absolute animate-blob animation-delay-2000"
          style={{
            bottom: '15%',
            right: '10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.04) 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* Gradient Blob 3 - Amber */}
        <div
          className="absolute animate-blob animation-delay-4000"
          style={{
            top: '60%',
            right: '-10%',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.18) 0%, rgba(251, 146, 60, 0.03) 70%)',
            filter: 'blur(68px)',
          }}
        />
      </div>

      {/* === VIDEO CONTAINER === */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster={thumbnailUrl}
          muted={isMuted}
          loop
          playsInline
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Gradients for Readability */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Full-width dark overlay - reduced opacity for more background visibility */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Top gradient */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900/60 to-transparent" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </div>

        {/* Mute Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={toggleMute}
          className="absolute top-20 right-6 z-20 p-3 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-black/60 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </motion.div>

      {/* === CONTENT CONTAINER === */}
      <div className="relative w-full max-w-[1500px] mx-auto">
        {/* Grid Container - 2 Columns on Desktop */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center min-h-screen">

          {/* === TEXT CONTENT === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative z-10
              px-8 pt-[45vh] pb-20
              lg:px-0 lg:pt-0 lg:pb-0 lg:pr-12
            "
          >
            {/* Badge
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-300 rounded-full text-sm inline-flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                $50M+ Revenue Generated
              </span>
            </motion.div> */}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Building the next generation of{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                performance D2C brands
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed"
            >
              AXE Global is a D2C brand incubator creating profitable health & wellness brands
              from the ground up — powered by Direct Response marketing and proven eCommerce infrastructure.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            >
              <LiveCounter target={3} label="Currently Building Brand" />
              <div className="hidden sm:block w-px h-6 bg-gray-500" />
              <ActivityTicker />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center group shadow-xl"
              >
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 border-2 border-orange-500/50 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:border-orange-500 transition-colors inline-flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                View Our Approach
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Proven Infrastructure
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Industry-Leading Tools
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Scalable Architecture
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      
    </section>
  );
}
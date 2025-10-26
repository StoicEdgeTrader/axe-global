import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target, Rocket, Trophy, ArrowRight,
  CheckCircle, TrendingUp,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Badge } from './ui/Badge';
import { GradientText } from './ui/GradientText';
import { Button } from './ui/Button';

// iPhone Mockup Component
function IPhoneMockup({ mockup, isActive, position }: {
  mockup: any;
  isActive: boolean;
  position: 'left' | 'center' | 'right'
}) {
  const getTransform = () => {
    switch (position) {
      case 'left':
        return 'translateX(-80%) scale(0.85) rotateY(25deg)';
      case 'right':
        return 'translateX(80%) scale(0.85) rotateY(-25deg)';
      case 'center':
      default:
        return 'translateX(0) scale(1) rotateY(0deg)';
    }
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: getTransform(),
        zIndex: position === 'center' ? 20 : 10,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
        width: '320px',
        marginLeft: '-160px',
        marginTop: '-320px',
        willChange: 'transform, opacity',
      }}
    >
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
              backgroundImage: `url(${mockup.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1a1a1a'
            }}
          >
            {/* Top reflection */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute top-0 left-0 right-0 p-8 text-white">
              <Badge variant="gradient" className="mb-3">
                {mockup.badge}
              </Badge>
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                {mockup.title}
              </h3>
              <p className="text-base opacity-90 drop-shadow">
                {mockup.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ThreeStepProcess() {
  const [currentStep, setCurrentStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 0,
      badge: "Step 1",
      title: "Validate & Launch",
      subtitle: "Market research meets rapid execution",
      description: "We identify high-potential products through rigorous market analysis and customer research. Launch with minimal risk using our proven testing frameworks and infrastructure.",
      image: "/mockups/1.png",
      icon: Target,
      result: "Product-Market Fit"
    },
    {
      id: 1,
      badge: "Step 2",
      title: "Optimize & Scale",
      subtitle: "Data-driven growth at scale",
      description: "Leverage our advanced marketing infrastructure and performance analytics to achieve profitable growth. We optimize every metric from CAC to LTV.",
      image: "/mockups/2.png",
      icon: Rocket,
      result: "Profitable Scaling"
    },
    {
      id: 2,
      badge: "Step 3",
      title: "Dominate & Expand",
      subtitle: "Build a market-leading brand",
      description: "Create sustainable competitive advantages through brand building, multi-channel expansion, and strategic partnerships. Go from startup to category leader.",
      image: "/mockups/3.png",
      icon: Trophy,
      result: "Market Leadership"
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const activeStep = steps[currentStep];

  return (
    <section id="process" ref={sectionRef} className="relative py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background with Animated Blobs */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Blob 1 - Amber */}
        <div
          className="absolute animate-blob"
          style={{
            top: '20%',
            right: '-8%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.18) 0%, rgba(251, 146, 60, 0.03) 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* Gradient Blob 2 - Orange */}
        <div
          className="absolute animate-blob animation-delay-4000"
          style={{
            bottom: '25%',
            left: '8%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.16) 40%, rgba(255, 107, 53, 0.03) 100%)',
            filter: 'blur(68px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Proven Process
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">From Concept to Category Leader in</span>{' '}
            <GradientText gradient="mixed">3 Strategic Steps</GradientText>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stop guessing. Follow our battle-tested framework that has helped 15+ brands
            go from zero to multi-million dollar businesses.
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Step Number */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
                <activeStep.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-orange-400 uppercase tracking-wider">
                  Step {currentStep + 1} of 3
                </p>
                <h3 className="text-3xl font-bold text-white">
                  {activeStep.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {activeStep.description}
            </p>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Proven infrastructure & systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Expert team at your disposal</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Full transparency & partnership</span>
              </div>
            </div>

            {/* Result Badge */}
            <div>
              <Badge variant="gradient" size="lg">
                Result: {activeStep.result}
              </Badge>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-4 pt-4">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`transition-all duration-300 ${idx === currentStep
                      ? 'w-12 h-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full'
                      : 'w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - iPhone Carousel */}
          <motion.div
            className="relative h-[640px]"
            style={{
              perspective: '1200px',
              willChange: 'transform'
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 20,
              power: 0.3
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                nextStep();
              } else if (swipe > 10000) {
                prevStep();
              }
            }}
          >
            {/* iPhone Frames */}
            <div className="relative w-full h-full">
              {steps.map((step, idx) => {
                let position: 'left' | 'center' | 'right' | null = null;
                const diff = idx - currentStep;

                if (diff === -1 || diff === 2) {
                  position = 'left';
                } else if (diff === 1 || diff === -2) {
                  position = 'right';
                } else if (diff === 0) {
                  position = 'center';
                }

                if (!position) return null;

                return (
                  <IPhoneMockup
                    key={step.id}
                    mockup={step}
                    isActive={idx === currentStep}
                    position={position}
                  />
                );
              })}

              {/* Navigation Arrows */}
              <button
                onClick={prevStep}
                className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextStep}
                className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Next step"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA Section - Outside Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="gradient" size="lg" className="group">
            Start Your Brand Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-gray-400 text-sm mt-4">
            Join 15+ successful brands already scaling with AXE Global
          </p>
        </motion.div>
      </div>
    </section>
  );
}
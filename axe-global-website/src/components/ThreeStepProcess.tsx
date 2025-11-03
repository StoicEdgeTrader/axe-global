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
                {mockup.mockupBadge || mockup.badge}
              </Badge>
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                {mockup.mockupTitle || mockup.title}
              </h3>
              <p className="text-base opacity-90 drop-shadow">
                {mockup.mockupSubtitle || mockup.subtitle}
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

  const steps = [
    {
      id: 0,
      badge: "Step 1",
      title: "Validate & Research",
      subtitle: "Market research meets rapid execution",
      description: "Market demand analysis, competitive landscape mapping, and audience psychology research—we only move forward when the numbers justify the investment.",
      image: "/images/research-phase.png",
      icon: Target,
      result: "Data-Backed Go/No-Go Decision",
      features: [
        "Market size analysis & demand validation",
        "Competitor positioning & pricing research",
        "Target audience profiling & pain point mapping",
        "Product-market fit validation through data"
      ],
      // iPhone Mockup specific content
      mockupBadge: "Research Phase",
      mockupTitle: "127,000 monthly searches",
      mockupSubtitle: '"Joint pain relief" DACH region - validated demand'
    },
    {
      id: 1,
      badge: "Step 2",
      title: "Build & Launch",
      subtitle: "From concept to market-ready brand",
      description: "Brand development, product sourcing, funnel creation, and compliance setup—every touchpoint optimized for conversion before we go live.",
      image: "/images/launch-phase.png",
      icon: Rocket,
      result: "Launch-Ready D2C Brand",
      features: [
        "Product sourcing & supplier vetting",
        "Brand identity & Direct Response positioning",
        "Sales funnel & checkout optimization",
        "Payment processing & compliance clearance"
      ],
      // iPhone Mockup specific content
      mockupBadge: "Launch Phase",
      mockupTitle: "Brand Launch: Ready",
      mockupSubtitle: "Product sourced, funnel live, compliance approved"
    },
    {
      id: 2,
      badge: "Step 3",
      title: "Scale & Optimize",
      subtitle: "Profitable growth through performance marketing",
      description: "Media buying across native, paid social, and search—combined with email automation and retention flows that maximize LTV and profitability.",
      image: "/images/growth-phase.png",
      icon: Trophy,
      result: "Profitable, Scalable Growth",
      features: [
        "Native advertising (Taboola, Outbrain, MGID)",
        "Paid social & search campaigns (Meta, Google)",
        "Email marketing & customer retention automation",
        "Continuous funnel testing & AOV optimization"
      ],
      // iPhone Mockup specific content
      mockupBadge: "Growth Phase",
      mockupTitle: "Day 14: Break-even",
      mockupSubtitle: "First campaign profitability milestone reached"
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
            <span className="text-white">From Zero to Market Leader in</span>{' '}
            <GradientText gradient="mixed">3 Strategic Phases</GradientText>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We don't launch brands on gut feeling. Every brand in our portfolio goes through rigorous validation, 
          systematic buildout, and performance-driven scaling - before a single dollar is spent on ads.
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 relative z-30"
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
              {activeStep.features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
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
          <Button variant="gradient" size="lg" className="group" onClick={scrollToContact}>
          This is how we build brands that win
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
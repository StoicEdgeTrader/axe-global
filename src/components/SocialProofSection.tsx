import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Star, Hash, Trophy,
  CheckCircle, ArrowRight, Activity, TrendingUp
} from 'lucide-react';
import { Badge } from './ui/Badge';
import { GradientText } from './ui/GradientText';
import { Button } from './ui/Button';

// Avatar Component
function Avatar({ name, status = 'online' }: { name: string; status?: string }) {
  const colors = ['bg-orange-600'];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div className="relative">
      <div className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-semibold`}>
        {name.substring(0, 2).toUpperCase()}
      </div>
      {status === 'online' && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800" />
      )}
    </div>
  );
}

// Shopify Notifications Feed Component
function LiveActivityFeed() {
  const activities = [
    { id: 1, items: 2, amount: '127.00', time: '2m ago' },
    { id: 2, items: 1, amount: '89.00', time: '5m ago' },
    { id: 3, items: 3, amount: '247.00', time: '8m ago' },
    { id: 4, items: 1, amount: '67.00', time: '12m ago' },
    { id: 5, items: 2, amount: '189.00', time: '15m ago' },
    { id: 6, items: 4, amount: '297.00', time: '18m ago' },
  ];

  const [visibleActivities, setVisibleActivities] = useState(activities.slice(0, 5));
  const [activityIndex, setActivityIndex] = useState(5);
  const [uniqueIdCounter, setUniqueIdCounter] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activityIndex + 1) % activities.length;
      setActivityIndex(nextIndex);
      setUniqueIdCounter(prev => prev + 1);

      setVisibleActivities(prev => {
        const newActivity = {
          ...activities[nextIndex],
          id: uniqueIdCounter
        };
        const newActivities = [newActivity, ...prev.slice(0, 4)];
        return newActivities;
      });
    }, 2000); // 2 seconds - faster updates

    return () => clearInterval(interval);
  }, [activityIndex, uniqueIdCounter]);

  return (
    <div className="w-full max-w-full space-y-2">
      {/* Header */}
      <div className="px-2">
        <h3 className="text-lg font-bold text-white mb-0.5">Notification Center</h3>
        <p className="text-xs text-gray-400">Shopify</p>
      </div>

      {/* Notifications List */}
      <div className="space-y-1.5">
        <AnimatePresence mode="popLayout">
          {visibleActivities.map((activity) => (
            <motion.div
              key={activity.id}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="relative group"
            >
              {/* iOS Glassmorphism Card */}
              <div className="flex items-start gap-2.5 p-3 bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all">
                {/* Shopify Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden">
                    <img
                      src="/images/Symbol_logo.png"
                      alt="Shopify"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-white">Shopify</span>
                    <span className="text-[10px] text-gray-300">{activity.time}</span>
                  </div>
                  <p className="text-xs text-gray-200 leading-snug">
                    Axe Global has a new order for {activity.items} {activity.items === 1 ? 'item' : 'items'} totaling ${activity.amount} from Online Store.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden flex-shrink-0 bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${testimonial.image})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-white text-lg font-medium mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-semibold">{testimonial.name}</div>
            <div className="text-gray-400 text-sm">{testimonial.role}</div>
          </div>
          {testimonial.achievement && (
            <Badge variant="gradient" className="text-xs">
              {testimonial.achievement}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

// Testimonial Carousel
function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Li Zhang",
      role: "CEO & Performance Marketing Lead",
      quote: "I've spent a decade scaling health brands through native advertising and Direct Response. AXE Global is the logical next step — building brands where every decision is driven by performance, and every win compounds into the next launch.",
      rating: 5,
      image: "/socialproof/1.png",
      achievement: "$5M ARR"
    },
    {
      id: 2,
      name: "Ryan Wong",
      role: "CTO & Technical Lead",
      quote: "The best part about building our own infrastructure? We can move fast without compromise. Every system we build today becomes the foundation for the next brand — that's the power of a true portfolio approach.",
      rating: 5,
      image: "/socialproof/2.png",
      achievement: "15x Growth"
    },
    {
      id: 3,
      name: "Mei Chen",
      role: "Head of Copy & Conversion",
      quote: "I've written sales copy that's generated over €50M in revenue. At AXE Global, I'm applying that same framework to build brands that convert from day one — it's copywriting with skin in the game.",
      rating: 5,
      image: "/socialproof/3.png",
      achievement: "Profitable in 6mo"
    },
    {
      id: 4,
      name: "David Chen",
      role: "Head of Analytics & Growth",
      quote: "Data tells you what's working before your gut does. We're building AXE Global with analytics at the core — so every launch is smarter than the last, and every insight feeds the next brand.",
      rating: 5,
      image: "/socialproof/4.png",
      achievement: "$2M Monthly"
    },
    {
      id: 5,
      name: "Emma Richter",
      role: "Head of Compliance & Operations",
      quote: "Compliance isn't a roadblock — it's a competitive advantage. When you build it right from the start, you can scale without looking over your shoulder. That's how we're building every brand at AXE Global.",
      rating: 5,
      image: "/socialproof/5.png",
      achievement: "300% ROAS"
    },
    {
      id: 6,
      name: "James Park",
      role: "Head of Product Development",
      quote: "Great products don't need tricks to sell — they need the right positioning and the right audience. I'm focused on finding products that solve real problems, because that's where sustainable D2C brands are built.",
      rating: 5,
      image: "/socialproof/6.png",
      achievement: "15 Countries"
    }
  ];

  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      <div className="relative h-[500px]">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -(400 + 24) * testimonials.length],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }
          }}
        >
          {scrollingTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={`${testimonial.id}-${idx}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}



// Main Section Component
export default function SocialProofSection() {
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
    <section id="social-proof" className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background with Animated Blobs */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Blob 1 - Orange */}
        <div
          className="absolute animate-blob"
          style={{
            top: '15%',
            right: '5%',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 40%, rgba(255, 107, 53, 0.03) 100%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Gradient Blob 2 - Red */}
        <div
          className="absolute animate-blob animation-delay-2000"
          style={{
            bottom: '10%',
            left: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.03) 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Gradient Blob 3 - Amber */}
        <div
          className="absolute animate-blob animation-delay-4000"
          style={{
            top: '50%',
            left: '-5%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, rgba(251, 146, 60, 0.02) 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <Badge variant="gradient" className="mb-4 sm:mb-6">
            <Users className="w-4 h-4 mr-2" />
            Building In Public
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-white">Real</span>{' '}
            <GradientText gradient="mixed">brands. </GradientText>
            <span className="text-white">Real</span>{' '}
            <GradientText gradient="mixed">revenue. </GradientText>
            <span className="text-white">Real</span>{' '}
            <GradientText gradient="mixed">infrastructure. </GradientText>
          </h2>

          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
          See what's happening across our brands right now
          </p>
        </motion.div>

        {/* Main Content Grid: 1/3 Activity Feed, 2/3 Testimonials */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">

          {/* Activity Feed - 1/3 on Desktop */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              <LiveActivityFeed />
            </motion.div>
          </div>

          {/* Testimonial Carousel - 2/3 on Desktop */}
          <div className="lg:col-span-2 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TestimonialCarousel />
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" className="group" onClick={scrollToContact}>
            Partner with AXE Global
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
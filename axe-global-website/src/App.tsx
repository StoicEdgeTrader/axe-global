
import Header from './components/Header';
import HeroVideoSection from './components/HeroVideoSection';
import ToolsShowCase from './components/ToolsShowCase';
import SocialProofSection from './components/SocialProofSection';
import ThreeStepProcess from './components/ThreeStepProcess';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen dark bg-gray-900 relative">
      {/* === ANIMATED BACKGROUND === */}
      <div className="fixed inset-0 pointer-events-none">

        {/* === GRADIENT BLOB 1 - Orange === */}
        <div
          className="absolute animate-blob"
          style={{
            top: '-10%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.4) 40%, rgba(255, 107, 53, 0.1) 100%)',
            filter: 'blur(60px)',
          }}
        />

        {/* === GRADIENT BLOB 2 - Red === */}
        <div
          className="absolute animate-blob animation-delay-2000"
          style={{
            bottom: '-10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* === GRADIENT BLOB 3 - Amber/Gold === */}
        <div
          className="absolute animate-blob animation-delay-4000"
          style={{
            top: '50%',
            right: '20%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, rgba(251, 146, 60, 0.1) 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* === FLOATING PARTICLES === */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '3px',
              height: '3px',
              background: 'rgba(255, 107, 53, 0.8)',
              borderRadius: '50%',
              boxShadow: '0 0 6px rgba(255, 107, 53, 0.5)',
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header outside main for fixed positioning */}
      <Header />

      {/* === CONTENT === */}
      <main className="relative">
        <HeroVideoSection />
        <SocialProofSection />
        <ToolsShowCase />
        <ThreeStepProcess />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
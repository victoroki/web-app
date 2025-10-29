import React, { useState, useEffect } from 'react';
import Hero from '../img/hero.mp4';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const phrases = ['EMPOWER THE MINDS', 'ENERGIZE THE COMMUNITY', 'ILLUMINATE THE FUTURE'];

  const services = [
    { 
      name: 'Electrical', 
      description: 'Power systems & industrial automation',
      gradient: 'from-yellow-400 to-amber-600'
    },
    { 
      name: 'Solar Energy', 
      description: 'Renewable solar solutions',
      gradient: 'from-orange-400 to-red-600'
    },
    { 
      name: 'E-Mobility', 
      description: 'EV technology & infrastructure',
      gradient: 'from-green-400 to-emerald-600'
    },
    { 
      name: 'Green Hydrogen', 
      description: 'Sustainable hydrogen systems',
      gradient: 'from-blue-400 to-cyan-600'
    },
    { 
      name: 'OSHA Safety', 
      description: 'Workplace safety training',
      gradient: 'from-purple-400 to-indigo-600'
    },
    { 
      name: 'Brand Strategy', 
      description: 'Technology branding',
      gradient: 'from-pink-400 to-rose-600'
    }
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 60);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Background */}
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)'
          }}
        />
        
        {/* Video Background */}
        <video
          src={Hero}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Enhanced Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10"></div>
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl z-10"></div>

      {/* Content Container with Backdrop for Extra Readability */}
      <div className="relative z-20 text-center text-white px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full py-20 pb-32">
        
        {/* Enhanced Text Container with Subtle Backdrop */}
        <div className="relative">
          {/* Optional: Subtle backdrop behind main content for extra contrast */}
          <div className="absolute inset-0 -inset-x-12 -inset-y-8 bg-black/20 backdrop-blur-[1px] rounded-lg opacity-60 z-0"></div>
          
          {/* Main Title */}
          <div className="mb-16 relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-wide">
              <span className="text-amber-200 font-extralight drop-shadow-2xl" style={{ letterSpacing: '0.05em' }}>
                Torchbearer
              </span>
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mb-6 drop-shadow-lg"></div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-amber-100/90 tracking-widest uppercase drop-shadow-2xl" style={{ letterSpacing: '0.15em' }}>
              Institute of Technologies
            </h2>
          </div>

          {/* Typing Text with Enhanced Contrast */}
          <div className="mb-20 min-h-[48px] flex items-center justify-center relative z-10">
            <div className="relative bg-black/30 backdrop-blur-sm px-6 py-3 rounded-sm border border-amber-500/20">
              <p className="text-base sm:text-lg font-light text-amber-100/95 tracking-wide drop-shadow-2xl">
                {displayText}
                <span className="inline-block w-px h-5 bg-amber-400/80 ml-1 animate-pulse drop-shadow-lg"></span>
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto relative z-10">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative p-5 rounded-none bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 cursor-pointer shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} mb-3 opacity-80 drop-shadow-lg`}></div>
                <h4 className="text-sm font-normal text-gray-100 mb-1.5 tracking-wide drop-shadow-2xl">{service.name}</h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed drop-shadow-2xl">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <a
              href="/training/about"
              className="group relative px-8 py-3.5 text-sm font-normal text-white bg-amber-700/95 hover:bg-amber-600 rounded-sm transition-all duration-300 tracking-wide uppercase overflow-hidden min-w-[180px] shadow-2xl hover:shadow-amber-500/25"
              style={{ letterSpacing: '0.1em' }}
            >
              <span className="relative z-10 drop-shadow-2xl">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </a>
            
            <a
              href="/training/contact"
              className="group px-8 py-3.5 text-sm font-normal text-amber-100 border border-amber-600/60 hover:border-amber-500/80 hover:bg-white/10 rounded-sm transition-all duration-300 tracking-wide uppercase backdrop-blur-sm min-w-[180px] shadow-2xl hover:shadow-amber-500/15"
              style={{ letterSpacing: '0.1em' }}
            >
              <span className="drop-shadow-2xl">Get Started</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-amber-300/60 text-xs font-light tracking-widest drop-shadow-2xl">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-400/40 to-transparent drop-shadow-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
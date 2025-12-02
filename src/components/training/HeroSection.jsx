import React, { useState, useEffect } from 'react';
import Hero from '../img/hero.mp4';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const phrases = ['EMPOWER THE MINDS', 'ENERGIZE THE COMMUNITY', 'ILLUMINATE THE FUTURE'];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
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
    <section className="relative min-h-screen pb-2 flex items-center justify-center overflow-hidden bg-[#e4d7c8]">
      {/* Fallback Background Image for slow connections */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      ></div>

      {/* Video Background */}
      <video
        src={Hero}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      />

      {/* Simple Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/70 z-10"></div>

      {/* Subtle Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Main Title - Clean and Bold */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-2xl">Torchbearer</span>
          <br />
          <span className="text-4xl sm:text-5xl lg:text-6xl font-normal text-amber-100">
            Institute of Technologies
          </span>
        </h1>

        {/* Typing Text - Clear and Simple */}
        <div className="mb-12 min-h-[80px] flex items-center justify-center">
          <div className="inline-flex items-center px-6 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-amber-500/30">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-300">
              {displayText}
            </span>
            <span className="inline-block w-1 h-8 bg-amber-400 ml-2 animate-pulse"></span>
          </div>
        </div>

        {/* Services - Clean Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { name: 'Electrical', icon: '⚡' },
            { name: 'Solar', icon: '☀️' },
            { name: 'E-Mobility', icon: '🔋' },
            { name: 'Green Hydrogen', icon: '💧' },
            { name: 'OSHA', icon: '🛡️' },
            { name: 'Branding', icon: '✨' }
          ].map((service) => (
            <div
              key={service.name}
              className="group p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 hover:bg-black/40 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <div className="text-sm font-semibold text-amber-300">{service.name}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Simple and Clear */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="/training/about"
            className="px-8 py-4 text-lg font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Our Services
          </a>
          
          <a
            href="/training/contact"
            className="px-8 py-4 text-lg font-semibold text-amber-300 border-2 border-amber-500 hover:bg-amber-500 hover:text-white rounded-full transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10  left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col mb-[-45px]  items-center">
          <span className="text-amber-300 text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
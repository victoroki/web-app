import React, { useState, useEffect } from 'react';
import Hero from '../img/hero.mp4';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ['EMPOWER THE MINDS', 'ENERGIZE THE COMMUNITY'];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 80);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e4d7c8]">
      {/* Video Background */}
      <video
        src={Hero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 z-0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/75 z-10"></div>

      {/* Floating Background Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
          {/* <span className="inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
            Torchbearer
          </span>
          <br /> */}
          <span className="text-white">Torchbearer Institute of Technologies</span>
        </h1>

        {/* Typing Text */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center drop-shadow-xl">
          <div className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent px-4 py-2 rounded-lg backdrop-blur-sm bg-black/30 font-mono">
              {displayText}
            </span>
            <span className="inline-block w-1 h-8 bg-amber-400 ml-1 animate-pulse"></span>
          </div>
        </h2>

        {/* Description */}
        <div className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide drop-shadow-md mb-8">
          <span className="text-amber-300 font-medium">Electrical</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-orange-300 font-medium">Solar</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-amber-500 font-medium">OSHA</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-amber-500 font-medium">Branding</span>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-400/50 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#d97706] rounded-full transition-all duration-300 group-hover:from-amber-400 group-hover:via-orange-400 group-hover:to-red-400"></span>
            <span className="relative z-10 flex items-center space-x-2">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Additional Decorative Animations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-300/30 rounded-full animate-spin"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-orange-300/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
    </section>
  );
};

export default HeroSection;

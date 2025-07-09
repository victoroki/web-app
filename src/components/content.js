import React from 'react';
import Solar from './img/video.mp4'

function Content() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Bar Components */}


      {/* Video Background */}
      <video
        src={Solar}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Content Overlay - Adjusted to not overlap with Bar */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-8 pt-16 md:pt-20">
        <div className="max-w-4xl w-full">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300 ease-out">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Torchbearer Technologies 
            </h1>
            <p className="text-lg md:text-xl text-center lg:text-2xl text-white mb-3 md:mb-4 font-medium">
            we care about your property
            </p>
            {/* <p className="text-sm md:text-base lg:text-lg text-white text-opacity-90 mb-6 md:mb-8 leading-relaxed">
              Discover Excellence in Service at Torchbearer Technologies
            </p> */}
            <div className="flex justify-center">
            <a href="#services">
              <button className="bg-[#712B35] hover:bg-[#A04D5C] text-center text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-[#A04D5C]/50">
                Learn more
              </button>
              </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
import React from "react";
import { ArrowRight } from "lucide-react";
import Solar from "./img/video.mp4";

function Content() {
  return (
    <div className="relative h-[65vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* Background Video */}
      <video
        src={Solar}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 sm:opacity-70"
      />

      {/* Layered Overlays - Enhanced for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-12 lg:pt-32 pb-36 lg:pb-48 xl:pb-56 2xl:pb-64">

        {/* Heading */}
        <h1 className="text-white font-extrabold leading-[1.15] tracking-tight 
          text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
          opacity-0 animate-fade-in-up mb-3 sm:mb-6 drop-shadow-2xl pt-8 lg:pt-28">
          Torchbearer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mt-1 sm:mt-2 pb-4">Technologies</span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-200 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 
          font-light mt-2 sm:mt-6 max-w-xs xs:max-w-md sm:max-w-3xl md:max-w-4xl px-2
          opacity-0 animate-fade-in-up [animation-delay:0.2s] drop-shadow-lg">
          We care about your property
        </p>

        {/* Subline */}
        {/* <p className="text-gray-300 text-sm xs:text-base sm:text-lg 
          mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl 
          font-light px-2 opacity-0 animate-fade-in-up [animation-delay:0.4s]">
          Excellence in service, commitment to quality
        </p> */}

        {/* CTA */}
        <a href="#services" className="mt-4 sm:mt-10">
          <button
            className="group bg-[#712B35] hover:bg-[#8B3544] text-white 
            px-6 xs:px-8 sm:px-12 py-3 xs:py-3.5 sm:py-5 
            rounded-full text-base sm:text-xl font-medium 
            transition-all duration-300 
            hover:scale-105 sm:hover:scale-110 
            hover:shadow-2xl hover:shadow-[#712B35]/50 
            flex items-center gap-2 sm:gap-3
            opacity-0 animate-fade-in-up [animation-delay:0.6s] border border-white/10"
          >
            Learn More
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </a>
      </div>

      {/* Centered Trust Badges - Fully Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex items-center justify-center px-4 lg:hidden">
        <div
          className="flex items-center justify-center gap-5 xs:gap-8 sm:gap-12 md:gap-16 
          backdrop-blur-xl bg-white/5 px-4 xs:px-6 sm:px-10 py-2.5 sm:py-4 
          rounded-full border border-white/10 text-white/80 shadow-2xl
          text-xs sm:text-base opacity-0 animate-fade-in-up [animation-delay:0.8s]"
        >
          <span className="flex items-center gap-1.5 sm:gap-3 whitespace-nowrap">
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-2 lg:h-2 bg-[#712B35] rounded-full shadow-[0_0_10px_#712B35]"></div>
            <span className="font-medium tracking-wide text-[10px] xs:text-xs sm:text-sm lg:text-xs uppercase">Trusted Service</span>
          </span>

          <span className="hidden xs:flex items-center gap-1.5 sm:gap-3 whitespace-nowrap">
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-2 lg:h-2 bg-[#712B35] rounded-full shadow-[0_0_10px_#712B35]"></div>
            <span className="font-medium tracking-wide text-[10px] xs:text-xs sm:text-sm lg:text-xs uppercase">Quality Guaranteed</span>
          </span>

          <span className="hidden md:flex items-center gap-3 whitespace-nowrap">
            <div className="w-2.5 h-2.5 lg:w-2 lg:h-2 bg-[#712B35] rounded-full shadow-[0_0_10px_#712B35]"></div>
            <span className="font-medium tracking-wide text-sm lg:text-xs uppercase">24/7 Support</span>
          </span>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default Content;
import React from "react";
import { feedback } from "../constants";
import Feedback from "./Feedback";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="relative py-24 md:py-32 overflow-hidden bg-[#712B35]"
    >
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-[#8B3544]/20 via-transparent to-black/40" />
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "35px 35px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight animate-fade-in-up">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Real stories from customers who trust our services every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedback.map((card, index) => (
            <div
              key={card.id}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                border border-white/20 hover:border-white/30 animate-fade-in-up"
              style={{ animationDelay: `${0.12 * index}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="text-white">
                <Feedback {...card} />
              </div>

              {/* Subtle Line */}
              <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/40 transition-all"></div>

              {/* Name & Role */}
              <p className="mt-4 text-white font-semibold text-lg">
                {card.name}
              </p>
              <p className="text-white/60 text-sm">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
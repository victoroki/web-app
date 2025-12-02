import React from 'react';
import solar from "./img/solar-hero.png";
import slogo from "./img/slogo.png";
import quality from "./img/quality.jpg";
import { Shield, Zap, Award, ArrowRight } from 'lucide-react';

function Section() {
  return (
    <section className='py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-[#fafafa] to-[#f5f3f0]'>
      <div className='max-w-7xl mx-auto'>

        {/* Section Header */}
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a2118] mb-4'>
            We Power Your <span className='text-[#712B35]'>Future</span>
          </h2>
          <p className='text-lg text-[#5a524c] max-w-3xl mx-auto font-light'>
            Transforming spaces with cutting-edge technology and sustainable solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className='grid lg:grid-cols-12 gap-6 lg:gap-8 mb-8'>

          {/* Left Image */}
          <div className='lg:col-span-7 relative group overflow-hidden rounded-3xl shadow-xl h-[400px] md:h-[500px]'>
            <img 
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
              src={solar} 
              alt='Solar installation' 
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            <div className='absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
              <p className='text-white text-lg font-medium'>Professional Solar Installation</p>
              <p className='text-white/80 text-sm mt-2'>Eco-friendly energy for modern living</p>
            </div>
          </div>

          {/* Company Info */}
          <div className='lg:col-span-5 bg-white rounded-3xl shadow-xl p-8 lg:p-10 flex flex-col justify-between'>
            
            <div>
              <div className='flex items-center gap-3 mb-8 pb-6 border-b-2 border-[#712B35]/10'>
                <div className='w-16 h-16 bg-[#712B35]/10 rounded-2xl flex items-center justify-center'>
                  <img src={slogo} alt='Logo' className='w-10 h-7 object-contain' />
                </div>
                <div>
                  <p className="font-bold text-[#2a2118] text-xl">Torchbearer</p>
                  <p className="text-[#712B35] text-sm font-medium">Technologies</p>
                </div>
              </div>

              <p className='text-[#5a524c] leading-relaxed text-base mb-8 font-light'>
                We provide modern CCTV systems, solar installation and electrical wiring that enhance safety and maximize energy efficiency.
              </p>

              <div className='grid grid-cols-1 gap-4'>
                {[
                  { icon: <Shield className="w-5 h-5" />, text: "Certified & Licensed" },
                  { icon: <Zap className="w-5 h-5" />, text: "Energy Efficient" },
                  { icon: <Award className="w-5 h-5" />, text: "Trusted Quality" }
                ].map((feature, index) => (
                  <div key={index} className='flex items-center gap-3 p-3 bg-[#f5f3f0] rounded-xl hover:bg-[#712B35]/5 transition-colors duration-300'>
                    <div className='text-[#712B35]'>{feature.icon}</div>
                    <span className='text-[#2a2118] text-sm font-medium'>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EQUAL HEIGHT CARDS BELOW */}
        <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
          
          {/* Quality Card */}
          <div className='bg-gradient-to-br from-[#712B35] to-[#5f2b40] rounded-3xl shadow-xl p-8 lg:p-10 text-white flex flex-col h-full'>
            <div className='flex items-start gap-6 mb-6'>
              <div className='relative flex-shrink-0'>
                <img 
                  className='w-20 h-20 object-cover rounded-2xl shadow-lg border-4 border-white/20' 
                  src={quality} 
                  alt="Quality assurance"
                />
                <div className='absolute -bottom-2 -right-2 bg-white text-[#712B35] p-2 rounded-full'>
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>Quality First</h3>
                <p className='text-white/80 text-sm font-light leading-relaxed'>
                  We deliver reliable, durable, and expertly installed systems built for long-term performance.
                </p>
              </div>
            </div>

            <div className='space-y-4 mb-6'>
              <div className='flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm'>
                <Shield className="w-5 h-5" />
                <span className='text-sm font-medium'>Industry-Leading Standards</span>
              </div>
              <div className='flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm'>
                <Award className="w-5 h-5" />
                <span className='text-sm font-medium'>Premium Components</span>
              </div>
              <div className='flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm'>
                <Zap className="w-5 h-5" />
                <span className='text-sm font-medium'>Warranty Protected</span>
              </div>
            </div>

            <div className='pt-4 border-t border-white/20 mt-auto'>
              <p className='text-white/90 text-sm font-light leading-relaxed'>
                Our mission is to offer solutions you can trust safe, sustainable, and efficient for your home or business.
              </p>
            </div>
          </div>

          {/* CTA / Services Card */}
          <div className='bg-white rounded-3xl shadow-xl p-8 lg:p-10 flex flex-col justify-between h-full'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-[#2a2118] mb-4'>
                Let's Build Something Exceptional
              </h3>
              <p className='text-[#5a524c] leading-relaxed mb-6 font-light'>
                From security systems to solar and electrical solutions, we offer expert installation built to last.
              </p>

              <div className='space-y-4 mb-6'>
                <div className='flex items-center gap-3 p-4 bg-[#f3efec] rounded-xl'>
                  <Shield className="text-[#712B35] w-5 h-5" />
                  <span className='text-[#2a2118] text-sm font-semibold'>Fast Installation</span>
                </div>
                <div className='flex items-center gap-3 p-4 bg-[#f3efec] rounded-xl'>
                  <Award className="text-[#712B35] w-5 h-5" />
                  <span className='text-[#2a2118] text-sm font-semibold'>24/7 Support</span>
                </div>
                <div className='flex items-center gap-3 p-4 bg-[#f3efec] rounded-xl'>
                  <Zap className="text-[#712B35] w-5 h-5" />
                  <span className='text-[#2a2118] text-sm font-semibold'>Custom-Tailored Solutions</span>
                </div>
              </div>
            </div>

            <button className='group w-full bg-[#712B35] hover:bg-[#5f2b40] text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-auto'>
              Learn More About Our Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section;
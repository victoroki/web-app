import React from 'react'
import solar from "./img/solar1.jpg"
import slogo from "./img/slogo.png"
import quality from "./img/quality.jpg"

function Section() {
  return (
    <section className='py-16 px-4 md:px-8 lg:px-12 bg-[#f5f3f0]'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-center'>
          {/* Image Section */}
          <div className='order-2 lg:order-1'>
            <img 
              className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500 ease-out' 
              src={solar} 
              alt='Solar installation by Torchbearer Technologies' 
            />
          </div>
          
          {/* Content Section */}
          <div className='order-1 lg:order-2 bg-white p-8 lg:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500'>
            {/* Company Logo & Name */}
            <div className='flex items-center bg-gradient-to-r from-[#f0e8e8] to-[#e8e0e0] p-4 rounded-lg mb-6 border-l-4 border-[#712B35]'>
              <img
                src={slogo}
                alt='Torchbearer Technologies Logo'
                className='w-12 h-8 object-contain'
              />
              <p className="font-semibold text-[#2a2118] text-lg ml-3">
                Torchbearer Technologies
              </p>
            </div>
            
            {/* Main Heading */}
            <h2 className='font-bold text-3xl md:text-4xl lg:text-[2.8rem] text-[#2a2118] mb-6 leading-tight'>
              We Power Your <span className='text-[#712B35]'>Future</span>
            </h2>
            
            {/* Description */}
            <p className='text-[#5a524c] leading-relaxed text-lg mb-8 font-light'>
              Torchbearer Technologies is dedicated to transforming your spaces into havens of safety and efficiency. 
              Specializing in CCTV installation, solar installation, and electric wiring, we understand the evolving 
              needs of modern living. Our team of experts is committed to delivering cutting-edge solutions that not 
              only safeguard your premises but also contribute to a greener future.
            </p>
            
            {/* Bottom Section with Quality Badge */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
              {/* Quality Badge */}
              <div className='flex-shrink-0'>
                <div className='relative group'>
                  <img 
                    className='w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg border-4 border-[#e8e1d9] group-hover:border-[#b89b6e] transition-colors duration-500' 
                    src={quality} 
                    alt="Quality assurance badge"
                  /> 
                  <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#712B35] text-[#e8e1d9] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider'>
                    Quality
                  </div>
                </div>
              </div>
              
              {/* Quality Description */}
              <div className='flex-1'>
                <p className='text-[#5a524c] leading-relaxed font-light'>
                  At Torchbearer Technologies, we believe in empowering you with systems and technologies 
                  that not only protect your present but also pave the way for a sustainable and secure future. 
                  Join us on this journey towards a smarter, safer, and more energy-efficient tomorrow.
                </p>
              </div>
            </div>
            
            {/* Call to Action Button */}
            <div className='mt-8 pt-6 border-t border-[#e8e1d9]'>
              <button className='bg-[#712B35] hover:bg-[#5f2b40] text-[#e8e1d9] font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#712B35] focus:ring-opacity-30'>
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
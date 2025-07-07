import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section 
      id='clients' 
      className={`relative ${styles.paddingY} ${styles.flexce} flex-col items-center justify-center overflow-hidden`}
      style={{
        background: 'linear-gradient(135deg, #223b52 0%, #712B35 50%, #223b52 100%)',
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #dcdcdc 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] max-w-6xl mx-auto px-4'>
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 
            className={`${styles.heading2} text-white font-bold mb-4 relative`}
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)'
            }}
          >
            What people are{' '}
            <span 
              className="relative"
              style={{ color: '#489820' }}
            >
              saying
              <div 
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: '#489820' }}
              />
            </span>
            {' '}about us
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mt-4 mx-auto md:mx-0 opacity-60"></div>
        </div>
        
        <div className='w-full md:w-auto md:mt-0 mt-6'>
          <p 
            className={`${styles.paragraph} text-center md:text-right md:max-w-[450px] text-lg md:text-xl px-5 text-gray-200 leading-relaxed`}
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Discover how our innovative solutions have transformed businesses 
            and empowered success stories across industries.
          </p>  
        </div>
      </div>

      {/* Enhanced Feedback Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full feedback-container relative z-[1] max-w-7xl mx-auto px-4 place-items-center'>
        {feedback.map((card, index) => ( 
          <div
            key={card.id}
            className="transform transition-all duration-300 hover:scale-105 hover:z-10 w-full max-w-sm"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <Feedback {...card} />
          </div>        
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .feedback-container {
          position: relative;
        }
        
        .feedback-container::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #489820, transparent);
          border-radius: 2px;
        }
      `}</style>
    </section>
  )
}

export default Testimonials
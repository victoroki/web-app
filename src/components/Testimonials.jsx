import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`bg-gray-800 ${styles.paddingY} ${styles.flexce} flex-col items-center justify-center relative`}>
      <div className=''/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`md:${styles.heading2} md:ml-12 px-4 text-white text-center text-2xl md:text-3xl font-bold`}>What people are saying about us</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`md:${styles.paragraph} text-center md:max-w-[450px] text-[20px] text-white md:text-xl px-5`}>
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => ( 
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials

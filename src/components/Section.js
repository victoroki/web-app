import React from 'react'
import { FaCheckSquare } from "react-icons/fa"
import solar from "./img/solar1.jpg"
import slogo from "./img/slogo.png"
import quality from "./img/quality.jpg"

function Section() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 m-12 '>
      <img className='hidden md:block md:w-full md:rounded-md' src={solar} alt='solar' />
      <div className='shadow-lg p-5 rounded-md '>
        <div className='flex flex-row items-center shadow-lg rounded-[10px] mb-2'>
          <img
            src={slogo}
            alt='discount'
            className='w-[50px] h-[32px]'
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
            <span className='text-gray-500 font-bold'>Torchbearer technologies</span>
          </p>
        </div>
        <h1 className='font-bold text-3xl capitalize text-md pb-6'>We provide your future</h1>
        <p className='pb-10 font-light'>Torchbearer technology dedicated to transforming your spaces into havens of safety and efficiency. Specializing in CCTV installation,
          solar installation, and electric wiring, we understand the evolving needs of modern living. Our team of experts is committed to delivering cutting-edge
          solutions that not only safeguard your premises but also contribute to a greener future.
        </p>
        <img className='md:hidden rounded-md pb-4'  src={solar} alt='solar' />
        <div className='flex'>
          <div className='w-1/4 mr-8 '>
            <span className=''>
              <img className='' src={quality} alt="quality"/> 
            </span>
            <p className='block uppercase'>quality</p>
          </div>
          <p className='font-light'>At Torchbearer technology we believe in empowering you with the tools and technologies
            that not only protect your present but also pave the way for a sustainable and secure future.
            Join us on this journey towards a smarter, safer, and more energy-efficient tomorrow</p>
        </div>
      </div>
    </div>
  )
}

export default Section
import React from 'react'
import { FiPhoneCall, FiMail } from 'react-icons/fi';

function Bar() {
  return (
    <div>
      <nav className="bg-orange-400 flex justify-between items-center h-24 max-w-[1060px] mx-auto" >
        <ul className="hidden md:flex">
          <li className="p-4"><p>Home</p></li>
          <li className="p-4"><p>About us</p></li>
          <li className="p-4"><p>Contact us</p></li>
        </ul>
        <p className="p-3 m-2 text-white bg-blue-950">Have any question ?</p>
        <div className="flex  md:hidden">
          <div className="flex justify-evenly items-center m-4">
            <span className="rounded-full p-2">
              <FiPhoneCall size={30} />
            </span>

            <div>
              <h1 className="font-bold text-[15px]">Contact us</h1>
              <p className="font-light text-[12px]">0743076376</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="rounded-full p-2">
              <FiMail size={30} />
            </span>
            <div>
              <h1 className="font-bold text-[15px]">Mail us</h1>
              <p className="font-light text-[12px]">torchbearer@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Bar
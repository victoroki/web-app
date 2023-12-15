import React, { useState } from 'react';
import { FiPhoneCall, FiMail, FiMenu, FiX } from 'react-icons/fi';
import logo from './img/flogo.png';

function Topbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex px-8 justify-between">
        <img className="" width={100} src={logo} alt="LOGO" />
        <div className="hidden md:flex">
          <div className="flex justify-evenly items-center m-4">
            <span className="bg-orange-400 rounded-full p-2">
              <FiPhoneCall size={35} />
            </span>

            <div>
              <h1 className="font-bold">Contact us</h1>
              <p className="font-light">0743076376</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-orange-400 rounded-full p-2">
              <FiMail size={35} />
            </span>
            <div>
              <h1 className="font-bold">Mail us</h1>
              <p className="font-light">torchbearer@gmail.com</p>
            </div>
          </div>
        </div>

        <div onClick={handleNav} className="block pt-5 md:hidden">
          {nav ? <FiMenu size={30} /> : <FiX size={30} />}
        </div>
        <div
          className={
            !nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-slate-900 border-r-gray-900 ease-in-out duration-500 z-50'
              : 'fixed left-[-100%] z-0'
          }
        >
          <p className="p-4 text-3xl font-bold">LOGO</p>
          <ul className="p-4 uppercase">
            <li className="p-4">
              <a href="#">About us</a>
            </li>
            <li className="p-4">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

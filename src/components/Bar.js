import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Bar() {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/projects", name: "Projects" },
    { path: "/pricing", name: "Pricing" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <div className="hidden md:block">
      <nav className="bg-[#2a2118] flex justify-between items-center h-20 w-full shadow-xl border-b-2 border-[#712B35]">
        <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center px-4 lg:px-6">
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `text-[#e8e1d9] font-medium hover:text-[#b89b6e] transition-all duration-300 relative group cursor-pointer px-4 py-6 block ${
                      isActive ? 'text-[#b89b6e]' : ''
                    }`
                  }
                >
                  {item.name}
                  <span className={({ isActive }) => 
                    `absolute -bottom-0 left-0 h-0.5 bg-[#b89b6e] transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Question Badge */}
          <div className="bg-[#712B35] text-[#e8e1d9] px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-[#5f2b40]">
            Have any question?
          </div>

          {/* Mobile Contact Info */}
          <div className="flex md:hidden lg:hidden">
            <div className="flex justify-evenly items-center m-2 group cursor-pointer">
              <span className="rounded-full p-2 bg-[#712B35] bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-200 group-hover:scale-110">
                <FiPhoneCall size={18} className="text-[#e8e1d9]" />
              </span>
              <div className="ml-2">
                <h1 className="font-semibold text-[13px] text-[#e8e1d9] group-hover:text-[#b89b6e] transition-colors duration-200">
                  Call us
                </h1>
              </div>
            </div>
            <div className="flex items-center group cursor-pointer">
              <span className="rounded-full p-2 bg-[#712B35] bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-200 group-hover:scale-110">
                <FiMail size={18} className="text-[#e8e1d9]" />
              </span>
              <div className="ml-2 mr-3">
                <h1 className="font-semibold text-[13px] text-[#e8e1d9] group-hover:text-[#b89b6e] transition-colors duration-200">
                  Mail us
                </h1>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#e8e1d9] hover:text-[#b89b6e] transition-colors duration-200 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Bar;
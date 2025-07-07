import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiMail, FiMenu, FiX } from 'react-icons/fi';
import logo from './img/flogo.png';

function Topbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavItemClick = () => {
    setNav(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative z-50">
      {/* Top Contact Bar */}
      <div 
        className={`transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, #223b52 0%, #712B35 100%)' 
            : 'white'
        }}
      >
        <div className="flex px-4 md:px-8 py-4 justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-200" 
              src={logo} 
              alt="Torchbearer Technologies Logo" 
            />
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex space-x-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <span 
                className="rounded-full p-3 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #712B35 0%, #489820 100%)'
                }}
              >
                <FiPhoneCall size={20} className="text-white" />
              </span>
              <div>
                <h3 
                  className={`font-bold text-sm transition-colors duration-200 ${
                    scrolled ? 'text-white group-hover:text-green-300' : 'text-gray-800 group-hover:text-green-600'
                  }`}
                >
                  Contact us
                </h3>
                <p 
                  className={`font-light text-sm ${
                    scrolled ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  0743076376
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group cursor-pointer">
              <span 
                className="rounded-full p-3 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #712B35 0%, #489820 100%)'
                }}
              >
                <FiMail size={20} className="text-white" />
              </span>
              <div>
                <h3 
                  className={`font-bold text-sm transition-colors duration-200 ${
                    scrolled ? 'text-white group-hover:text-green-300' : 'text-gray-800 group-hover:text-green-600'
                  }`}
                >
                  Mail us
                </h3>
                <p 
                  className={`font-light text-sm ${
                    scrolled ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  torchbearer@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleNav}
            className={`block lg:hidden p-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:scale-105 ${
              scrolled 
                ? 'hover:bg-white hover:bg-opacity-20 focus:ring-green-400' 
                : 'hover:bg-gray-100 focus:ring-green-400'
            }`}
            aria-label="Toggle navigation menu"
          >
            {nav ? (
              <FiX size={28} className={scrolled ? 'text-white' : 'text-gray-700'} />
            ) : (
              <FiMenu size={28} className={scrolled ? 'text-white' : 'text-gray-700'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          nav ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            nav ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={handleNav}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div 
            className="flex items-center justify-between p-6 border-b border-gray-200"
            style={{
              background: 'linear-gradient(135deg, #712B35 0%, #223b52 100%)'
            }}
          >
            <img className="h-10 w-auto" src={logo} alt="Torchbearer Technologies" />
            <button
              onClick={handleNav}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 hover:scale-105"
              aria-label="Close menu"
            >
              <FiX size={24} className="text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="py-6">
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#projects', label: 'Projects' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={handleNavItemClick}
                    className="flex items-center px-6 py-4 text-gray-700 hover:text-white transition-all duration-200 font-medium border-l-4 border-transparent group relative overflow-hidden"
                    style={{
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #712B35 0%, #489820 100%)';
                      e.target.style.borderLeftColor = '#489820';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact Info */}
          <div 
            className="border-t p-6 space-y-4"
            style={{
              borderTopColor: '#dcdcdc',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
            }}
          >
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group">
              <span 
                className="rounded-full p-2 group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: 'linear-gradient(135deg, #712B35 0%, #489820 100%)'
                }}
              >
                <FiPhoneCall size={18} className="text-white" />
              </span>
              <div>
                <h3 className="font-bold text-gray-800 text-sm group-hover:text-green-600 transition-colors duration-200">
                  Contact us
                </h3>
                <p className="font-light text-gray-600 text-sm">0743076376</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group">
              <span 
                className="rounded-full p-2 group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: 'linear-gradient(135deg, #712B35 0%, #489820 100%)'
                }}
              >
                <FiMail size={18} className="text-white" />
              </span>
              <div>
                <h3 className="font-bold text-gray-800 text-sm group-hover:text-green-600 transition-colors duration-200">
                  Mail us
                </h3>
                <p className="font-light text-gray-600 text-sm">torchbearer@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
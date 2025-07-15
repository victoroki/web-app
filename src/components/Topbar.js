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

  // Contact handlers
  const handleCallClick = () => {
    window.open('tel:0743076376', '_self');
  };

  const handleMailClick = () => {
    window.open('mailto:torchbearer@gmail.com', '_self');
  };

  // Color variables based on primary color #712B35
  const primaryColor = '#712B35';
  const primaryDark = '#5A222B';
  const primaryLight = '#8A3643';
  const secondaryColor = '#D4A59A';
  const accentColor = '#C97D60';
  const darkBg = '#1A1A2E';
  const lightText = '#F8F9FA';
  const darkText = '#212529';

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
        className={`transition-all duration-500 ${
          scrolled ? 'shadow-2xl backdrop-blur-sm' : 'shadow-lg'
        }`}
        style={{
          background: scrolled 
            ? `linear-gradient(135deg, ${darkBg}f0 0%, ${primaryDark}f0 100%)` 
            : `linear-gradient(135deg, white 0%, ${lightText} 100%)`
        }}
      >
        <div className="flex px-4 md:px-8 py-4 justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="h-12 md:h-16 w-auto hover:scale-110 transition-all duration-300 filter hover:brightness-110" 
              src={logo} 
              alt="Torchbearer Technologies Logo" 
            />
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex space-x-8">
            <div 
              className="flex items-center space-x-4 group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={handleCallClick}
            >
              <div 
                className="rounded-full p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FiPhoneCall size={15} className="text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h3 
                  className={`font-bold text-base transition-all duration-300 ${
                    scrolled ? 'text-white group-hover:text-orange-300' : 'text-gray-800 group-hover:text-red-600'
                  }`}
                >
                  Call Us
                </h3>
                <p 
                  className={`font-light text-sm mt-1 ${
                    scrolled ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  Get in touch today
                </p>
              </div>
            </div>
            
            <div 
              className="flex items-center space-x-4 group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={handleMailClick}
            >
              <div 
                className="rounded-full p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FiMail size={15} className="text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h3 
                  className={`font-bold text-base transition-all duration-300 ${
                    scrolled ? 'text-white group-hover:text-orange-300' : 'text-gray-800 group-hover:text-red-600'
                  }`}
                >
                  Mail Us
                </h3>
                <p 
                  className={`font-light text-sm mt-1 ${
                    scrolled ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  Send us a message
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleNav}
            className={`block lg:hidden p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:scale-110 transform ${
              scrolled 
                ? 'hover:bg-white hover:bg-opacity-20 focus:ring-orange-300' 
                : 'hover:bg-gray-100 focus:ring-red-300'
            }`}
            aria-label="Toggle navigation menu"
          >
            {nav ? (
              <FiX size={28} className={scrolled ? 'text-white' : 'text-gray-800'} />
            ) : (
              <FiMenu size={28} className={scrolled ? 'text-white' : 'text-gray-800'} />
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
            nav ? 'bg-opacity-60' : 'bg-opacity-0'
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
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${darkBg} 100%)`
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
                { href: '#training', label: 'Training' },
                { href: '#contact', label: 'Contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={handleNavItemClick}
                    className="flex items-center px-6 py-4 text-gray-700 hover:text-white transition-all duration-300 font-medium border-l-4 border-transparent group relative overflow-hidden"
                    style={{
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
                      e.target.style.borderLeftColor = accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
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
              borderTopColor: secondaryColor,
              background: `linear-gradient(135deg, ${lightText} 0%, ${secondaryColor}20 100%)`
            }}
          >
            <div 
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:scale-105"
              onClick={handleCallClick}
            >
              <div 
                className="rounded-full p-3 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                }}
              >
                <FiPhoneCall size={20} className="text-white" />
              </div>
              <div>
                <h3 
                  className="font-bold text-base group-hover:text-red-600 transition-colors duration-300"
                  style={{
                    color: darkText
                  }}
                >
                  Call Us
                </h3>
                <p className="font-light text-gray-600 text-sm">Get in touch today</p>
              </div>
            </div>
            
            <div 
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:scale-105"
              onClick={handleMailClick}
            >
              <div 
                className="rounded-full p-3 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                }}
              >
                <FiMail size={20} className="text-white" />
              </div>
              <div>
                <h3 
                  className="font-bold text-base group-hover:text-red-600 transition-colors duration-300"
                  style={{
                    color: darkText
                  }}
                >
                  Mail Us
                </h3>
                {/* <p className="font-light text-gray-600 text-sm">Send us a message</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
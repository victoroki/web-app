import React, { useState } from 'react';
import {
  Lightbulb,
  ChevronDown,
  X,
  Menu,
} from 'lucide-react';
import logo from '../img/torchbearer-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const servicesItems = [
    { name: 'Solar System', href: '/training/solar' },
    { name: 'Electrical', href: '/training/electrical' },
    { name: 'Occupation  Safety and Health training', href: '/training/safety-training' },
    { name: 'Professional Branding', href: '/training/branding' },
  ];

  const trainingItems = [
    { name: 'Upcoming Training', href: '/training/upcoming' },
    { name: 'Past Training', href: '/training/pasttraining' },
  ];

  const webinarItems = [
    { name: 'Upcoming Webinars', href: '/training/webinars' },
    { name: 'Past Webinar Recordings', href: '/training/pastwebinars' },
  ];

  const navItems = [
    { name: 'Home', href: '/institute' },
    { name: 'About Us', href: '/training/about' },
    {
      name: 'Services',
      href: '/training',
      dropdown: servicesItems
    },
    {
      name: 'Trainings',
      href: '/training',
      dropdown: trainingItems
    },
    {
      name: 'Webinars',
      href: '/training/webinars',
      dropdown: webinarItems
    },
    { name: 'Contact', href: '/training/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo and Company Info */}
          <div className="flex items-center min-w-0 flex-1 pr-4">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <img src={logo} alt="Torchbearer Logo" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-amber-600 leading-tight truncate">
                  Torchbearer Institute of Technologies
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight hidden sm:block">
                  Empower the mind energize the community
                </p>
                {/* Mobile subtitle - shorter version */}
                <p className="text-xs text-gray-600 leading-tight sm:hidden">
                  Empower the mind...
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-shrink-0">
            <div className="ml-10 flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-700 hover:text-amber-600 px-2 lg:px-3 py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent hover:border-amber-500 flex items-center whitespace-nowrap"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.name ? 'transform rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                          <div className="py-1">
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-amber-600 px-2 lg:px-3 py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent hover:border-amber-500 whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full text-left text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.name ? 'transform rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 space-y-2 mt-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md text-base font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
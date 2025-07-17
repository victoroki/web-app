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
    { name: 'Occupation Health and Safety training', href: '/training/safety-training' },
    { name: 'Professional Branding', href: '/training/branding' },

  ];

  const trainingItems = [
    { name: 'Upcoming Training', href: '/training/upcoming' },
    { name: 'Past Training', href: '/training/pasttraining' },
    // { name: 'EPRA Licensing', href: '/training/epra' },
    // { name: 'AutoCAD Electrical', href: '/training/electrical' },
    // { name: 'Solar PV Design', href: '/training/solar' },
    // { name: 'Career Development', href: '/training/about' }, 
  ];

  const webinarItems = [
    { name: 'Upcoming Webinars', href: '/training/webinars' },
    { name: 'Past Webinar Recordings', href: '/training/pastwebinars' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
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
    // { name: 'Upcoming Training', href: '/training/upcoming' },
    { name: 'Contact', href: '/training/contact' }
  ];


  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
                {/* <Lightbulb className="w-6 h-6 text-white" /> */}
                <img src={logo} alt={<Lightbulb className="w-6 h-6 text-white" height={40} width={30} />} />
              </div>
              <div>
                <h1 className="text-l font-bold text-amber-600">Torchbearer Institute of Technologies</h1>
                <p className="text-sm text-gray-600">Empower the mind energize the community</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent hover:border-amber-500 flex items-center"
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
                      className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent hover:border-amber-500"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
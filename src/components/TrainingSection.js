import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Calendar, Clock, DollarSign, Users, Award, BookOpen, Zap, Sun, Palette, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'EPRA Licensing', href: '#epra' },
    { name: 'Solar Design', href: '#solar' },
    { name: 'Electrical Design', href: '#electrical' },
    { name: 'Branding', href: '#branding' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Torchbearer Institute</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Training Programs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Advance your career with our comprehensive training programs in electrical licensing, solar design, and professional development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#epra" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Training Programs
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// EPRA Licensing Component
const EPRALicensing = () => {
  const licenseClasses = [
    {
      class: 'C2',
      scope: 'Electrical installation work for connection to a single-phase supply at low voltage. Restricted to two-storey residential and commercial buildings',
      fee: 'KES 250.00',
      minQualification: 'KCSE',
      technicalQualification: 'Electrician Wireman Grade II and other equivalent certificates',
      startingLicense: 'C2',
      highestAchievable: 'C1'
    },
    {
      class: 'C1',
      scope: 'Electrical installation work for connection to three-phase supply at low voltage. Limited to specific commercial and industrial applications',
      fee: 'KES 500.00',
      minQualification: 'KCSE',
      technicalQualification: 'Electrical Technician part II, III, Final Craft Certificate',
      startingLicense: 'C1',
      highestAchievable: 'B'
    },
    {
      class: 'B',
      scope: 'Electrical installation work for medium voltage connections and complex commercial installations',
      fee: 'KES 750.00',
      minQualification: 'KCSE',
      technicalQualification: 'Diploma in Electrical Engineering',
      startingLicense: 'B',
      highestAchievable: 'A2'
    },
    {
      class: 'A2',
      scope: 'Advanced electrical installation work including high voltage connections and industrial applications',
      fee: 'KES 1000.00',
      minQualification: 'KCSE',
      technicalQualification: 'Higher National Diploma, BSc in Electrical Engineering and other equivalent certificates',
      startingLicense: 'A2',
      highestAchievable: 'A1'
    },
    {
      class: 'A1',
      scope: 'All Electrical installation works - the highest level of electrical licensing',
      fee: 'KES 1000.00',
      minQualification: 'KCSE',
      technicalQualification: 'BSc in Electrical Engineering, Professional Engineering qualifications',
      startingLicense: 'A1',
      highestAchievable: 'A1'
    }
  ];

  return (
    <section id="epra" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            EPRA Electrical Worker Licensing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get certified with Energy and Petroleum Regulatory Authority (EPRA) electrical worker licenses. 
            Choose the right license class for your expertise level and career goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {licenseClasses.map((license) => (
            <div key={license.class} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-600">Class {license.class}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {license.fee}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{license.scope}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Min Academic:</strong> {license.minQualification}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Technical:</strong> {license.technicalQualification}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Starting License:</strong> {license.startingLicense}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Highest Achievable:</strong> {license.highestAchievable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Important Renewal Policy</h3>
              <p className="text-red-700">
                A1, A2, B, C1, C2 licenses renewed after the 31st of March shall be one and half times the renewal fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Solar Design Training Component
const SolarDesignTraining = () => {
  const software = [
    { name: 'Autodesk AutoCAD', icon: <BookOpen className="w-6 h-6" /> },
    { name: 'PVsyst (Photovoltaic Software)', icon: <Sun className="w-6 h-6" /> },
    { name: 'SketchUp', icon: <Zap className="w-6 h-6" /> }
  ];

  const partners = [
    'Torchbearer Institute of Technologies',
    'AH Creatives Energy Solutions'
  ];

  return (
    <section id="solar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership Solar System Design Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master solar system design with industry-standard software and expert guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Training Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span className="text-lg">4th - 22nd August</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <div>
                    <p>07:00 PM – 08:00 PM EAT</p>
                    <p>09:00 PM – 10:00 PM PKT</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-3" />
                  <span className="text-2xl font-bold">60 USD</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-600" />
                  <span>WhatsApp: +254789173033</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-600" />
                  <span>WhatsApp: +923077922086</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
                <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
                <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Software Training Included</h3>
              <div className="space-y-4">
                {software.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-blue-600 mr-4">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Partner Organizations</h3>
              <div className="space-y-3">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Users className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-lg">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Electrical Design Component
const ElectricalDesign = () => {
  return (
    <section id="electrical" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Electrical Design Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master electrical design principles and AutoCAD for professional electrical installations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <Zap className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Electrical Design Principles</h3>
                <p className="text-gray-600">Learn fundamental electrical design concepts and best practices</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <BookOpen className="w-8 h-8 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">AutoCAD for Electrical</h3>
                <p className="text-gray-600">Master AutoCAD specifically for electrical design and drafting</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <Award className="w-8 h-8 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Practical Application</h3>
                <p className="text-gray-600">Hands-on projects and real-world electrical design scenarios</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Electrical circuit design and analysis</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Load calculations and power distribution</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Electrical symbols and standards</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>AutoCAD electrical drawing techniques</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Safety standards and code compliance</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Branding Training Component
const BrandingTraining = () => {
  return (
    <section id="branding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Branding Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a powerful brand identity and marketing strategy for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8 rounded-lg">
            <Palette className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Brand Identity</h3>
            <p className="text-lg">
              Create compelling visual identities, logos, and brand guidelines that resonate with your target audience
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8 rounded-lg">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Marketing Strategy</h3>
            <p className="text-lg">
              Develop effective marketing strategies and campaigns to promote your brand across multiple channels
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-lg">
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Brand Management</h3>
            <p className="text-lg">
              Learn to maintain brand consistency and manage your brand reputation in the digital age
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Brand strategy development</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Visual identity design</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Brand positioning and messaging</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Digital marketing fundamentals</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Social media branding</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Content creation strategies</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Brand analytics and measurement</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Practical brand implementation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to advance your career? Contact us for more information about our training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-300">+254789173033</p>
                    <p className="text-gray-300">+923077922086</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">training@organization.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Training Center Address</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Linkedin className="w-8 h-8 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Facebook className="w-8 h-8 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Instagram className="w-8 h-8 text-pink-400 hover:text-pink-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="training" className="block text-sm font-medium mb-2">Training Interest</label>
                <select
                  id="training"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Select a training program</option>
                  <option>EPRA Licensing</option>
                  <option>Solar Design</option>
                  <option>Electrical Design</option>
                  <option>Branding</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your training needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Organization Training</h3>
            <p className="text-gray-400">
              Professional training programs for electrical licensing, solar design, and career development.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Training Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#epra" className="hover:text-white">EPRA Licensing</a></li>
              <li><a href="#solar" className="hover:text-white">Solar Design</a></li>
              <li><a href="#electrical" className="hover:text-white">Electrical Design</a></li>
              <li><a href="#branding" className="hover:text-white">Branding</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5" />
                <span>+254789173033</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5" />
                <span>training@organization.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>Training Center Address</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Organization Training. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <EPRALicensing />
        <SolarDesignTraining />
        <ElectricalDesign />
        <BrandingTraining />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
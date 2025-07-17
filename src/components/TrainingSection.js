import React, { useState, useEffect } from 'react';
import logo from './img/torchbearer-logo.png';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Calendar, Clock, DollarSign, Users, Award, BookOpen, Zap, Sun, Palette, ChevronRight, CheckCircle, AlertCircle, Star, ArrowRight, Shield, Target, Lightbulb, TrendingUp, ChevronDown, Youtube, Building, Monitor, HardHat, Heart, FileText, AlertTriangle } from 'lucide-react';
import Hero from './img/hero.mp4'
// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const servicesItems = [
    { name: 'Electrical Design', href: '#electrical' },//Eectrical -- EPRA, ELEctrical Design
    { name: 'Solar System Design', href: '#solar' },
    { name: 'Professional Branding', href: '#branding' }, //company registration/Business registration, Company licensing with EPRA and CAK NCA, Digital marketing(Canva, facebook, google workspace, linkedin),
    { name: 'Occupation Health and Safety training', href: '#' }, //work at height taining, fire safety training, first aid training, International local codes e.g NFPA,IEE,IEC, NEC, ISO, ILO, KS
  ];

  const trainingItems = [
    { name: 'EPRA Licensing', href: '#epra' },
    { name: 'AutoCAD Electrical', href: '#electrical' },
    { name: 'Solar PV Design', href: '#solar' },
    { name: 'Career Development', href: '#' }
  ];

  const webinarItems = [
    { name: 'Upcoming Webinars', href: '#webinars' },
    { name: 'Past Webinar Recordings', href: '#' }
  ];

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    {
      name: 'Services',
      href: '#services',
      dropdown: servicesItems
    },
    {
      name: 'Trainings',
      href: '#trainings',
      dropdown: trainingItems
    },
    {
      name: 'Webinars',
      href: '#webinars',
      dropdown: webinarItems
    },
    { name: 'Upcoming Training', href: '#upcoming' },
    { name: 'Contact', href: '#contact' }
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

// Hero Section Component
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'EMPOWER THE MINDS ENERGIZE THE COMMUNITY';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100); // speed (100ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative bg-[#e4d7c8] py-20">
      <video
        src={Hero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark overlay on top of video for better text visibility */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Torchbearer Institute of Technologies
          </h1>

          {/* Subheading with typing animation */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 drop-shadow-xl">
            <div className="relative inline-block">
              <span className="font-mono">
                {displayText}
              </span>
              {isTyping && (
                <span className="inline-block w-0.5 h-8 bg-white ml-1 animate-pulse"></span>
              )}
            </div>
          </h2>

          {/* Description */}
          <div className="text-xl md:text-2xl text-white font-medium mb-8 max-w-4xl mx-auto drop-shadow-lg">
            Electrical, Solar and Branding
          </div>

          {/* Optional paragraph */}
          {/* 
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Torchbearer Institute's expert team provides comprehensive training programs with industry-standard 
            curriculum and advanced practical capabilities to help you excel in your professional career.
          </p> 
          */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#about"
              className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </a>
            {/* <a 
              href="#contact" 
              className="border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors shadow-lg"
            >
              Get Started Today
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

//upcoming section
const UpcomingTraining = () => {
 const upcomingCourses = [
  {
    "title": "NITA EXAM COACHING",
    "date": "July 31",
    "time": "07:00 PM - 08:30 PM",
    "description": "NITA exam coaching. T2 - KSH 5000, T3 - KSH 7000.",
    "features": [
      "Exam syllabus coverage",
      "Practice tests" 
      // Based on typical NITA coaching, more specific features are not provided in the original text
    ],
    "price": "T2 - KSH 5000, T3 - KSH 7000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "ELECTRICAL TRAINING",
    "date": "August 4 - 22",
    "time": "07:30 PM - 09:00 PM",
    "description": "Electrical Training.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "60 USD",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "PERSONAL BRANDING",
    "date": "August 6 - 7",
    "time": "07:00 PM - 08:00 PM",
    "description": "Personal branding training.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "KSH 1050",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
    "date": "August 18 - 22",
    "time": "08:00 PM - 09:00 PM",
    "description": "Training on SketchUp, PVSYST, Homer & AutoCAD designs.",
    "features": [
      "SketchUp software training",
      "PVSYST software training",
      "Homer software training",
      "AutoCAD software training"
    ],
    "price": "KSH 3000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "August 31",
    "time": "07:30 PM - 09:00 PM",
    "description": "Free webinar for Solar EPRA T2 & T3 training.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "September 8 - 26",
    "time": "08:00 PM - 09:00 PM",
    "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "NITA EXAM COACHING & EPRA T2 & T3 SOLAR WEBINAR",
    "date": "October 2",
    "time": "08:00 PM - 09:00 PM",
    "description": "Free webinar combining NITA Exam Coaching and EPRA T2 & T3 Solar.",
    "features": [
      "NITA Exam Coaching",
      "EPRA T2 Solar insights",
      "EPRA T3 Solar insights"
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS WEBINAR",
    "date": "October 6 - 24",
    "time": "07:30 PM - 09:00 PM",
    "description": "Webinar on SketchUp, PVSYST, Homer & AutoCAD designs.",
    "features": [
      "SketchUp software insights",
      "PVSYST software insights",
      "Homer software insights",
      "AutoCAD software insights"
    ],
    "price": "KSH 6000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
    "date": "November 2",
    "time": "07:30 PM - 09:00 PM",
    "description": "Free training on SketchUp, PVSYST, Homer & AutoCAD designs.",
    "features": [
      "SketchUp software training",
      "PVSYST software training",
      "Homer software training",
      "AutoCAD software training"
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "NITA EXAM COACHING",
    "date": "November 10 - 14",
    "time": "07:00 PM - 08:00 PM",
    "description": "NITA exam coaching.",
    "features": [
      "Exam syllabus coverage",
      "Practice tests"
    ],
    "price": "KSH 3000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "ELECTRICAL TRAINING",
    "date": "November 17 - December 5",
    "time": "07:30 PM - 09:00 PM",
    "description": "Electrical Training. For more info call/WhatsApp +254789173033.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "N/A", // Price not specified
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "December 8 - 12",
    "time": "08:00 PM - 09:00 PM",
    "description": "Solar EPRA T2 & T3 training webinar.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "T2-KSH 5000, T3-KSH 7000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "January 8",
    "time": "07:00 PM - 08:00 PM",
    "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "January 12 - 30",
    "time": "07:30 PM - 09:00 PM",
    "description": "Solar EPRA T2 & T3 training webinar.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "T2-KSH 5000, T3-KSH 7000",
    "earlyBirdPrice": "N/A"
  }
];

  return (
    <section id="upcoming" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-amber-600">Training Programs</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Explore our upcoming professional development programs and secure your spot today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-amber-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{course.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.time}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Regular Price:</span>
                    <span className="text-xl font-bold text-amber-600">{course.price}</span>
                  </div>
                  {/* <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-medium">Early Bird:</span>
                    <span className="text-sm font-bold text-amber-600">{course.earlyBirdPrice}</span>
                  </div> */}
                </div>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Want to be notified about future training?</h3>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of practical experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Industry-standard training programs designed for real-world applications"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Focused",
      description: "Training programs aligned with industry demands and career advancement"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Success",
      description: "Track record of successful graduates advancing in their careers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-600">Torchbearer Institute</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Torchbearer Institute provides professional training and development services to individuals and organizations
              seeking to excel in electrical engineering, renewable energy, and professional development. We offer comprehensive
              solutions and expert guidance from entry-level certification to advanced professional development programs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established with a commitment to excellence, we are dedicated to exceeding expectations by providing
              cost-effective, innovative training solutions without compromising the quality of education that we deliver.
              Our expertise encompasses every aspect of professional development needs including EPRA licensing, solar system
              design, electrical engineering, and professional branding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of experienced professionals and certified instructors with industry-standard expertise
              and advanced teaching capabilities, ensuring you receive the highest quality education and practical skills
              needed for career success.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                  <p className="text-gray-600">Trained Professionals</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">2+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
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
    <section id="epra" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EPRA <span className="text-amber-600">Electrical Worker Licensing</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Get certified with Energy and Petroleum Regulatory Authority (EPRA) electrical worker licenses.
            Choose the right license class for your expertise level and career advancement goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {licenseClasses.map((license) => (
            <div key={license.class} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-amber-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-amber-600">Class {license.class}</h3>
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-lg font-bold">
                  {license.fee}
                </span>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{license.scope}</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Min Academic:</strong> {license.minQualification}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Technical:</strong> {license.technicalQualification}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Starting License:</strong> {license.startingLicense}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Highest Achievable:</strong> {license.highestAchievable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-red-400 mr-3" />
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Important Renewal Policy</h3>
              <p className="text-red-700 text-lg">
                A1, A2, B, C1, C2 licenses renewed after the 31st of March shall be one and half times the renewal fee.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// Solar Design Training Component
const SolarDesignTraining = () => {
  const software = [
    { name: 'Autodesk AutoCAD', icon: <BookOpen className="w-8 h-8" /> },
    { name: 'PVsyst (Photovoltaic Software)', icon: <Sun className="w-8 h-8" /> },
    { name: 'SketchUp', icon: <Zap className="w-8 h-8" /> }
  ];

  const partners = [
    'Torchbearer Institute of Technologies',
    'AH Creatives Energy Solutions'
  ];

  return (
    <section id="solar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partnership <span className="text-amber-600">Solar System Design Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Master solar system design with industry-standard software and expert guidance from our experienced professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Training Program Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 mr-4" />
                  <span className="text-xl font-semibold">4th - 22nd August</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <div>
                    <p className="text-lg">07:00 PM – 08:00 PM EAT</p>
                    <p className="text-lg">09:00 PM – 10:00 PM PKT</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-4" />
                  <span className="text-3xl font-bold">60 USD</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-6 text-amber-800">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-amber-600" />
                  <span className="text-lg">WhatsApp: +254789173033</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-amber-600" />
                  <span className="text-lg">WhatsApp: +923077922086</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Linkedin className="w-8 h-8 text-amber-600 hover:text-amber-800 cursor-pointer" />
                <Facebook className="w-8 h-8 text-amber-600 hover:text-amber-800 cursor-pointer" />
                <Instagram className="w-8 h-8 text-amber-600 hover:text-amber-800 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Software Training Included</h3>
              <div className="space-y-4">
                {software.map((item, index) => (
                  <div key={index} className="flex items-center p-6 bg-amber-50 rounded-lg border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                    <div className="text-amber-600 mr-6">
                      {item.icon}
                    </div>
                    <span className="text-xl font-semibold text-gray-900">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Partner Organizations</h3>
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <Users className="w-6 h-6 text-green-600 mr-4" />
                    <span className="text-xl font-medium text-gray-900">{partner}</span>
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
    <section id="electrical" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Electrical <span className="text-amber-600">Design Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Master electrical design principles and AutoCAD for professional electrical installations and engineering projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center p-6 bg-amber-100 rounded-lg border-l-4 border-amber-500">
              <Zap className="w-12 h-12 text-amber-600 mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Electrical Design Principles</h3>
                <p className="text-gray-700 text-lg">Learn fundamental electrical design concepts and industry best practices</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-green-100 rounded-lg border-l-4 border-green-500">
              <BookOpen className="w-12 h-12 text-green-600 mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">AutoCAD for Electrical</h3>
                <p className="text-gray-700 text-lg">Master AutoCAD specifically for electrical design and technical drafting</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-purple-100 rounded-lg border-l-4 border-purple-500">
              <Award className="w-12 h-12 text-purple-600 mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Practical Application</h3>
                <p className="text-gray-700 text-lg">Hands-on projects and real-world electrical design scenarios</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Course Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Electrical circuit design and analysis</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Load calculations and power distribution</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Electrical symbols and industry standards</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">AutoCAD electrical drawing techniques</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Safety standards and code compliance</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthSafetyTraining = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Occupational <span className="text-amber-600">Health & Safety Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Comprehensive workplace safety training programs designed to protect workers and ensure compliance with international standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-lg shadow-lg">
            <HardHat className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Work at Height Training</h3>
            <p className="text-lg">
              Essential safety protocols and equipment usage for working at elevated positions and confined spaces
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-white p-8 rounded-lg shadow-lg">
            <AlertTriangle className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Fire Safety Training</h3>
            <p className="text-lg">
              Fire prevention, emergency response procedures, and proper use of firefighting equipment and evacuation protocols
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 rounded-lg shadow-lg">
            <Heart className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">First Aid Training</h3>
            <p className="text-lg">
              Life-saving first aid techniques, CPR certification, and emergency medical response for workplace incidents
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-amber-600">International Standards</span> & Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">NFPA Standards</h4>
              <p className="text-gray-600">National Fire Protection Association codes and standards</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">IEEE Standards</h4>
              <p className="text-gray-600">Institute of Electrical and Electronics Engineers protocols</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">IEC Standards</h4>
              <p className="text-gray-600">International Electrotechnical Commission guidelines</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">NEC Codes</h4>
              <p className="text-gray-600">National Electrical Code compliance training</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">ISO Standards</h4>
              <p className="text-gray-600">International Organization for Standardization protocols</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">ILO & KS Standards</h4>
              <p className="text-gray-600">International Labour Organization and Kenyan Standards</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-50 p-8 rounded-lg">
            <Shield className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Safety Training?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Instructors</h4>
                  <p className="text-gray-600">Certified safety professionals with industry experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Certification</h4>
                  <p className="text-gray-600">Internationally recognized certificates upon completion</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Compliance</h4>
                  <p className="text-gray-600">Meet all regulatory requirements and safety standards</p>
                </div>
              </div>
            </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-amber-600">Branding Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Build a powerful brand identity and comprehensive marketing strategy for your business success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-lg shadow-lg">
            <Palette className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Brand Identity</h3>
            <p className="text-lg">
              Create compelling visual identities, logos, and brand guidelines that resonate with your target audience
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-white p-8 rounded-lg shadow-lg">
            <Users className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Marketing Strategy</h3>
            <p className="text-lg">
              Develop effective marketing strategies and campaigns to promote your brand across multiple channels
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 rounded-lg shadow-lg">
            <Shield className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Brand Management</h3>
            <p className="text-lg">
              Learn to maintain brand consistency and manage your brand reputation in the digital age
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-lg shadow-lg">
            <Building className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Company Registration</h3>
            <p className="text-lg">
              Complete business registration services to establish your company legally and get started with confidence
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-white p-8 rounded-lg shadow-lg">
            <FileText className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Business Licensing</h3>
            <p className="text-lg">
              Professional licensing assistance with EPRA, CAK, and NCA to ensure your business meets all regulatory requirements
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 rounded-lg shadow-lg">
            <Monitor className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-lg">
              Master essential digital tools including Canva, Facebook, Google Workspace, and LinkedIn for effective online marketing
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-amber-800">Core Modules</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Brand positioning and differentiation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Visual identity design principles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Brand messaging and storytelling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Digital branding and social media presence</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-amber-800">Practical Skills</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Creating brand style guides</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Developing marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Measuring brand performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Managing brand reputation</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#contact" className="inline-block bg-amber-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg">
              Start Your Branding Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Webinars Section Component
const WebinarsSection = () => {
  return (
    <section id="webinars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-amber-600">Webinars</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Join our expert-led webinars to gain valuable insights and stay updated with industry trends
          </p>
        </div>

        <UpcomingWebinars />
        <PastWebinars />
      </div>
    </section>
  );
};

// Upcoming Webinars Component
const UpcomingWebinars = () => {
  const upcomingWebinars = [
    {
      "title": "NITA EXAM COACHING",
      "date": "July 31",
      "time": "07:00 PM - 08:30 PM",
      "speaker": "N/A",
      "description": "NITA exam coaching. T2 - KSH 5000, T3 - KSH 7000.",
      "registrationLink": "N/A"
    },
    {
      "title": "ELECTRICAL TRAINING",
      "date": "August 4 - 22",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Electrical Training. Cost: 60 USD.",
      "registrationLink": "N/A"
    },
    {
      "title": "PERSONAL BRANDING",
      "date": "August 6 - 7",
      "time": "07:00 PM - 08:00 PM",
      "speaker": "N/A",
      "description": "Personal branding training. Cost: KSH 1050.",
      "registrationLink": "N/A"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
      "date": "August 18 - 22",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Training on SketchUp, PVSYST, Homer & AutoCAD designs. Cost: KSH 3000.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "August 31",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free webinar for Solar EPRA T2 & T3 training.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "September 8 - 26",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
      "registrationLink": "tel:+254789173033"
    },
    {
      "title": "NITA EXAM COACHING & EPRA T2 & T3 SOLAR WEBINAR",
      "date": "October 2",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free webinar combining NITA Exam Coaching and EPRA T2 & T3 Solar.",
      "registrationLink": "N/A"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS WEBINAR",
      "date": "October 6 - 24",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Webinar on SketchUp, PVSYST, Homer & AutoCAD designs. Cost: KSH 6000.",
      "registrationLink": "N/A"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
      "date": "November 2",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free training on SketchUp, PVSYST, Homer & AutoCAD designs.",
      "registrationLink": "N/A"
    },
    {
      "title": "NITA EXAM COACHING",
      "date": "November 10 - 14",
      "time": "07:00 PM - 08:00 PM",
      "speaker": "N/A",
      "description": "NITA exam coaching. Cost: KSH 3000.",
      "registrationLink": "N/A"
    },
    {
      "title": "ELECTRICAL TRAINING",
      "date": "November 17 - December 5",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Electrical Training. For more info call/WhatsApp +254789173033.",
      "registrationLink": "tel:+254789173033"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "December 8 - 12",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Solar EPRA T2 & T3 training webinar. T2: KSH 5000, T3: KSH 7000.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "January 8",
      "time": "07:00 PM - 08:00 PM",
      "speaker": "N/A",
      "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
      "registrationLink": "tel:+254789173033"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "January 12 - 30",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Solar EPRA T2 & T3 training webinar. T2: KSH 5000, T3: KSH 7000.",
      "registrationLink": "N/A"
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingWebinars.map((webinar, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h4>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </span>
              </div>
              <p className="text-gray-700 mb-4"><strong>Speaker:</strong> {webinar.speaker}</p>
              <p className="text-gray-700 mb-6">{webinar.description}</p>
              <a
                href={webinar.registrationLink}
                className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Past Webinars Component
const PastWebinars = () => {
const pastWebinars = [
  {
    "title": "SOLAR AND ELECTRICAL EPRA LICENSING INSIGHTS WEBINAR",
    "date": "January 15",
    "time": "N/A",
    "speaker": "N/A",
    "description": "Free webinar for insights into solar and electrical EPRA licensing. For more info call/WhatsApp +254789173033.",
    "registrationLink": "tel:+254789173033"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING",
    "date": "January 27",
    "time": "07:40 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Solar EPRA T2 & T3 training session.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING",
    "date": "February 21",
    "time": "N/A",
    "speaker": "N/A",
    "description": "Four weeks training for Solar EPRA T2 & T3. T2: KSH 5000, T3: KSH 7000.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR SYSTEMS DESIGN AND SIZING (PVSYST & SKETCHUP, SMA SUNNY DESIGN TOOL)",
    "date": "March 5",
    "time": "07:30 PM - 09:30 PM",
    "speaker": "N/A",
    "description": "Training on solar systems design and sizing using PVSYST, SketchUp, and SMA Sunny Design Tool. Cost: 12 USD / KSH 1500.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING",
    "date": "March 10 - 28",
    "time": "07:40 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Solar EPRA T2 & T3 training. T2: KSH 5000, T3: KSH 7000. For more info call/WhatsApp +254789173033.",
    "registrationLink": "tel:+254789173033"
  },
  {
    "title": "SOLAR SYSTEM DESIGN BASICS (PVSYST & SKETCHUP)",
    "date": "April 17",
    "time": "04:00 PM - 05:00 PM",
    "speaker": "N/A",
    "description": "Basics of solar system design using PVSYST & SketchUp. Cost: KSH 3000.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR SYSTEM TESTING & COMMISSIONING",
    "date": "June 5",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Free webinar on solar system testing and commissioning.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR SYSTEM DESIGN & SIZING (PVSYST & SKETCHUP, SMA SUNNY DESIGN TOOL)",
    "date": "June 9 - 13",
    "time": "07:30 PM - 09:30 PM",
    "speaker": "N/A",
    "description": "Solar system design and sizing training using PVSYST, SketchUp, and SMA Sunny Design Tool. Cost: 12.99 USD.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "June 22",
    "time": "07:40 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
    "registrationLink": "tel:+254789173033"
  },
  {
    "title": "SOLAR SYSTEM DESIGN BASICS (PVSYST & SKETCHUP)",
    "date": "July 2",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Solar system design basics using PVSYST & SketchUp. Cost: KSH 1050.",
    "registrationLink": "N/A"
  },
  {
    "title": "NITA EXAM COACHING",
    "date": "July 7 - 25",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "NITA exam coaching. T2 - KSH 5000, T3 - KSH 7000.",
    "registrationLink": "N/A"
  }
];

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Webinar Recordings</h3>
      <div className="space-y-6">
        {pastWebinars.map((webinar, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{webinar.date}</span>
                </div>
                <p className="text-gray-700"><strong>Speaker:</strong> {webinar.speaker}</p>
                <p className="text-gray-700 mt-2">{webinar.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={webinar.recordingLink}
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-center"
                >
                  Watch Recording
                </a>
                <a
                  href={webinar.slidesLink}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Download Slides
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Torchbearer Institute's EPRA licensing training helped me advance from Class C2 to B within a year. Their practical approach made all the difference.",
      author: "James Mwangi",
      role: "Electrical Contractor"
    },
    {
      quote: "The solar design course was comprehensive and hands-on. I was able to start my own solar installation business immediately after completion.",
      author: "Sarah Omondi",
      role: "Solar Energy Entrepreneur"
    },
    {
      quote: "The professional branding training transformed how I present my electrical business. My client base has doubled in just three months!",
      author: "David Kamau",
      role: "Electrical Engineer"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-amber-600">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Hear from our graduates who have transformed their careers through our training programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-amber-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Contact us for more information about our training programs or to discuss your professional development needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-6">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700">+254 789 173033</p>
                <p className="text-gray-700">+254 722 123456</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-6">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">info@torchbearer.ac.ke</p>
                <p className="text-gray-700">admissions@torchbearer.ac.ke</p>
              </div>
            </div>

            {/* <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-6">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Torchbearer Plaza, 5th Floor</p>
                <p className="text-gray-700">Ngong Road, Nairobi, Kenya</p>
              </div>
            </div> */}

            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <Facebook className="w-6 h-6 text-amber-600" />
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-amber-600" />
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <Instagram className="w-6 h-6 text-amber-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">Area of Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="epra">EPRA Licensing</option>
                  <option value="solar">Solar Design</option>
                  <option value="electrical">Electrical Design</option>
                  <option value="branding">Professional Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
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
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'EPRA Licensing', href: '#epra' },
    { name: 'Solar Design', href: '#solar' },
    { name: 'Electrical Design', href: '#electrical' },
    { name: 'Branding', href: '#branding' },
    { name: 'Contact', href: '#contact' }
  ];

  const trainingPrograms = [
    { name: 'EPRA License Classes', href: '#epra' },
    { name: 'Solar PV System Design', href: '#solar' },
    { name: 'AutoCAD Electrical', href: '#electrical' },
    { name: 'Professional Branding', href: '#branding' },
    { name: 'Career Development', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-3">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Torchbearer Institute</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Professional training and development for electrical engineering, renewable energy, and career advancement.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572958352380" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/torchbearer-institute-of-technologies" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@torchbearersinstitute?_t=ZM-8y0qzId3szF&_r=1" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@TORCHBEARERINSITTUTE" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@TORCHBEARERINSITTUTE" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Training Programs</h3>
            <ul className="space-y-3">
              {trainingPrograms.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-500" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                <span className="text-gray-400">Torchbearer Plaza, 5th Floor<br />Ngong Road, Nairobi, Kenya</span>
              </li> */}
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-400">+254 789 173033</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-400">info@torchbearer.ac.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Torchbearer Institute. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EPRALicensing />
        <SolarDesignTraining />
        <ElectricalDesign />
        <HealthSafetyTraining />
        <WebinarsSection />
        <BrandingTraining />
        <UpcomingTraining />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
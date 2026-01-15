import React, { useState, useEffect } from 'react';
import ceo from '../img/ceo.png';
import moha from '../img/moha.png';

import emmanuel from '../img/emmanuel-marindi.png';
import Aziz from '../img/Aziz.png';
import Victor from '../img/imgi_2_profile.png'
import { FaChalkboardTeacher, FaLinkedin, FaBookOpen, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa';

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: "Ondora Mogere Dalton",
      role: "Technical Solar Engineer",
      bio: "Specialized in solar, OSHA and Branding",
      image: ceo,
      link: "https://www.linkedin.com/in/ondora-mogere-dalton?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      courses: ["Solar Design", "EPRA Licensing", "OSHA"],
      // experience: "8+ Years"
    },
    {
      id: 2,
      name: "Aziz ul Hassan",
      role: "Solar Design Engineer | Solar Project Lead",
      bio: "skilled in AutoCAD, PVsyst, PVCase, Helioscope, SketchUp, PVSol, and ETAP",
      image: Aziz,
      link: 'https://www.linkedin.com/in/mazizhassan',
      courses: ["Solar Design", "electrical"],
      // experience: "6+ Years"
    },
    {
      id: 3,
      name: "Mazin-Ahmed Ibrahim Ahmed",
      role: "Solar Design Engineer ",
      bio: "skilled in PVsyst, SketchUp and Excel sheet",
      image: moha,
      link: "https://www.linkedin.com/in/mazin-ahmed-ibrahim-ahmed-162898315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      courses: ["Solar Design", "electrical"],
      // experience: "5+ Years"
    },

    {
      id: 5,
      name: "Emmanuel Marindi",
      role: "Energy consultant|Electronic Expert | Renewable Energy",
      bio: "Energy consultant and electronics expert specializing in renewable energy solutions",
      image: emmanuel,
      link: "https://www.linkedin.com/in/emmanuel-marindi-91a484266?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP8y2iigsR8qUcSjgZABxPw%3D%3D",
      courses: ["Energy Consulting", "Electronics", "Renewable Energy", "Solar Training"],
      // experience: "4+ Years"
    },
    {
      id: 6,
      name: "Victor Mongare",
      role: "Website Developer | Fullstack developer | Mobile App Developer",
      bio: "Specialized in web development and software engineering",
      image: Victor,
      link: "https://victor-mongare.netlify.app",
      courses: ["Backend development", "Frontend development", "Fullstack development", "Cloud Computing", "AI & ML"],
      // experience: "4+ Years"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAutoplay, setIsAutoplay] = useState(false);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= trainers.length ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay, itemsPerPage, trainers.length]);

  const nextSlide = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= trainers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? trainers.length - itemsPerPage : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  const visibleTrainers = trainers.slice(currentIndex, currentIndex + itemsPerPage);
  const totalSlides = Math.ceil(trainers.length / itemsPerPage);

  return (
    <div className="bg-gradient-to-br from-[#eadcc8] to-[#f5f0e8] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#994a0c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#3a2a16] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#994a0c] rounded-full mb-6 shadow-lg">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3a2a16] mb-4 leading-tight">
            Meet Our <span className="text-[#994a0c] relative">
              Expert Team
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#994a0c] to-[#cc6610] rounded-full"></div>
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#5c4a36] max-w-3xl mx-auto leading-relaxed">
            Discover the passionate professionals driving Torchbearer's mission—uniting expertise, creativity, and real-world experience to inspire every learner on their journey to success.
          </p>
        </div>

        {/* Trainers Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#994a0c] hover:text-white transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center border border-[#994a0c]/10"
            aria-label="Previous trainers"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#994a0c] hover:text-white transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center border border-[#994a0c]/10"
            aria-label="Next trainers"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Trainers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {visibleTrainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Trainer Image */}
                <div className="relative h-56 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


                  {/* LinkedIn Icon Overlay */}
                  <a
                    href={trainer.link}
                    className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0077b5] hover:text-white transform scale-0 group-hover:scale-100"
                    aria-label={`Connect with ${trainer.name} on LinkedIn`}
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  {/* Role Badge */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center bg-[#994a0c]/10 px-3 py-1 rounded-full">
                      <FaChalkboardTeacher className="text-[#994a0c] mr-2 text-sm" />
                      <span className="text-xs font-semibold text-[#994a0c] leading-none">{trainer.role}</span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg md:text-xl font-bold text-[#3a2a16] mb-3 leading-tight group-hover:text-[#994a0c] transition-colors duration-300">
                    {trainer.name}
                  </h3>

                  {/* Bio */}
                  <p className="text-[#5c4a36] mb-4 text-sm leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Courses */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-[#994a0c] mb-2 uppercase tracking-wider">Key Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.courses.map((course, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gradient-to-r from-[#eadcc8] to-[#f5f0e8] text-[#5c4a36] px-3 py-1.5 rounded-full border border-[#994a0c]/20 hover:bg-[#994a0c] hover:text-white transition-all duration-300 cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-[#eadcc8]/50">
                    <a href={trainer.link} className="group/link">
                      <button className="text-sm text-[#994a0c] hover:text-[#cc6610] font-medium flex items-center transition-all duration-300 group-hover/link:translate-x-1">
                        <FaBookOpen className="mr-2 text-xs" />
                        View Profile
                        <span className="ml-1 transform transition-transform group-hover/link:translate-x-1">→</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerPage) === index
                  ? 'bg-[#994a0c] scale-125 shadow-lg'
                  : 'bg-[#994a0c]/30 hover:bg-[#994a0c]/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TrainersSection;
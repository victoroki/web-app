import React from 'react';
import ceo from '../img/ceo.png'
import moha from '../img/moha.png'
import emmanuel from '../img/emmanuel.png'
import Aziz from '../img/Aziz.png'
import { FaChalkboardTeacher, FaLinkedin, FaBookOpen } from 'react-icons/fa';

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: "Ondora Mogere Dalton",
      role: "Technical Solar Engineer",
      bio: "Specialized in solar sizing designing and training",
      image: ceo,
      link:"https://www.linkedin.com/in/ondora-mogere-dalton?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      courses: ["Solar Design", "EPRA Licensing", "OSHA"]
    },
    {
      id: 2,
      name: "Aziz ul Hassan",
      role: "Solar Design Engineer | Solar Project Lead",
      bio: "skilled in AutoCAD, PVsyst, PVCase, Helioscope, SketchUp, PVSol, and ETAP",
      image:Aziz,
      link:'https://www.linkedin.com/in/mazizhassan',
      courses: ["Solar Design", "electrical"]
    },
    {
      id: 3,
      name: "mazin-ahmed Ibrahim ahmed",
      role: "Solar Design Engineer ",
      bio: "skilled in PVsyst, SketchUp and Excel sheet",
      image: moha,
      link:"https://www.linkedin.com/in/mazin-ahmed-ibrahim-ahmed-162898315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      courses: ["Solar Design", "electrical"]
    },
        {
      id: 4,
      name: "Emmanuel Marindi",
      role: "Energy consultant | Renewable Energy ",
      bio: "skilled in PVsyst, SketchUp and Excel sheet",
      image: emmanuel,
      link:"https://www.linkedin.com/in/emmanuel-marindi-91a484266?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP8y2iigsR8qUcSjgZABxPw%3D%3D",
      courses: ["Solar Technologies", "EPRA solar Training"]
    }
  ];

  return (
    <div className="bg-[#eadcc8] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3a2a16] mb-4">
            Meet Our <span className="text-[#994a0c]">Master Trainers</span>
          </h2>
          <p className="text-lg text-[#5c4a36] max-w-2xl mx-auto">
            Torchbearer's faculty combines academic excellence with real-world classroom experience
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div 
              key={trainer.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Trainer Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Trainer Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <FaChalkboardTeacher className="text-[#994a0c] mr-2" />
                  <span className="text-sm font-semibold text-[#994a0c]">{trainer.role}</span>
                </div>
                <h3 className="text-xl font-bold text-[#3a2a16] mb-2">{trainer.name}</h3>
                <p className="text-[#5c4a36] mb-4">{trainer.bio}</p>
                
                {/* Courses */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#994a0c] mb-1">KEY COURSES</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.courses.map((course, i) => (
                      <span key={i} className="text-xs bg-[#eadcc8] text-[#5c4a36] px-2 py-1 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-[#eadcc8]">
                  <a href={trainer.link}>
                  <button className="text-sm text-[#994a0c] hover:underline flex items-center">
                    <FaBookOpen className="mr-1" /> View Profile
                  </button>
                  </a>
                  <a 
                    href={trainer.link} 
                    className="text-[#5c4a36] hover:text-[#994a0c] transition"
                    aria-label={`Connect with ${trainer.name} on LinkedIn`}
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button className="bg-[#994a0c] hover:bg-[#7a3a0a] text-white px-8 py-3 rounded-lg font-medium transition">
            View Full Faculty Directory
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TrainersSection;
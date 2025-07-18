import React from 'react';
import { FaChalkboardTeacher, FaLinkedin, FaBookOpen } from 'react-icons/fa';

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: "Dr. Amina Diallo",
      role: "Cognitive Neuroscience",
      bio: "Specializes in brain-based learning strategies with 10+ years in teacher training",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      courses: ["Neuroeducation", "Memory Systems"]
    },
    {
      id: 2,
      name: "Prof. James Chen",
      role: "Educational Technology",
      bio: "Pioneer in digital learning ecosystems and hybrid classroom models",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      courses: ["EdTech Integration", "Gamification"]
    },
    {
      id: 3,
      name: "Dr. Fatima Nkosi",
      role: "Inclusive Education",
      bio: "Expert in universal design for learning and accessibility frameworks",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      courses: ["UDL Certification", "Trauma-Informed Teaching"]
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
                  <button className="text-sm text-[#994a0c] hover:underline flex items-center">
                    <FaBookOpen className="mr-1" /> View Profile
                  </button>
                  <a 
                    href="#" 
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
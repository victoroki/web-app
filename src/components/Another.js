import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import cctv from "./img/cctv.jpg"
import solar from "./img/SOLar.jpg"
import electrical from "./img/electrical.jpg"
import { X } from 'lucide-react'

// Service categories with their sub-services
const serviceCategories = [
  {
    id: 1,
    title: "Solar Technologies",
    image: solar,
    description: "Go green and harness the power of the sun with our comprehensive solar solutions. From residential panels to commercial installations, we provide cutting-edge technology for sustainable energy.",
    subServices: [
      {
        id: 11,
        name: "Solar panels (PV kits)",
        description: "Complete photovoltaic kits for residential and commercial use",
        redirect: "/pricing#solar"
      },
      {
        id: 12,
        name: "Solar street lights",
        description: "Energy-efficient lighting solutions for streets and pathways",
        redirect: "/pricing#solar"
      },
      {
        id: 13,
        name: "Solar water heating",
        description: "Eco-friendly water heating systems powered by solar energy",
        redirect: "/pricing#heating"
      },
      {
        id: 14,
        name: "Solar water pumping",
        description: "Reliable water pumping solutions for remote areas and irrigation",
        redirect: "/pricing#pumps"
      }
    ]
  },
  {
    id: 2,
    title: "CCTV Cameras",
    image: cctv,
    description: "Enhance the security of your property with our comprehensive CCTV solutions. From hidden surveillance to advanced IP cameras, we provide cutting-edge security systems.",
    subServices: [
      {
        id: 21,
        name: "Spy/hidden cameras",
        description: "Discreet surveillance solutions for covert monitoring",
        redirect: "/pricing#cctv"
      },
      {
        id: 22,
        name: "Solar PTZ stand-alone cameras",
        description: "Self-powered pan-tilt-zoom cameras for remote locations",
        redirect: "/pricing#cctv"
      },
      {
        id: 23,
        name: "IP cameras",
        description: "Network-based cameras for digital surveillance systems",
        redirect: "/pricing#cctv"
      },
      {
        id: 24,
        name: "PTZ stand-alone cameras",
        description: "Professional pan-tilt-zoom cameras for comprehensive coverage",
        redirect: "/pricing#cctv"
      }
    ]
  },
  {
    id: 3,
    title: "Electrical",
    image: electrical,
    description: "Complete electrical solutions for residential and commercial properties. From basic wiring to complex installations, we ensure safety and efficiency.",
    subServices: [
      {
        id: 31,
        name: "Piping & wiring",
        description: "Professional electrical piping and wiring installations",
        redirect: "/#"
      },
      {
        id: 32,
        name: "Panel upgrades",
        description: "Electrical panel upgrades for improved safety and capacity",
        redirect: "/#"
      },
      {
        id: 33,
        name: "Instant shower installation",
        description: "Quick and efficient electric shower installations",
        redirect: "/#"
      },
      {
        id: 34,
        name: "Repairs and maintenance",
        description: "Comprehensive electrical repair and maintenance services",
        redirect: "/#"
      }
    ]
  },
  {
    id: 4,
    title: "HVAC",
    image: solar,
    description: "Complete heating, ventilation, and air conditioning solutions. We provide comfort and climate control for all types of properties.",
    subServices: [
      {
        id: 41,
        name: "Air conditioning installation and servicing",
        description: "Professional AC installation and maintenance services",
        redirect: "/pricing#hvac"
      },
      {
        id: 42,
        name: "Heating systems",
        description: "Efficient heating solutions for residential and commercial spaces",
        redirect: "/pricing#hvac"
      },
      {
        id: 43,
        name: "Ventilation solutions",
        description: "Proper ventilation systems for improved air quality",
        redirect: "/pricing#hvac"
      }
    ]
  }
]

// Modal component for service details
const ServiceModal = ({ isOpen, onClose, service }) => {
    const navigate = useNavigate();
  if (!isOpen || !service) return null

  const handleSubServiceClick = (subService) => {
    // console.log(`Redirecting to: ${subService.redirect}`)
    // For actual implementation, you might use:
    // window.location.href = subService.redirect
    navigate(subService.redirect)
    // alert(`Redirecting to: ${subService.name}`)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#712B35]">{service.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          
          <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
          
          <h3 id="services" className="text-xl font-semibold text-[#712B35] mb-4">Our Services Include:</h3>
          
          <div className="space-y-3">
            {service.subServices.map((subService) => (
              <div
                key={subService.id}
                onClick={() => handleSubServiceClick(subService)}
                className="p-4 border border-gray-200 rounded-lg hover:bg-[#712B35] hover:text-white cursor-pointer transition-all duration-300 group"
              >
                <h4 className="font-semibold text-lg mb-2 group-hover:text-white">
                  {subService.name}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-200">
                  {subService.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Special section for Solar Water Pumps */}
          {service.id === 1 && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-semibold text-[#712B35] mb-4">Solar Water Pumps</h4>
              <div className="space-y-4 text-gray-700">
                <p>
                  Solar water pumps use electricity generated by photovoltaic (PV) panels to deliver water for drinking, livestock, or irrigation. The system includes solar panels, a pump, and a controller that regulates power and protects against voltage fluctuations, reducing maintenance costs.
                </p>
                <p>
                  Ideal for remote areas, solar pumps are reliable and low-maintenance. They operate using different mechanisms such as centrifugal, rotary, diaphragm, or piston pumps. Centrifugal pumps are best for high water volume with low pressure, while helical rotor pumps suit higher pressure but lower volume needs.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Service Card Component
const ServiceCard = ({ service, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-[#712B35] hover:text-white rounded-lg shadow-2xl p-3 group border-2 border-transparent hover:border-[#8d3640] cursor-pointer"
  >
    <div className="m-2 text-justify text-sm">
      <div className="rounded-t overflow-hidden">
        <img 
          alt={`${service.title} service`} 
          className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full h-48 object-cover" 
          src={service.image}
          loading="lazy"
        />
      </div>
      <h3 className="font-semibold my-4 text-2xl text-center text-[#712B35] group-hover:text-white">
        {service.title}
      </h3>
      <p className="text-md font-medium mb-4">
        {service.description}
      </p>
      <div className="text-center">
        <span className="text-sm text-[#712B35] group-hover:text-white font-semibold">
          Click to explore services →
        </span>
      </div>
    </div>
  </div>
)

function Another() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <div>
      <section id="services" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div data-aos="zoom-in-down">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-[#712B35] uppercase font-bold">
              Services
            </h2>
            
            <div className='flex justify-center'>
              <div className='w-24 border-b-4 border-[#712B35]' aria-hidden="true"></div>
            </div>
            
            <h3 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#5a2129]">
              We are deeply committed to the growth and success of our clients.
            </h3>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {serviceCategories.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </div>
  )
}

export default Another
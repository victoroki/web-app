import React from 'react';
import { Droplets, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import watercommunity from './img/tank.png';
import gridsolar from './img/gridsolar.png';
import cctvs from './img/cctvstate.png';
import assestment from './img/assesment.png'
import installation from './img/support.png'
import support from './img/support2.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Community Water Project",
      description: "Solar-powered water systems for rural communities, improving access and sustainability in Agriculture Health and Education",
      icon: <Droplets className="w-8 h-8" />,
      category: "Solar Water Systems",
      impact: "Provided clean water access to 150+ households",
      features: [
        "Solar-powered water pumps",
        "Storage tank systems",
        "Remote monitoring",
        "Maintenance training"
      ],
      image: watercommunity,
      results: {
        households: "150+",
        waterSupplied: "10,000L daily",
        energySaved: "80%"
      }
    },
    {
      id: 2,
      title: "Grid-tie Solar Systems",
      description: "Large-scale solar installations for businesses and institutions, reducing grid dependence",
      icon: <Zap className="w-8 h-8" />,
      category: "Commercial Solar",
      impact: "Reduced electricity costs by 70% for participating businesses",
      features: [
        "High-capacity solar panels",
        "Grid-tie inverters",
        "Energy monitoring systems",
        "Net metering setup"
      ],
      image: gridsolar,
      results: {
        businesses: "30+",
        energyGenerated: "950kW",
        costReduction: "70%"
      }
    },
    {
      id: 3,
      title: "CCTV for Estates",
      description: "Secure residential compounds with modern surveillance and remote monitoring",
      icon: <Shield className="w-8 h-8" />,
      category: "Security Systems",
      impact: "Enhanced security for residential estates with 24/7 monitoring",
      features: [
        "HD IP cameras",
        "Remote monitoring",
        "Motion detection",
        "Mobile app access"
      ],
      image: cctvs,
      results: {
        estates: "15+",
        cameras: "1000+",
        incidents: "90% reduction"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl leading-relaxed">
              Transforming communities through innovative technology solutions
            </p>
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Discover how we're making a difference in communities and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full p-2 h-full object-cover opacity-80"
                  />
                  <div className="relative text-white text-center">
                    {/* <h3 className="text-lg font-semibold">{project.title}</h3> */}
                    {/* <div className="mt-2 text-sm font-medium">{project.category}</div> */}
                  </div>
                </div>


                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center text-green-600 mb-2">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Impact Achieved</span>
                    </div>
                    <p className="text-sm text-gray-700">{project.impact}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-red-800 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-red-800">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">40+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">500+</div>
              <div className="text-gray-600">Families Served</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">1MW+</div>
              <div className="text-gray-600">Solar Energy Installed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">75%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-900 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">How we deliver successful projects with precision and care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200">
              <div className="relative h-72 overflow-hidden">
                <img src={assestment} alt="Assessment" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  1
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600 leading-relaxed">We evaluate your needs and site conditions to design the perfect solution</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200">
              <div className="relative h-72 overflow-hidden">
                <img src={installation} alt="Installation" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  2
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Installation</h3>
                <p className="text-gray-600 leading-relaxed">Our skilled technicians install your system with precision and care</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200">
              <div className="relative h-72 overflow-hidden">
                <img src={support} alt="Support" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  3
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Support</h3>
                <p className="text-gray-600 leading-relaxed">We provide ongoing maintenance and 24/7 support for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Join the growing list of satisfied customers who trust Torchbearer Technologies</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0743076376" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Call Now: 0743076376
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="mailto:torchbearertechnologies@gmail.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
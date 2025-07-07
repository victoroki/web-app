import React from 'react';
import { Droplets, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Community Water Project",
      description: "Solar-powered water systems for rural communities, improving access and sustainability",
      icon: <Droplets className="w-8 h-8" />,
      category: "Solar Water Systems",
      impact: "Provided clean water access to 500+ households",
      features: [
        "Solar-powered water pumps",
        "Storage tank systems",
        "Remote monitoring",
        "Maintenance training"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      results: {
        households: "500+",
        waterSaved: "10,000L daily",
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
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      results: {
        businesses: "25+",
        energyGenerated: "500kW",
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
      image: "https://images.unsplash.com/photo-1558618666-fbd9c999e950?w=600&h=400&fit=crop",
      results: {
        estates: "15+",
        cameras: "200+",
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
                <div className="relative h-48 bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    {project.icon}
                    <div className="mt-2 text-sm font-medium">{project.category}</div>
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we deliver successful projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your needs and site conditions to design the perfect solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Installation</h3>
              <p className="text-gray-600">Our skilled technicians install your system with precision and care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing maintenance and 24/7 support for your peace of mind</p>
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
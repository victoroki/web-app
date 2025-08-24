import React, { useState } from 'react';
import {
  BookOpen,
  Sun,
  Zap,
  Users,
  Award,
  Target,
  X,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Download
} from 'lucide-react';
import autocard from '../img/autocard.png'
import pyvsist from '../img/pyvsist.png'
import sketchup from '../img/sketchup.png'
import homer from '../img/homer.png'
import helioscope from '../img/helioscope.png'
import EpraComponent from "./EpraComponent"

const SolarDesignTraining = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });

  const handleSubmit = async () => {
    if (!formData.email || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setShowSuccess(false);
    setFormData({ email: '', phone: '' });
    setIsSubmitting(false);
  };

  const software = [
    { name: 'Autodesk AutoCAD', icon: autocard, desc: 'AutoCAD is a crucial and versatile CAD software extensively used in the solar industry for system design, drafting, and documentation of photovoltaic (PV) projects. It offers precision, scalability, and detailed 2D/3D modeling capabilities that support solar layout planning from small residential systems to large utility-scale installations.' },
    { name: 'SketchUp', icon: sketchup, desc: "SketchUp is a widely used 3D modeling software that, when combined with specialized plugins like Skelion, becomes a powerful tool for solar system design. It is valued in the solar industry for detailed 3D visualization, layout planning, and shading analysis which are critical in optimizing photovoltaic (PV) system performance" },
    { name: 'PVsyst (Photovoltaic Software)', icon: pyvsist, desc: 'PVsyst is a comprehensive photovoltaic (PV) system design and simulation software widely used by engineers, researchers, educators, and architects for evaluating and optimizing solar energy projects. It supports all sizes of PV systems, including grid-connected, standalone, or pumping systems' },
    { name: 'HOMER', icon: homer, desc: 'HOMER Pro (Hybrid Optimization of Multiple Energy Resources) is a leading microgrid modeling and optimization software widely used worldwide for the design, simulation, and economic analysis of distributed energy systems and microgrids' },
    { name: 'HelioScope', icon: helioscope, desc: 'SketchUp is a widely used 3D modeling software that, when combined with specialized plugins like Skelion, becomes a powerful tool for solar system design. It is valued in the solar industry for detailed 3D visualization, layout planning, and shading analysis which are critical in optimizing photovoltaic (PV) system performanc' }
  ];

  const trainingLevels = [
    {
      title: 'Solar EPRA Training T1',
      description: 'Fundamentals of solar energy systems, basic design principles, and introduction to solar components',
      level: 'Beginner'
    },
    {
      title: 'Solar EPRA Training T2',
      description: 'Intermediate system design, load calculations, and solar panel sizing techniques',
      level: 'Intermediate'
    },
    {
      title: 'Solar EPRA Training T3',
      description: 'Advanced system optimization, grid integration, and complex project management',
      level: 'Advanced'
    }
  ];

  return (
    <section id="solar" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
            <Sun className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solar <span className="text-amber-600 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">System Design Training</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Master solar system design with industry-standard software and expert guidance from our experienced professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Training Overview</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Target className="w-6 h-6 mr-4 text-amber-100" />
                    <span className="text-lg font-medium">Comprehensive solar system design curriculum</span>
                  </div>
                  <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Award className="w-6 h-6 mr-4 text-amber-100" />
                    <span className="text-lg font-medium">Industry-standard software training</span>
                  </div>
                  <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Users className="w-6 h-6 mr-4 text-amber-100" />
                    <span className="text-lg font-medium">Expert guidance from professionals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-2xl font-bold text-amber-800">Training Benefits</h4>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Learn industry-standard design practices</span>
                </div>
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Master professional software tools</span>
                </div>
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Gain practical project experience</span>
                </div>
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Build expertise in renewable energy</span>
                </div>
              </div>
            </div>

            {/* New Get Full Training Card */}
            <div
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-600 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Get Full Training</h3>
                  </div>
                  <ArrowRight className="w-8 h-8 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-3 text-amber-200" />
                    <span className="text-lg font-medium">Complete training outline & curriculum</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-3 text-amber-200" />
                    <span className="text-lg font-medium">Detailed course materials & resources</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-3 text-amber-200" />
                    <span className="text-lg font-medium">Professional certification pathway</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <p className="text-amber-100 text-sm font-medium">
                    <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1">
                      Get Full Training
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-4 sm:p-8 mb-7 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Software Training</h3>
              </div>
              <div className="space-y-4 sm:space-y-4">
                {software.map((item, index) => (
                  <div key={index} className="group flex flex-col sm:flex-row items-start p-4 sm:p-6 bg-amber-50 rounded-xl border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center w-full sm:w-auto mb-3 sm:mb-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center mr-4 sm:mr-6 shadow-md group-hover:shadow-lg transition-shadow p-2 flex-shrink-0">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="sm:hidden flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors leading-tight">
                          {item.name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex-1 w-full sm:w-auto">
                      <h4 className="hidden sm:block text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors mb-2">
                        {item.name}
                      </h4>

                      <p className="text-gray-600 text-sm sm:text-sm mb-3 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="w-full bg-amber-200 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-600 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, 80 + (index * 5))}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <EpraComponent />

        {/* Modal Overlay */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {!showSuccess ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Training Outline</h3>
                  <p className="text-gray-600 mb-6">Enter your details to access the full training materials</p>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.email || !formData.phone}
                      className="w-full bg-amber-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Submitting...' : 'Access Training Materials'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
                  <p className="text-gray-600 mb-6">Thank you for your interest. You can now access the training materials.</p>
                  <a
                    href="https://drive.google.com/file/d/1IPouG0rutZG-0cVAb9hpIgTJKl6jGvs4/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-700 transition-colors"
                  >
                    Access Training Outline
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolarDesignTraining;
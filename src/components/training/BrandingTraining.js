import React from 'react';
import {
  Palette,
  Users,
  Shield,
  Building,
  FileText,
  Monitor,
  CheckCircle,
} from 'lucide-react';


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

export default BrandingTraining;
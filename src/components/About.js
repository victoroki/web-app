import React from 'react';
import { Shield, Zap, Sun, Users, Clock, Leaf } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Torchbearer Technologies</h1>
            <p className="text-xl leading-relaxed">
              WE CARE ABOUT YOUR PROPERTY
            </p>
          </div>
        </div>
      </section> */}

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Torchbearer Technologies is dedicated to delivering innovative solutions in solar, security, electrical, and climate control. Our mission is to empower clients with reliable, sustainable, and cost-effective systems tailored for modern living.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Sun className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Turn Up the Brightness</h3>
                <p className="text-gray-600">Maximize your energy efficiency with our solar solutions</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Zap className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Turn Up the Power</h3>
                <p className="text-gray-600">Reliable electrical systems for all your needs</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Leaf className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Save the Environment</h3>
                <p className="text-gray-600">Eco-friendly solutions that reduce your carbon footprint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Promise to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Clock className="w-10 h-10 text-red-800 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Service</h3>
                <p className="text-gray-600">
                  Our team is available round the clock for your service. We're committed to providing support whenever you need it.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Shield className="w-10 h-10 text-red-800 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Reliable Solutions</h3>
                <p className="text-gray-600">
                  We assure you the reduction in your monthly electricity bills while helping to save the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Sun className="w-8 h-8 text-red-800 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Solar Technologies</h3>
                <p className="text-sm text-gray-600 mt-2">Panels, heating, pumping, and street lights</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-red-800 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">CCTV Systems</h3>
                <p className="text-sm text-gray-600 mt-2">Security cameras and surveillance solutions</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Zap className="w-8 h-8 text-red-800 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Electrical Services</h3>
                <p className="text-sm text-gray-600 mt-2">Wiring, panels, and maintenance</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-red-800 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">HVAC Systems</h3>
                <p className="text-sm text-gray-600 mt-2">Climate control and ventilation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Thanks for your support. We look forward to providing you our service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0743076376" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Call Now: 0743076376
            </a>
            <a href="mailto:torchbearertechnologies@gmail.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
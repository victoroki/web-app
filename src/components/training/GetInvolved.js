import React, { useState } from 'react';
import { Users, Building2, TrendingUp, ChevronRight, Mail, Phone, MapPin, CheckCircle, Lightbulb, Target, Heart } from 'lucide-react';

const GetInvolvedPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    roleType: ''
  });

  const involvementOptions = [
    {
      id: 'collaborators',
      title: 'Become a Collaborator',
      subtitle: 'Organizations & Companies',
      icon: Building2,
      color: '#d97707',
      description: 'Partner with us to expand renewable energy training reach and impact',
      benefits: [
        'Co-develop specialized training programs',
        'Access to our expert instructor network',
        'Joint certification opportunities',
        'Brand visibility and recognition'
      ],
      ideal: 'Perfect for educational institutions, energy companies, and consulting firms'
    },
    {
      id: 'trainers',
      title: 'Join as a Trainer',
      subtitle: 'Individual Professionals',
      icon: Users,
      color: '#d97706',
      description: 'Share your expertise and help shape the next generation of renewable energy professionals',
      benefits: [
        'Flexible teaching opportunities',
        'Professional development support',
        'Competitive compensation',
        'Access to cutting-edge resources'
      ],
      ideal: 'Ideal for experienced professionals in renewable energy, engineering, and safety'
    },
    {
      id: 'investors',
      title: 'Invest in Our Mission',
      subtitle: 'Funders & Grant Providers',
      icon: TrendingUp,
      color: '#d97707',
      description: 'Support the growth of renewable energy education and workforce development',
      benefits: [
        'Impact measurement and reporting',
        'Tax benefits and incentives',
        'Recognition opportunities',
        'Strategic advisory roles'
      ],
      ideal: 'For foundations, impact investors, and organizations supporting clean energy'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleSelection = (roleId) => {
    setSelectedRole(roleId);
    setFormData({
      ...formData,
      roleType: roleId
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff8d9' }}>

      {/* Ways to Get Involved */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#d97707' }}>
            Choose Your Path
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#ceb699' }}>
            Whether you're an organization, individual professional, or investor, 
            there's a meaningful way for you to contribute to our mission of excellence in renewable energy education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedRole === option.id;
            
            return (
              <div
                key={option.id}
                className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected ? 'ring-4 ring-orange-200' : ''
                }`}
                onClick={() => handleRoleSelection(option.id)}
              >
                <div 
                  className="rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: isSelected ? '#ede1ce' : 'white' }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" 
                       style={{ backgroundColor: option.color }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2" style={{ color: '#d97707' }}>
                    {option.title}
                  </h3>
                  
                  <p className="text-center mb-4 font-medium" style={{ color: '#ceb699' }}>
                    {option.subtitle}
                  </p>
                  
                  <p className="text-center mb-6" style={{ color: '#ceb699' }}>
                    {option.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {option.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: option.color }} />
                        <span className="text-sm" style={{ color: '#ceb699' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t" style={{ borderColor: '#ede1ce' }}>
                    <p className="text-sm italic text-center" style={{ color: '#ceb699' }}>
                      {option.ideal}
                    </p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" 
                         style={{ color: option.color }}>
                      <span>Select This Path</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        {selectedRole && (
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: 'white' }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#d97707' }}>
                  Let's Start the Conversation
                </h3>
                <p className="text-lg" style={{ color: '#ceb699' }}>
                  Tell us about yourself and how you'd like to get involved
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ceb699' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ceb699' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ceb699' }}>
                      Organization/Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your organization"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ceb699' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#ceb699' }}>
                    Tell Us More
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Share your experience, goals, or questions about getting involved..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                    style={{ backgroundColor: '#d97707' }}
                  >
                    <span>Submit Application</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default GetInvolvedPage;
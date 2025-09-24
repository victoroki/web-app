import React, { useState } from 'react';
import { Users, Building2, TrendingUp, ChevronRight, CheckCircle, Loader2, AlertCircle, Check } from 'lucide-react';

const GetInvolvedPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    roleType: ''
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

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

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.roleType) {
      newErrors.roleType = 'Please select a role type';
    }

    if (formData.phone && formData.phone.length > 50) {
      newErrors.phone = 'Phone number is too long';
    }

    if (formData.organization && formData.organization.length > 255) {
      newErrors.organization = 'Organization name is too long';
    }

    if (formData.message && formData.message.length > 5000) {
      newErrors.message = 'Message is too long (maximum 5000 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleRoleSelection = (roleId) => {
    setSelectedRole(roleId);
    setFormData({
      ...formData,
      roleType: roleId
    });
    
    // Clear role type error
    if (errors.roleType) {
      setErrors({
        ...errors,
        roleType: ''
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      message: '',
      roleType: ''
    });
    setSelectedRole(null);
    setErrors({});
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Reset status
  setSubmitStatus(null);
  setErrorMessage('');
  setSuccessMessage('');

  // Validate form
  if (!validateForm()) {
    setSubmitStatus('error');
    setErrorMessage('Please correct the errors below and try again.');
    return;
  }

  setIsSubmitting(true);

  try {
    const API_URL = process.env.REACT_APP_API_URL || 'https://api.torchbearer.co.ke';
    
    const response = await fetch(`${API_URL}/api/involvement/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        organization: formData.organization.trim() || null,
        phone: formData.phone.trim() || null,
        message: formData.message.trim() || null,
        roleType: formData.roleType // Change this line from role_type to roleType
      })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setSubmitStatus('success');
      setSuccessMessage(result.message || 'Thank you for your interest! We have received your application and will get back to you soon.');
      resetForm();
      
      setTimeout(() => {
        document.getElementById('submit-status')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    } else {
      setSubmitStatus('error');
      
      if (result.errors && Array.isArray(result.errors)) {
        const backendErrors = {};
        result.errors.forEach(error => {
          if (error.path) {
            backendErrors[error.path] = error.msg;
          }
        });
        setErrors(backendErrors);
        setErrorMessage('Please correct the errors below and try again.');
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    }
  } catch (error) {
    console.error('Network error:', error);
    setSubmitStatus('error');
    setErrorMessage('Network error. Please check your connection and try again.');
  } finally {
    setIsSubmitting(false);
  }
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

        {/* Role Selection Error */}
        {errors.roleType && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700">{errors.roleType}</p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Status Messages */}
        {(submitStatus || errorMessage || successMessage) && (
          <div id="submit-status" className="max-w-4xl mx-auto mb-8">
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Application Submitted Successfully!</h3>
                    <p className="text-green-700">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Submission Error</h3>
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

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
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                        errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
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
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
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
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                        errors.organization ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="Enter your organization"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
                    )}
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
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                        errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#ceb699' }}>
                    Tell Us More
                    {formData.message && (
                      <span className="ml-2 text-xs text-gray-500">
                        ({formData.message.length}/5000 characters)
                      </span>
                    )}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                      errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
                    } focus:outline-none`}
                    placeholder="Share your experience, goals, or questions about getting involved..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                    style={{ backgroundColor: '#d97707' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
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
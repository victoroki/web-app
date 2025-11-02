import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // You can replace this with your actual API call:
      // await axios.post('https://formspree.io/f/myyqrvvk', formData);

      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gradient-to-br from-rose-50 to-amber-50 min-h-screen'>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Image and Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Get in <span className="text-red-900">Touch</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="relative inline-block mb-8">
              <div
                className="w-80 h-80 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #712B35, #8B3A42)' }}
              >
                <Phone className="w-24 h-24 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 text-white p-3 rounded-full shadow-lg" style={{ backgroundColor: '#712B35' }}>
                <Phone className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#712B35' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span>Quick response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#712B35' }}>
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span>Professional and friendly support</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 w-full max-w-md">
            <div
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Message</h2>
                <div className="w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: '#712B35' }}></div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 outline-none"
                      style={{ focusRingColor: '#712B35' }}
                      onFocus={(e) => e.target.style.ringColor = '#712B35'}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 outline-none"
                      style={{ focusRingColor: '#712B35' }}
                      onFocus={(e) => e.target.style.ringColor = '#712B35'}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      style={{ focusRingColor: '#712B35' }}
                      onFocus={(e) => e.target.style.ringColor = '#712B35'}
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                  style={{ 
                    backgroundColor: isSubmitting ? '#9CA3AF' : '#712B35',
                    ':hover': { backgroundColor: isSubmitting ? '#9CA3AF' : '#5A2229' }
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#5A2229';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#712B35';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
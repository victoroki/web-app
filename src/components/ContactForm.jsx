import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      const response = await fetch('http://admin.torchbearer.co.ke/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone || '',
          subject: 'Contact Request',
          message: formData.message || `Contact request from ${formData.name}`,
          form_type: 'contact_form',
          status: 'pending'
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFAE5] via-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your <span className="text-[#D97706]">Green Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our experts and discover how our training programs can transform your career in renewable energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side - Contact Info & Illustration */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Training?</h2>
              
              <div className="space-y-4">
                {[
                  "Industry-recognized certifications",
                  "Hands-on practical training",
                  "Expert instructors with field experience",
                  "Career placement assistance",
                  "Flexible learning options"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D97706] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-[#D97706] to-orange-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-white/90">+254 789 173033</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-white/90">info@torchbearer.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-white/90">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started Today</h2>
              <p className="text-gray-600">Fill out the form and we'll contact you with program details</p>
              <div className="w-16 h-1 bg-[#D97706] rounded-full mx-auto mt-4"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Your Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your interests and which programs you'd like to learn more about..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#D97706] hover:bg-[#B45309] transform hover:scale-105 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Start Your Green Career Journey
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h3>
            <p className="text-gray-600 mb-6">
              Our education consultants are here to help you choose the right program based on your background, interests, and career goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-orange-100 text-[#D97706] px-4 py-2 rounded-full font-medium">Free Career Assessment</div>
              <div className="bg-orange-100 text-[#D97706] px-4 py-2 rounded-full font-medium">Program Guidance</div>
              <div className="bg-orange-100 text-[#D97706] px-4 py-2 rounded-full font-medium">Funding Options</div>
              <div className="bg-orange-100 text-[#D97706] px-4 py-2 rounded-full font-medium">Schedule a Call</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
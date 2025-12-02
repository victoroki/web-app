import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, MapPin, Clock } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // await axios.post('https://formspree.io/f/myyqrvvk', formData);

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-white relative overflow-hidden'>
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #712B35 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - Contact Info */}
            <div className="bg-[#712B35] rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+254 743 076376" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@torchbearer.co.ke" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Nairobi, Kenya" },
                  { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon-Fri: 8AM - 6PM" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-[#712B35]' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#712B35] focus:ring-2 focus:ring-[#712B35]/20 transition-all duration-300 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#712B35]' : 'text-gray-400'}`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#712B35] focus:ring-2 focus:ring-[#712B35]/20 transition-all duration-300 outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-[#712B35]' : 'text-gray-400'}`} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="5"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#712B35] focus:ring-2 focus:ring-[#712B35]/20 transition-all duration-300 outline-none resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#712B35] hover:bg-[#5f2b40] hover:scale-105 shadow-lg hover:shadow-xl'
                    }`}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
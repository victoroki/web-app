import React, { useState, useRef } from 'react';
import { Mail, Download, User, AtSign } from 'lucide-react';

const CertificateGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const certificateRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateCertificate = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate certificate generation delay
    setTimeout(() => {
      setShowCertificate(true);
      setIsLoading(false);
    }, 1500);
  };

  const downloadCertificate = () => {
    // In a real application, you would generate a PDF or image here
    alert(`Certificate for ${formData.name} would be downloaded/sent to ${formData.email}`);
  };

  const sendEmail = () => {
    // In a real application, you would integrate with an email service
    alert(`Certificate sent to ${formData.email}!`);
  };

  const Certificate = ({ name }) => (
    <div 
      ref={certificateRef}
      className="relative w-full max-w-4xl mx-auto bg-white shadow-2xl"
      style={{ aspectRatio: '4/3' }}
    >
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top diagonal */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 transform rotate-45"
          style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' }}
        ></div>
        
        {/* Bottom diagonal */}
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 transform rotate-45"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)' }}
        ></div>
        
        {/* Navy background sections */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-full"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/4 h-1/2"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)' }}
        ></div>
      </div>

      {/* Certificate Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
        {/* Gold Border */}
        <div className="absolute inset-4 border-4 border-yellow-400"></div>
        
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-6xl font-bold text-gray-900 tracking-wide">
            CERTIFICATE
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 tracking-wider">
            OF ACHIEVEMENT
          </h2>
          
          <div className="py-8">
            <p className="text-lg text-yellow-600 font-medium mb-4">
              THIS CERTIFICATE IS PRESENTED TO:
            </p>
            <h3 className="text-5xl font-bold text-blue-900 italic mb-8">
              {name}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Has successfully completed <strong>30 hours solar design masterclass</strong> using pvsyst, 
              sketch up and AUTO CAD
            </p>
          </div>
          
          <div className="flex justify-between items-end pt-12">
            <div className="text-center">
              <div className="w-40 h-16 bg-yellow-100 rounded-full mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
              </div>
              <div className="border-t-2 border-gray-400 pt-2">
                <p className="font-semibold text-gray-700">solar trainer</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="border-t-2 border-gray-400 pt-2 w-40">
                <p className="font-semibold text-gray-700">solar designer</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solar Design Masterclass Certificate Generator
          </h1>
          <p className="text-lg text-gray-600">
            Enter your details below to generate your certificate of achievement
          </p>
        </div>

        {!showCertificate ? (
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <button
                onClick={generateCertificate}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating Certificate...
                  </div>
                ) : (
                  'Generate Certificate'
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <Certificate name={formData.name} />
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={downloadCertificate}
                className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Certificate
              </button>
              
              <button
                onClick={sendEmail}
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send to Email
              </button>
              
              <button
                onClick={() => {
                  setShowCertificate(false);
                  setFormData({ name: '', email: '' });
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Generate Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;
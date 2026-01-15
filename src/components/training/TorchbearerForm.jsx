import React, { useState, useEffect } from 'react';
import logo from '../img/torchbearer-logo.png';

const TorchbearerCertificateForm = () => {
  const [formData, setFormData] = useState({
    recipient_name: '',
    recipient_email: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    { text: 'Validating details...', icon: '🔍' },
    { text: 'Registering information...', icon: '📝' },
    { text: 'Creating certificate...', icon: '🎓' },
    { text: 'Sending to email...', icon: '📧' }
  ];

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingSteps.length - 1) return prev + 1;
          return prev;
        });
      }, 1200);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setErrors({});
    setLoadingStep(0);

    try {
      const response = await fetch('https://admin.torchbearer.co.ke/api/certificates/register-course2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setMessage('✅ Certificate registered successfully. Please check your email.');
        setFormData({ recipient_name: '', recipient_email: '' });
      } else {
        if (data.errors) {
          setErrors(data.errors);
          setMessage('❌ Please fix the highlighted fields.');
        } else {
          setMessage(`❌ Error: ${data.message}`);
        }
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Torchbearer" className="w-40 h-28 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Torchbearer Certificate Registration</h1>
          <p className="text-gray-600">Register for your official certificate</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-amber-600">
          {message && (
            <div className={`p-4 mb-6 rounded-lg text-sm font-medium ${
              message.includes('✅')
                ? 'bg-green-100 text-green-800 border-l-4 border-green-600'
                : 'bg-red-100 text-red-800 border-l-4 border-red-600'
            }`}>
              {message}
            </div>
          )}

          {loading && (
            <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <div className="space-y-4">
                {loadingSteps.map((step, index) => (
                  <div key={index} className={`flex items-center transition-all duration-500 ${index <= loadingStep ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      index < loadingStep
                        ? 'bg-green-600 text-white'
                        : index === loadingStep
                        ? 'bg-amber-600 text-white animate-pulse'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index < loadingStep ? '✓' : step.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <p className={`font-medium ${index === loadingStep ? 'text-gray-900' : 'text-gray-600'}`}>{step.text}</p>
                    </div>
                    {index === loadingStep && (
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800">Recipient Name *</label>
              <input
                type="text"
                name="recipient_name"
                value={formData.recipient_name}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.recipient_name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-amber-600 focus:border-amber-600'
                } disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="Enter recipient's full name"
              />
              {errors.recipient_name && (
                <p className="text-red-600 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.recipient_name[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800">Email Address *</label>
              <input
                type="email"
                name="recipient_email"
                value={formData.recipient_email}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.recipient_email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-amber-600 focus:border-amber-600'
                } disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="Enter recipient's email"
              />
              {errors.recipient_email && (
                <p className="text-red-600 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.recipient_email[0]}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-4 px-6 rounded-lg text-white font-bold text-lg transition-all duration-300 transform ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-amber-600 via-black to-green-700 hover:shadow-xl hover:scale-105 active:scale-95'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                '🎓 Register Certificate'
              )}
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TorchbearerCertificateForm;

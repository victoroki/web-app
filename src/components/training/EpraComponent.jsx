import { CheckCircle, Mail, Phone, X } from 'lucide-react';
import { useState } from 'react';

const EpraComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const licenseClasses = [
    {
      "class": "T1",
      "scope": "Solar PV system installation work for small systems or single battery DC systems of up to 100Wp (watts peak).",
      "minQualification": "KCPE",
      "technicalQualification": "Electrical Government Trade Test 2 and basic solar training",
      "experience": "2 years of verifiable solar installation experience",
      "startingLicense": "T1",
      "highestAchievable": "T3"
    },
    {
      "class": "T2",
      "scope": "Solar PV system installation work for medium systems or multiple batteries which may include an inverter.",
      "minQualification": "KCSE",
      "technicalQualification": [
        "Certificate in Electrical/Electronic and Intermediate Solar Training with 4 years of experience",
        "Diploma in Electrical/Electronic and Intermediate Solar Training with 2 years of experience",
        "BSc Electrical Engineering or relevant degree or Higher National Diploma with 1 year of experience"
      ],
      "experience": "2–4 years depending on qualification",
      "startingLicense": "T2",
      "highestAchievable": "T3"
    },
    {
      "class": "T3",
      "scope": "Solar PV system installation work for advanced projects, including grid-connected and hybrid systems.",
      "minQualification": "KCSE",
      "technicalQualification": [
        "Diploma in Electrical and/or Electronic and Advanced Solar Training with 4 years of solar installation experience",
        "BSc Electrical Engineering or relevant degree or Higher National Diploma with 2 years of solar installation experience"
      ],
      "experience": "2–4 years depending on qualification",
      "startingLicense": "T3",
      "highestAchievable": "T3"
    }
  ];

  const handleSubmit = async () => {
    if (!formData.email || !formData.phone) return;
    
    setIsSubmitting(true);

    try {
    
      const response = await fetch('https://formspree.io/f/myyqrvvk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          subject: 'EPRA Solar Training Outline Request',
          message: `New request for EPRA Solar training outline from ${formData.email}. Phone: ${formData.phone}`
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setShowSuccess(false);
    setFormData({ email: '', phone: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="epra" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EPRA <span className="text-amber-600">Solar Worker Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Prepare to advance your electrical career with our focused training designed specifically for anyone who is aiming to get EPRA Solar coaching training and material
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {licenseClasses.map((license) => (
            <div key={license.class} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-amber-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-amber-600">Class {license.class}</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{license.scope}</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Min Academic:</strong> {license.minQualification}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Technical:</strong>{" "}
                    {Array.isArray(license.technicalQualification) ? (
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        {license.technicalQualification.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      license.technicalQualification
                    )}
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Starting License:</strong> {license.startingLicense}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Highest Achievable:</strong> {license.highestAchievable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowForm(true)}
            className="bg-amber-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
          >
            Get Full Training Outline
          </button>
        </div>

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
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
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

export default EpraComponent;
import { CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import FormModal from './FormModal';

const EpraComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [licenseClasses, setLicenseClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLicenseClasses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/license-classes/solar");
        if (!response.ok) {
          throw new Error("Failed to fetch license classes");
        }
        const json = await response.json();
        setLicenseClasses(json?.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLicenseClasses();
  }, []);

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

        {loading && <p className="text-center text-gray-500">Loading license classes...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {licenseClasses.map((license) => (
              <div
                key={license.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-amber-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-amber-600">Class {license.class}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{license.scope}</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Min Academic:</strong> {license.min_qualification}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Technical:</strong>{" "}
                      {Array.isArray(license.technical_qualification) ? (
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {license.technical_qualification.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        license.technical_qualification
                      )}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Experience:</strong> {license.experience_requirements}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Starting License:</strong> {license.starting_license}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Highest Achievable:</strong> {license.highest_achievable}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button 
            onClick={() => setShowForm(true)}
            className="bg-amber-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
          >
            Get Full Training Outline
          </button>
        </div>

        <FormModal
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          title="Get Training Outline"
          description="Enter your details to access the full training materials"
          submitText="Access Training Materials"
          successTitle="Success!"
          successMessage="Thank you for your interest. You can now access the training materials."
          accessLink="https://drive.google.com/file/d/1IPouG0rutZG-0cVAb9hpIgTJKl6jGvs4/view?usp=drive_link"
          accessLinkText="Access Training Outline"
          formspreeEndpoint="https://formspree.io/f/myyqrvvk"
          emailSubject="EPRA Solar Training Outline Request"
        />
      </div>
    </section>
  );
};

export default EpraComponent;

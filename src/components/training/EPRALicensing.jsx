import { CheckCircle } from 'lucide-react';

const EpraComponent = () => {
  const licenseClasses = [
    {
      class: 'C2',
      scope: 'Electrical installation work for connection to a single-phase supply at low voltage. Restricted to two-storey residential and commercial buildings.',
      minQualification: 'KCSE',
      technicalQualification: 'Electrician Wireman Grade II and other equivalent certificates',
      startingLicense: 'C2',
      highestAchievable: 'C2',
    },
    {
      class: 'C1',
      scope: 'Electrical installation work for connection to a single & three-phase supply at low voltage. Restricted to four-storey residential and commercial buildings.',
      minQualification: 'KCSE',
      technicalQualification: 'Electrician Wireman Grade II and other equivalent certificates',
      startingLicense: 'C2',
      highestAchievable: 'C1',
    },
    {
      class: 'B',
      scope: 'Electrical installation work for connection to any phase supply at medium voltage. No restrictions on number of storeys.',
      minQualification: 'KCSE',
      technicalQualification: 'Electrician Wireman Grade I and other equivalent certificates',
      startingLicense: 'C2',
      highestAchievable: 'B',
    },
    {
      class: 'A2',
      scope: 'Specialized electrical installation work e.g. lifts, escalators, generators.',
      minQualification: 'KCSE',
      technicalQualification: 'Electrician Wireman Grade II and other equivalent certificate',
      startingLicense: 'A2',
      highestAchievable: 'A2',
    },
    {
      class: 'A1',
      scope: 'All Electrical installation works.',
      minQualification: 'KCSE',
      technicalQualification: 'Higher National Diploma, BSc in Electrical Engineering and other equivalent certificates',
      startingLicense: 'C1',
      highestAchievable: 'A1',
    },
    {
      class: 'A1 (ERB)',
      scope: 'All Electrical installation works (with ERB Registration).',
      minQualification: 'KCSE',
      technicalQualification: 'BSc in Electrical Engineering and Registered as Electrical Engineer by ERB',
      startingLicense: 'A1',
      highestAchievable: 'A1',
    },
  ];

  return (
    <section id="epra" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EPRA <span className="text-amber-600">Electrical Worker Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Prepare to advance your electrical career with our focused training designed specifically for anyone aiming to get EPRA ELECTRICAL coaching, training, and material.
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
                  <span className="text-gray-700"><strong>Technical:</strong> {license.technicalQualification}</span>
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
          <p className="bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg">
            Get Full Trainings Outline
          </p>
        </div>
      </div>
    </section>
  );
};

export default EpraComponent;

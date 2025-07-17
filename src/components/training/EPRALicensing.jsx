
import { CheckCircle } from 'lucide-react';


const EPRALicensing = () => {
  const licenseClasses = [
    {
      class: 'C2',
      scope: 'Electrical installation work for connection to a single-phase supply at low voltage. Restricted to two-storey residential and commercial buildings',
      fee: 'KES 250.00',
      minQualification: 'KCSE',
      technicalQualification: 'Electrician Wireman Grade II and other equivalent certificates',
      startingLicense: 'C2',
      highestAchievable: 'C1'
    },
    {
      class: 'C1',
      scope: 'Electrical installation work for connection to three-phase supply at low voltage. Limited to specific commercial and industrial applications',
      fee: 'KES 500.00',
      minQualification: 'KCSE',
      technicalQualification: 'Electrical Technician part II, III, Final Craft Certificate',
      startingLicense: 'C1',
      highestAchievable: 'B'
    },
    {
      class: 'B',
      scope: 'Electrical installation work for medium voltage connections and complex commercial installations',
      fee: 'KES 750.00',
      minQualification: 'KCSE',
      technicalQualification: 'Diploma in Electrical Engineering',
      startingLicense: 'B',
      highestAchievable: 'A2'
    },
    {
      class: 'A2',
      scope: 'Advanced electrical installation work including high voltage connections and industrial applications',
      fee: 'KES 1000.00',
      minQualification: 'KCSE',
      technicalQualification: 'Higher National Diploma, BSc in Electrical Engineering and other equivalent certificates',
      startingLicense: 'A2',
      highestAchievable: 'A1'
    },
    {
      class: 'A1',
      scope: 'All Electrical installation works - the highest level of electrical licensing',
      fee: 'KES 1000.00',
      minQualification: 'KCSE',
      technicalQualification: 'BSc in Electrical Engineering, Professional Engineering qualifications',
      startingLicense: 'A1',
      highestAchievable: 'A1'
    }
  ];

  return (
    <section id="epra" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EPRA <span className="text-amber-600">Electrical Worker Licensing</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Get certified with Energy and Petroleum Regulatory Authority (EPRA) electrical worker licenses.
            Choose the right license class for your expertise level and career advancement goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {licenseClasses.map((license) => (
            <div key={license.class} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-amber-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-amber-600">Class {license.class}</h3>
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-lg font-bold">
                  {license.fee}
                </span>
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

        {/* <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-red-400 mr-3" />
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Important Renewal Policy</h3>
              <p className="text-red-700 text-lg">
                A1, A2, B, C1, C2 licenses renewed after the 31st of March shall be one and half times the renewal fee.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EPRALicensing;

import { CheckCircle } from 'lucide-react';


const EpraComponent = () => {
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
      "Certificate in Electrical and/or Electronic and Intermediate Solar Training with 4 years of solar installation experience",
      "Diploma in Electrical and/or Electronic and Intermediate Solar Training with 2 years of solar installation experience",
      "BSc Electrical Engineering or relevant degree or Higher National Diploma with 1 year of solar installation experience"
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


  return (
    <section id="epra" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EPRA <span className="text-amber-600">Solar Worker Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
           Prepare to advance your electrical career with our focused training designed specifically for any one who is aming to get EPRA Solar coaching training and material
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {licenseClasses.map((license) => (
            <div key={license.class} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-amber-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-amber-600">Class {license.class}</h3>
                {/* <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-lg font-bold">
                  {license.fee}
                </span> */}
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
      <div className="text-center">
                    <p className="bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg">
              Get Full Trainings Outline
            </p>
      </div>


    </section>
  );
};

export default EpraComponent;
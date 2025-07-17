import {
  HardHat,
  AlertTriangle,
  Heart,
  FileText,
  Shield,
  Users,
} from 'lucide-react';

const HealthSafetyTraining = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Occupational <span className="text-amber-600">Health & Safety Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Comprehensive workplace safety training programs designed to protect workers and ensure compliance with international standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-lg shadow-lg">
            <HardHat className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Work at Height Training</h3>
            <p className="text-lg">
              Essential safety protocols and equipment usage for working at elevated positions and confined spaces
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-white p-8 rounded-lg shadow-lg">
            <AlertTriangle className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Fire Safety Training</h3>
            <p className="text-lg">
              Fire prevention, emergency response procedures, and proper use of firefighting equipment and evacuation protocols
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 rounded-lg shadow-lg">
            <Heart className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">First Aid Training</h3>
            <p className="text-lg">
              Life-saving first aid techniques, CPR certification, and emergency medical response for workplace incidents
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-amber-600">International Standards</span> & Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">NFPA Standards</h4>
              <p className="text-gray-600">National Fire Protection Association codes and standards</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">IEEE Standards</h4>
              <p className="text-gray-600">Institute of Electrical and Electronics Engineers protocols</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">IEC Standards</h4>
              <p className="text-gray-600">International Electrotechnical Commission guidelines</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">NEC Codes</h4>
              <p className="text-gray-600">National Electrical Code compliance training</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">ISO Standards</h4>
              <p className="text-gray-600">International Organization for Standardization protocols</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">ILO & KS Standards</h4>
              <p className="text-gray-600">International Labour Organization and Kenyan Standards</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-50 p-8 rounded-lg">
            <Shield className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Safety Training?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Instructors</h4>
                  <p className="text-gray-600">Certified safety professionals with industry experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Certification</h4>
                  <p className="text-gray-600">Internationally recognized certificates upon completion</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Compliance</h4>
                  <p className="text-gray-600">Meet all regulatory requirements and safety standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSafetyTraining;

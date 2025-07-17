import { Zap, BookOpen, Award, ChevronRight } from 'lucide-react';
import EPRALicensing from "./EPRALicensing"


const ElectricalDesign = () => {
  return (
    <>
    <section id="electrical" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Electrical <span className="text-amber-600">Design Training</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Master electrical design principles and AutoCAD for professional electrical installations and engineering projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center p-6 bg-amber-100 rounded-lg border-l-4 border-amber-500">
              <Zap className="w-12 h-12 text-amber-600 mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Electrical Design Principles</h3>
                <p className="text-gray-700 text-lg">Learn fundamental electrical design concepts and industry best practices</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-green-100 rounded-lg border-l-4 border-green-500">
              <BookOpen className="w-12 h-12 text-green-600 mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">AutoCAD for Electrical</h3>
                <p className="text-gray-700 text-lg">Master AutoCAD specifically for electrical design and technical drafting</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-purple-100 rounded-lg border-l-4 border-purple-500">
              <Award className="w-12 h-12 text-purple-600 mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Practical Application</h3>
                <p className="text-gray-700 text-lg">Hands-on projects and real-world electrical design scenarios</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Course Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Electrical circuit design and analysis</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Load calculations and power distribution</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Electrical symbols and industry standards</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">AutoCAD electrical drawing techniques</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-amber-600 mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">Safety standards and code compliance</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <div>
      < EPRALicensing />
    </div>
    </>
  );
};

export default ElectricalDesign;
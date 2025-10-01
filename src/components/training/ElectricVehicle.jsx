import { Calendar, CheckCircle, Zap, Leaf, Car } from 'lucide-react';

const ClimateElectricVehicle = () => {
  const evBenefits = [
    "Zero tailpipe emissions for cleaner urban air",
    "Lower operating and maintenance costs vs. ICE vehicles",
    "Integration with renewable energy (solar charging)",
    "Government incentives and reduced road taxes",
    "Energy independence and reduced fuel imports"
  ];

  const trainingModules = [
    "EV Technology Fundamentals: Motors, Batteries & Power Electronics",
    "Charging Infrastructure Design & Installation",
    "Grid Integration & Smart Charging Solutions",
    "Safety Standards & EPRA Compliance for EV Installers",
    "Business Models: EV Charging Stations & Fleet Electrification"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 text-white mb-6">
            <Car className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Climate-Smart <span className="text-amber-600">Electric Mobility</span>
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Drive the future with clean, affordable, and sustainable electric transportation solutions for Kenya and Africa.
          </p>
        </div>
      </section>

      {/* Why EVs? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Electric Vehicles?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              EVs are a cornerstone of climate action reducing emissions, cutting fuel costs, and enabling energy resilience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <Zap className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy & Cost Savings</h3>
              <p className="text-gray-700">
                Save up to 70% on fuel and maintenance. Pair with solar for near-zero running costs.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <Leaf className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Impact</h3>
              <p className="text-gray-700">
                One EV can prevent 4 to 5 tons of CO₂ emissions annually equivalent to planting 100 trees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional EV Training Program</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Equip yourself with in-demand skills in electric mobility—from installation to business development.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Upcoming EV Masterclass</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Q1 2026 (Exact dates TBA)</span>
                </div>
              </div>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
                Coming Soon
              </span>
            </div>
            <ul className="space-y-3 mb-6">
              {trainingModules.map((module, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{module}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Format:</strong> 5-day intensive (Online + Hands-on Lab)  
                <br />
                <strong>Target:</strong> Technicians, Engineers, Entrepreneurs, Energy Professionals
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Power the EV Revolution?</h2>
          <p className="mb-8 opacity-90">
            Join our waitlist to be the first notified when registration opens.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-gray-800 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateElectricVehicle;
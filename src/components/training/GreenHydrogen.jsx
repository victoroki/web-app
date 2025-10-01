import { Calendar, CheckCircle, FlaskConical, Wind, Factory } from 'lucide-react';

const GreenHydrogen = () => {
  const hydrogenBenefits = [
    "Zero-carbon fuel produced using renewable electricity",
    "Long-duration energy storage for grid stability",
    "Decarbonizes hard-to-abate sectors: industry, heavy transport, shipping",
    "Creates high-value export opportunities for African nations",
    "Complements solar/wind by using surplus renewable energy"
  ];

  const trainingTopics = [
    "Green Hydrogen Fundamentals: Electrolysis, Storage & Safety",
    "Renewable Integration: Solar/Wind-to-Hydrogen Systems",
    "Policy & Regulatory Landscape in East Africa",
    "Project Development & Feasibility Analysis",
    "Career Pathways: Engineering, Policy, and Investment"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 text-white mb-6">
            <FlaskConical className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Green <span className="text-amber-600">Hydrogen</span> for Africa’s Future
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Unlock the potential of clean hydrogen to drive industrial growth, energy security, and climate leadership.
          </p>
        </div>
      </section>

      {/* What is Green H2? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Green Hydrogen?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hydrogen produced by splitting water using renewable electricity 100% clean, scalable, and transformative.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <Wind className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Renewable-Powered</h3>
              <p className="text-gray-700">
                Made using solar or wind energy no fossil fuels, no emissions.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <Factory className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Decarbonization</h3>
              <p className="text-gray-700">
                Replaces coal and gas in steel, fertilizer, and chemical production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Green Hydrogen Essentials Webinar</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              A free, expert-led session to understand the technology, opportunities, and career paths in green hydrogen.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Free Introductory Webinar</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>November 10–13, 2025 • 7:00–8:00 PM EAT</span>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Free to Attend
              </span>
            </div>
            <p className="text-gray-700 mb-6">
              Unlocking the Potential of Green Hydrogen: Training for a Sustainable Future
            </p>
            <ul className="space-y-3 mb-6">
              {hydrogenBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors text-center"
            >
              Register Now (Link Coming Soon)
            </a>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Africa’s Hydrogen Economy</h2>
          <p className="mb-8 opacity-90">
            Stay informed about training, policy updates, and investment opportunities.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenHydrogen;
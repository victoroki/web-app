import React, { useState, useEffect } from 'react';
import { Sun, Shield, Droplets, Thermometer, Check, Phone, Mail, Star } from 'lucide-react';
import img10kw from './img/10kw.jpeg'
import img1kw from './img/1kw.jpeg'
import img30kw from './img/30kw.jpeg'
import img20kw from './img/20kw.jpeg'
import img15kw from './img/15kw.jpeg'
import img8kw from './img/8kw.jpeg'
import img5kw from './img/5kw.jpeg'
import img3kw from './img/3kw.jpeg'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('solar');

  const solarKits = [
    { size: '1 kW', price: 100000, popular: false },
    { size: '1.5 kW', price: 150000, popular: false },
    { size: '3 kW', price: 350000, popular: true },
    { size: '5 kW', price: 550000, popular: false },
    { size: '8 kW', price: 950000, popular: false },
    { size: '10 kW', price: 1100000, popular: false },
    { size: '12 kW', price: 1300000, popular: false },
    { size: '15 kW', price: 1800000, popular: false },
    { size: '20 kW', price: 2200000, popular: false },
    { size: '25 kW', price: 2600000, popular: false },
    { size: '30 kW', price: 3100000, popular: false }
  ];

  const solarPumps = [
    {
      model: 'GRUNDFOS Solar Water Pump',
      maxHead: '120 m',
      maxFlow: '2,750 L/hr',
      suitableFor: 'High flow, deep pumping',
      price: 280000,
      includes: 'Pump, controller, solar panels, cables'
    },
    {
      model: 'LORENTZ Solar Pump',
      maxHead: '120 m',
      maxFlow: '2,750 L/hr',
      suitableFor: 'High flow, deep pumping',
      price: 99000,
      includes: 'Pump, controller, solar panels, cables'
    },
    {
      model: 'PEDROLO Water Pump',
      maxHead: '65 m / 215 feet',
      maxFlow: '3,000 L/hr',
      suitableFor: 'Irrigation up to 3 acres',
      price: 129000,
      includes: 'Submersible pump, 50m electric cable, controller, Climate Smart battery fittings, 4 LED bulbs, USB charging ports'
    },
    {
      model: 'ROOMNY Solar Water Pump 1',
      maxHead: '30 m / 100 feet',
      maxFlow: '1,100 L/hr',
      suitableFor: 'Irrigation up to 1 acre',
      price: 75000,
      includes: 'Submersible pump, 50m electric cable, controller, 310W solar panel, 50m HDPE pipe and fittings'
    },
    {
      model: 'ROOMNY Solar Water Pump 2',
      maxHead: '30 m / 100 feet',
      maxFlow: '2,750 L/hr',
      suitableFor: 'Irrigation up to 2 acres',
      price: 99000,
      includes: 'Submersible pump, 50m electric cable, controller, 2 x 310W solar panels, 50m HDPE pipe and fittings'
    },
    {
      model: 'ROOMNY Solar Water Pump 3',
      maxHead: '65 m / 215 feet',
      maxFlow: '3,000 L/hr',
      suitableFor: 'Irrigation up to 3 acres',
      price: 129000,
      includes: 'Submersible pump, 50m electric cable, controller, Climate Smart battery fittings, 4 LED bulbs, USB charging ports'
    }
  ];

  const solarKitImages = {
  '1 kW': img1kw,
  '3 kW': img3kw,
  '5 kW': img5kw,
  '8 kW': img8kw,
  '10 kW': img10kw,
  '15 kW': img15kw,
  '20 kW': img20kw,
  '30 kW': img30kw,
};

  const cctvPackages = [
    { cameras: 3, price: 28000 },
    { cameras: 4, price: 33000 },
    { cameras: 5, price: 40000 },
    { cameras: 6, price: 49000 },
    { cameras: 7, price: 54000 },
    { cameras: 8, price: 60000 },
    { cameras: 9, price: 70000 },
    { cameras: 10, price: 74000 },
    { cameras: 11, price: 80000 },
    { cameras: 12, price: 94000 },
    { cameras: 13, price: 100000 }
  ];

  const solarHeating = [
    { size: '100 Liters', price: 65000, capacity: '2-3 people', notes: 'Flat plate or evacuated tube' },
    { size: '150 Liters', price: 75000, capacity: '3-4 people', notes: 'Flat plate or evacuated tube' },
    { size: '200 Liters', price: 90000, capacity: '4-6 people', notes: 'Flat plate or evacuated tube' },
    { size: '300 Liters', price: 120000, capacity: '6-8 people', notes: 'Flat plate or evacuated tube' },
    { size: '500 Liters', price: 180000, capacity: '10+ people', notes: 'Commercial/large household' }
  ];

  const hvacServices = [
    { service: 'Split AC Installation (1 room)', price: 45000, note: 'incl. unit' },
    { service: 'Multi-room AC Installation', price: 120000, note: 'starting from' },
    { service: 'Annual AC Servicing', price: 7000, note: 'per unit' },
    { service: 'Heating System Installation', price: 60000, note: 'starting from' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };



  const tabs = [
    { id: 'solar', label: 'Solar Kits', icon: <Sun className="w-5 h-5" /> },
    { id: 'pumps', label: 'Solar Pumps', icon: <Droplets className="w-5 h-5" /> },
    { id: 'cctv', label: 'CCTV Systems', icon: <Shield className="w-5 h-5" /> },
    { id: 'heating', label: 'Solar Heating', icon: <Thermometer className="w-5 h-5" /> },
    { id: 'hvac', label: 'HVAC Services', icon: <Thermometer className="w-5 h-5" /> }
  ];

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash);
      }
    };

    // Check for hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to section when tab changes
  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById(`${activeTab}-section`);
      if (element) {
        // Small delay to ensure the content is rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    };

    scrollToSection();
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Update URL hash without triggering a page reload
    window.history.pushState(null, null, `#${tabId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Pricing</h1>
            <p className="text-xl leading-relaxed">
              Transparent pricing for all your solar, security, and electrical needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-red-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Solar Kits */}
          {activeTab === 'solar' && (
            <div id="solar-section" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Solar Kit Pricing</h2>
                <p className="text-gray-600">Complete solar packages with installation included</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solarKits.map((kit) => (
                  <div key={kit.size} className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${kit.popular ? 'ring-2 ring-red-800' : ''}`}>
                    {kit.popular && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </span>
                      </div>
                    )}
                    
                    {/* Image Section */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={solarKitImages[kit.size]}
                        alt={`${kit.size} Solar Kit`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback content if image fails to load */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center" style={{display: 'none'}}>
                        <Sun className="w-16 h-16 text-red-800 opacity-50" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{kit.size} Kit</h3>
                        <div className="text-3xl font-bold text-red-800 mb-4">{formatPrice(kit.price)}</div>
                        <div className="text-gray-600 mb-6">Complete installation included</div>
                        
                        <div className="text-left mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Package includes:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {['Inverter', 'AC & DC cables', 'Solar panels', 'Batteries', 'Mounting rails', 'Circuit breakers (DC & AC)', 'Lugs, cable ties, tapes, nails', 'Professional installation'].map((item, index) => (
                              <li key={index} className="flex items-center">
                                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Price may vary depending on the brands and specific requirements.
                </p>
              </div>
            </div>
          )}

          {/* Solar Pumps */}
          {activeTab === 'pumps' && (
            <div id="pumps-section" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Solar Water Pumps</h2>
                <p className="text-gray-600">Efficient water pumping solutions for irrigation and domestic use</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {solarPumps.map((pump, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{pump.model}</h3>
                      <div className="text-2xl font-bold text-red-800">{formatPrice(pump.price)}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Max Head</div>
                        <div className="font-semibold">{pump.maxHead}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Max Flow Rate</div>
                        <div className="font-semibold">{pump.maxFlow}</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500">Suitable For</div>
                      <div className="font-semibold text-green-600">{pump.suitableFor}</div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">Includes</div>
                      <div className="text-sm text-gray-700">{pump.includes}</div>
                    </div>
                    
                    <button className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CCTV Systems */}
          {activeTab === 'cctv' && (
            <div id="cctv-section" className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">CCTV Systems</h2>
                <p className="text-gray-600">Professional security camera installations</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cctvPackages.map((pkg) => (
                  <div key={pkg.cameras} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="text-4xl font-bold text-red-800 mb-2">{pkg.cameras}</div>
                    <div className="text-gray-600 mb-4">Cameras</div>
                    <div className="text-2xl font-bold text-gray-800 mb-6">{formatPrice(pkg.price)}</div>
                    
                    <div className="text-left mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Package includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {['2MP HD cameras', '1080P DVR', 'Surveillance HDD', '25m cable per camera', 'Power supply', 'Adapter boxes', 'HDMI, power jack', 'Cable ties, tapes, nails', 'Professional installation'].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> TV monitor not included in the package.
                </p>
              </div>
            </div>
          )}

          {/* Solar Heating */}
          {activeTab === 'heating' && (
            <div id="heating-section" className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Solar Water Heating</h2>
                <p className="text-gray-600">Eco-friendly water heating solutions</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solarHeating.map((system) => (
                  <div key={system.size} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{system.size}</h3>
                      <div className="text-2xl font-bold text-red-800">{formatPrice(system.price)}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500">Capacity</div>
                      <div className="font-semibold text-green-600">{system.capacity}</div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-500">Type</div>
                      <div className="text-sm text-gray-700">{system.notes}</div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Package includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {['Solar water heater tank', 'Solar collector', 'Mounting frame', 'Plumbing kit', 'Installation accessories', 'Full installation'].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Price may vary depending on the brand, roof type, and plumbing requirements.
                </p>
              </div>
            </div>
          )}

          {/* HVAC Services */}
          {activeTab === 'hvac' && (
            <div id="hvac-section" className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">HVAC Services</h2>
                <p className="text-gray-600">Heating, ventilation, and air conditioning solutions</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hvacServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.service}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-red-800">{formatPrice(service.price)}</div>
                      <div className="text-sm text-gray-500">({service.note})</div>
                    </div>
                    
                    <button className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Prices vary depending on brand, capacity, and site conditions. Contact us for a tailored quote.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600">Quality products, professional installation, and ongoing support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Installation Included</h3>
              <p className="text-gray-600">All our packages include professional installation by certified technicians</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We use only premium brands and components for lasting performance</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and maintenance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a personalized quote and consultation</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:0743076376" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: 0743076376
            </a>
            <a href="mailto:torchbearertechnologies@gmail.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          
          <p className="text-lg">
            Get a free consultation and customized quote for your specific needs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
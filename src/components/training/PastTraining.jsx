import { Calendar } from 'lucide-react';

const PastWebinars = () => {
const pastWebinars = [
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING",
    "date": "February 21",
    "time": "N/A",
    "speaker": "N/A",
    "description": "Four weeks training for Solar EPRA T2 & T3. T2: KSH 5000, T3: KSH 7000.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR SYSTEMS DESIGN AND SIZING (PVSYST & SKETCHUP, SMA SUNNY DESIGN TOOL)",
    "date": "March 5",
    "time": "07:30 PM - 09:30 PM",
    "speaker": "N/A",
    "description": "Training on solar systems design and sizing using PVSYST, SketchUp, and SMA Sunny Design Tool. Cost: 12 USD / KSH 1500.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING",
    "date": "March 10 - 28",
    "time": "07:40 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Solar EPRA T2 & T3 training. T2: KSH 5000, T3: KSH 7000. For more info call/WhatsApp +254789173033.",
    "registrationLink": "tel:+254789173033"
  },
  {
    "title": "SOLAR SYSTEM DESIGN BASICS (PVSYST & SKETCHUP)",
    "date": "April 17",
    "time": "04:00 PM - 05:00 PM",
    "speaker": "N/A",
    "description": "Basics of solar system design using PVSYST & SketchUp. Cost: KSH 3000.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR SYSTEM DESIGN & SIZING (PVSYST & SKETCHUP, SMA SUNNY DESIGN TOOL)",
    "date": "June 9 - 13",
    "time": "07:30 PM - 09:30 PM",
    "speaker": "N/A",
    "description": "Solar system design and sizing training using PVSYST, SketchUp, and SMA Sunny Design Tool. Cost: 12.99 USD.",
    "registrationLink": "N/A"
  },
  {
    "title": "SOLAR SYSTEM DESIGN BASICS (PVSYST & SKETCHUP)",
    "date": "July 2",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "Solar system design basics using PVSYST & SketchUp. Cost: KSH 1050.",
    "registrationLink": "N/A"
  },
  {
    "title": "NITA EXAM COACHING",
    "date": "July 7 - 25",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "N/A",
    "description": "NITA exam coaching. T2 - KSH 5000, T3 - KSH 7000.",
    "registrationLink": "N/A"
  }
];

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Webinar Recordings</h3>
      <div className="space-y-6">
        {pastWebinars.map((webinar, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{webinar.date}</span>
                </div>
                <p className="text-gray-700"><strong>Speaker:</strong> {webinar.speaker}</p>
                <p className="text-gray-700 mt-2">{webinar.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={webinar.recordingLink}
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-center"
                >
                  Watch Recording
                </a>
                <a
                  href={webinar.slidesLink}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Download Slides
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastWebinars;
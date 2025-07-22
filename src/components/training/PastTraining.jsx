import { Calendar, Linkedin } from 'lucide-react';

const PastWebinars = () => {
  // Speaker LinkedIn profiles mapping
  const speakerLinkedIn = {
    "Dalton and Emmanuel": "https://linkedin.com/in/dalton-profile",
    "Eng Hanane Oudli": "https://linkedin.com/in/hanane-profile",
    "Dalton and Mazin": "https://linkedin.com/in/mazin-profile"
  };

  const pastWebinars = [
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING",
      "date": "January 27",
      "time": "8:00 - 9:00",
      "speaker": "Dalton and Emmanuel",
      "description": "Four weeks training for Solar EPRA T2 & T3: KSH 3500",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING",
      "date": "March 5",
      "time": "07:40 - 09:OO PM",
      "speaker": "Dalton and Emmanuel",
      "description": "Training on SOLAR EPRA T2 & T3. Cost:  KSH 3500.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING",
      "date": "March 5",
      "time": "07:40 - 09:OO PM",
      "speaker": "Dalton and Emmanuel",
      "description": "Training on SOLAR EPRA T2 & T3. Cost:  KSH 3500.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING",
      "date": "March 10 - 28",
      "time": "07:40 PM - 09:00 PM",
      "speaker": "Dalton and Emmanuel",
      "description": "Training on SOLAR SYSTEMS DESIGN AND SIZING PVSYST &SKETCHUP",
      "registrationLink": ""
    },
    {
      "title": "SOLAR SYSTEM TESTING & COMMISSIONING",
      "date": "April 17",
      "time": "04:00 PM - 05:00 PM",
      "speaker": "Eng Hanane Oudli",
      "description": "Basics of solar system design Solar system . Cost: USD 13",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR SYSTEM DESIGN & SIZING (PVSYST & SKETCHUP)",
      "date": "June 9 - 13",
      "time": "07:30 PM - 09:30 PM",
      "speaker": "Dalton and Mazin",
      "description": "Solar system design and sizing training using PVSYST, SketchUp, and Excell Designing. Cost: 13 USD.",
      "registrationLink": "N/A"
    },
  ];

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Training Recordings</h3>
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
                <div className="flex items-center">
                  <p className="text-gray-700"><strong>Speaker:</strong> {webinar.speaker}</p>
                  {speakerLinkedIn[webinar.speaker] && (
                    <a 
                      href={speakerLinkedIn[webinar.speaker]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      {/* <Linkedin className="w-4 h-4" /> */}
                    </a>
                  )}
                </div>
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
import { Calendar, Linkedin } from 'lucide-react';

const PastTraining = () => {
  // Speaker LinkedIn profiles mapping
  const speakerLinkedIn = {
    "Dalton and Emmanuel": "https://linkedin.com/in/dalton-profile",
    "Eng Hanane Oudli": "https://linkedin.com/in/hanane-profile",
    "Dalton and Mazin": "https://linkedin.com/in/mazin-profile"
  };

  const pastWebinars = [
    {
    "title": "NITA EXAM COACHING",
    "date": "July 31",
    "time": "08:00 PM - 09:00 PM",
    "description": "NITA exam coaching.",
    "features": [
      "Solar T1 and T2",
      "Electrical Grade III, Grade II " 
    ],
    "price": "Ksh 1050",
    "earlyBirdPrice": "N/A",
    "link":"https://forms.gle/VZmbdWH6P4bNm5X9A"
  },
    {
    "title": "PERSONAL BRANDING",
    "date": "August 6 - 7",
    "time": "07:00 PM - 08:00 PM",
    "description": "Presonal Branding",
    "features": [
      "Proffesional Academic Research Tool",
      "Online Presence",
      "Graphic design tool",
      "Company and Business Registration"
    ],
    "price": "KSH 1050",
    "earlyBirdPrice": "N/A",
    "link":"https://forms.gle/Ym4kiBHmcheEZR799"
  },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING",
      "date": "January 27",
      "time": "8:00 - 9:00",
      "speaker": "Dalton and Emmanuel",
      "description": "Four weeks training for Solar EPRA T2 & T3: KSH 3500",
      "registrationLink": "N/A",
      "recordingLink": "https://selar.com/5f9071",
      "slidesLink": "https://selar.com/5f9071"
    },
    // {
    //   "title": "SOLAR EPRA T2 & T3 TRAINING",
    //   "date": "March 5",
    //   "time": "07:40 - 09:OO PM",
    //   "speaker": "Dalton and Emmanuel",
    //   "description": "Training on SOLAR EPRA T2 & T3. Cost:  KSH 3500.",
    //   "registrationLink": "N/A",
    //   "recordingLink":"https://selar.com/5f9071",
    //   "slidesLink":"https://selar.com/5f9071"
    // },
    {
      "title": " SOLAR SYSTEMS  DESIGN AND SIZING PVSYST &SKETCHUP",
      "date": "March 5",
      "time": "07:40 - 09:OO PM",
      "speaker": "Mazin",
      "description": "Training on SOLAR EPRA T2 & T3. Cost:  KSH 3500.",
      "registrationLink": "N/A",
      "recordingLink": "https://selar.com/5f9071",
      "slidesLink": "https://selar.com/5f9071"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING",
      "date": "March 10 - 28",
      "time": "07:40 PM - 09:00 PM",
      "speaker": "Dalton and Emmanuel",
      "description": "Training on SOLAR SYSTEMS DESIGN AND SIZING PVSYST &SKETCHUP",
      "registrationLink": "",
      "recordingLink": "https://selar.com/5f9071",
      "slidesLink": "https://selar.com/5f9071"
    },
    {
      "title": "SOLAR SYSTEM TESTING & COMMISSIONING",
      "date": "April 17",
      "time": "04:00 PM - 05:00 PM",
      "speaker": "Eng Hanane Oudli",
      "description": "Basics of solar system design Solar system . Cost: USD 13",
      "registrationLink": "N/A",
      "recordingLink":"https://selar.com/1z1522",
      "slidesLink":"https://selar.com/1z1522"
    },
    {
      "title": "SOLAR SYSTEM DESIGN & SIZING (PVSYST & SKETCHUP)",
      "date": "June 9 - 13",
      "time": "07:30 PM - 09:30 PM",
      "speaker": "Dalton and Mazin",
      "description": "Solar system design and sizing training using PVSYST, SketchUp, and Excell Designing. Cost: 13 USD.",
      "registrationLink": "N/A",
      "recordingLink":"https://selar.com/40144h",
      "slidesLink":"https://selar.com/40144h"
    },
      {
    "title": "SOLAR T2 AND T3 EPRA TRAINING",
    "date": "July 7 - 25",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "Dalton and Emmanuel",
    "description": "Get knowledge that will help you acquire your license",
    "registrationLink": "N/A",
    "recordingLink": "https://selar.com/5f9071",
    "slidesLink": "https://selar.com/5f9071"
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

export default PastTraining;
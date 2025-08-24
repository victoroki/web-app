import { Calendar, Clock } from 'lucide-react';

const UpcomingWebinars = () => {
  const upcomingWebinars = [
    {
      "title": " SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "August 17",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "Dalton and Emmanuel",
      "description": "Solar EPRA T2 AND T3 Training",
      "registrationLink": "https://forms.gle/q9BTYTD6zVKMDu7j6"
    },

    {
      "title": " SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "August 31",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "Dalton and Emmanuel",
      "description": "Solar EPRA T2 AND T3 Training",
      "registrationLink": "https://forms.gle/pfe1hd3hM9eM7SXU8"
    },
    {
      "title": "Project Management | Solar Plants Operation and Maintenance",
      "date": "September 5, 2025",
      "time": "13:00 – 14:00 EAT / 11:00 – 12:00 CET",
      "description": "Managing solar plants with a focus on efficient operation and maintenance",
      "features": [
        "Operation best practices",
        "Maintenance strategies",
        "Project management insights"
      ],
      "price": "N/A",
      "earlyBirdPrice": "N/A",
      "registrationLink": "https://selar.com/8717336764"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS WEBINAR",
      "date": "October 2",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "Dalton and Mazin",
      "description": "Training on SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS",
      "registrationLink": "https://forms.gle/GjYMgP6yTjxvWMuz6"
    },
    {
      "title": "NITA EXAM COACHING & EPRA T2 & T3 SOLAR WEBINAR",
      "date": "November 2",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "Dalton and Mazin",
      "description": "NITA Training",
      "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSeaalg5gi_zhkwA4tYlfhQbQWjSv7TswY01lERnvDgjXMWCgg/viewform"
    },
    {
      "title": "SOLAR EPRA T2 & T3  WEBINAR",
      "date": "January 8 2026",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "Dalton and Mazin",
      "description": "Solar EPRA training",
      "registrationLink": "https://forms.gle/vopftMooByv9kseBA"
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingWebinars.map((webinar, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h4>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </span>
              </div>
              {/* <p className="text-gray-700 mb-4"><strong>Speaker:</strong> {webinar.speaker}</p> */}
              <p className="text-gray-700 mb-6">{webinar.description}</p>
              <a
                href={webinar.registrationLink}
                className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingWebinars;
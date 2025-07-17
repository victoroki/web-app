import { Calendar, Clock } from 'lucide-react';

const UpcomingWebinars = () => {
  const upcomingWebinars = [
    {
      "title": "NITA EXAM COACHING",
      "date": "July 31",
      "time": "07:00 PM - 08:30 PM",
      "speaker": "N/A",
      "description": "NITA exam coaching. T2 - KSH 5000, T3 - KSH 7000.",
      "registrationLink": "N/A"
    },
    {
      "title": "ELECTRICAL TRAINING",
      "date": "August 4 - 22",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Electrical Training. Cost: 60 USD.",
      "registrationLink": "N/A"
    },
    {
      "title": "PERSONAL BRANDING",
      "date": "August 6 - 7",
      "time": "07:00 PM - 08:00 PM",
      "speaker": "N/A",
      "description": "Personal branding training. Cost: KSH 1050.",
      "registrationLink": "N/A"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
      "date": "August 18 - 22",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Training on SketchUp, PVSYST, Homer & AutoCAD designs. Cost: KSH 3000.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "August 31",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free webinar for Solar EPRA T2 & T3 training.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "September 8 - 26",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
      "registrationLink": "tel:+254789173033"
    },
    {
      "title": "NITA EXAM COACHING & EPRA T2 & T3 SOLAR WEBINAR",
      "date": "October 2",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free webinar combining NITA Exam Coaching and EPRA T2 & T3 Solar.",
      "registrationLink": "N/A"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS WEBINAR",
      "date": "October 6 - 24",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Webinar on SketchUp, PVSYST, Homer & AutoCAD designs. Cost: KSH 6000.",
      "registrationLink": "N/A"
    },
    {
      "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
      "date": "November 2",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Free training on SketchUp, PVSYST, Homer & AutoCAD designs.",
      "registrationLink": "N/A"
    },
    {
      "title": "NITA EXAM COACHING",
      "date": "November 10 - 14",
      "time": "07:00 PM - 08:00 PM",
      "speaker": "N/A",
      "description": "NITA exam coaching. Cost: KSH 3000.",
      "registrationLink": "N/A"
    },
    {
      "title": "ELECTRICAL TRAINING",
      "date": "November 17 - December 5",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Electrical Training. For more info call/WhatsApp +254789173033.",
      "registrationLink": "tel:+254789173033"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "December 8 - 12",
      "time": "08:00 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Solar EPRA T2 & T3 training webinar. T2: KSH 5000, T3: KSH 7000.",
      "registrationLink": "N/A"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "January 8",
      "time": "07:00 PM - 08:00 PM",
      "speaker": "N/A",
      "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
      "registrationLink": "tel:+254789173033"
    },
    {
      "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
      "date": "January 12 - 30",
      "time": "07:30 PM - 09:00 PM",
      "speaker": "N/A",
      "description": "Solar EPRA T2 & T3 training webinar. T2: KSH 5000, T3: KSH 7000.",
      "registrationLink": "N/A"
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
              <p className="text-gray-700 mb-4"><strong>Speaker:</strong> {webinar.speaker}</p>
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
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const UpcomingTraining = () => {
 const upcomingCourses = [
  {
    "title": "NITA EXAM COACHING",
    "date": "July 31",
    "time": "07:00 PM - 08:30 PM",
    "description": "NITA exam coaching. T2 - KSH 5000, T3 - KSH 7000.",
    "features": [
      "Exam syllabus coverage",
      "Practice tests" 
      // Based on typical NITA coaching, more specific features are not provided in the original text
    ],
    "price": "T2 - KSH 5000, T3 - KSH 7000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "ELECTRICAL TRAINING",
    "date": "August 4 - 22",
    "time": "07:30 PM - 09:00 PM",
    "description": "Electrical Training.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "60 USD",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "PERSONAL BRANDING",
    "date": "August 6 - 7",
    "time": "07:00 PM - 08:00 PM",
    "description": "Personal branding training.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "KSH 1050",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
    "date": "August 18 - 22",
    "time": "08:00 PM - 09:00 PM",
    "description": "Training on SketchUp, PVSYST, Homer & AutoCAD designs.",
    "features": [
      "SketchUp software training",
      "PVSYST software training",
      "Homer software training",
      "AutoCAD software training"
    ],
    "price": "KSH 3000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "August 31",
    "time": "07:30 PM - 09:00 PM",
    "description": "Free webinar for Solar EPRA T2 & T3 training.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "September 8 - 26",
    "time": "08:00 PM - 09:00 PM",
    "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "NITA EXAM COACHING & EPRA T2 & T3 SOLAR WEBINAR",
    "date": "October 2",
    "time": "08:00 PM - 09:00 PM",
    "description": "Free webinar combining NITA Exam Coaching and EPRA T2 & T3 Solar.",
    "features": [
      "NITA Exam Coaching",
      "EPRA T2 Solar insights",
      "EPRA T3 Solar insights"
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS WEBINAR",
    "date": "October 6 - 24",
    "time": "07:30 PM - 09:00 PM",
    "description": "Webinar on SketchUp, PVSYST, Homer & AutoCAD designs.",
    "features": [
      "SketchUp software insights",
      "PVSYST software insights",
      "Homer software insights",
      "AutoCAD software insights"
    ],
    "price": "KSH 6000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SKETCHUP, PVSYST, HOMER & AUTOCAD DESIGNS TRAINING",
    "date": "November 2",
    "time": "07:30 PM - 09:00 PM",
    "description": "Free training on SketchUp, PVSYST, Homer & AutoCAD designs.",
    "features": [
      "SketchUp software training",
      "PVSYST software training",
      "Homer software training",
      "AutoCAD software training"
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "NITA EXAM COACHING",
    "date": "November 10 - 14",
    "time": "07:00 PM - 08:00 PM",
    "description": "NITA exam coaching.",
    "features": [
      "Exam syllabus coverage",
      "Practice tests"
    ],
    "price": "KSH 3000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "ELECTRICAL TRAINING",
    "date": "November 17 - December 5",
    "time": "07:30 PM - 09:00 PM",
    "description": "Electrical Training. For more info call/WhatsApp +254789173033.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "N/A", // Price not specified
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "December 8 - 12",
    "time": "08:00 PM - 09:00 PM",
    "description": "Solar EPRA T2 & T3 training webinar.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "T2-KSH 5000, T3-KSH 7000",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "January 8",
    "time": "07:00 PM - 08:00 PM",
    "description": "Free webinar for Solar EPRA T2 & T3 training. For more info call/WhatsApp +254789173033.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "FREE",
    "earlyBirdPrice": "N/A"
  },
  {
    "title": "SOLAR EPRA T2 & T3 TRAINING WEBINAR",
    "date": "January 12 - 30",
    "time": "07:30 PM - 09:00 PM",
    "description": "Solar EPRA T2 & T3 training webinar.",
    "features": [
      "N/A" // No specific features listed in the original text
    ],
    "price": "T2-KSH 5000, T3-KSH 7000",
    "earlyBirdPrice": "N/A"
  }
];

  return (
    <section id="upcoming" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-amber-600">Training Programs</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Explore our upcoming professional development programs and secure your spot today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-amber-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{course.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.time}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Regular Price:</span>
                    <span className="text-xl font-bold text-amber-600">{course.price}</span>
                  </div>
                  {/* <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-medium">Early Bird:</span>
                    <span className="text-sm font-bold text-amber-600">{course.earlyBirdPrice}</span>
                  </div> */}
                </div>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Want to be notified about future training?</h3>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTraining;
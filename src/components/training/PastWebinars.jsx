import { Calendar } from 'lucide-react';

const PastWebinars = () => {
const pastWebinars = [
  {
    "title": "SOLAR AND ELECTRICAL EPRA LICENSING INSIGHTS WEBINAR",
    "date": "January 15",
    "time": "N/A",
    "speaker": "Dalton",
    "description": "Free webinar for insights into solar and electrical EPRA licensing.",
    "registrationLink": "tel:+254789173033",
     "slidesLink":"https://drive.google.com/file/d/1jqeVvclOd7FHPoJ9nU0487vrmG6j09YU/view?usp=drive_link",
     "recordingLink":"https://youtu.be/RnhmLcWD6mA?si=PobjZjYuWCun2eV1"
  },
    {
    "title": "SOLAR AND SYSTEM DESIGN BASICS PVSYST AND SKETCHUP",
    "date": "June 5",
    "time": "N/A",
    "speaker": "Dalton and Mazin",
    "description": "Free webinar for solar system design on Pvsyst and Sketchup",
   "slidesLink":"https://drive.google.com/file/d/1BDI53Q-q-wnykLan6mHtvcP9fvxvdbvO/view?usp=sharing",
    "recordingLink":"https://youtu.be/CKV7Xo2T0Co?si=7KuNFAL0II0bZUnd"
  },
  {
    "title": "SMA SUNNY DESIGN TOOL WEBINAR",
    "date": "June 22",
    "time": "07:40 PM - 09:00 PM",
    "speaker": "Dalton",
    "description": "Free webinar for Solar SMA sunny desgn Tool.",
    "slidesLink":"https://drive.google.com/file/d/1BI1Gl9dIkJ6_kMEZiAUM1VZZossLJzCJ/view?usp=drive_link",
  
  },
  {
    "title": "SOLAR EPRA T2, T3 AND ELECTRICAL TRAINING LICENSING",
    "date": "July 2",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "Dalton",
    "description": "Solar EPRA training t2, t3 and electrical training.",
    "registrationLink": "N/A",
    "recordingLink":"https://youtu.be/RnhmLcWD6mA?si=PobjZjYuWCun2eV1",
    "slidesLink":"https://drive.google.com/file/d/1jqeVvclOd7FHPoJ9nU0487vrmG6j09YU/view?usp=drive_link"
  },

      {
    "title": "Solar Design Basics - Pvysist and Sketchup",
    "date": "July 13",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "Dalton and Aziz",
    "description": "Training on Solar Design - Pvysist and Sketchup",
    "registrationLink": "N/A",
    "slidesLink":"https://drive.google.com/file/d/1_tkz0gobPFcNT4wcVfFzykK19dTcn3Qa/view?usp=sharing",
    "recordingLink":"https://youtu.be/aUiVeFGODG4?si=DUSuXOI6lXxYffTe"
  },

    {
    "title": "Solar Design - cable sizing",
    "date": "July 20",
    "time": "08:00 PM - 09:00 PM",
    "speaker": "Dalton and Aziz",
    "description": "Training on Solar Design - cable sizing",
    "registrationLink": "N/A",
    "slidesLink":"https://ln5.sync.com/4.0/dl/bf76b9200#ensf64v5-9ghbbsrt-3uv4rtbz-jpcfp9ke"
  },

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
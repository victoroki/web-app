import { Award, BookOpen, Target, TrendingUp, Users, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import trophyImg from '../img/trophy.png';
import certificateImg from '../img/certificate.jpeg';

const AboutSection = () => {
  const [trainedProfessionals, setTrainedProfessionals] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Function to animate counting
    const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 3); // 60fps
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setter(Math.floor(current));
      }, 16);

      return timer;
    };

    const timer1 = animateCount(1000, setTrainedProfessionals);
    const timer2 = animateCount(2, setYearsOfExperience, 1000);
    const timer3 = animateCount(98, setSuccessRate);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of practical experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Industry-standard training programs designed for real-world applications"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Focused",
      description: "Training programs aligned with industry demands and career advancement"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Success",
      description: "Track record of successful professionals advancing in their careers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-600">Torchbearer Institute</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {/* <p className="text-lg text-gray-700 leading-relaxed">
              Torchbearer Institute provides professional training and development services to individuals and organizations
              seeking to excel in renewable energy and professional development. We offer comprehensive
              solutions and expert guidance from entry-level certification to advanced professional development programs.
            </p> */}

            <p className="text-lg text-gray-700 leading-relaxed">
              The global transition to clean energy is accelerating, but a significant lack of green skills in critical areas such as solar energy, green hydrogen, and e-mobility poses a major challenge. This skills gap hinders the industrial growth needed to address climate change, comply with environmental standards, and ensure safety compliance under frameworks such as OSHA. For instance, renewable energy sectors require specialized knowledge in system design, operation, and maintenance, while emerging fields like green hydrogen demand expertise in electrolysis technologies and integration with renewable power sources. Similarly, e-mobility expansion needs trained technicians and engineers to develop and maintain electric vehicle infrastructure.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of experienced professionals and certified instructors with industry-standard expertise
              and advanced teaching capabilities, ensuring you receive the highest quality training and practical skills
              needed for career success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{trainedProfessionals}+</h3>
                  <p className="text-gray-600">Trained Professionals</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{yearsOfExperience}+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{successRate}%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="py-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">GEA Awards 2025</h3>
            <p className="text-lg text-gray-700">Green Tech (Sustainability) Award</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 ring-1 ring-amber-200/50">
                <div className="w-full md:h-[340px] h-[220px] flex items-center justify-center">
                  <img
                    src={trophyImg}
                    alt="GEA Awards 2025 Trophy"
                    loading="lazy"
                    className="max-h-full w-auto object-contain transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="p-6 bg-white rounded-2xl border border-amber-200 h-full">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">About the Award</h4>
                <p className="text-gray-700">Recognizes excellence in sustainable technology.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-8">
            Recognizing excellence in sustainable technology.
          </p>
        </div>
        */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Award, BookOpen, Target, TrendingUp, Users, Star } from 'lucide-react';


const AboutSection = () => {
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
      description: "Track record of successful graduates advancing in their careers"
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
            <p className="text-lg text-gray-700 leading-relaxed">
              Torchbearer Institute provides professional training and development services to individuals and organizations
              seeking to excel in electrical engineering, renewable energy, and professional development. We offer comprehensive
              solutions and expert guidance from entry-level certification to advanced professional development programs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established with a commitment to excellence, we are dedicated to exceeding expectations by providing
              cost-effective, innovative training solutions without compromising the quality of education that we deliver.
              Our expertise encompasses every aspect of professional development needs including EPRA licensing, solar system
              design, electrical engineering, and professional branding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of experienced professionals and certified instructors with industry-standard expertise
              and advanced teaching capabilities, ensuring you receive the highest quality education and practical skills
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
                  <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                  <p className="text-gray-600">Trained Professionals</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">2+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
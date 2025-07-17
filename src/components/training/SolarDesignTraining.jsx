import {
  BookOpen,
  Sun,
  Zap,
  Users,
  Award,
  Target,
} from 'lucide-react';

const SolarDesignTraining = () => {
  const software = [
    { name: 'Autodesk AutoCAD', icon: <BookOpen className="w-8 h-8" /> },
    { name: 'PVsyst (Photovoltaic Software)', icon: <Sun className="w-8 h-8" /> },
    { name: 'SketchUp', icon: <Zap className="w-8 h-8" /> }
  ];

  const trainingLevels = [
    {
      title: 'Solar Training T1',
      description: 'Fundamentals of solar energy systems, basic design principles, and introduction to solar components',
      level: 'Beginner'
    },
    {
      title: 'Solar Training T2',
      description: 'Intermediate system design, load calculations, and solar panel sizing techniques',
      level: 'Intermediate'
    },
    {
      title: 'Solar Training T3',
      description: 'Advanced system optimization, grid integration, and complex project management',
      level: 'Advanced'
    }
  ];

  return (
    <section id="solar" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
            <Sun className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solar <span className="text-amber-600 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">System Design Training</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Master solar system design with industry-standard software and expert guidance from our experienced professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Training Overview</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Target className="w-6 h-6 mr-4 text-amber-100" />
                    <span className="text-lg font-medium">Comprehensive solar system design curriculum</span>
                  </div>
                  <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Award className="w-6 h-6 mr-4 text-amber-100" />
                    <span className="text-lg font-medium">Industry-standard software training</span>
                  </div>
                  <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <Users className="w-6 h-6 mr-4 text-amber-100" />
                    <span className="text-lg font-medium">Expert guidance from professionals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-2xl font-bold text-amber-800">Training Benefits</h4>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Learn industry-standard design practices</span>
                </div>
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Master professional software tools</span>
                </div>
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Gain practical project experience</span>
                </div>
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700 font-medium">Build expertise in renewable energy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Training Levels</h3>
              </div>
              <div className="space-y-6">
                {trainingLevels.map((training, index) => (
                  <div key={index} className="group relative p-6 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-amber-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                          {training.title}
                        </h4>
                        <span className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm rounded-full font-semibold shadow-md">
                          {training.level}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{training.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Software Training</h3>
              </div>
              <div className="space-y-4">
                {software.map((item, index) => (
                  <div key={index} className="group flex items-center p-6 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 shadow-md group-hover:shadow-lg transition-shadow">
                      <div className="text-green-600 group-hover:text-green-700 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        {item.name}
                      </span>
                      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarDesignTraining;
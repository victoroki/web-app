import UpcomingWebinars from './UpcomingWebinars';
import PastWebinars from './PastWebinars';

const WebinarsSection = () => {
  return (
    <section id="webinars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-amber-600">Webinars</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Join our expert-led webinars to gain valuable insights and stay updated with industry trends
          </p>
        </div>

        <UpcomingWebinars />
        <PastWebinars />
      </div>
    </section>
  );
};

export default WebinarsSection;
import { Star, Linkedin } from 'lucide-react';
import deborah from '../img/deborah.png'
import ezekiel from '../img/ezekiel.png'
import roy from '../img/roy.jpeg'
import ephantus from '../img/ephantus.png'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Torchberear delivered exceptional, tailored training that was instrumental in helping me earn my T2 license. The well-structured, practical sessions and knowledgeable instructors made complex topics easy to grasp and built my confidence. I highly recommend Torchberear for effective, professional training in the renewable energy sector.",
      author: "Ezekiel Omae",
      role: "Site Electromechanical Engineer",
      link: "https://www.linkedin.com/in/ezekiel-omae-229945199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: ezekiel
    },
    {
      quote: "Torchbearer Institute's solar training was practical, well‑structured, and made complex concepts easy to grasp. With their expert guidance, I passed my NITA T1 exam and quickly landed a job in the solar industry. I highly recommend Torchbearer Institute to anyone looking to launch a career in renewable energy.",
      author: "Deborah Nyakinyua",
      role: "Electrical and Electronic Engineer",
      link: 'https://www.linkedin.com/in/deborah-nyakinyua-6066h5037?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3B%2F7jPjEO0T7K%2FiFPTZK6p%2Bg%3D%3D',
      image: deborah
    },
    {
      quote: "Torchbearer offers hands-on, practical training that makes complex concepts easy to understand while building real-world skills. Their program covers key areas like solar energy conversion, system sizing, and commissioning, with strong mentorship and support. I highly recommend them for anyone pursuing a career in renewable energy.",
      author: "Roy Otieno",
      role: "Agricultural & Biosystems Engineer",
      link: 'https://www.linkedin.com/in/roy-otieno-60b190174?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bw3xM3kuXTiaQyD1p865guQ%3D%3D',
      image: roy
    },
    {
      quote: "I can say Torchbearer opened my door when it comes to understanding solar systems. I gained a lot starting with basics and now proudly I can say I am very comfortable with solar systems even though I am still learning. Currently, I can design, install, and troubleshoot solar systems.",
      author: "Ephantus Ngugi",
      role: "Solar Technician",
      link: "https://www.linkedin.com/in/ephantus-ngugi?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAC_4FtUBh88kw7_XbAKbyU1i2nnOkjv89VA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLK9HXZgiSlGrJXhPSRF%2FeQ%3D%3D",
      image: ephantus
    }

  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-amber-600">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Hear from our Alumnus who have transformed their careers through our training programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  <img className='rounded-full' src={testimonial.image} alt={testimonial.image} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
                      <h4 className="font-bold text-gray-900 hover:text-amber-600 transition-colors">{testimonial.author}</h4>
                    </a>
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      title="View LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-amber-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
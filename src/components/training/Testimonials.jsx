import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Torchbearer Institute's EPRA licensing training helped me advance from Class C2 to B within a year. Their practical approach made all the difference.",
      author: "James Mwangi",
      role: "Electrical Contractor"
    },
    {
      quote: "The solar design course was comprehensive and hands-on. I was able to start my own solar installation business immediately after completion.",
      author: "Sarah Omondi",
      role: "Solar Energy Entrepreneur"
    },
    {
      quote: "The professional branding training transformed how I present my electrical business. My client base has doubled in just three months!",
      author: "David Kamau",
      role: "Electrical Engineer"
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
            Hear from our graduates who have transformed their careers through our training programs
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
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
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
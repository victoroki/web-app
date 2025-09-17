import { Calendar, Clock, CheckCircle, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';

const UpcomingTraining = () => {
  const [upcomingCourses, setUpcomingCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  // Fetch upcoming training programs from API
  useEffect(() => {
    const fetchUpcomingTraining = async () => {
      const cachedData = localStorage.getItem("cachedUpcomingTrainings");
      const cacheTimestamp = localStorage.getItem("upcomingTrainingsTimestamp");
      const now = Date.now();
      if (cachedData && cacheTimestamp && now - parseInt(cacheTimestamp) < 3600000) {
        setUpcomingCourses(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        let response;
        try {
          response = await fetch("https://api.torchbearer.co.ke/api/training-programs/upcoming");
        } catch (err) { }
        if (!response || !response.ok) {
          response = await fetch("http://api.torchbearer.co.ke/api/training-programs/upcoming");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success) {
          const trainingPrograms = data.data.filter(program => {
            const programType = program.program_type?.toLowerCase();
            const startDate = new Date(program.start_date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return programType === "training" && startDate >= today;
          });
          setUpcomingCourses(trainingPrograms);
          localStorage.setItem("cachedUpcomingTrainings", JSON.stringify(trainingPrograms));
          localStorage.setItem("upcomingTrainingsTimestamp", now.toString());
        } else {
          throw new Error(data.message || "Failed to fetch training programs");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcomingTraining();
  }, []);


  // Format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const options = {
      month: 'long',
      day: 'numeric',
      year: start.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    };

    if (start.toDateString() === end.toDateString()) {
      return start.toLocaleDateString('en-US', options);
    }

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${start.getFullYear()}`;
    }

    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  };

  // Format time
  const formatTime = (startTime, endTime) => {
    const formatTimeString = (timeString) => {
      if (!timeString) return '';
      const time = new Date(`2000-01-01T${timeString}`);
      return time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    };

    const start = formatTimeString(startTime);
    const end = formatTimeString(endTime);

    if (start && end) {
      return `${start} - ${end}`;
    }
    return start || end || 'Time TBA';
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setSubscribeMessage('Please enter your email address');
      return;
    }

    setSubscribing(true);
    setSubscribeMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'training_page' }),
      });

      const data = await response.json();

      if (data.success) {
        setSubscribeMessage('✅ Successfully subscribed! You\'ll be notified about future training programs.');
        setEmail('');
      } else {
        setSubscribeMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      setSubscribeMessage('❌ Something went wrong. Please try again later.');
    } finally {
      setSubscribing(false);
    }
  };

  if (loading) {
    return (
      <section id="upcoming" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin mx-auto text-amber-600" />
            <p className="mt-4 text-gray-600">Loading upcoming training programs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="upcoming" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 font-medium">Unable to load training programs</p>
              <p className="text-red-500 text-sm mt-2">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

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

        {upcomingCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Training Programs</h3>
              <p className="text-gray-600 mb-6">
                We're currently planning our next batch of training programs.
                Subscribe to get notified when new programs are announced!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-amber-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDateRange(course.start_date, course.end_date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{formatTime(course.start_time, course.end_time)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{course.description}</p>

                  {course.features && course.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Price:</span>
                      <span className="text-xl font-bold text-amber-600">
                        {course.price ? `${course.currency || ''} ${course.price}` : 'Contact for pricing'}
                      </span>
                    </div>
                    {/* {course.early_bird_price && (
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-medium">Early Bird:</span>
                        <span className="text-sm font-bold text-green-600">
                          {course.currency || ''} {course.early_bird_price}
                        </span>
                      </div>
                    )} */}
                  </div>

                  {course.registration_link ? (
                    <a href={course.registration_link} target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg">
                        Register Now
                      </button>
                    </a>
                  ) : (
                    <button
                      className="w-full bg-gray-400 text-white py-3 rounded-lg font-bold cursor-not-allowed"
                      disabled
                    >
                      Registration Opens Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Want to be notified about future training?</h3>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                disabled={subscribing}
              />
              <button
                type="submit"
                disabled={subscribing}
                className="bg-amber-600 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-amber-700 transition-colors disabled:bg-amber-400"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {subscribeMessage && (
              <p className={`mt-3 text-sm ${subscribeMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {subscribeMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTraining;
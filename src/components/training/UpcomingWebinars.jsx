import { Calendar, Clock, CheckCircle, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';

const UpcomingWebinars = () => {
  const [upcomingWebinars, setUpcomingWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch upcoming webinars from API
  useEffect(() => {
    const fetchUpcomingWebinars = async () => {
      const cachedData = localStorage.getItem("cachedUpcomingWebinars");
      const cacheTimestamp = localStorage.getItem("upcomingWebinarsTimestamp");
      const now = Date.now();
      if (cachedData && cacheTimestamp && now - parseInt(cacheTimestamp) < 3600000) {
        setUpcomingWebinars(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        let response;
        try {
          response = await fetch("https://admin.torchbearer.co.ke/api/training-programs");
        } catch (err) {
          response = await fetch("http://admin.torchbearer.co.ke/api/training-programs");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success) {
          const webinarPrograms = data.data.filter(program => {
            const programType = program.program_type?.toLowerCase();
            const startDate = new Date(program.start_date);
            const today = new Date('2025-09-28T22:15:00.000Z'); // September 28, 2025, 10:15 PM EAT
            today.setHours(0, 0, 0, 0); // Normalize to midnight for date comparison
            return programType === "webinar" && startDate >= today && program.status?.toLowerCase() === "upcoming";
          });
          // Parse features safely
          const parsedPrograms = webinarPrograms.map(program => {
            let parsedFeatures = [];
            if (program.features) {
              try {
                parsedFeatures = typeof program.features === 'string'
                  ? JSON.parse(program.features)
                  : Array.isArray(program.features)
                    ? program.features
                    : [];
              } catch (e) {
                console.error(`Failed to parse features for program ${program.id}:`, e);
                parsedFeatures = [];
              }
            }
            return {
              ...program,
              features: parsedFeatures,
            };
          });
          setUpcomingWebinars(parsedPrograms);
          localStorage.setItem("cachedUpcomingWebinars", JSON.stringify(parsedPrograms));
          localStorage.setItem("upcomingWebinarsTimestamp", now.toString());
        } else {
          throw new Error(data.message || "Failed to fetch webinar programs");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcomingWebinars();
  }, []);

  // Format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const options = {
      month: 'long',
      day: 'numeric',
      year: start.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
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
        hour12: true,
      });
    };

    const start = formatTimeString(startTime);
    const end = formatTimeString(endTime);

    if (start && end) {
      return `${start} - ${end}`;
    }
    return start || end || 'Time TBA';
  };

  if (loading) {
    return (
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h3>
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto text-amber-600" />
          <p className="mt-4 text-gray-600">Loading upcoming webinars...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h3>
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600 font-medium">Unable to load webinars</p>
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
    );
  }

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h3>

      {upcomingWebinars.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Webinars</h3>
            <p className="text-gray-600">
              We're currently planning our next webinars. Check back soon for updates!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h4>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDateRange(webinar.start_date, webinar.end_date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{formatTime(webinar.start_time, webinar.end_time)}</span>
                    </div>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                </div>

                {webinar.speaker && (
                  <p className="text-gray-700 mb-2">
                    <strong>Speaker:</strong> {webinar.speaker}
                  </p>
                )}

                <p className="text-gray-700 mb-4">{webinar.description}</p>

                {webinar.features && Array.isArray(webinar.features) && webinar.features.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {webinar.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {webinar.registration_link ? (
                  <a
                    href={webinar.registration_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors"
                  >
                    Register Now
                  </a>
                ) : (
                  <button
                    className="block w-full bg-gray-400 text-white text-center py-3 rounded-lg font-bold cursor-not-allowed"
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
    </div>
  );
};

export default UpcomingWebinars;
import { Calendar, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';

const PastWebinars = () => {
  const [pastWebinars, setPastWebinars] = useState([]);
  const [physicalEvents, setPhysicalEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch past webinars from API
  useEffect(() => {
    const fetchPastWebinars = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/training-programs/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          // Filter for webinar programs only with status "completed"
          const webinarPrograms = data.data.filter(program => {
            const programType = program.program_type?.toLowerCase();
            const status = program.status?.toLowerCase();
            
            return programType === 'webinar' && status === 'completed';
          });
          
          // Filter for physical events (you might need to add a field to distinguish these)
          const physicalEventsData = data.data.filter(program => {
            // This is a placeholder - you might need to adjust this logic
            // based on how you identify physical events in your data
            return program.title.toLowerCase().includes('stem') || 
                   program.description.toLowerCase().includes('physical') ||
                   program.description.toLowerCase().includes('workshop');
          });
          
          setPastWebinars(webinarPrograms);
          setPhysicalEvents(physicalEventsData);
        } else {
          throw new Error(data.message || 'Failed to fetch webinar programs');
        }
      } catch (err) {
        console.error('Error fetching webinar programs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPastWebinars();
  }, []);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      month: 'long', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    };
    return date.toLocaleDateString('en-US', options);
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

  if (loading) {
    return (
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Webinar Recordings</h3>
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto text-amber-600" />
          <p className="mt-4 text-gray-600">Loading past webinars...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Webinar Recordings</h3>
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
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Webinar Recordings</h3>
      
      {pastWebinars.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Past Webinars</h3>
            <p className="text-gray-600">
              No completed webinars found in our records.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {pastWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(webinar.start_date)}</span>
                  </div>
                  {webinar.speaker && (
                    <p className="text-gray-700"><strong>Speaker:</strong> {webinar.speaker}</p>
                  )}
                  <p className="text-gray-700 mt-2">{webinar.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {webinar.recording_url ? (
                    <a
                      href={webinar.recording_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-center"
                    >
                      Watch Recording
                    </a>
                  ) : (
                    <button 
                      className="bg-gray-400 text-white px-6 py-3 rounded-lg font-medium cursor-not-allowed text-center"
                      disabled
                    >
                      Recording Unavailable
                    </button>
                  )}
                  {webinar.slides_url ? (
                    <a
                      href={webinar.slides_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                    >
                      Download Slides
                    </a>
                  ) : (
                    <button 
                      className="border border-gray-300 text-gray-400 px-6 py-3 rounded-lg font-medium cursor-not-allowed text-center"
                      disabled
                    >
                      Slides Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Physical Events Section */}
      {physicalEvents.length > 0 && (
        <div className="mt-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Past Physical Events</h4>
          <div className="space-y-6">
            {physicalEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(event.start_date)}</span> 
                </div>
                <p className="text-gray-700 mb-2"><strong>Time:</strong> {formatTime(event.start_time, event.end_time)}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {event.registration_link ? (
                    <a
                      href={event.registration_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-center"
                    >
                      View Event
                    </a>
                  ) : (
                    <button 
                      className="bg-gray-400 text-white px-6 py-3 rounded-lg font-medium cursor-not-allowed text-center"
                      disabled
                    >
                      Event Details Unavailable
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PastWebinars;
import { Calendar, Linkedin, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';

const PastTraining = () => {
  const [pastTrainings, setPastTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch past training programs from API
  useEffect(() => {
    const fetchPastTraining = async () => {
      const cachedData = localStorage.getItem("cachedPastTrainings");
      const cacheTimestamp = localStorage.getItem("pastTrainingsTimestamp");
      const now = Date.now();
      if (cachedData && cacheTimestamp && now - parseInt(cacheTimestamp) < 3600000) {
        setPastTrainings(JSON.parse(cachedData));
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
          const trainingPrograms = data.data.filter(program => {
            const programType = program.program_type?.toLowerCase();
            const status = program.status?.toLowerCase();
            return programType === "training" && status === "completed";
          });
          // Parse features safely
          const parsedPrograms = trainingPrograms.map(program => {
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
          setPastTrainings(parsedPrograms);
          localStorage.setItem("cachedPastTrainings", JSON.stringify(parsedPrograms));
          localStorage.setItem("pastTrainingsTimestamp", now.toString());
        } else {
          throw new Error(data.message || "Failed to fetch training programs");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPastTraining();
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

  if (loading) {
    return (
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Training Recordings</h3>
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto text-amber-600" />
          <p className="mt-4 text-gray-600">Loading past training programs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Training Recordings</h3>
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
    );
  }

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Past Training Recordings</h3>

      {pastTrainings.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Past Training Programs</h3>
            <p className="text-gray-600">
              No completed training programs found in our records.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {pastTrainings.map((training) => (
            <div key={training.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{training.title}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDateRange(training.start_date, training.end_date)}</span>
                  </div>
                  {training.speaker && (
                    <div className="flex items-center">
                      <p className="text-gray-700"><strong>Speaker:</strong> {training.speaker}</p>
                    </div>
                  )}
                  <p className="text-gray-700 mt-2">{training.description}</p>
                  {/* Optional: Display features if needed */}
                  {training.features && Array.isArray(training.features) && training.features.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {training.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {training.recording_url ? (
                    <a
                      href={training.recording_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-center"
                    >
                      Buy Recording
                    </a>
                  ) : (
                    <button
                      className="bg-gray-400 text-white px-6 py-3 rounded-lg font-medium cursor-not-allowed text-center"
                      disabled
                    >
                      Recording Unavailable
                    </button>
                  )}
                  {training.slides_url ? (
                    <a
                      href={training.slides_url}
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
    </div>
  );
};

export default PastTraining;
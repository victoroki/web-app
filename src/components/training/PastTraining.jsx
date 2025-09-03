import { Calendar, Linkedin, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';

const PastTraining = () => {
  const [pastTrainings, setPastTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch past training programs from API
  useEffect(() => {
    const fetchPastTraining = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/training-programs/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          // Filter for training programs only with status "completed"
          const trainingPrograms = data.data.filter(program => {
            const programType = program.program_type?.toLowerCase();
            const status = program.status?.toLowerCase();
            
            return programType === 'training' && status === 'completed';
          });
          
          setPastTrainings(trainingPrograms);
        } else {
          throw new Error(data.message || 'Failed to fetch training programs');
        }
      } catch (err) {
        console.error('Error fetching training programs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPastTraining();
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
                    <span>{formatDate(training.start_date)}</span>
                  </div>
                  {training.speaker && (
                    <div className="flex items-center">
                      <p className="text-gray-700"><strong>Speaker:</strong> {training.speaker}</p>
                      {training.trainer_linkedin && (
                        <a
                          href={training.trainer_linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                  <p className="text-gray-700 mt-2">{training.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {training.recording_url ? (
                    <a
                      href={training.recording_url}
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
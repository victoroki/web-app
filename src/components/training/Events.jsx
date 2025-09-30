import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Users, DollarSign, Clock, X } from 'lucide-react';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://admin.torchbearer.co.ke';

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedCategory, searchTerm, items]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/api/events`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      const allEvents = result.data || [];

      // Build categories from the events
      const categoryMap = allEvents.reduce((acc, event) => {
        const cat = event.category || 'uncategorized';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      }, {});

      const categories = [
        { id: 'all', name: 'All Events', count: allEvents.length },
        ...Object.entries(categoryMap).map(([id, count]) => ({
          id,
          name: getCategoryName(id),
          count,
        })),
      ];

      setCategories(categories);
      setItems(allEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again later.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (id) => {
    const nameMap = {
      training: 'Training',
      workshop: 'Workshop',
      conference: 'Conference',
      webinar: 'Webinar',
      seminar: 'Seminar',
    };
    return nameMap[id.toLowerCase()] || id.charAt(0).toUpperCase() + id.slice(1);
  };

  const filterItems = () => {
    let filtered = [...items];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.title?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search) ||
        item.location?.toLowerCase().includes(search)
      );
    }

    setFilteredItems(filtered);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Date TBA';
    
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'upcoming': return '#10b981';
      case 'ongoing': return '#3b82f6';
      case 'completed': return '#6b7280';
      case 'cancelled': return '#ef4444';
      default: return '#d97707';
    }
  };

  const getStatusBadge = (status) => {
    if (!status) return null;
    
    return (
      <span 
        className="px-2 py-1 rounded-full text-xs font-medium text-white"
        style={{ backgroundColor: getStatusColor(status) }}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fff8d9' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#d97707' }}></div>
          <p className="text-lg" style={{ color: '#d97707' }}>Loading events...</p>
        </div>
      </div>
    );
  }

  const featuredItems = filteredItems.filter(item => item.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff8d9' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#d97707' }}>
            Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: '#ceb699' }}>
            Discover upcoming renewable energy events, workshops, and conferences
          </p>
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 flex justify-between items-center" role="alert">
            <span className="block sm:inline">{error}</span>
            <button onClick={() => setError(null)} className="text-red-700 hover:text-red-900">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:scale-105'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? '#d97707' : '#ede1ce',
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full lg:w-80 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>Featured Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6 h-full" style={{ backgroundColor: 'white' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: '#ede1ce', color: '#d97707' }}
                        >
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-medium" style={{ color: '#d97707' }}>
                            {formatDate(item.date)}
                          </span>
                          {item.time && (
                            <div className="flex items-center gap-1 text-xs" style={{ color: '#ceb699' }}>
                              <Clock className="w-3 h-3" />
                              <span>{item.time}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {getStatusBadge(item.status)}
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300"
                      style={{ color: '#d97707' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm mb-4 line-clamp-3" style={{ color: '#ceb699' }}>
                      {item.description}
                    </p>

                    {item.location && (
                      <div className="flex items-center gap-1 mb-2" style={{ color: '#ceb699' }}>
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#ceb699' }}>
                      {item.max_participants && (
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{item.participants || 0}/{item.max_participants}</span>
                        </div>
                      )}
                      {item.price && parseFloat(item.price) > 0 && (
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          <span>KES {parseFloat(item.price).toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    {item.registration_url && item.status !== 'completed' && item.status !== 'cancelled' && (
                      <a
                        href={item.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#d97707' }}
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>
            All Events ({filteredItems.length})
          </h2>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: '#ceb699' }}>No events found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6 h-full" style={{ backgroundColor: 'white' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: '#ede1ce', color: '#d97707' }}
                        >
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-medium" style={{ color: '#d97707' }}>
                            {formatDate(item.date)}
                          </span>
                          {item.time && (
                            <div className="flex items-center gap-1 text-xs" style={{ color: '#ceb699' }}>
                              <Clock className="w-3 h-3" />
                              <span>{item.time}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {getStatusBadge(item.status)}
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300"
                      style={{ color: '#d97707' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm mb-4 line-clamp-3" style={{ color: '#ceb699' }}>
                      {item.description}
                    </p>

                    {item.location && (
                      <div className="flex items-center gap-1 mb-2" style={{ color: '#ceb699' }}>
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#ceb699' }}>
                      {item.max_participants && (
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{item.participants || 0}/{item.max_participants}</span>
                        </div>
                      )}
                      {item.price && parseFloat(item.price) > 0 && (
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          <span>KES {parseFloat(item.price).toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    {item.registration_url && item.status !== 'completed' && item.status !== 'cancelled' && (
                      <a
                        href={item.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#d97707' }}
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
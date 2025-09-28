import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]); // Always initialize as array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchItems();
  }, [selectedCategory, searchTerm]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://admin.torchbearer.co.ke/api/events?limit=100');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!data || !data.events || !Array.isArray(data.events)) {
        throw new Error('Invalid API response: events is not an array');
      }

      const categories = [
        { id: 'all', name: 'All Events', count: data.events.length },
        ...Object.entries(
          data.events.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([id, count]) => ({
          id,
          name: id.charAt(0).toUpperCase() + id.slice(1),
          count,
        })),
      ];

      setCategories(categories);
      setItems(data.events);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to load events. Please try again later.');
      setItems([]);
      setLoading(false);
    }
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams({
        category: selectedCategory,
        search: searchTerm,
        page: 1,
        limit: 20,
      });
      const response = await fetch(`https://admin.torchbearer.co.ke/api/events?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!data || !data.events || !Array.isArray(data.events)) {
        throw new Error('Invalid API response: events is not an array');
      }
      setItems(data.events);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again later.');
      setItems([]);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  const featuredItems = Array.isArray(items) ? items.filter(item => item.featured) : [];

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
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300"
                    style={{ color: '#d97707' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm mb-4" style={{ color: '#ceb699' }}>
                    {item.description}
                  </p>

                  {item.location && (
                    <div className="flex items-center gap-1 mb-4" style={{ color: '#ceb699' }}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  )}

                  {item.registration_url && (
                    <a
                      href={item.registration_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#d97707' }}
                    >
                      <span>Register Now</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>
            All Events ({items.length})
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
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
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300"
                    style={{ color: '#d97707' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm mb-4" style={{ color: '#ceb699' }}>
                    {item.description}
                  </p>

                  {item.location && (
                    <div className="flex items-center gap-1 mb-4" style={{ color: '#ceb699' }}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  )}

                  {item.registration_url && (
                    <a
                      href={item.registration_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#d97707' }}
                    >
                      <span>Register Now</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
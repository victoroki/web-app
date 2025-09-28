import React, { useState, useEffect } from 'react';
import { Image, Video, Search, Star, Eye, X, Play } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalItems: 0, totalViews: 0, averageRating: 0 });
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_BASE_URL = 'https://admin.torchbearer.co.ke';

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
      const response = await fetch(`${API_BASE_URL}/api/gallery?limit=0`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      const allItems = data.items;

      const categories = [
        { id: 'all', name: 'All Items', count: allItems.length },
        ...Object.entries(
          allItems.reduce((acc, item) => {
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
      setItems(allItems);
      setStats(data.stats || { totalItems: 0, totalViews: 0, averageRating: 0 });
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to load gallery. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchItems = async () => {
    try {
      setError(null);
      const params = new URLSearchParams({ 
        category: selectedCategory, 
        search: searchTerm 
      });
      
      const response = await fetch(`${API_BASE_URL}/api/gallery-items?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setItems(data.items || []);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to filter items. Please try again.');
    }
  };

  const handleView = async (item) => {
    try {
      // Increment view count
      const response = await fetch(`${API_BASE_URL}/api/gallery-items/${item.id}?action=view`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const updatedItem = await response.json();
      setItems(items.map(i => i.id === item.id ? updatedItem : i));
      
      // Show modal with the item
      setSelectedItem(updatedItem);
      setShowModal(true);
    } catch (error) {
      console.error('Error incrementing views:', error);
      // Still show modal even if view count fails
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'IMAGE': return <Image className="w-5 h-5" />;
      case 'VIDEO': return <Video className="w-5 h-5" />;
      default: return <Image className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'IMAGE': return '#dc2626';
      case 'VIDEO': return '#7c3aed';
      default: return '#6b7280';
    }
  };

  // Modal Component
  const ItemModal = () => {
    if (!selectedItem) return null;

    return (
      <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-bold" style={{ color: '#d97707' }}>
              {selectedItem.title}
            </h3>
            <button 
              onClick={closeModal}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <div className="relative mb-6">
              {selectedItem.type === 'VIDEO' ? (
                <div className="relative">
                  <video 
                    src={`${API_BASE_URL}${selectedItem.file_url}`} 
                    controls 
                    className="w-full h-auto max-h-[50vh] object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 fill-current" style={{ color: '#d97707' }} />
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={`${API_BASE_URL}${selectedItem.file_url}`} 
                  alt={selectedItem.title} 
                  className="w-full h-auto max-h-[50vh] object-contain rounded-lg mx-auto"
                />
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: '#ede1ce' }}>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'white', color: getTypeColor(selectedItem.type) }}>
                  {getTypeIcon(selectedItem.type)}
                </div>
                <div>
                  <p className="text-sm font-medium">Type</p>
                  <p className="font-bold" style={{ color: getTypeColor(selectedItem.type) }}>
                    {selectedItem.type}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: '#ede1ce' }}>
                <Star className="w-6 h-6 fill-current" style={{ color: '#d97707' }} />
                <div>
                  <p className="text-sm font-medium">Rating</p>
                  <p className="font-bold" style={{ color: '#d97707' }}>
                    {selectedItem.rating}/5.0
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: '#ede1ce' }}>
                <Eye className="w-6 h-6" style={{ color: '#d97707' }} />
                <div>
                  <p className="text-sm font-medium">Views</p>
                  <p className="font-bold" style={{ color: '#d97707' }}>
                    {selectedItem.views ? selectedItem.views.toLocaleString() : 0}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2" style={{ color: '#d97707' }}>Description</h4>
              <p className="text-gray-700">{selectedItem.description}</p>
            </div>
            
            {selectedItem.tags && selectedItem.tags.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2" style={{ color: '#d97707' }}>Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
                <span className="font-medium">Category:</span> {selectedItem.category}
              </div>
              <div>
                <span className="font-medium">Added:</span> {new Date(selectedItem.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Gallery Item Component to avoid code duplication
  const GalleryItem = ({ item }) => (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="p-6 h-full" style={{ backgroundColor: 'white' }}>
        <div className="relative">
          <img 
            src={`${API_BASE_URL}${item.file_url}`} 
            alt={item.title} 
            className="w-full h-48 object-cover mb-4 rounded-lg" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
            }}
          />
          {item.type === 'VIDEO' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 fill-current" style={{ color: '#d97707' }} />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#ede1ce', color: getTypeColor(item.type) }}>
              {getTypeIcon(item.type)}
            </div>
            <div>
              <span className="text-xs font-medium" style={{ color: getTypeColor(item.type) }}>
                {item.type}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
            <span className="text-sm font-medium" style={{ color: '#d97707' }}>
              {item.rating}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300"
          style={{ color: '#d97707' }}>
          {item.title}
        </h3>

        <p className="text-sm mb-4 line-clamp-2" style={{ color: '#ceb699' }}>
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 rounded-full text-xs"
                style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}>
                #{tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="px-2 py-1 rounded-full text-xs"
                style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}>
                +{item.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#ede1ce' }}>
          <div className="flex items-center gap-1 text-sm" style={{ color: '#ceb699' }}>
            <Eye className="w-4 h-4" />
            <span>{item.views ? item.views.toLocaleString() : 0} views</span>
          </div>
          <button
            onClick={() => handleView(item)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#d97707' }}
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const featuredItems = items.filter(item => item.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff8d9' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#d97707' }}>
            Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: '#ceb699' }}>
            Explore our collection of images and videos showcasing renewable energy projects
          </p>
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{error}</span>
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
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
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full lg:w-80 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>Featured Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>
            All Items ({items.length})
          </h2>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: '#ceb699' }}>No items found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <ItemModal />
    </div>
  );
};

export default GalleryPage;
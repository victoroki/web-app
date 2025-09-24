import React, { useState, useEffect } from 'react';
import { Download, FileText, Video, BookOpen, Search, Filter, Eye, Calendar, User, Star, ChevronRight, X } from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [resourceCategories, setResourceCategories] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({ totalResources: 0, totalDownloads: 0, averageRating: 0 });

  const API_BASE_URL = 'https://api.torchbearer.co.ke';

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchResources();
  }, [selectedCategory, searchTerm]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/api/resources?limit=0`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      const allItems = data.resources || [];

      const categories = [
        { id: 'all', name: 'All Resources', count: allItems.length },
        ...Object.entries(
          allItems.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([id, count]) => ({
          id,
          name: {
            guides: 'Training Guides',
            videos: 'Video Tutorials',
            templates: 'Templates & Forms',
            research: 'Research Papers',
          }[id] || id,
          count,
        })),
      ];

      setResourceCategories(categories);
      setResources(allItems);
      setStats(data.stats || { totalResources: 0, totalDownloads: 0, averageRating: 0 });
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to load resources. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchResources = async () => {
    try {
      setError(null);
      const params = new URLSearchParams({ category: selectedCategory, search: searchTerm });
      const response = await fetch(`${API_BASE_URL}/api/resources?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setResources(data.resources || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setError('Failed to filter resources. Please try again.');
    }
  };

  const handleDownload = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/resources/${id}?action=download`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const resource = await response.json();
      
      // Update downloads count in UI
      setResources(resources.map(r => r.id === id ? resource : r));
      
      // Trigger actual download
      const link = document.createElement('a');
      link.href = `${API_BASE_URL}${resource.file_url}`;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resource:', error);
      setError('Failed to download resource. Please try again.');
    }
  };

  const handlePreview = (resource) => {
    if (resource.type === 'MP4') {
      window.open(`${API_BASE_URL}${resource.file_url}`, '_blank');
    } else {
      window.open(`${API_BASE_URL}${resource.file_url}`, '_blank');
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'PDF': return <FileText className="w-5 h-5" />;
      case 'DOCX': return <FileText className="w-5 h-5" />;
      case 'MP4': return <Video className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'PDF': return '#dc2626';
      case 'DOCX': return '#2563eb';
      case 'MP4': return '#7c3aed';
      default: return '#6b7280';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff8d9' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#d97707' }}>
              Learning Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: '#ceb699' }}>
              Access comprehensive training materials, guides, templates, and research papers to advance your renewable energy expertise
            </p>
          </div>
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

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map((category) => (
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
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full lg:w-80 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>Featured Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="p-6 h-full" style={{ backgroundColor: 'white' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#ede1ce', color: getTypeColor(resource.type) }}>
                          {getTypeIcon(resource.type)}
                        </div>
                        <div>
                          <span className="text-xs font-medium" style={{ color: getTypeColor(resource.type) }}>
                            {resource.type}
                          </span>
                          <div className="text-xs" style={{ color: '#ceb699' }}>
                            {resource.size}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                        <span className="text-sm font-medium" style={{ color: '#d97707' }}>
                          {resource.rating || '0.0'}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300" 
                        style={{ color: '#d97707' }}>
                      {resource.title}
                    </h3>
                    
                    <p className="text-sm mb-4 line-clamp-3" style={{ color: '#ceb699' }}>
                      {resource.description}
                    </p>
                    
                    {resource.tags && resource.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 rounded-full text-xs"
                                style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}>
                            #{tag}
                          </span>
                        ))}
                        {resource.tags.length > 3 && (
                          <span className="px-2 py-1 rounded-full text-xs"
                                style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}>
                            +{resource.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#ceb699' }}>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{resource.author || 'Unknown Author'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(resource.date)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#ede1ce' }}>
                      <div className="flex items-center gap-1 text-sm" style={{ color: '#ceb699' }}>
                        <Download className="w-4 h-4" />
                        <span>{(resource.downloads || 0).toLocaleString()} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      {resource.preview && (
                        <button
                          onClick={() => handlePreview(resource)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Preview</span>
                        </button>
                      )}
                      <button
                        onClick={() => handleDownload(resource.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#d97707' }}
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>
            All Resources ({resources.length})
          </h2>
          
          {resources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: '#ceb699' }}>No resources found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {resources.map((resource) => (
                <div key={resource.id} className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                     style={{ backgroundColor: 'white' }}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg flex-shrink-0" 
                           style={{ backgroundColor: '#ede1ce', color: getTypeColor(resource.type) }}>
                        {getTypeIcon(resource.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold" style={{ color: '#d97707' }}>
                            {resource.title}
                          </h3>
                          {resource.featured && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium text-white"
                                  style={{ backgroundColor: '#d97707' }}>
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <p className="mb-3 line-clamp-2" style={{ color: '#ceb699' }}>
                          {resource.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#ceb699' }}>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{resource.author || 'Unknown Author'}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(resource.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{(resource.downloads || 0).toLocaleString()} downloads</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                            <span>{resource.rating || '0.0'}</span>
                          </div>
                        </div>
                        
                        {resource.tags && resource.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {resource.tags.slice(0, 4).map((tag, index) => (
                              <span key={index} className="px-2 py-1 rounded-full text-xs"
                                    style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}>
                                #{tag}
                              </span>
                            ))}
                            {resource.tags.length > 4 && (
                              <span className="px-2 py-1 rounded-full text-xs"
                                    style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}>
                                +{resource.tags.length - 4} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-sm font-medium" style={{ color: getTypeColor(resource.type) }}>
                          {resource.type}
                        </div>
                        <div className="text-xs" style={{ color: '#ceb699' }}>
                          {resource.size}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {resource.preview && (
                          <button
                            onClick={() => handlePreview(resource)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: '#ede1ce', color: '#ceb699' }}
                          >
                            <Eye className="w-4 h-4" />
                            <span>Preview</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDownload(resource.id)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: '#d97707' }}
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
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

export default ResourcesPage;
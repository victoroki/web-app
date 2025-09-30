import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Building2, BookOpen, Gavel, Users, Search, Star, ChevronRight, Filter } from 'lucide-react';

const UsefulLinksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [linkCategories, setLinkCategories] = useState([]);
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://admin.torchbearer.co.ke';

  useEffect(() => {
    fetchLinks();
  }, []);

  useEffect(() => {
    filterLinks();
  }, [selectedCategory, searchTerm, links]);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/api/useful-links`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      const allLinks = result.data || [];

      // Build categories from the links
      const categoryMap = allLinks.reduce((acc, link) => {
        const cat = link.category || 'uncategorized';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      }, {});

      const categories = [
        { id: 'all', name: 'All Links', count: allLinks.length, icon: Globe },
        ...Object.entries(categoryMap).map(([id, count]) => ({
          id,
          name: getCategoryName(id),
          count,
          icon: getCategoryIcon(id),
        })),
      ];

      setLinkCategories(categories);
      setLinks(allLinks);
    } catch (error) {
      console.error('Error fetching links:', error);
      setError('Failed to load useful links. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (id) => {
    const nameMap = {
      government: 'Government & Regulatory',
      educational: 'Educational Resources',
      industry: 'Industry Organizations',
      tools: 'Tools & Software',
      research: 'Research & Publications',
      company: 'Companies',
      test: 'Test',
    };
    return nameMap[id.toLowerCase()] || id.charAt(0).toUpperCase() + id.slice(1);
  };

  const getCategoryIcon = (id) => {
    const iconMap = {
      government: Building2,
      educational: BookOpen,
      industry: Users,
      tools: Star,
      research: Gavel,
      company: Building2,
      test: Filter,
    };
    return iconMap[id.toLowerCase()] || Globe;
  };

  const filterLinks = () => {
    let filtered = [...links];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(link => link.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(link =>
        link.title?.toLowerCase().includes(search) ||
        link.description?.toLowerCase().includes(search) ||
        link.url?.toLowerCase().includes(search)
      );
    }

    setFilteredLinks(filtered);
  };

  const formatVisits = (visits) => {
    if (visits >= 1000) {
      return (visits / 1000).toFixed(1) + 'K';
    }
    return visits?.toString() || '0';
  };

  const handleLinkClick = async (id, url) => {
    try {
      // Increment visit count (adjust endpoint as needed)
      const response = await fetch(`${API_BASE_URL}/api/useful-links/${id}/visit`, {
        method: 'POST',
      });
      
      if (response.ok) {
        // Update the link's visit count locally
        setLinks(links.map(link => 
          link.id === id ? { ...link, visits: (link.visits || 0) + 1 } : link
        ));
      }
    } catch (error) {
      console.error('Error incrementing visits:', error);
    }
    
    // Open link in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fff8d9' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#d97707' }}></div>
          <p className="text-lg" style={{ color: '#d97707' }}>Loading useful links...</p>
        </div>
      </div>
    );
  }

  const featuredLinks = filteredLinks.filter(link => link.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff8d9' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#d97707' }}>
              Useful Links
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: '#ceb699' }}>
              Curated collection of essential websites, tools, and resources for renewable energy professionals and students
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {linkCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center p-4 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id ? '#d97707' : '#ede1ce',
                  }}
                >
                  <IconComponent className="w-5 h-5 mb-2" />
                  <span className="text-sm text-center leading-tight">{category.name}</span>
                  <span className="text-xs mt-1">({category.count})</span>
                </button>
              );
            })}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full lg:w-80 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Featured Links */}
        {featuredLinks.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>Most Popular Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLinks.slice(0, 6).map((link) => (
                <div key={link.id} className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                     style={{ backgroundColor: 'white' }}
                     onClick={() => handleLinkClick(link.id, link.url)}>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#ede1ce' }}>
                      <Globe className="w-6 h-6" style={{ color: '#d97707' }} />
                    </div>
                    <div className="flex items-center gap-2">
                      {link.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                          <span className="text-sm font-medium" style={{ color: '#d97707' }}>
                            {link.rating}
                          </span>
                        </div>
                      )}
                      <span className="px-2 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: '#d97707' }}>
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300" 
                      style={{ color: '#d97707' }}>
                    {link.title}
                  </h3>
                  
                  <p className="text-sm mb-4 line-clamp-3" style={{ color: '#ceb699' }}>
                    {link.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#ede1ce' }}>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#ceb699' }}>
                      <span className="uppercase tracking-wide font-medium">
                        {link.category.replace('_', ' ')}
                      </span>
                      <span>{formatVisits(link.visits)} visits</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                         style={{ color: '#d97707' }}>
                      <span>Visit Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>
            All Links ({filteredLinks.length})
          </h2>
          
          {filteredLinks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: '#ceb699' }}>No links found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLinks.map((link) => (
                <div key={link.id} className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                     style={{ backgroundColor: 'white' }}
                     onClick={() => handleLinkClick(link.id, link.url)}>
                  
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#ede1ce' }}>
                        <Globe className="w-6 h-6" style={{ color: '#d97707' }} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors duration-300" 
                              style={{ color: '#d97707' }}>
                            {link.title}
                          </h3>
                          {link.featured && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium text-white"
                                  style={{ backgroundColor: '#d97707' }}>
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <p className="mb-3 line-clamp-2" style={{ color: '#ceb699' }}>
                          {link.description}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm" style={{ color: '#ceb699' }}>
                          <span className="uppercase tracking-wide font-medium">
                            {link.category.replace('_', ' ')}
                          </span>
                          {link.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                              <span>{link.rating}</span>
                            </div>
                          )}
                          <span>{formatVisits(link.visits)} visits</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-lg font-medium group-hover:gap-3 transition-all duration-300"
                         style={{ color: '#d97707' }}>
                      <span>Visit</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Access Section */}
        {linkCategories.filter(cat => cat.id !== 'all').length > 0 && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#d97707' }}>
              Quick Access Categories
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {linkCategories.filter(cat => cat.id !== 'all').map((category) => {
                const IconComponent = category.icon;
                const categoryLinks = links.filter(link => link.category === category.id);
                const ratingsWithValues = categoryLinks.filter(link => link.rating && !isNaN(parseFloat(link.rating)));
                const avgRating = ratingsWithValues.length > 0
                  ? (ratingsWithValues.reduce((sum, link) => sum + parseFloat(link.rating), 0) / ratingsWithValues.length).toFixed(1)
                  : 'N/A';
                
                return (
                  <div key={category.id} 
                       className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                       style={{ backgroundColor: 'white' }}
                       onClick={() => setSelectedCategory(category.id)}>
                    
                    <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                         style={{ backgroundColor: '#ede1ce' }}>
                      <IconComponent className="w-8 h-8" style={{ color: '#d97707' }} />
                    </div>
                    
                    <h4 className="text-lg font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300" 
                        style={{ color: '#d97707' }}>
                      {category.name}
                    </h4>
                    
                    <p className="text-sm mb-3" style={{ color: '#ceb699' }}>
                      {category.count} carefully curated {category.count === 1 ? 'link' : 'links'}
                    </p>
                    
                    {avgRating !== 'N/A' && (
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                        <span className="text-sm font-medium" style={{ color: '#d97707' }}>
                          {avgRating} avg rating
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsefulLinksPage;
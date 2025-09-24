import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Building2, BookOpen, Gavel, Users, Search, Star, ChevronRight, Filter } from 'lucide-react';

const UsefulLinksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [linkCategories, setLinkCategories] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalLinks: 0, totalVisits: 0, averageRating: 0 });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchLinks();
  }, [selectedCategory, searchTerm]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.torchbearer.co.ke/api/links?limit=0');
      const data = await response.json();
      const allItems = data.links;

      const categories = [
        { id: 'all', name: 'All Links', count: allItems.length, icon: Globe },
        ...Object.entries(
          allItems.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([id, count]) => ({
          id,
          name: {
            government: 'Government & Regulatory',
            educational: 'Educational Resources',
            industry: 'Industry Organizations',
            tools: 'Tools & Software',
            research: 'Research & Publications',
          }[id] || id,
          count,
          icon: {
            government: Building2,
            educational: BookOpen,
            industry: Users,
            tools: Star,
            research: Gavel,
          }[id],
        })),
      ];

      setLinkCategories(categories);
      setLinks(allItems);
      setStats(data.stats);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  const fetchLinks = async () => {
    try {
      const params = new URLSearchParams({ category: selectedCategory, search: searchTerm });
      const response = await fetch(`https://api.torchbearer.co.ke/api/links?${params}`);
      const data = await response.json();
      setLinks(data.links);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  };

  const formatVisits = (visits) => {
    if (visits >= 1000) {
      return (visits / 1000).toFixed(1) + 'K';
    }
    return visits.toString();
  };

  const handleLinkClick = async (id, url) => {
    try {
      const response = await fetch(`https://api.torchbearer.co.ke/api/links/${id}?action=visit`);
      const updatedLink = await response.json();
      setLinks(links.map(link => link.id === id ? updatedLink : link)); // Update visits count
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error incrementing visits:', error);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const featuredLinks = links.filter(link => link.featured);

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
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                      <span className="text-sm font-medium" style={{ color: '#d97707' }}>
                        {link.rating}
                      </span>
                    </div>
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
                
                <p className="text-sm mb-4" style={{ color: '#ceb699' }}>
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

        {/* All Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#d97707' }}>
            All Links ({links.length})
          </h2>
          
          <div className="space-y-4">
            {links.map((link) => (
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
                      
                      <p className="mb-3" style={{ color: '#ceb699' }}>
                        {link.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm" style={{ color: '#ceb699' }}>
                        <span className="uppercase tracking-wide font-medium">
                          {link.category.replace('_', ' ')}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                          <span>{link.rating}</span>
                        </div>
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
        </div>

        {/* Quick Access Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#d97707' }}>
            Quick Access Categories
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {linkCategories.filter(cat => cat.id !== 'all').map((category) => {
              const IconComponent = category.icon;
              const categoryLinks = links.filter(link => link.category === category.id);
              const avgRating = (categoryLinks.reduce((sum, link) => sum + link.rating, 0) / categoryLinks.length).toFixed(1);
              
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
                    {category.count} carefully curated links
                  </p>
                  
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-current" style={{ color: '#d97707' }} />
                    <span className="text-sm font-medium" style={{ color: '#d97707' }}>
                      {avgRating} avg rating
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksPage;
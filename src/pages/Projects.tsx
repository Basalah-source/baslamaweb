import React, { useState } from 'react';
import { Calendar, MapPin, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Projects = () => {
  const { projects } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories
  const categories = ['all', ...new Set(projects.map(p => p.category))];

  // Filter logic
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header & Search */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">مشاريعنا</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            نفخر بتنفيذ العديد من المشاريع الناجحة في مجال الطاقة الشمسية والحلول الهندسية في جميع أنحاء حضرموت واليمن.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <input 
              type="text" 
              placeholder="ابحث عن مشروع (بالاسم، الموقع، الوصف)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat === 'all' ? 'جميع المشاريع' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                       <span className="bg-primary-500 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm flex items-center gap-1">
                         عرض التفاصيل <ArrowLeft size={14} />
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-50 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary-500" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary-500" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-lg mb-4">لا توجد مشاريع تطابق بحثك.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
              className="text-primary-600 font-bold hover:underline"
            >
              عرض جميع المشاريع
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">هل لديك مشروع مشابه؟</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            فريقنا الهندسي جاهز لدراسة وتنفيذ مشاريع الطاقة الشمسية للمزارع والمصانع والمنازل بأعلى معايير الجودة.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            <span>اطلب استشارة مجانية</span>
            <ArrowLeft size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

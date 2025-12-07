import React from 'react';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useData } from '../context/DataContext';

const Projects = () => {
  const { projects } = useData();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">مشاريعنا</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نفخر بتنفيذ العديد من المشاريع الناجحة في مجال الطاقة الشمسية والحلول الهندسية في جميع أنحاء حضرموت واليمن.
          </p>
          <div className="h-1 w-24 bg-primary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
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
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-50 pt-4">
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">هل لديك مشروع مشابه؟</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            فريقنا الهندسي جاهز لدراسة وتنفيذ مشاريع الطاقة الشمسية للمزارع والمصانع والمنازل بأعلى معايير الجودة.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            <span>اطلب استشارة مجانية</span>
            <ArrowLeft size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

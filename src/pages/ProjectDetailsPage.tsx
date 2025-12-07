import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects } = useData();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المشروع غير موجود</h2>
        <Link to="/projects" className="text-primary-600 hover:underline">عودة للمشاريع</Link>
      </div>
    );
  }

  // Related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 right-0 w-full p-8 md:p-12 text-white">
          <div className="container mx-auto">
            <Link to="/projects" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowRight size={20} className="ml-2" />
              عودة للمشاريع
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-gray-300 text-sm">
                <Calendar size={14} /> {project.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{project.title}</h1>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={18} className="text-primary-500" />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">تفاصيل المشروع</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {project.content || project.description}
              </div>
            </div>

            {/* Gallery (Mock Implementation if gallery array existed) */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">صور من الموقع</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt="" className="rounded-xl w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-900">معلومات التنفيذ</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">العميل</span>
                  <span className="font-medium text-gray-900">عميل خاص</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">المدة الزمنية</span>
                  <span className="font-medium text-gray-900">14 يوم</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">الحالة</span>
                  <span className="font-medium text-green-600 flex items-center gap-1">
                    <CheckCircle2 size={16} /> تم الإنجاز
                  </span>
                </li>
              </ul>
              <button className="w-full mt-6 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-white transition-colors font-medium">
                <Share2 size={18} />
                مشاركة المشروع
              </button>
            </div>

            <div className="bg-secondary-900 text-white p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">هل أعجبك هذا العمل؟</h3>
              <p className="text-gray-300 mb-6 text-sm">نحن مستعدون لتنفيذ مشاريع مماثلة بنفس الجودة والكفاءة.</p>
              <Link to="/contact" className="block w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-bold transition-colors">
                اطلب عرض سعر
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 border-t border-gray-100 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">مشاريع مشابهة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <Link to={`/projects/${p.id}`} key={p.id} className="group">
                  <div className="rounded-2xl overflow-hidden mb-4 h-56 relative">
                     <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-primary-600">{p.category}</div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1"><MapPin size={12}/> {p.location}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

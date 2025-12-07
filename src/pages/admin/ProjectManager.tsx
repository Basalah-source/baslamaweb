import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, X, Calendar, MapPin } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Project } from '../../types';
import ImageUpload from '../../components/admin/ImageUpload';

const ProjectManager = () => {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    category: 'طاقة شمسية',
    description: '',
    image: '',
    date: new Date().toISOString().split('T')[0],
    location: ''
  });

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData(project);
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        category: 'طاقة شمسية',
        description: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        location: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      updateProject(editingProject.id, formData);
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        ...formData as Project
      };
      addProject(newProject);
    }
    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">إدارة المشاريع</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة مشروع</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <img 
                src={project.image || 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400'} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button 
                  onClick={() => handleOpenModal(project)}
                  className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-50"
                >
                  <Edit size={20} />
                </button>
                <button 
                  onClick={() => {
                    if(window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) deleteProject(project.id);
                  }}
                  className="p-2 bg-white text-red-600 rounded-full hover:bg-red-50"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">{project.category}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={12} /> {project.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">{project.description}</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin size={12} />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold">{editingProject ? 'تعديل مشروع' : 'إضافة مشروع جديد'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <ImageUpload 
                value={formData.image || ''} 
                onChange={(val) => setFormData({...formData, image: val})}
                label="صورة المشروع"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">عنوان المشروع</label>
                  <input 
                    type="text" 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">التصنيف</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  >
                    <option>طاقة شمسية</option>
                    <option>تركيبات فنية</option>
                    <option>مشاريع تجارية</option>
                    <option>مشاريع سكنية</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
                  <input 
                    type="text" 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ الإنجاز</label>
                  <input 
                    type="date" 
                    value={formData.date} 
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">تفاصيل المشروع</label>
                  <textarea 
                    rows={4}
                    value={formData.description} 
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium"
                >
                  إلغاء
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-bold"
                >
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManager;

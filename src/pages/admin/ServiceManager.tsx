import React, { useState } from 'react';
import { Plus, Edit, Trash2, X, Zap, Wrench, ShieldCheck, Truck, Globe, Users } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Service } from '../../types';
import ImageUpload from '../../components/admin/ImageUpload';

const iconOptions = [
  { value: 'Zap', label: 'كهرباء/طاقة', icon: Zap },
  { value: 'Wrench', label: 'صيانة', icon: Wrench },
  { value: 'ShieldCheck', label: 'حماية/ضمان', icon: ShieldCheck },
  { value: 'Truck', label: 'نقل/توصيل', icon: Truck },
  { value: 'Globe', label: 'عام', icon: Globe },
  { value: 'Users', label: 'عملاء', icon: Users },
];

const ServiceManager = () => {
  const { services, addService, updateService, deleteService } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    description: '',
    image: '',
    icon: 'Zap'
  });

  const handleOpenModal = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData(service);
    } else {
      setEditingService(null);
      setFormData({
        title: '',
        description: '',
        image: '',
        icon: 'Zap'
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      updateService(editingService.id, formData);
    } else {
      const newService: Service = {
        id: Date.now().toString(),
        ...formData as Service
      };
      addService(newService);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">إدارة الخدمات</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة خدمة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start group hover:border-primary-200 transition-colors">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src={service.image || 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100'} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleOpenModal(service)} className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Edit size={16} /></button>
                  <button onClick={() => deleteService(service.id)} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 size={16} /></button>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold">{editingService ? 'تعديل خدمة' : 'إضافة خدمة جديدة'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <ImageUpload 
                value={formData.image || ''} 
                onChange={(val) => setFormData({...formData, image: val})}
                label="صورة الخدمة"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الخدمة</label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الأيقونة</label>
                <div className="grid grid-cols-3 gap-3">
                  {iconOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData({...formData, icon: opt.value})}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                        formData.icon === opt.value 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <opt.icon size={20} />
                      <span className="text-xs font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الوصف</label>
                <textarea 
                  rows={4}
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                ></textarea>
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

export default ServiceManager;

import React, { useState, useEffect } from 'react';
import { Save, Building, Phone, Mail, MapPin, Globe, Image as ImageIcon } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { CompanyInfo } from '../../types';
import ImageUpload from '../../components/admin/ImageUpload';

const Settings = () => {
  const { companyInfo, updateCompanyInfo } = useData();
  const [formData, setFormData] = useState<CompanyInfo>(companyInfo);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormData(companyInfo);
  }, [companyInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhones = [...formData.phones];
    newPhones[index] = value;
    setFormData({ ...formData, phones: newPhones });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">إعدادات الموقع</h1>
        <button 
          onClick={handleSubmit}
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors font-bold shadow-lg shadow-primary-500/30"
        >
          <Save size={20} />
          <span>حفظ التغييرات</span>
        </button>
      </div>

      {isSaved && (
        <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-6 flex items-center justify-center border border-green-200">
          تم حفظ الإعدادات بنجاح! ستنعكس التغييرات على الموقع فوراً.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Logo & Branding */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold border-b border-gray-100 pb-4">
              <ImageIcon size={20} className="text-brand-500" />
              <h2>شعار الموقع</h2>
            </div>
            <ImageUpload 
              value={formData.logo || ''} 
              onChange={(val) => setFormData({...formData, logo: val})}
              label="صورة الشعار (Logo)"
            />
            <p className="text-xs text-gray-500 mt-2">يفضل استخدام صورة بخلفية شفافة (PNG).</p>
          </div>
        </div>

        {/* General Info & Contacts */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold border-b border-gray-100 pb-4">
              <Building size={20} className="text-brand-500" />
              <h2>المعلومات الأساسية</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">اسم الموقع / الشركة</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الشعار النصي (Slogan)</label>
                  <input 
                    type="text" 
                    value={formData.slogan}
                    onChange={(e) => setFormData({...formData, slogan: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وصف مختصر</label>
                <textarea 
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold border-b border-gray-100 pb-4">
              <Phone size={20} className="text-brand-500" />
              <h2>بيانات التواصل</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Mail size={16} /> البريد الإلكتروني
                </label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-left"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin size={16} /> العنوان الرئيسي
                </label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">أرقام الهواتف</label>
                <div className="space-y-2">
                  {formData.phones.map((phone, idx) => (
                    <input 
                      key={idx}
                      type="text" 
                      value={phone}
                      onChange={(e) => handlePhoneChange(idx, e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-left"
                      dir="ltr"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold border-b border-gray-100 pb-4">
              <Globe size={20} className="text-brand-500" />
              <h2>روابط التواصل الاجتماعي</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Whatsapp Link</label>
                <input 
                  type="text" 
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-left"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                <input 
                  type="text" 
                  value={formData.facebook}
                  onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-left"
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

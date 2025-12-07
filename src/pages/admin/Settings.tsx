import React, { useState, useEffect } from 'react';
import { Save, Building, Phone, Mail, MapPin, Globe, Image as ImageIcon, LayoutTemplate } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { CompanyInfo, HeroData } from '../../types';
import ImageUpload from '../../components/admin/ImageUpload';

const Settings = () => {
  const { companyInfo, updateCompanyInfo, heroData, updateHeroData } = useData();
  const [infoFormData, setInfoFormData] = useState<CompanyInfo>(companyInfo);
  const [heroFormData, setHeroFormData] = useState<HeroData>(heroData);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'hero'>('general');

  useEffect(() => {
    setInfoFormData(companyInfo);
    setHeroFormData(heroData);
  }, [companyInfo, heroData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo(infoFormData);
    updateHeroData(heroFormData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhones = [...infoFormData.phones];
    newPhones[index] = value;
    setInfoFormData({ ...infoFormData, phones: newPhones });
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

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('general')}
          className={`pb-4 px-4 font-bold transition-colors relative ${
            activeTab === 'general' 
              ? 'text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="flex items-center gap-2"><Building size={18} /> معلومات الشركة</span>
          {activeTab === 'general' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>}
        </button>
        <button
          onClick={() => setActiveTab('hero')}
          className={`pb-4 px-4 font-bold transition-colors relative ${
            activeTab === 'hero' 
              ? 'text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="flex items-center gap-2"><LayoutTemplate size={18} /> الواجهة الرئيسية (Hero)</span>
          {activeTab === 'hero' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></div>}
        </button>
      </div>

      {activeTab === 'general' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo & Branding */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold border-b border-gray-100 pb-4">
                <ImageIcon size={20} className="text-brand-500" />
                <h2>شعار الموقع</h2>
              </div>
              <ImageUpload 
                value={infoFormData.logo || ''} 
                onChange={(val) => setInfoFormData({...infoFormData, logo: val})}
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
                      value={infoFormData.name}
                      onChange={(e) => setInfoFormData({...infoFormData, name: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الشعار النصي (Slogan)</label>
                    <input 
                      type="text" 
                      value={infoFormData.slogan}
                      onChange={(e) => setInfoFormData({...infoFormData, slogan: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وصف مختصر</label>
                  <textarea 
                    rows={3}
                    value={infoFormData.description}
                    onChange={(e) => setInfoFormData({...infoFormData, description: e.target.value})}
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
                    value={infoFormData.email}
                    onChange={(e) => setInfoFormData({...infoFormData, email: e.target.value})}
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
                    value={infoFormData.address}
                    onChange={(e) => setInfoFormData({...infoFormData, address: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">أرقام الهواتف</label>
                  <div className="space-y-2">
                    {infoFormData.phones.map((phone, idx) => (
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
                    value={infoFormData.whatsapp}
                    onChange={(e) => setInfoFormData({...infoFormData, whatsapp: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-left"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                  <input 
                    type="text" 
                    value={infoFormData.facebook}
                    onChange={(e) => setInfoFormData({...infoFormData, facebook: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-left"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Hero Settings Tab
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">النصوص والمحتوى</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العنوان الصغير (Tagline)</label>
                  <input 
                    type="text" 
                    value={heroFormData.tagline}
                    onChange={(e) => setHeroFormData({...heroFormData, tagline: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                    placeholder="مثال: قسم تركيب منظومات الطاقة الشمسية"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العنوان الرئيسي (الجزء الأول)</label>
                  <input 
                    type="text" 
                    value={heroFormData.headline}
                    onChange={(e) => setHeroFormData({...heroFormData, headline: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                    placeholder="مثال: طاقة نظيفة ومستدامة"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العنوان الرئيسي (الجزء الملون)</label>
                  <input 
                    type="text" 
                    value={heroFormData.subHeadline}
                    onChange={(e) => setHeroFormData({...heroFormData, subHeadline: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none text-brand-600 font-bold"
                    placeholder="مثال: لمستقبل أفضل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الوصف</label>
                  <textarea 
                    rows={4}
                    value={heroFormData.description}
                    onChange={(e) => setHeroFormData({...heroFormData, description: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">صورة الخلفية</h2>
              <ImageUpload 
                value={heroFormData.backgroundImage} 
                onChange={(val) => setHeroFormData({...heroFormData, backgroundImage: val})}
                label="اختر صورة عالية الدقة"
              />
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p>💡 نصيحة: يفضل استخدام صورة عريضة (Landscape) بدقة 1920x1080 بكسل على الأقل للحصول على أفضل مظهر.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

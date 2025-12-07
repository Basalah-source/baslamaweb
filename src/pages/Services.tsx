import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Globe, Truck, Users, Wrench, Zap, ShieldCheck, ArrowLeft } from 'lucide-react';

const iconMap: any = {
  Globe, Truck, Users, Wrench, Zap, ShieldCheck
};

const Services = () => {
  const { services } = useData();

  // Helper to get the detail link based on service ID or Title
  // In a real app, this might be a 'slug' field in the DB
  const getServiceLink = (id: string, title: string) => {
    if (title.includes('شمسية') || title.includes('طاقة')) return '/services/solar-installation';
    if (title.includes('صيانة')) return '/services/maintenance';
    if (title.includes('فحص')) return '/services/inspection';
    if (title.includes('إطارات') || title.includes('ترصيص')) return '/services/tires';
    return '#'; // Fallback
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا</h1>
          <p className="text-gray-600 text-lg">
            في مجموعة باسلامه، لا نكتفي ببيع المنتجات، بل نقدم حلولاً متكاملة وخدمات متميزة لعملائنا في جميع أنحاء الجمهورية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon || 'ShieldCheck'] || ShieldCheck;
            const link = getServiceLink(service.id, service.title);
            
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
                <div className="w-14 h-14 bg-secondary-50 text-secondary-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to={link}
                  className="mt-auto inline-flex items-center text-primary-600 font-bold text-sm hover:text-primary-700 hover:gap-2 transition-all"
                >
                  عرض التفاصيل والخدمات <ArrowLeft size={16} className="mr-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-secondary-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى خدمة خاصة؟</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              فريقنا جاهز لتلبية طلبات الشركات والمؤسسات الكبرى بعروض أسعار خاصة وخدمات لوجستية متميزة.
            </p>
            <Link to="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              تواصل معنا الآن
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;

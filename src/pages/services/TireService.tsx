import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, Disc, Gauge, PenTool } from 'lucide-react';

const TireService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/">الرئيسية</Link> / <Link to="/services">الخدمات</Link> / <span className="text-gray-900">الكفرات والبنشر</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">خدمات الإطارات والبنشر</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=800" 
                alt="Tire Installation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-700">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">فك وتركيب الإطارات</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                نستخدم أجهزة حديثة لفك وتركيب الإطارات دون التسبب بخدوش للجنوط. متوفر لدينا جميع المقاسات للسيارات الصغيرة والشاحنات.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" 
                alt="Balancing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-700">
                <Disc size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ترصيص أرضي وليزر</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ترصيص دقيق للإطارات لمنع الرجة والاهتزاز أثناء القيادة، مما يحافظ على نظام التعليق ويوفر راحة أكبر للركاب.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1632823471565-1ec2a1ad13d2?auto=format&fit=crop&q=80&w=800" 
                alt="Pressure Check" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-700">
                <Gauge size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">نفخ نيتروجين وإصلاح بنشر</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                خدمة نفخ الإطارات بغاز النيتروجين للحفاظ على برودة الإطار، وإصلاح الثقوب (الرقع) بمواد أصلية ألمانية.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 bg-brand-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-100">
          <div className="flex items-center gap-4">
             <div className="bg-white p-4 rounded-full shadow-sm text-brand-600">
               <PenTool size={32} />
             </div>
             <div>
               <h3 className="text-xl font-bold text-gray-900">نصيحة فنية</h3>
               <p className="text-gray-600">قم بتدوير الإطارات (X) كل 10,000 كم لإطالة عمرها الافتراضي.</p>
             </div>
          </div>
          <Link to="/contact" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap">
            احجز موعد صيانة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TireService;

import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Zap, CheckCircle2, ArrowRight, Battery, Cpu } from 'lucide-react';

const SolarService = () => {
  const features = [
    { title: 'ألواح شمسية عالية الكفاءة', desc: 'نستخدم ألواح Monocrystalline بأحدث التقنيات لضمان أعلى إنتاجية.', icon: Sun },
    { title: 'محولات (Inverters) ذكية', desc: 'محولات هجينة ومتصلة بالشبكة من أفضل الماركات العالمية.', icon: Cpu },
    { title: 'بطاريات تخزين الطاقة', desc: 'بطاريات ليثيوم وجل وعميق الدورة لعمر افتراضي طويل.', icon: Battery },
    { title: 'هياكل تثبيت متينة', desc: 'قواعد حديدية وألمنيوم مجلفن مقاومة للصدأ والرياح.', icon: CheckCircle2 },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[400px] bg-secondary-900">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf2f26f?auto=format&fit=crop&q=80&w=1600" 
          alt="Solar Installation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تركيب منظومات الطاقة الشمسية</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              حلول طاقة مستدامة للمنازل، المزارع، والمشاريع التجارية بأيدي مهندسين محترفين.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
            <ArrowRight size={16} className="ml-2" />
            عودة للخدمات
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">لماذا تختار منظوماتنا؟</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                في مجموعة باسلامه، لا نقوم فقط ببيع القطع، بل نقوم بدراسة احتياجك الفعلي للطاقة وتصميم منظومة متكاملة تضمن لك استقرار الكهرباء على مدار الساعة. نتميز بالدقة في التركيب واستخدام أجود أنواع الكابلات والقواطع لضمان السلامة.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary-500" />
                  <span>ضمان حقيقي على الألواح والبطاريات</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary-500" />
                  <span>فريق هندسي متخصص للتركيب والصيانة</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary-500" />
                  <span>خدمة ما بعد البيع والدعم الفني</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {features.map((item, idx) => (
                 <div key={idx} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-primary-50 transition-colors border border-gray-100">
                   <item.icon size={32} className="text-brand-600 mx-auto mb-3" />
                   <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                   <p className="text-xs text-gray-500">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Gallery */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">معرض أعمالنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {gallery.map((img, idx) => (
              <div key={idx} className="h-64 rounded-xl overflow-hidden group relative">
                <img src={img} alt={`Project ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Zap className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">هل تفكر في تركيب طاقة شمسية؟</h3>
            <p className="mb-8 text-gray-300">تواصل معنا الآن للحصول على دراسة جدوى وعرض سعر مجاني لمشروعك</p>
            <Link to="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-bold transition-colors">
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarService;

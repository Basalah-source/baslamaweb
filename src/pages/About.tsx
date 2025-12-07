import React from 'react';
import { useData } from '../context/DataContext';
import { ShieldCheck, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const { companyInfo } = useData();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-secondary-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Office" 
            className="w-full h-full object-cover opacity-20" 
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">من نحن</h1>
          <p className="text-xl text-gray-300">تعرف على مجموعة باسلامه للتجارة والاستيراد</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              {companyInfo.name}
              <span className="absolute bottom-0 right-0 w-full h-1 bg-primary-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              تعتبر {companyInfo.name} واحدة من الشركات الرائدة في مجال استيراد وتوزيع قطع غيار السيارات، البطاريات، الزيوت، وحلول الطاقة الشمسية في الجمهورية اليمنية.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              منذ تأسيسنا، ونحن نلتزم بتقديم منتجات عالية الجودة تلبي احتياجات السوق المحلي، مع التركيز على خدمة العملاء وتوفير ضمان حقيقي لمنتجاتنا. نفخر بشراكاتنا مع كبرى الشركات العالمية لضمان وصول أفضل التكنولوجيا إلى عملائنا.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-secondary-700 font-bold">
                <ShieldCheck size={24} className="text-primary-500" />
                <span>جودة مضمونة</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-700 font-bold">
                <Users size={24} className="text-primary-500" />
                <span>خدمة عملاء متميزة</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000" 
                alt="Company Building" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold mb-1">+15</p>
              <p className="text-sm">عاماً من الخبرة</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary-500">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
            <p className="text-gray-600">
              أن نكون الخيار الأول والموثوق للعملاء في مجال الطاقة وقطع الغيار في اليمن، من خلال توفير حلول مبتكرة ومستدامة.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary-500">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">رسالتنا</h3>
            <p className="text-gray-600">
              تقديم منتجات ذات مواصفات عالمية وأسعار تنافسية، مع الالتزام بالمصداقية والشفافية في جميع تعاملاتنا التجارية.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary-500">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">قيمنا</h3>
            <p className="text-gray-600">
              الجودة، الأمانة، الابتكار، والعمل بروح الفريق الواحد لخدمة مجتمعنا وعملائنا بأفضل صورة ممكنة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, BatteryCharging, Settings, PenTool } from 'lucide-react';

const MaintenanceService = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-secondary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
            <ArrowRight size={16} className="ml-2" />
            عودة للخدمات
          </Link>
          <h1 className="text-4xl font-bold mb-4">خدمات الصيانة المتكاملة</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            ورشة متخصصة لصيانة البطاريات، الإنفرترات، والأجهزة الإلكترونية المتعلقة بالطاقة.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                  <BatteryCharging size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">صيانة البطاريات</h2>
                  <p className="text-gray-600 leading-relaxed">
                    نقدم خدمات صيانة وإعادة تأهيل للبطاريات السائلة والجافة. نقوم بعملية تنظيف الأقطاب، تغيير الأسيد (للسائلة)، وشحن البطارية بأجهزة شحن ذكية لإعادة تنشيط الخلايا وإطالة عمر البطارية.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800" 
                alt="Battery Maintenance" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                  <Settings size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">صيانة الأجهزة والإنفرترات</h2>
                  <p className="text-gray-600 leading-relaxed">
                    ورشة إلكترونيات متقدمة لصيانة محولات الطاقة (Inverters) ومنظمات الشحن. نمتلك قطع غيار أصلية وفنيين مهرة لتشخيص الأعطال وإصلاح اللوحات الإلكترونية بدقة عالية.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" className="rounded-xl h-48 object-cover" alt="Repair 1" />
                 <img src="https://images.unsplash.com/photo-1597424214711-41314e32e25c?auto=format&fit=crop&q=80&w=600" className="rounded-xl h-48 object-cover" alt="Repair 2" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Wrench size={20} className="text-primary-500" />
                لماذا صيانتنا؟
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><PenTool size={16} className="text-green-500"/> فحص مجاني مبدئي</li>
                <li className="flex items-center gap-2"><PenTool size={16} className="text-green-500"/> ضمان على الإصلاح</li>
                <li className="flex items-center gap-2"><PenTool size={16} className="text-green-500"/> سرعة في الإنجاز</li>
                <li className="flex items-center gap-2"><PenTool size={16} className="text-green-500"/> قطع غيار متوفرة</li>
              </ul>
            </div>

            <div className="bg-primary-500 text-white p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-2">هل لديك جهاز عاطل؟</h3>
              <p className="text-sm mb-6 opacity-90">تفضل بزيارة أقرب فرع للصيانة أو تواصل معنا للاستفسار</p>
              <Link to="/contact" className="bg-white text-primary-600 px-6 py-2 rounded-lg font-bold w-full block hover:bg-gray-100">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceService;

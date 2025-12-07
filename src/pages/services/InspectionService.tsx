import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Activity, Car, Home } from 'lucide-react';

const InspectionService = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">خدمات الفحص الدقيق</h1>
          <Link to="/services" className="text-primary-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            <ArrowRight size={20} /> عودة
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800" 
              alt="Inspection" 
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">آلية الفحص الحديثة</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              نستخدم أحدث أجهزة القياس الرقمية (Digital Testers) لفحص كفاءة البطاريات والدينامو. لا نعتمد على التخمين، بل نعطيك تقريراً رقمياً دقيقاً عن حالة البطارية ونسبة كفاءتها والعمر المتبقي لها.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Activity className="text-brand-500" size={28} />
                <div>
                  <h3 className="font-bold text-gray-900">اختبار الحمل (Load Test)</h3>
                  <p className="text-sm text-gray-500">للتأكد من قدرة البطارية على تشغيل المحرك أو الأجهزة.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <ShieldCheck className="text-green-500" size={28} />
                <div>
                  <h3 className="font-bold text-gray-900">فحص الدينامو والتسريب</h3>
                  <p className="text-sm text-gray-500">للتأكد من أن السيارة تشحن البطارية بشكل صحيح ولا يوجد تهريب كهرباء.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary-50 p-8 rounded-3xl border border-secondary-100 text-center hover:shadow-lg transition-shadow">
            <Car size={48} className="mx-auto text-secondary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">فحص بطاريات السيارات</h3>
            <p className="text-gray-600">
              خدمة سريعة لفحص بطارية سيارتك قبل السفر أو عند حدوث مشاكل في التشغيل. الفحص مجاني عند شراء بطارية جديدة.
            </p>
          </div>
          <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100 text-center hover:shadow-lg transition-shadow">
            <Home size={48} className="mx-auto text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">فحص منظومات المنازل</h3>
            <p className="text-gray-600">
              زيارات ميدانية لفحص بنك البطاريات في منزلك، والتأكد من توازن الشحن وكفاءة الألواح الشمسية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionService;

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useData } from '../context/DataContext';

const Contact = () => {
  const { companyInfo } = useData();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">بيانات الاتصال</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">العنوان الرئيسي</span>
                    <span className="font-medium text-gray-900">{companyInfo.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">البريد الإلكتروني</span>
                    <span className="font-medium text-gray-900 font-sans">{companyInfo.email}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">الهاتف</span>
                    <div className="font-medium text-gray-900 font-sans" dir="ltr">
                      {companyInfo.phones.map((phone, idx) => (
                        <div key={idx}>{phone}</div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="الاسم الكريم" />
                </div>
                <div>
                  <input type="email" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="البريد الإلكتروني" />
                </div>
                <div>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="الموضوع" />
                </div>
                <div>
                  <textarea rows={6} className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-primary-500 outline-none resize-none" placeholder="الرسالة"></textarea>
                </div>

                <div className="flex justify-end">
                  <button type="button" className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-2 px-8 rounded-full transition-colors">
                    إرسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

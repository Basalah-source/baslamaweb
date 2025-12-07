import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useData } from '../context/DataContext';

const Footer = () => {
  const { companyInfo } = useData();

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               {companyInfo.logo ? (
                <img 
                  src={companyInfo.logo} 
                  alt={companyInfo.name} 
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <h3 className="text-2xl font-bold text-white">{companyInfo.name}</h3>
              )}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {companyInfo.facebook && <a href={companyInfo.facebook} className="bg-white/10 p-2 rounded-full hover:bg-brand-500 transition-colors"><Facebook size={18} /></a>}
              {companyInfo.twitter && <a href={companyInfo.twitter} className="bg-white/10 p-2 rounded-full hover:bg-brand-500 transition-colors"><Twitter size={18} /></a>}
              {companyInfo.instagram && <a href={companyInfo.instagram} className="bg-white/10 p-2 rounded-full hover:bg-brand-500 transition-colors"><Instagram size={18} /></a>}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-400">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowLeft size={14} /> من نحن</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowLeft size={14} /> المنتجات</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowLeft size={14} /> الخدمات</Link></li>
              <li><Link to="/projects" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowLeft size={14} /> مشاريعنا</Link></li>
              <li><Link to="/branches" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowLeft size={14} /> الفروع</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-400">الأقسام</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/products?cat=batteries" className="hover:text-brand-400 transition-colors">البطاريات</Link></li>
              <li><Link to="/products?cat=oils" className="hover:text-brand-400 transition-colors">الزيوت</Link></li>
              <li><Link to="/products?cat=tires" className="hover:text-brand-400 transition-colors">الكفرات</Link></li>
              <li><Link to="/products?cat=solar" className="hover:text-brand-400 transition-colors">الطاقة الشمسية</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-400">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span dir="ltr" className="font-sans">{companyInfo.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. جميع الحقوق محفوظة.</p>
          
          <Link 
            to="/admin/login" 
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Lock size={14} />
            <span>دخول الإدارة</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

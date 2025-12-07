import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { useData } from '../context/DataContext';

const Branches = () => {
  const { branches } = useData();
  
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">فروعنا</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6 lg:col-span-1">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {branch.phones.map((phone, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Phone size={18} className="text-primary-500 flex-shrink-0" />
                        <span dir="ltr">{phone}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a 
                  href={branch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                >
                  <Navigation size={16} />
                  عرض الموقع
                </a>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.5!2d48.5!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiTiA0OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;

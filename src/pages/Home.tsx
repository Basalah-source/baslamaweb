import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Phone, CheckCircle2, HelpCircle, Sun, Battery, Wrench, Zap, Truck, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useData } from '../context/DataContext';

const Home = () => {
  const { products, services, branches, achievements, projects, heroData } = useData();
  const featuredProducts = products.filter(p => p.isFeatured);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-secondary-900 text-white overflow-hidden flex items-center">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroData.backgroundImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-float" // Simple CSS animation
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 text-sm font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                  <Sun size={16} className="text-primary-500" />
                  {heroData.tagline}
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {heroData.headline} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-brand-400">
                  {heroData.subHeadline}
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                {heroData.description}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link to="/projects" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-1">
                  شاهد مشاريعنا
                </Link>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:border-brand-400">
                  تواصل معنا
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats or Elements */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-brand-500 p-3 rounded-lg">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <p className="text-gray-300 text-xs">كفاءة عالية</p>
                <p className="text-white font-bold">ألواح شمسية متطورة</p>
              </div>
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-brand-400 w-3/4"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900"
            >
              خدماتنا المتميزة
            </motion.h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-500 to-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                    {service.icon === 'Zap' && <Sun size={24} className="text-primary-500" />}
                    {service.icon === 'Wrench' && <Wrench size={24} className="text-brand-500" />}
                    {service.icon === 'ShieldCheck' && <Battery size={24} className="text-green-500" />}
                    {service.icon === 'Truck' && <CheckCircle2 size={24} className="text-blue-500" />}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-brand-600 font-bold text-sm hover:gap-2 transition-all">
                    المزيد من التفاصيل <ArrowLeft size={16} className="mr-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-brand-600 font-bold text-sm bg-brand-50 px-3 py-1 rounded-full">سابقة أعمالنا</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">أحدث المشاريع المنجزة</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold transition-colors">
              عرض كل المشاريع <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl h-80 md:h-96 cursor-pointer shadow-lg"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 right-0 p-8 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-1 text-brand-600 font-bold hover:text-brand-700">
              عرض كل المشاريع <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">منتجات مميزة</h2>
            <p className="text-gray-600">أفضل المنتجات المختارة بعناية لعملائنا</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-24 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">فروعنا في خدمتكم</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">نسعد باستقبالكم في فروعنا المنتشرة في حضرموت لتقديم أفضل خدمات ما بعد البيع</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, idx) => (
              <motion.div 
                key={branch.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-500 transition-colors">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-300 transition-colors">{branch.name}</h3>
                
                <p className="text-gray-300 mb-6">{branch.address}</p>

                <div className="space-y-2 mb-8">
                  {branch.phones.map((phone, i) => (
                    <div key={i} className="flex items-center justify-center gap-2 text-gray-300" dir="ltr">
                      <Phone size={16} className="text-primary-500" />
                      <span className="font-mono">{phone}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block w-full border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-brand-500 hover:border-brand-500 transition-all font-bold"
                >
                  عرض الموقع
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState, useMemo } from 'react';
import { Filter, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useData } from '../context/DataContext';

const Products = () => {
  const { products } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.includes(searchQuery) || product.description.includes(searchQuery);
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">منتجاتنا</h1>
            <p className="text-gray-600 mt-1">تصفح كتالوج منتجات باسلامه الشامل</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="بحث ذكي (مثال: زيت تويوتا 2020)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                <Filter size={20} />
                <h2>التصنيف</h2>
              </div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-right px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-primary-50 text-primary-700 font-bold' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat === 'all' ? 'الكل' : cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
                <p className="text-gray-500 text-lg">لا توجد منتجات تطابق بحثك.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                  className="mt-4 text-primary-600 hover:underline"
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

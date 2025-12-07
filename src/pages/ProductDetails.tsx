import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Phone, Share2, Shield } from 'lucide-react';
import { useData } from '../context/DataContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useData();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <div className="p-20 text-center">المنتج غير موجود</div>;
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-500 mb-8 flex gap-2">
          <Link to="/">الرئيسية</Link> / 
          <Link to="/products">المنتجات</Link> / 
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <span className="text-primary-600 font-medium text-sm bg-primary-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-2">{product.name}</h1>
              <div className="text-2xl font-bold text-secondary-900">
                {product.price ? `${product.price.toLocaleString()} ر.ي` : 'اطلب السعر'}
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8">
              <p>{product.description}</p>
            </div>

            {product.specifications && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">المواصفات الفنية</h3>
                <div className="grid grid-cols-2 gap-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-gray-500 text-sm block">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/contact" 
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                اطلب عرض سعر الآن
              </Link>
              <button className="p-4 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-green-600" />
                <span>منتج أصلي 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-green-600" />
                <span>متوفر في المخزون ({product.stock})</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">منتجات قد تهمك (توصيات ذكية)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

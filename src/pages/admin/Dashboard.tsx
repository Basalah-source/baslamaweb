import React from 'react';
import { Package, Users, DollarSign, ShoppingBag } from 'lucide-react';
import { useData } from '../../context/DataContext';

const Dashboard = () => {
  const { products } = useData();

  const stats = [
    { label: 'إجمالي المنتجات', value: products.length, icon: Package, color: 'bg-blue-500' },
    { label: 'إجمالي الطلبات', value: '12', icon: ShoppingBag, color: 'bg-green-500' },
    { label: 'العملاء', value: '450', icon: Users, color: 'bg-purple-500' },
    { label: 'المبيعات (تجريبي)', value: '15,000 ر.ي', icon: DollarSign, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">لوحة التحكم</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">أحدث المنتجات المضافة</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-sm">
                <th className="pb-3 font-medium">المنتج</th>
                <th className="pb-3 font-medium">السعر</th>
                <th className="pb-3 font-medium">المخزون</th>
                <th className="pb-3 font-medium">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.slice(0, 5).map((product) => (
                <tr key={product.id}>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-600">{product.price ? product.price.toLocaleString() : '-'}</td>
                  <td className="py-3 text-gray-600">{product.stock}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {product.stock > 0 ? 'متوفر' : 'نفذت الكمية'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, X, PlusCircle, MinusCircle } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Product } from '../../types';
import ImageUpload from '../../components/admin/ImageUpload';

const ProductManager = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: 'البطاريات',
    price: 0,
    stock: 0,
    description: '',
    image: '',
    isFeatured: false,
    specifications: {}
  });

  // Specs State for the form (Array of key-value pairs for easier editing)
  const [specsList, setSpecsList] = useState<{key: string, value: string}[]>([]);

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
      // Convert object specs to array for editing
      const specs = product.specifications 
        ? Object.entries(product.specifications).map(([key, value]) => ({ key, value }))
        : [];
      setSpecsList(specs);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: 'البطاريات',
        price: 0,
        stock: 0,
        description: '',
        image: '',
        isFeatured: false,
        specifications: {}
      });
      setSpecsList([]);
    }
    setIsModalOpen(true);
  };

  const handleSpecChange = (index: number, field: 'key' | 'value', value: string) => {
    const newSpecs = [...specsList];
    newSpecs[index][field] = value;
    setSpecsList(newSpecs);
  };

  const addSpecRow = () => {
    setSpecsList([...specsList, { key: '', value: '' }]);
  };

  const removeSpecRow = (index: number) => {
    setSpecsList(specsList.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert specs array back to object
    const specifications = specsList.reduce((acc, curr) => {
      if (curr.key.trim()) {
        acc[curr.key.trim()] = curr.value;
      }
      return acc;
    }, {} as Record<string, string>);

    const finalData = { ...formData, specifications };

    if (editingProduct) {
      updateProduct(editingProduct.id, finalData);
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        slug: formData.name!.toLowerCase().replace(/ /g, '-'),
        ...finalData as Product
      };
      addProduct(newProduct);
    }
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">إدارة المنتجات</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة منتج</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="بحث عن منتج..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="px-6 py-3 font-medium">الصورة</th>
                <th className="px-6 py-3 font-medium">الاسم</th>
                <th className="px-6 py-3 font-medium">القسم</th>
                <th className="px-6 py-3 font-medium">السعر</th>
                <th className="px-6 py-3 font-medium">المخزون</th>
                <th className="px-6 py-3 font-medium">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <img src={product.image || 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100'} alt="" className="w-12 h-12 rounded-lg object-cover bg-gray-100 border border-gray-200" />
                  </td>
                  <td className="px-6 py-3 font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-3 text-gray-600">{product.category}</td>
                  <td className="px-6 py-3 text-gray-600">{product.price?.toLocaleString()}</td>
                  <td className="px-6 py-3 text-gray-600">{product.stock}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleOpenModal(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => {
                          if(window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) deleteProduct(product.id);
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit/Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold">{editingProduct ? 'تعديل منتج' : 'إضافة منتج جديد'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Image */}
                <div className="lg:col-span-1">
                  <ImageUpload 
                    value={formData.image || ''} 
                    onChange={(val) => setFormData({...formData, image: val})} 
                  />
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">خيارات العرض</h3>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id="isFeatured"
                        checked={formData.isFeatured} 
                        onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">عرض في "منتجات مميزة"</label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج</label>
                      <input 
                        type="text" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">القسم</label>
                      <select 
                        value={formData.category}
                        onChange={e => setFormData({...formData, category: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      >
                        <option>البطاريات</option>
                        <option>الزيوت</option>
                        <option>الكفرات</option>
                        <option>الطاقة الشمسية</option>
                        <option>الفلاتر</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">السعر (ر.ي)</label>
                      <input 
                        type="number" 
                        value={formData.price || ''} 
                        onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الكمية في المخزون</label>
                      <input 
                        type="number" 
                        value={formData.stock || ''} 
                        onChange={e => setFormData({...formData, stock: Number(e.target.value)})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">الوصف</label>
                      <textarea 
                        rows={3}
                        value={formData.description} 
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Specifications Editor */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-gray-900">المواصفات الفنية</h3>
                      <button 
                        type="button" 
                        onClick={addSpecRow}
                        className="text-primary-600 text-sm font-bold hover:text-primary-700 flex items-center gap-1"
                      >
                        <PlusCircle size={16} /> إضافة خاصية
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {specsList.map((spec, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <input 
                            type="text" 
                            placeholder="الخاصية (مثلاً: الجهد)"
                            value={spec.key}
                            onChange={(e) => handleSpecChange(idx, 'key', e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-primary-500 outline-none"
                          />
                          <input 
                            type="text" 
                            placeholder="القيمة (مثلاً: 12V)"
                            value={spec.value}
                            onChange={(e) => handleSpecChange(idx, 'value', e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-1 focus:ring-primary-500 outline-none"
                          />
                          <button 
                            type="button" 
                            onClick={() => removeSpecRow(idx)}
                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <MinusCircle size={18} />
                          </button>
                        </div>
                      ))}
                      {specsList.length === 0 && (
                        <p className="text-sm text-gray-400 text-center py-2">لا توجد مواصفات إضافية. اضغط "إضافة خاصية" للبدء.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium"
                >
                  إلغاء
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-bold"
                >
                  حفظ التغييرات
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;

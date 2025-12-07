import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Settings, LogOut, Menu, X, Briefcase, Wrench } from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'لوحة التحكم', path: '/admin/dashboard' },
    { icon: Package, label: 'المنتجات', path: '/admin/products' },
    { icon: Briefcase, label: 'المشاريع', path: '/admin/projects' },
    { icon: Wrench, label: 'الخدمات', path: '/admin/services' },
    { icon: Settings, label: 'الإعدادات', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex font-cairo">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-secondary-900 text-white transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:relative lg:translate-x-0 flex flex-col`}
      >
        <div className="p-6 border-b border-secondary-800 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">باسلامه CMS</h2>
            <p className="text-xs text-gray-400 mt-1">v2.0 Pro</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                  : 'text-gray-300 hover:bg-secondary-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-secondary-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-300 hover:bg-red-900/20 hover:text-red-200 transition-colors"
          >
            <LogOut size={20} />
            <span>تسجيل خروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 lg:hidden flex-shrink-0">
          <span className="font-bold text-gray-700">لوحة التحكم</span>
          <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600 p-2">
            <Menu size={24} />
          </button>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

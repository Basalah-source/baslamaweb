import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Services from './pages/Services';
import Branches from './pages/Branches';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetailsPage from './pages/ProjectDetailsPage'; // New Import

// Service Detail Pages
import SolarService from './pages/services/SolarService';
import MaintenanceService from './pages/services/MaintenanceService';
import InspectionService from './pages/services/InspectionService';
import TireService from './pages/services/TireService';

// Admin Imports
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ProductManager from './pages/admin/ProductManager';
import ProjectManager from './pages/admin/ProjectManager';
import ServiceManager from './pages/admin/ServiceManager';
import Settings from './pages/admin/Settings';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetails />} />
          
          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/solar-installation" element={<SolarService />} />
          <Route path="services/maintenance" element={<MaintenanceService />} />
          <Route path="services/inspection" element={<InspectionService />} />
          <Route path="services/tires" element={<TireService />} />

          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetailsPage />} /> {/* New Route */}
          
          <Route path="branches" element={<Branches />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductManager />} />
          <Route path="projects" element={<ProjectManager />} />
          <Route path="services" element={<ServiceManager />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

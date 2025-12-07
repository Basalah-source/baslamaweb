import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, Service, Branch, Achievement, CompanyInfo, Project, HeroData } from '../types';
import { initialProducts, initialServices, initialBranches, initialAchievements, initialCompanyInfo, initialProjects, initialHeroData } from '../data/mockData';

interface DataContextType {
  products: Product[];
  services: Service[];
  branches: Branch[];
  achievements: Achievement[];
  companyInfo: CompanyInfo;
  projects: Project[];
  heroData: HeroData;
  
  // Product Actions
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Project Actions
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  // Service Actions
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;

  // Company Info
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;

  // Hero Data
  updateHeroData: (data: Partial<HeroData>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const loadState = <T,>(key: string, fallback: T): T => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch (e) {
      return fallback;
    }
  };

  const [products, setProducts] = useState<Product[]>(() => loadState('products', initialProducts));
  const [services, setServices] = useState<Service[]>(() => loadState('services', initialServices));
  const [branches, setBranches] = useState<Branch[]>(() => loadState('branches', initialBranches));
  const [achievements, setAchievements] = useState<Achievement[]>(() => loadState('achievements', initialAchievements));
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => loadState('companyInfo', initialCompanyInfo));
  const [projects, setProjects] = useState<Project[]>(() => loadState('projects', initialProjects));
  const [heroData, setHeroData] = useState<HeroData>(() => loadState('heroData', initialHeroData));

  // Persistence Effects
  useEffect(() => localStorage.setItem('products', JSON.stringify(products)), [products]);
  useEffect(() => localStorage.setItem('services', JSON.stringify(services)), [services]);
  useEffect(() => localStorage.setItem('branches', JSON.stringify(branches)), [branches]);
  useEffect(() => localStorage.setItem('achievements', JSON.stringify(achievements)), [achievements]);
  useEffect(() => localStorage.setItem('companyInfo', JSON.stringify(companyInfo)), [companyInfo]);
  useEffect(() => localStorage.setItem('projects', JSON.stringify(projects)), [projects]);
  useEffect(() => localStorage.setItem('heroData', JSON.stringify(heroData)), [heroData]);

  // --- Actions ---

  // Products
  const addProduct = (product: Product) => setProducts([...products, product]);
  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };
  const deleteProduct = (id: string) => setProducts(products.filter(p => p.id !== id));

  // Projects
  const addProject = (project: Project) => setProjects([...projects, project]);
  const updateProject = (id: string, updatedFields: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };
  const deleteProject = (id: string) => setProjects(projects.filter(p => p.id !== id));

  // Services
  const addService = (service: Service) => setServices([...services, service]);
  const updateService = (id: string, updatedFields: Partial<Service>) => {
    setServices(services.map(s => s.id === id ? { ...s, ...updatedFields } : s));
  };
  const deleteService = (id: string) => setServices(services.filter(s => s.id !== id));

  // Company Info
  const updateCompanyInfo = (info: Partial<CompanyInfo>) => {
    setCompanyInfo(prev => ({ ...prev, ...info }));
  };

  // Hero Data
  const updateHeroData = (data: Partial<HeroData>) => {
    setHeroData(prev => ({ ...prev, ...data }));
  };

  return (
    <DataContext.Provider value={{ 
      products, services, branches, achievements, companyInfo, projects, heroData,
      addProduct, updateProduct, deleteProduct,
      addProject, updateProject, deleteProject,
      addService, updateService, deleteService,
      updateCompanyInfo, updateHeroData
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

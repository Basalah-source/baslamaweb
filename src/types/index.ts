export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number | null;
  category: string;
  image: string;
  isFeatured: boolean;
  stock: number;
  specifications?: Record<string, string>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phones: string[];
  mapUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  description: string;
  email: string;
  phones: string[];
  address: string;
  logo: string; // Added logo field
  facebook?: string;
  twitter?: string;
  instagram?: string;
  whatsapp?: string;
}

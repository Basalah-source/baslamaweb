import { Product, Service, Branch, Achievement, CompanyInfo, Project } from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: 'مجموعة باسلامه',
  slogan: 'الجودة وضمان الخدمة',
  description: 'مجموعة باسلامه للتجارة والاستيراد، الرائدة في مجال البطاريات، الزيوت، الإطارات، وقسم متخصص في تركيب منظومات الطاقة الشمسية.',
  email: 'baslamah2011@hotmail.com',
  phones: ['05458956', '05409148', '05404966', '777771714'],
  address: 'اليمن، حضرموت، القطن، الشارع العام',
  logo: 'https://i.ibb.co/wNq1X0K/baslamah-logo-placeholder.png',
  facebook: '#',
  twitter: '#',
  instagram: '#',
  whatsapp: 'https://wa.me/967777771714'
};

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'بطارية سيارة قوية 70 أمبير',
    slug: 'car-battery-70ah',
    description: 'بطارية عالية الجودة تدوم طويلاً، مناسبة لجميع الأجواء.',
    price: 35000,
    category: 'البطاريات',
    image: 'https://images.unsplash.com/photo-1623698535724-1675806036d6?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    stock: 50,
    specifications: { 'الجهد': '12V', 'السعة': '70Ah', 'الضمان': 'سنة' }
  },
  {
    id: '2',
    name: 'زيت محرك تخليقي 5W-30',
    slug: 'synthetic-oil-5w30',
    description: 'زيت محرك متطور يوفر حماية قصوى للمحرك.',
    price: 4500,
    category: 'الزيوت',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    stock: 100,
    specifications: { 'اللزوجة': '5W-30', 'الحجم': '1 لتر', 'النوع': 'تخليقي بالكامل' }
  },
  {
    id: '3',
    name: 'طقم إطارات جميع التضاريس',
    slug: 'all-terrain-tires',
    description: 'إطارات متينة مصممة للطرق الوعرة والمعبدة.',
    price: null, 
    category: 'الكفرات',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    stock: 20,
    specifications: { 'المقاس': '265/70R17', 'النوع': 'All-Terrain' }
  },
  {
    id: '4',
    name: 'لوح طاقة شمسية 400 واط',
    slug: 'solar-panel-400w',
    description: 'ألواح شمسية عالية الكفاءة لتوليد الطاقة النظيفة.',
    price: 60000,
    category: 'الطاقة الشمسية',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    stock: 30,
    specifications: { 'القدرة': '400W', 'النوع': 'Monocrystalline' }
  },
];

export const initialServices: Service[] = [
  {
    id: '1',
    title: 'تركيب منظومات الطاقة',
    description: 'قسم متخصص لتركيب منظومات الطاقة الشمسية للمزارع والمنازل والمشاريع الكبيرة بأيدي مهندسين محترفين.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600',
    icon: 'Zap'
  },
  {
    id: '2',
    title: 'صيانة السيارات',
    description: 'صيانة وفحص قطع غيار السيارات والدراجات وتغيير الزيوت والفلاتر.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600',
    icon: 'Wrench'
  },
  {
    id: '3',
    title: 'فحص البطاريات',
    description: 'فحص وقياس وصيانة جميع أنواع البطاريات الجافة والسائلة بأحدث الأجهزة.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600',
    icon: 'ShieldCheck'
  },
  {
    id: '4',
    title: 'ترصيص الإطارات',
    description: 'خدمات تغيير وترصيص الإطارات لضمان سلامتك على الطريق.',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=600',
    icon: 'Truck'
  }
];

export const initialBranches: Branch[] = [
  {
    id: '1',
    name: 'القطن',
    address: 'الشارع العام',
    phones: ['05454767', '05458956'],
    mapUrl: 'https://maps.google.com'
  },
  {
    id: '2',
    name: 'سيئون',
    address: 'شارع المطار القبلي',
    phones: ['05441127', '05409148'],
    mapUrl: 'https://maps.google.com'
  },
  {
    id: '3',
    name: 'قهوة بن عيفان',
    address: 'بجوار شبكة القهوة',
    phones: ['05404966', '777779401'],
    mapUrl: 'https://maps.google.com'
  }
];

export const initialAchievements: Achievement[] = [
  {
    id: '1',
    title: 'منظومات الطاقة الشمسية للمزارع',
    description: 'تم تركيب منظومة الطاقة الشمسية للعديد من المزارع في محافظة حضرموت منها مزرعة الرواد وادي العين وبئر يافع والعديد من المزارع الأخرى.'
  },
  {
    id: '2',
    title: 'منظومات الطاقة الشمسية في محطات الوقود',
    description: 'تم تركيب منظومة طاقة شمسية في عدة محطات وقود في محافظة حضرموت، منها محطة بروج المحروقات ومحطة بامعس للمحروقات ومحطة بن عيفان للمحروقات.'
  },
  {
    id: '3',
    title: 'منظومات الطاقة الشمسية للمدارس',
    description: 'تم تركيب منظومات الطاقة الشمسية في عدة مدارس من مناطق متعددة في محافظة حضرموت.'
  }
];

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'مشروع الطاقة الشمسية الزراعي',
    category: 'طاقة شمسية',
    description: 'تركيب ألواح طاقة شمسية لتشغيل المضخات الزراعية في بيئة صحراوية.',
    content: 'قمنا في هذا المشروع بتصميم وتركيب منظومة طاقة شمسية متكاملة بقدرة 150 كيلو واط لتشغيل مضخات المياه الجوفية في منطقة وادي حضرموت. المشروع ساهم في تقليل تكلفة الديزل بنسبة 100% للمزارع، مما زاد من الجدوى الاقتصادية للمحصول. تم استخدام ألواح من نوع Monocrystalline وقواعد متحركة لتتبع الشمس يدوياً.',
    image: 'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=1000',
    date: '2024-01-15',
    location: 'وادي حضرموت'
  },
  {
    id: '2',
    title: 'تركيب منظومة هايبرد متكاملة',
    category: 'تركيبات فنية',
    description: 'تجهيز غرفة تحكم كاملة تحتوي على إنفرترات حديثة وبطاريات ليثيوم.',
    content: 'تم تنفيذ هذا المشروع لصالح مجمع تجاري في سيئون، حيث تطلب العمل توفير طاقة مستقرة على مدار 24 ساعة لتشغيل الثلاجات وأجهزة التكييف. قمنا بتركيب نظام هجين (Hybrid) يدمج بين الطاقة الشمسية والكهرباء العمومية والمولد الاحتياطي، مع بنك بطاريات ليثيوم بسعة تخزينية عالية.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000',
    date: '2023-12-20',
    location: 'سيئون'
  },
  {
    id: '3',
    title: 'محطة وقود بن عيفان',
    category: 'مشاريع تجارية',
    description: 'تزويد محطة الوقود بالطاقة النظيفة لتشغيل المضخات والإنارة.',
    content: 'مشروع حيوي لتزويد محطة وقود بن عيفان بالطاقة الشمسية. التحدي كان في توفير مساحة كافية للألواح، وتم حل ذلك بعمل مظلات شمسية (Carport) تستخدم كمواقف للسيارات وفي نفس الوقت تحمل الألواح الشمسية، مما وفر ظلاً للعملاء وطاقة للمحطة.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000',
    date: '2023-11-05',
    location: 'بن عيفان'
  }
];

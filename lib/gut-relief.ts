export interface GutReliefPack {
  id: string;
  name: string;
  bottlesCount: number;
  capsulesCount: number;
  price: number;
  originalPrice: number;
  savings: number;
  badge?: string;
  popular?: boolean;
  gifts?: string[];
  description: string;
}

export const GUT_RELIEF_PACKS: GutReliefPack[] = [
  {
    id: 'pack-1',
    name: 'باقة التجربة (علبة واحدة)',
    bottlesCount: 1,
    capsulesCount: 30,
    price: 299,
    originalPrice: 399,
    savings: 100,
    description: 'تكفي لمدة 15 إلى 30 يوماً من الاستخدام المنتظم لتحسين حركة الأمعاء وتخفيف الغازات.',
  },
  {
    id: 'pack-2',
    name: 'باقة التوفير الأكثر طلباً (علبتان)',
    bottlesCount: 2,
    capsulesCount: 60,
    price: 449,
    originalPrice: 699,
    savings: 250,
    popular: true,
    badge: 'الأكثر مبيعاً وتوفيراً 🔥',
    gifts: ['توصيل مجاني وسريع في 24 ساعة', 'هدية دليل تنظيم الهضم الطبيعي'],
    description: 'كورس علاجي متكامل لإعادة بناء فلورا الأمعاء والتخلص الجذري من انتفاخ البطن والقولون العصبي.',
  },
  {
    id: 'pack-3',
    name: 'باقة العلاج المكثف والعائلة (3 علب)',
    bottlesCount: 3,
    capsulesCount: 90,
    price: 599,
    originalPrice: 999,
    savings: 400,
    badge: 'أعلى نسبة توفير (وفر 400 د.م) ✨',
    gifts: ['توصيل مجاني فوري لباب المنزل', 'عبوة إضافية أو هدية خاصة'],
    description: 'أفضل قيمة للعائلات أو لضمان استقرار الجهاز الهضمي والتمتع ببطن ممسوح وراحة دائمة.',
  },
];

export interface ActiveIngredient {
  nameAr: string;
  nameFr: string;
  amount: string;
  role: string;
  description: string;
  icon: string;
}

export const INGREDIENTS_LIST: ActiveIngredient[] = [
  {
    nameAr: 'البروبيوتيك الحيوي (لاكتوباسيللوس + بيفيدوباكتريوم)',
    nameFr: 'Probiotiques (Lactobacillus & Bifidobacterium)',
    amount: '200 mg',
    role: 'استعادة الفلورا المعوية وتوازن بكتيريا الأمعاء النافعة',
    description: 'سلالات بروبيوتيك نشطة ومقاومة لأحماض المعدة، تعمل على استعمار الأمعاء بالبكتيريا الصديقة لمنع التخمر وعسر الهضم.',
    icon: '🦠',
  },
  {
    nameAr: 'مستخلص الزنجبيل المركز',
    nameFr: 'Extrait de Gingembre',
    amount: '100 mg',
    role: 'تسريع إفراغ المعدة وتهدئة الالتهابات الهضمية',
    description: 'غني بمادة الجنجيرول الطبيعية التي تحفز إنزيمات الهضم، تمنع ارتجاع المريء، وتزيل الإحساس بالغثيان وثقل البطن بعد الوجبات.',
    icon: '🫚',
  },
  {
    nameAr: 'مستخلص الشمر الطبيعي (النافع البلدي)',
    nameFr: 'Extrait de Fenouil',
    amount: '100 mg',
    role: 'طارد الغازات ومضاد للتشنجات والمغص المعوي',
    description: 'المكون العشبي الأشهر في الطب الطبيعي لارتخاء عضلات القولون المشدودة وإخراج الغازات المحتبسة التي تسبب انتفاخ البطن في دقائق.',
    icon: '🌱',
  },
  {
    nameAr: 'مسحوق الإينولين (بريبايوتك نباتي)',
    nameFr: 'Poudre d’Inuline (Prébiotique)',
    amount: '50 mg',
    role: 'الغذاء الحيوي المغذي للبكتيريا النافعة',
    description: 'ألياف بريبايوتك طبيعية نقية تضمن بقاء البروبيوتيك نشطاً وفعالاً داخل الأمعاء وتحسن امتصاص العناصر الغذائية.',
    icon: '🌾',
  },
  {
    nameAr: 'مالتوديكسترين نباتي طبيعي',
    nameFr: 'Maltodextrine',
    amount: '50 mg',
    role: 'حامل طبيعي متجانس يضمن امتصاص الجرعة بدقة',
    description: 'مساعد امتصاص غذائي يضمن وصول المكونات الفعالة بكامل تركيزها ونقاوتها إلى الأمعاء.',
    icon: '✨',
  },
];

export const MOROCCO_CITIES = [
  'الدار البيضاء (Casablanca)',
  'الرباط (Rabat)',
  'مراكش (Marrakech)',
  'طنجة (Tanger)',
  'فاس (Fès)',
  'أكادير (Agadir)',
  'القنيطرة (Kénitra)',
  'وجدة (Oujda)',
  'مكناس (Meknès)',
  'تطوان (Tétouan)',
  'تمارة (Témara)',
  'المحمدية (Mohammedia)',
  'سلا (Salé)',
  'الجديدة (El Jadida)',
  'بني ملال (Béni Mellal)',
  'الناظور (Nador)',
  'تازة (Taza)',
  'سطات (Settat)',
  'برشيد (Berrechid)',
  'خريبكة (Khouribga)',
  'العرائش (Larache)',
  'الداخلة (Dakhla)',
  'العيون (Laâyoune)',
  'كلميم (Guelmim)',
  'تزنيت (Tiznit)',
  'الصويرة (Essaouira)',
  'آسفي (Safi)',
  'مدينة أخرى بالمغرب (Autre ville)',
];

export function validateMoroccanPhone(phone: string): boolean {
  if (!phone) return false;
  // Clean spaces, hyphens, plus signs
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches: 06XXXXXXXX, 07XXXXXXXX, +2126XXXXXXXX, +2127XXXXXXXX, 2126XXXXXXXX, 2127XXXXXXXX
  const regex = /^(?:(?:\+?212|0)[67]\d{8})$/;
  return regex.test(cleaned);
}

export function formatMoroccanPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('+212')) {
    return '0' + cleaned.slice(4);
  }
  if (cleaned.startsWith('212')) {
    return '0' + cleaned.slice(3);
  }
  return cleaned;
}

export function calculateOrderSummary(packId: string, quantity: number = 1) {
  const pack = GUT_RELIEF_PACKS.find((p) => p.id === packId) || GUT_RELIEF_PACKS[1];
  const unitPrice = pack.price;
  const totalPrice = unitPrice * Math.max(1, quantity);
  const totalOriginalPrice = pack.originalPrice * Math.max(1, quantity);
  const totalSavings = totalOriginalPrice - totalPrice;
  const shippingFee = 0; // Free delivery in Morocco

  return {
    pack,
    unitPrice,
    totalPrice,
    totalOriginalPrice,
    totalSavings,
    shippingFee,
  };
}

export function buildWhatsAppOrderLink(
  fullName: string,
  phone: string,
  city: string,
  packName: string,
  totalPrice: number
): string {
  const message = `السلام عليكم ورحمة الله،
أريد تأكيد طلبي لمكمل Balurix GUT RELIEF:
- الاسم: ${fullName || 'زبون عبر الموقع'}
- الهاتف: ${phone || 'غير محدد'}
- المدينة: ${city || 'المغرب'}
- الباقة: ${packName}
- المبلغ الإجمالي للدفع عند الاستلام: ${totalPrice} درهم (توصيل مجاني)`;

  return `https://wa.me/212636460996?text=${encodeURIComponent(message)}`;
}

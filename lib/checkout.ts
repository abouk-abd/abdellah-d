export interface PackOption {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  badge?: string;
  popular?: boolean;
  gifts?: string[];
  itemsCount: number;
}

export interface ComplementaryProduct {
  id: string;
  name: string;
  englishName: string;
  brandLab: string;
  subtitle: string;
  badge: string;
  concern: string;
  activeActives: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  description: string;
  benefits: string[];
  image: string;
}

export const PACKS: PackOption[] = [
  {
    id: 'pack-1',
    name: 'باقة التجربة (عبوة واحدة)',
    subtitle: 'عبوة واحدة من قطرات الكلوروفيل المركز (تكفي 30 يوماً)',
    price: 289,
    originalPrice: 350,
    savings: 61,
    itemsCount: 1,
  },
  {
    id: 'pack-2',
    name: 'الباقة الأكثر طلباً (عبوتان)',
    subtitle: 'ديتوكس مكثف لكِ أو لمشاركتها مع أختك أو صديقتك',
    price: 449,
    originalPrice: 578,
    savings: 129,
    popular: true,
    badge: 'الأكثر طلباً وتوفيراً 🔥',
    gifts: ['شحن مجاني وسريع في 24-48 ساعة'],
    itemsCount: 2,
  },
  {
    id: 'pack-3',
    name: 'باقة الجمال الشامل (كلوروفيل + كولاجين بحري)',
    subtitle: 'قطرات الكلوروفيل المركز + أكياس الكولاجين البحري بفيتامين C',
    price: 499,
    originalPrice: 650,
    savings: 151,
    badge: 'النتائج المضاعفة ✨',
    gifts: ['هدية مجانية خاصة', 'توصيل مجاني لباب المنزل'],
    itemsCount: 2,
  },
];

export const COMPLEMENTARY_PRODUCTS: ComplementaryProduct[] = [
  {
    id: 'chlorophyll-hero',
    name: 'قطرات الكلوروفيل النباتي المركز',
    englishName: 'Pure Green Detox Drops',
    brandLab: 'PURE GREEN LAB',
    subtitle: 'تنقية الجهاز الهضمي والدم، إزالة الغازات ونضارة البشرة',
    badge: 'المنتج البطل الأكثر طلباً',
    concern: 'الانتفاخ وعسر الهضم',
    activeActives: '100% Pure Chlorophyllin + Antioxidant Phyto-Complex',
    rating: 4.9,
    reviewsCount: 1240,
    price: 289,
    originalPrice: 350,
    description: 'تركيبة مركزة فائقة النقاوة تعيد توازن حركة الأمعاء وتزيل السموم الداخلية المسؤولة عن بهتان البشرة وحب الشباب الهرموني.',
    benefits: [
      'تطهير فوري للقولون والتخلص من الغازات وثقل البطن',
      'فلترة طبيعية للدم ومساعدة الكبد على التخلص من الشوائب',
      'طاقة وانتعاش طبيعي بدون كافيين ورائحة فم منعشة',
    ],
    image: '/images/product_chlorophyll_drops_1792691530915.jpg',
  },
  {
    id: 'marine-collagen',
    name: 'أكياس الكولاجين البحري + فيتامين C',
    englishName: 'Marine Collagen Peptides',
    brandLab: 'CELLULAR RADIANCE',
    subtitle: 'ملء خطوط الوجه، شد ترهلات الجلد، وترطيب الأعماق',
    badge: 'نضارة وبناء خلايا',
    concern: 'شحوب البشرة والتجاعيد',
    activeActives: '5000mg Hydrolyzed Marine Peptides + 80mg Vitamin C',
    rating: 4.9,
    reviewsCount: 890,
    price: 299,
    originalPrice: 380,
    description: 'يكمل قطرات الكلوروفيل بشكل مثالي: الكلوروفيل ينقي السموم، والكولاجين يعيد بناء نضارة وحجم ومرونة البشرة وتأخير التجاعيد.',
    benefits: [
      'ببتيدات كولاجين بحري متحللة سريعة الامتصاص',
      'مدعم بفيتامين C الطبيعي لتحفيز بناء الكولاجين الذاتي',
      'أكياس يومية سهلة الاستخدام بنكهة طبيعية خفيفة',
    ],
    image: '/images/product_marine_collagen_1792691530762.jpg',
  },
  {
    id: 'rosemary-mist',
    name: 'رذاذ الروزماري والبيبتيدات لإنبات الشعر',
    englishName: 'Peptide Scalp Mist',
    brandLab: 'TRICHOLOGY & SCALP LAB',
    subtitle: 'علاج تساقط الشعر، ملء الفراغات الأمامية، وتقوية البصيلات',
    badge: 'كثافة وإنبات البصيلات',
    concern: 'تساقط الشعر والفراغات',
    activeActives: '5% Pure Rosemary Extract + Copper Tripeptide-1 + Biotin',
    rating: 4.8,
    reviewsCount: 630,
    price: 249,
    originalPrice: 320,
    description: 'تركيبة مائية صيدلانية متطورة وخفيفة الوزن، تمتصها فروة الرأس فوراً بدون أي ملمس دهني أو حاجة لغسل الشعر يومياً.',
    benefits: [
      'تنشيط الدورة الدموية في الفروة وإنعاش البصيلات الخاملة',
      'ببتيدات النحاس والزنك لتقليل التساقط الموسمي والهرموني',
      'بدون ملمس زيتي - مناسب لجميع أنواع الشعر والمحجبات',
    ],
    image: '/images/product_rosemary_mist_1792691532690.jpg',
  },
  {
    id: 'magnesium-elixir',
    name: 'إكسير المغنيسيوم وأعشاب النوم الهادئ',
    englishName: 'Deep Sleep & Anti-Stress Elixir',
    brandLab: 'CIRCADIAN WELLNESS',
    subtitle: 'علاج الأرق، التوتر العصبي، وانتفاخ الوجه الصباحي',
    badge: 'استرخاء ونوم عميق',
    concern: 'الأرق وهرمون التوتر',
    activeActives: '300mg Magnesium Glycinate + Organic Chamomile & L-Theanine',
    rating: 4.8,
    reviewsCount: 512,
    price: 249,
    originalPrice: 310,
    description: 'قطرات مهدئة طبيعية تخفض هرمون الكورتيزول (هرمون التوتر والإجهاد)، لتستيقظي كل صباح بملامح مرتاحة ونضارة مدهشة.',
    benefits: [
      'مغنيسيوم جلايسينات عالي التوافر الحيوي لارتخاء العضلات',
      'خلاصات البابونج والخزامى لنوم متواصل وعميق دون أدوية',
      'التخلص من انتفاخ تحت العين وشحوب الوجه الناتج عن قلة النوم',
    ],
    image: '/images/product_magnesium_elixir_1792691531885.jpg',
  },
];

export const MOROCCAN_CITIES = [
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
  'آسفي (Safi)',
  'خريبكة (Khouribga)',
  'سطات (Settat)',
  'العيون (Laâyoune)',
  'الداخلة (Dakhla)',
  'ورزازات (Ouarzazate)',
  'الصويرة (Essaouira)',
  'تازة (Taza)',
  'برشيد (Berrechid)',
  'مدينة أخرى بالمغرب',
];

export interface OrderFormValues {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  packId: string;
  notes?: string;
}

export interface ValidationErrors {
  fullName?: string;
  phone?: string;
  city?: string;
  address?: string;
  packId?: string;
}

/**
 * Validates a Moroccan telephone number.
 * Accepts formats: 06XXXXXXXX, 07XXXXXXXX, +2126XXXXXXXX, +2127XXXXXXXX, 2126XXXXXXXX, 05XXXXXXXX
 */
export function validateMoroccanPhone(phone: string): boolean {
  if (!phone) return false;
  const clean = phone.replace(/[\s\-\(\)\.]/g, '');
  // Match Moroccan mobiles starting with 06, 07, 05 or +2126, +2127, 2126, 2127
  const regex = /^(?:(?:\+|00)212|0)[5-7]\d{8}$/;
  return regex.test(clean);
}

/**
 * Validates the full COD checkout form values
 */
export function validateOrderForm(values: OrderFormValues): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!values.fullName || values.fullName.trim().length < 3) {
    errors.fullName = 'يرجى إدخال الاسم الكامل (3 أحرف على الأقل)';
  }

  if (!values.phone || !validateMoroccanPhone(values.phone)) {
    errors.phone = 'يرجى إدخال رقم هاتف مغربي صحيح (مثال: 0636460996 أو 07XXXXXXXX)';
  }

  if (!values.city || values.city.trim().length === 0) {
    errors.city = 'يرجى اختيار مدينتك لتسهيل التوصيل السريع';
  }

  if (!values.address || values.address.trim().length < 4) {
    errors.address = 'يرجى كتابة العنوان أو الحي لتوصيل الطلب إلى باب منزلك';
  }

  if (!values.packId || !PACKS.some((p) => p.id === values.packId)) {
    errors.packId = 'يرجى اختيار أحد العروض المتاحة';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Builds the official WhatsApp direct ordering link with pre-filled message
 */
export const OFFICIAL_PHONE = '212636460996';

export function getWhatsAppOrderUrl(data?: {
  fullName?: string;
  phone?: string;
  city?: string;
  packName?: string;
  price?: number;
}): string {
  if (!data || !data.packName) {
    const defaultText = 'السلام عليكم، أريد الاستفسار أو طلب قطرات الكلوروفيل المركز لتنقية الجسم ونضارة البشرة.';
    return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(defaultText)}`;
  }

  const message = `السلام عليكم ورحمة الله،
أريد تأكيد طلبي لقطرات الكلوروفيل:
- الاسم: ${data.fullName || 'غير محدد'}
- الهاتف: ${data.phone || 'غير محدد'}
- المدينة: ${data.city || 'غير محدد'}
- العرض المختار: ${data.packName} (${data.price} درهم)
- الدفع: نقداً عند الاستلام مع التوصيل المجاني.
شكراً لكم!`;

  return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(message)}`;
}

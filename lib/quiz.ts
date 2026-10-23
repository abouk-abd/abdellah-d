export interface DiagnosticAnswer {
  primaryConcern: 'gut_bloating' | 'skin_dullness' | 'hair_loss' | 'stress_sleep' | 'all_in_one';
  timing: 'after_meals' | 'morning' | 'daily' | 'night';
}

export interface DiagnosticResult {
  recommendedPackId: string;
  recommendedProductName: string;
  headline: string;
  explanation: string;
  activeActives: string[];
  durationDays: number;
  discountPercentage: number;
}

export function calculateDiagnosticResult(answers: DiagnosticAnswer): DiagnosticResult {
  if (answers.primaryConcern === 'gut_bloating') {
    return {
      recommendedPackId: 'pack-2',
      recommendedProductName: 'قطرات الكلوروفيل المركز (عرض العبوتين)',
      headline: 'روتين الديتوكس والراحة الهضمية المكثف',
      explanation: 'حالتك تتطلب تطهير جدار الأمعاء وطرد الغازات المتراكمة وإعادة توازن بكتيريا الجهاز الهضمي النافعة.',
      activeActives: ['100% Raw Chlorophyllin', 'Antioxidant Complex', 'Natural Spearmint'],
      durationDays: 60,
      discountPercentage: 22,
    };
  }

  if (answers.primaryConcern === 'skin_dullness' || answers.primaryConcern === 'all_in_one') {
    return {
      recommendedPackId: 'pack-3',
      recommendedProductName: 'باقة الجمال الشامل (كلوروفيل + كولاجين بحري)',
      headline: 'الروتين المزدوج: تنقية السموم وبناء نضارة الخلايا',
      explanation: 'الكلوروفيل يزيل السموم الداخلية المسببة للبثور، بينما يملأ الكولاجين البحري وفيتامين C أنسجة الجلد بالمرونة والنضارة.',
      activeActives: ['100% Pure Chlorophyll', '5000mg Marine Collagen', 'Pure Vitamin C'],
      durationDays: 30,
      discountPercentage: 25,
    };
  }

  if (answers.primaryConcern === 'hair_loss') {
    return {
      recommendedPackId: 'pack-2',
      recommendedProductName: 'رذاذ الروزماري والبيبتيدات + قطرات الكلوروفيل',
      headline: 'روتين تحفيز البصيلات وتغذية الدم',
      explanation: 'تنقية الدم ترفع تدفق الأكسجين نحو الفروة، بينما تحفز ببتيدات الروزماري نمو البصيلات الخاملة مباشرة.',
      activeActives: ['5% Rosemary Extract', 'Copper Tripeptide-1', 'Biotin & Zinc'],
      durationDays: 45,
      discountPercentage: 20,
    };
  }

  // stress_sleep
  return {
    recommendedPackId: 'pack-1',
    recommendedProductName: 'إكسير المغنيسيوم وأعشاب النوم الهادئ',
    headline: 'روتين تخفيض الكورتيزول والنوم العميق',
    explanation: 'تعديل جودة النوم يخفض هرمون الإجهاد، مما يزيل انتفاخ الوجه الصباحي ويسمح للبشرة بتجديد خلاياها ليلاً.',
    activeActives: ['Magnesium Glycinate', 'Organic Chamomile', 'Lavender Terpenes'],
    durationDays: 30,
    discountPercentage: 15,
  };
}

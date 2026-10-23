'use client';

import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function GutReliefComparison() {
  const comparisonRows = [
    {
      question: 'هل له نتائج مضرة أو آثار جانبية على الجسم؟',
      balurix: 'لا — آمن وطبيعي 100%',
      balurixCheck: true,
      others: 'نعم — يسبب مغص وتهيج بالمعدة',
      othersCheck: false,
    },
    {
      question: 'هل يسبب تعوداً أو كسلاً لعضلات القولون؟',
      balurix: 'لا — يعيد تشغيل حركة الأمعاء ذاتياً',
      balurixCheck: true,
      others: 'نعم — تتوقف الأمعاء عن العمل بدونه',
      othersCheck: false,
    },
    {
      question: 'هل يحتوي على مواد كيميائية أو ملينات صناعية؟',
      balurix: 'لا — خلاصات نباتية وبروبيوتيك نقي',
      balurixCheck: true,
      others: 'نعم — مواد كيميائية وسنا قاسية',
      othersCheck: false,
    },
    {
      question: 'هل يعالج جذر المشكلة (الفلورا وبكتيريا الأمعاء)؟',
      balurix: 'نعم — 200mg بروبيوتيك حيوي + إينولين',
      balurixCheck: true,
      others: 'لا — مجرد تسكين وتفريغ قسري مؤقت',
      othersCheck: false,
    },
    {
      question: 'هل المنتج أصلي ومصادق مخبرياً مع حق المعاينة؟',
      balurix: 'نعم — معاينة حرة للطرد قبل الدفع بالمغرب',
      balurixCheck: true,
      others: 'لا — أغلبها مجهول المصدر والتركيب',
      othersCheck: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#3E8E49]" />
            <span>مقارنة علمية شفافة</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3D2E] tracking-tight mb-4">
            Balurix GUT RELIEF ضد المنتجات والملينات الأخرى
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            لماذا يفضل الأطباء والمختصون تركيبة Balurix الطبيعية على الأدوية الكيميائية التقليدية؟
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#DCE8D9] shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-[#0B3D2E] text-white p-4 sm:p-5 font-bold text-xs sm:text-sm items-center">
            <div className="col-span-6 sm:col-span-6 text-right">المعيار والمقارنة</div>
            <div className="col-span-3 sm:col-span-3 text-center bg-[#3E8E49] py-1.5 px-2 rounded-xl font-extrabold text-[#A3E635] shadow-xs">
              Balurix 🌿
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-slate-300">
              المنتجات الأخرى ❌
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm">
                <div className="col-span-6 sm:col-span-6 font-bold text-slate-900 pl-2">
                  {row.question}
                </div>
                
                {/* Balurix column */}
                <div className="col-span-3 sm:col-span-3 text-center flex flex-col items-center justify-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#DCE8D9] text-[#0B3D2E] flex items-center justify-center font-bold">
                    <Check className="w-4 h-4 text-[#0B3D2E]" />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#0B3D2E] hidden sm:block">
                    {row.balurix}
                  </span>
                </div>

                {/* Others column */}
                <div className="col-span-3 sm:col-span-3 text-center flex flex-col items-center justify-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 hidden sm:block">
                    {row.others}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom highlight banner */}
          <div className="bg-[#DCE8D9]/50 p-4 text-center text-xs font-bold text-[#0B3D2E] border-t border-[#DCE8D9]">
            🎯 النتيجة: راحة هضمية آمنة ومستمرة بدون أي مخاطر على المدى الطويل
          </div>
        </div>

      </div>
    </section>
  );
}

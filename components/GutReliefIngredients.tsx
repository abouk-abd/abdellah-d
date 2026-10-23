'use client';

import { INGREDIENTS_LIST } from '@/lib/gut-relief';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function GutReliefIngredients() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F6EF]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] border border-[#3E8E49]/30 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#3E8E49]" />
            <span>شفافية تامة: من واقع ملصق العلبة الرسمي</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3D2E] tracking-tight mb-4">
            المكونات الصيدلانية الفعالة في كل كبسولة
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            تمت معايرة كل مكون مخبرياً بنسب دقيقة ومدروسة تمنح أقصى مفعول تآزري (Synergistic Effect) لإراحة الجهاز الهضمي بدون أي مواد كيميائية مضافة أو ملينات ضارة.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENTS_LIST.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCE8D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-[#DCE8D9]/40 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="bg-[#0B3D2E] text-[#A3E635] text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {item.amount}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#0B3D2E] mb-1">
                  {item.nameAr}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 block mb-3 font-semibold" dir="ltr">
                  {item.nameFr}
                </span>

                <div className="bg-[#F8F6EF] px-3 py-1.5 rounded-xl text-xs font-bold text-[#3E8E49] mb-3 inline-block">
                  🎯 الدور: {item.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E8E49]" />
                <span>نقاء نباتي صيدلاني معتمد</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Formulation Standard */}
          <div className="bg-gradient-to-br from-[#0B3D2E] to-[#144937] text-white p-6 sm:p-7 rounded-3xl shadow-md flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-4 block">🔬</span>
              <span className="text-xs font-bold text-[#A3E635] uppercase tracking-wider block mb-2">
                معايير الجودة الصيدلانية
              </span>
              <h3 className="text-lg font-black mb-3">
                خالٍ تماماً من:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-100">
                <li className="flex items-center gap-2">
                  <span className="text-[#A3E635]">✓</span>
                  <span>خالٍ من الملينات الكيميائية القاسية (Sennosides free)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A3E635]">✓</span>
                  <span>خالٍ من السكر المضاف والمحليات الصناعية</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A3E635]">✓</span>
                  <span>خالٍ من الغلوتين والمواد الحافظة الضارة</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A3E635]">✓</span>
                  <span>كبسولات نباتية 100% مناسبة لجميع الحميات</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-700/50 text-[11px] text-emerald-300">
              إنتاج مراقب مخبرياً وفق معايير ممارسات التصنيع الجيد (GMP)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

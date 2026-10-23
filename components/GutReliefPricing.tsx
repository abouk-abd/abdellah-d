'use client';

import { GUT_RELIEF_PACKS, GutReliefPack } from '@/lib/gut-relief';
import { Check, Flame, Sparkles, ShieldCheck, Truck } from 'lucide-react';

interface GutReliefPricingProps {
  selectedPackId: string;
  onSelectPack: (packId: string) => void;
}

export default function GutReliefPricing({ selectedPackId, onSelectPack }: GutReliefPricingProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F6EF]" id="pricing-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] px-3.5 py-1 rounded-full mb-3">
            <Flame className="w-3.5 h-3.5 text-red-500" />
            <span>عروض خاصة لدفعة هذا الأسبوع بالمغرب</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3D2E] tracking-tight mb-4">
            اختاري باقة Balurix المناسبة لكِ
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            جميع الباقات تشمل <strong className="text-[#0B3D2E]">التوصيل المجاني والسريع</strong> لجميع مدن وقرى المغرب، مع الدفع نقداً بعد استلامك ومعاينتك للعلبة.
          </p>
        </div>

        {/* 3 Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {GUT_RELIEF_PACKS.map((pack) => {
            const isSelected = pack.id === selectedPackId;
            const isPopular = pack.popular;

            return (
              <div
                key={pack.id}
                onClick={() => onSelectPack(pack.id)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all cursor-pointer ${
                  isPopular
                    ? 'bg-white border-2 border-[#3E8E49] shadow-xl shadow-[#0B3D2E]/15 scale-102 lg:scale-105 z-10'
                    : 'bg-white/90 border border-[#DCE8D9] shadow-sm hover:shadow-md'
                } ${isSelected ? 'ring-4 ring-[#0B3D2E]/20' : ''}`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-[#3E8E49] text-white text-xs font-black py-1 px-4 rounded-full shadow-md whitespace-nowrap flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-300" />
                    <span>الباقة الأكثر طلباً وتوفيراً 🔥</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#3E8E49] block mb-1">
                      {pack.bottlesCount === 1 ? 'عبوة واحدة (30 كبسولة)' : `${pack.bottlesCount} عبوات (${pack.capsulesCount} كبسولة)`}
                    </span>
                    <h3 className="text-xl font-black text-[#0B3D2E]">
                      {pack.name}
                    </h3>
                  </div>

                  {/* Pricing Display */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl mb-5 text-right border border-slate-100">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-[#0B3D2E]">
                        {pack.price} <span className="text-base">درهم</span>
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        {pack.originalPrice} درهم
                      </span>
                    </div>
                    <span className="inline-block text-[11px] font-bold text-[#3E8E49] bg-[#DCE8D9] px-2.5 py-0.5 rounded-full">
                      وفر {pack.savings} درهم اليوم
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pack.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#DCE8D9] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#0B3D2E]" />
                      </div>
                      <span>كبسولات نباتية أصلية 100%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#DCE8D9] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#0B3D2E]" />
                      </div>
                      <span className="font-bold text-[#0B3D2E]">شحن مجاني وسريع لجميع المدن</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#DCE8D9] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#0B3D2E]" />
                      </div>
                      <span>الدفع نقداً بعد فتح ومعاينة الطرد</span>
                    </li>
                    {pack.gifts && pack.gifts.map((gift, gIdx) => (
                      <li key={gIdx} className="flex items-center gap-2 text-emerald-800 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-[#3E8E49] shrink-0" />
                        <span>{gift}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Choose button */}
                <button
                  type="button"
                  className={`w-full py-3.5 px-4 rounded-2xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-[#0B3D2E] text-white hover:bg-[#07271D] shadow-md shadow-[#0B3D2E]/25'
                      : 'bg-[#F8F6EF] hover:bg-[#DCE8D9] text-[#0B3D2E] border border-[#3E8E49]/30'
                  }`}
                >
                  <span>{isSelected ? '✓ تم اختيار هذه الباقة' : 'اختيار هذه الباقة'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-bold">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#3E8E49]" />
            <span>توصيل بالمجان لجميع أنحاء المغرب</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#3E8E49]" />
            <span>لا تدفع أي سنتيم حتى تستلم وتتأكد</span>
          </span>
        </div>

      </div>
    </section>
  );
}

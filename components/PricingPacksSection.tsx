'use client';

import { PACKS, PackOption } from '@/lib/checkout';
import { Check, Sparkles, Flame, Gift, ArrowDown } from 'lucide-react';

interface PricingPacksSectionProps {
  selectedPackId: string;
  onSelectPack: (packId: string) => void;
}

export default function PricingPacksSection({
  selectedPackId,
  onSelectPack,
}: PricingPacksSectionProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold bg-emerald-100/70 px-4 py-1.5 rounded-full mb-3 border border-emerald-300/40">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>عروض خاصة لدفعة هذا الأسبوع فقط</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            اختاري باقتك المناسبة مع التوصيل المجاني
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            جميع الباقات تشمل التوصيل المجاني لكافة مدن وقرى المغرب مع الدفع نقداً عند استلام ومعاينة طردك
          </p>
        </div>

        {/* 3 Packs Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKS.map((pack) => {
            const isSelected = selectedPackId === pack.id;
            const isPopular = pack.popular;

            return (
              <div
                key={pack.id}
                onClick={() => onSelectPack(pack.id)}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isPopular
                    ? 'bg-white border-2 border-emerald-600 shadow-2xl md:-translate-y-2 ring-4 ring-emerald-600/10'
                    : isSelected
                    ? 'bg-white border-2 border-emerald-600 shadow-xl'
                    : 'bg-white/80 border border-slate-200 hover:border-emerald-300 hover:shadow-lg'
                }`}
              >
                {/* Popular / Best value badge */}
                {isPopular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white text-xs font-black py-1 px-4 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>الباقة الأكثر طلباً (توفير 129 درهم) ⭐⭐⭐⭐⭐</span>
                  </div>
                )}

                {!isPopular && pack.badge && (
                  <div className="absolute -top-3.5 right-6 bg-slate-900 text-emerald-300 text-[11px] font-bold py-0.5 px-3 rounded-full border border-white/20 shadow-xs">
                    {pack.badge}
                  </div>
                )}

                <div>
                  {/* Radio / Selection Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {pack.id === 'pack-1' ? 'العرض 1: باقة التجربة' : pack.id === 'pack-2' ? 'العرض 2: ديتوكس مكثف' : 'العرض 3: الجمال الشامل'}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {pack.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pack.subtitle}
                  </p>

                  {/* Price */}
                  <div className="bg-[#FAF8F5] rounded-2xl p-4 mb-6 border border-slate-200/60">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tabular-nums">
                        {pack.price}
                      </span>
                      <span className="text-sm font-bold text-slate-600">درهم مغربي</span>
                      {pack.originalPrice && (
                        <span className="text-xs text-slate-400 line-through mr-auto tabular-nums">
                          {pack.originalPrice} درهم
                        </span>
                      )}
                    </div>

                    {pack.savings && (
                      <div className="text-xs font-bold text-emerald-700 mt-2 flex items-center gap-1">
                        <span>وفرتِ {pack.savings} درهم في هذا العرض!</span>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>توصيل بالمجان لجميع مدن المغرب</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>الدفع نقداً بعد استلام الطرد وتفقده</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>متابعة شخصية للاستخدام عبر الواتساب</span>
                    </div>
                    {pack.gifts &&
                      pack.gifts.map((g, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-emerald-800">
                          <Gift className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{g}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Select Button */}
                <button
                  type="button"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    isSelected
                      ? 'bg-[#1B4332] text-white shadow-emerald-950/20'
                      : isPopular
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>{isSelected ? 'العرض المختار حالياً' : 'اختاري هذا العرض'}</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

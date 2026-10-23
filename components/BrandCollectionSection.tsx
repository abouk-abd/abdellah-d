'use client';

import { useState } from 'react';
import Image from 'next/image';
import { COMPLEMENTARY_PRODUCTS, ComplementaryProduct } from '@/lib/checkout';
import { Sparkles, Check, Plus, Star, ArrowLeft, Filter, ShieldCheck, Zap } from 'lucide-react';

interface BrandCollectionSectionProps {
  onSelectProduct: (product: ComplementaryProduct) => void;
  onOrderComprehensivePack: () => void;
  onOpenDiagnostic: () => void;
}

const CONCERNS = [
  { id: 'all', label: 'جميع المنتجات (All)' },
  { id: 'الانتفاخ وعسر الهضم', label: 'الانتفاخ وعسر الهضم' },
  { id: 'شحوب البشرة والتجاعيد', label: 'نضارة وتجاعيد البشرة' },
  { id: 'تساقط الشعر والفراغات', label: 'تساقط وكثافة الشعر' },
  { id: 'الأرق وهرمون التوتر', label: 'الأرق وهرمون التوتر' },
];

export default function BrandCollectionSection({
  onSelectProduct,
  onOrderComprehensivePack,
  onOpenDiagnostic,
}: BrandCollectionSectionProps) {
  const [selectedConcern, setSelectedConcern] = useState<string>('all');

  const filteredProducts =
    selectedConcern === 'all'
      ? COMPLEMENTARY_PRODUCTS
      : COMPLEMENTARY_PRODUCTS.filter((p) => p.concern === selectedConcern);

  return (
    <section id="collection" className="py-16 sm:py-24 bg-white border-t border-emerald-950/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold bg-emerald-50 px-4 py-1.5 rounded-full mb-3 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>مختبر العناية الحيوية | Science-Backed Formulations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            تشكيلة المنتجات المصممة علمياً حسب مشكلتك
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            تركيبات صيدلانية عالية التركيز خالية من الحشوات الكيميائية تضمن نتائج واضحة وتوافقاً تاماً
          </p>

          {/* Diagnostic Quiz Trigger Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#FAF8F5] border border-emerald-900/15 py-2.5 px-5 rounded-2xl">
            <span className="text-xs text-slate-700 font-medium">مترددة في اختيار المنتج الأنسب؟</span>
            <button
              onClick={onOpenDiagnostic}
              className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 cursor-pointer flex items-center gap-1"
            >
              <span>جربي اختبار التشخيص السريع (15 ثانية)</span>
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            </button>
          </div>
        </div>

        {/* Innovist-style "Shop By Concern" Filter Segmented Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {CONCERNS.map((c) => {
            const isActive = selectedConcern === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedConcern(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1B4332] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Innovist-style Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-emerald-950/10 hover:border-emerald-700/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={500}
                    height={375}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                    {prod.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Brand Lab & Rating like Innovist */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-800 tracking-wider uppercase block" dir="ltr">
                      {prod.brandLab}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="tabular-nums font-mono">{prod.rating}</span>
                      <span className="text-slate-400 font-normal">({prod.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1.5">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {prod.subtitle}
                  </p>

                  {/* Active Ingredients Box (Innovist hallmark) */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 mb-3 text-[11px]">
                    <span className="text-slate-400 block text-[10px] font-semibold">التركيبة الفعالة:</span>
                    <span className="font-mono font-bold text-emerald-950 block truncate" dir="ltr">
                      {prod.activeActives}
                    </span>
                  </div>

                  {/* Benefit highlights */}
                  <div className="space-y-1.5 pt-1">
                    {prod.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-slate-900 tabular-nums">
                      {prod.price} <span className="text-xs font-bold text-slate-600">درهم</span>
                    </span>
                    <span className="text-xs text-slate-400 line-through tabular-nums">
                      {prod.originalPrice} درهم
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                    توصيل بالمجان
                  </span>
                </div>

                <button
                  onClick={() => onSelectProduct(prod)}
                  className="w-full bg-white hover:bg-emerald-900 hover:text-white text-slate-900 border border-slate-300 hover:border-emerald-900 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
                  <span>اطلبِ هذا المنتج الآن</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Banner CTA: Chlorophyll + Marine Collagen */}
        <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block mb-1">
              ⭐ الباقة الشاملة الأكثر طلباً للعناية بالبشرة
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              اجمعي بين قطرات الكلوروفيل وأكياس الكولاجين البحري
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              الكلوروفيل ينقي السموم والغازات من الداخل، والكولاجين يعيد ملء خطوط الوجه وترطيب الأعماق للحصول على نضارة ثلاثية الأبعاد!
            </p>
          </div>

          <button
            onClick={onOrderComprehensivePack}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3.5 rounded-xl font-black text-sm shadow-lg whitespace-nowrap cursor-pointer transition-transform active:scale-95 flex items-center gap-2 shrink-0"
          >
            <span>اختاري باقة الجمال الشامل (499 درهم)</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

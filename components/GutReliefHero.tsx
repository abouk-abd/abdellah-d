'use client';

import { Sparkles, Check, ShieldCheck, Truck, Star, ArrowDown } from 'lucide-react';
import GutReliefBottleViewer from './GutReliefBottleViewer';

interface GutReliefHeroProps {
  onOrderClick: () => void;
}

export default function GutReliefHero({ onOrderClick }: GutReliefHeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:py-16 bg-gradient-to-b from-[#F8F6EF] via-white to-[#F8F6EF]/50">
      {/* Decorative botanical backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCE8D9]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E8E49]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Text & Value Offer) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#DCE8D9] text-[#0B3D2E] px-4 py-1.5 rounded-full text-xs font-black mb-5 shadow-xs border border-[#3E8E49]/20">
              <span className="w-2 h-2 rounded-full bg-[#3E8E49] animate-ping"></span>
              <span>التركيبة الصيدلانية رقم 1 في المغرب لراحة الجهاز الهضمي والقولون</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3D2E] leading-[1.25] tracking-tight mb-4">
              ودّعي انتفاخ البطن المزعج والغازات المحرجة.. واستعيدي راحة هضمك وخفة بطنك في <span className="text-[#3E8E49] underline decoration-[#A3E635] decoration-wavy underline-offset-8">14 يوماً فقط!</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl">
              كبسولات <strong className="text-[#0B3D2E] font-bold">Balurix GUT RELIEF</strong> الطبيعية المتطورة: تركيبة متكاملة تجمع بين <span className="font-semibold text-emerald-900">200mg من البروبيوتيك الحيوي</span> المعزز بمستخلص الشمر والزنجبيل والإينولين. لإعادة توازن الفلورا المعوية والقضاء على الغازات وعسر الهضم من الجذور وبدون أدوية كيميائية.
            </p>

            {/* Feature Bullets */}
            <ul className="space-y-3 mb-8 text-right w-full max-w-lg">
              <li className="flex items-start gap-3 bg-white/80 p-3 rounded-2xl border border-emerald-950/5 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-[#DCE8D9] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#0B3D2E]" />
                </div>
                <div className="text-sm text-slate-800">
                  <strong className="text-[#0B3D2E] font-bold">إزالة الانتفاخ وثقل المعدة:</strong> إحساس فوري بالخفة والراحة بعد الوجبات بفضل الشمر والزنجبيل المركزين.
                </div>
              </li>

              <li className="flex items-start gap-3 bg-white/80 p-3 rounded-2xl border border-emerald-950/5 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-[#DCE8D9] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#0B3D2E]" />
                </div>
                <div className="text-sm text-slate-800">
                  <strong className="text-[#0B3D2E] font-bold">بناء بكتيريا الأمعاء النافعة:</strong> 200mg بروبيوتيك (لاكتوباسيللوس وبيفيدوباكتريوم) لمقاومة التخمر وعسر الهضم المزمن.
                </div>
              </li>

              <li className="flex items-start gap-3 bg-white/80 p-3 rounded-2xl border border-emerald-950/5 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-[#DCE8D9] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#0B3D2E]" />
                </div>
                <div className="text-sm text-slate-800">
                  <strong className="text-[#0B3D2E] font-bold">توصيل مجاني 100% لباب دارك:</strong> الدفع نقداً بعد استلامك للطرد وفتحه ومعاينته بنفسك للتأكد من أصالته.
                </div>
              </li>
            </ul>

            {/* Quick Price & Action Box */}
            <div className="w-full max-w-lg bg-[#0B3D2E] text-white p-5 sm:p-6 rounded-3xl shadow-xl shadow-[#0B3D2E]/20 mb-6">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-emerald-700/40">
                <div>
                  <span className="text-xs text-emerald-300 font-semibold block">سعر العرض الترويجي اليوم:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#A3E635]">349 <span className="text-lg">درهم</span></span>
                    <span className="text-sm text-emerald-300/70 line-through">499 درهم</span>
                  </div>
                </div>
                <span className="bg-[#3E8E49] text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-xs">
                  تخفيض 40% لفترة محدودة 🔥
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOrderClick}
                  className="flex-1 bg-[#A3E635] hover:bg-[#8fd024] text-[#07271D] font-black text-base py-3.5 px-6 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowDown className="w-5 h-5 text-[#07271D] animate-bounce" />
                  <span>اطلبِ الآن — الدفع عند الاستلام</span>
                </button>

                <a
                  href="https://wa.me/212636460996?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B7%D9%84%D8%A8%20Balurix%20GUT%20RELIEF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-5 rounded-2xl transition-all flex items-center justify-center gap-2 border border-emerald-600/50"
                >
                  <span>💬 طلب سريع بالواتساب</span>
                </a>
              </div>

              <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-emerald-200">
                <span>🚚 شحن سريع 24-48 ساعة</span>
                <span>•</span>
                <span>🛡️ معاينة قبل الدفع</span>
                <span>•</span>
                <span>🌿 نباتي 100%</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 -space-x-reverse">
                <span className="w-8 h-8 rounded-full bg-[#DCE8D9] border-2 border-white flex items-center justify-center text-xs">👩🏻</span>
                <span className="w-8 h-8 rounded-full bg-[#DCE8D9] border-2 border-white flex items-center justify-center text-xs">🧕🏼</span>
                <span className="w-8 h-8 rounded-full bg-[#DCE8D9] border-2 border-white flex items-center justify-center text-xs">👨🏽</span>
                <span className="w-8 h-8 rounded-full bg-[#DCE8D9] border-2 border-white flex items-center justify-center text-xs">👩🏼</span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-bold text-slate-800 mr-1">4.9/5</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  أكثر من <strong className="text-[#0B3D2E]">1,280+ زبون</strong> في المغرب تخلصوا من الانتفاخ وعسر الهضم
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Interactive 3-Angle Bottle Viewer) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <GutReliefBottleViewer />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

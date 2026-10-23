'use client';

import { Droplets, Sparkles, Wind, Zap, Check, Play, Film } from 'lucide-react';
import ChlorophyllVideoPlayer from './ChlorophyllVideoPlayer';

interface HeroProductDeepDiveProps {
  onOrderClick?: () => void;
}

export default function HeroProductDeepDive({ onOrderClick }: HeroProductDeepDiveProps) {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold bg-emerald-100/70 px-4 py-1.5 rounded-full mb-3 border border-emerald-300/40">
            <Droplets className="w-4 h-4 text-emerald-700" />
            <span>المنتج البطل وسر الفعالية العلمية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            🍃 قطرات الكلوروفيل الطبيعي المركز
          </h2>
          <p className="text-emerald-800 font-bold text-sm tracking-widest mt-1 uppercase" dir="ltr">
            Pure Green Detox Drops
          </p>
          <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            سر النضارة والرشاقة الذي تعتمده خبيرات العناية في العالم، الآن بتركيبة مركزة مخصصة للمغرب
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white p-7 rounded-3xl border border-emerald-950/5 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Wind className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-emerald-700">01. الجهاز الهضمي والقولون</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">
              تطهير فوري للجهاز الهضمي
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              يهدئ حركة الأمعاء الدقيقة والقولون، يطرد الغازات المحتبسة المتراكمة، ويعيد للبطن مظهره المسطح والمريح لتستمتعي بالراحة بعد كل وجبة.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-emerald-950/5 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-emerald-700">02. فلترة ونضارة البشرة</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">
              فلترة طبيعية للدم والكبد
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              الكلوروفيل غني بمضادات الأكسدة الحية التي تماثل بنية الهيموغلوبين، فتساعد الكبد على التخلص من الشوائب والسموم المسببة للبثور الدهنية والهالات.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-emerald-950/5 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-emerald-700">03. الحيوية والانتعاش</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">
              طاقة وانتعاش بدون كافيين
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              يعزز تدفق الأكسجين للخلايا الحيوية، فتشعرين بخفة ونشاط دائم طوال اليوم دون هبوط طاقة، بالإضافة لتعطير طبيعي منعش لرائحة الفم والجسم.
            </p>
          </div>

        </div>

        {/* How To Use & Video Demonstration Showcase */}
        <div id="how-it-works" className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-10 shadow-lg">
          
          {/* Video Section Title Banner */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold bg-emerald-50 px-4 py-1.5 rounded-full mb-3 border border-emerald-200">
              <Film className="w-4 h-4 text-emerald-600" />
              <span>فيديو العرض التجريبي والخلط الحي</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              شاهدي كيف يمتزج الكلوروفيل المركز بالماء ليصنع إكسير النضارة
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              تجربة بصرية مدهشة توضح سر الانتشار الواسع لقطرات الكلوروفيل في منصات العناية العالمية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Steps Instructions (Right column in Arabic) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <Droplets className="w-4 h-4" />
                <span>طريقة الاستخدام السهلة (روتين 30 ثانية كل صباح)</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5">
                3 خطوات بسيطة لمشروبك الأخضر
              </h4>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-emerald-950/5">
                  <div className="w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">حضري كأساً من الماء النقي</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      املئي كأساً عادياً (200-250 مل) بماء بارد أو معتدل حسب رغبتك.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-emerald-950/5">
                  <div className="w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">ضعي من 10 إلى 15 قطرة مركزة</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      باستخدام القطارة الدقيقة، أضيفي القطرات وشاهدي المزيج الأخضر الزمردي ينتشر بسلاسة.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-emerald-950/5">
                  <div className="w-8 h-8 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">حركي برفق واستمتعي بالانتعاش</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      اشربيه صباحاً على الريق قبل الفطور بـ 15 دقيقة، واستمتعي بخفة بطنك وطاقة تدوم طوال اليوم.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order action button */}
              {onOrderClick && (
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <button
                    onClick={onOrderClick}
                    className="w-full bg-[#1B4332] hover:bg-[#143225] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-300" />
                    <span>اطلبي قطرات الكلوروفيل الآن - الدفع عند الاستلام</span>
                  </button>
                </div>
              )}
            </div>

            {/* High-Resolution Interactive Video Player & Mixing Visualizer */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ChlorophyllVideoPlayer onOrderClick={onOrderClick} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

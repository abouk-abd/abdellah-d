'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle, CheckCircle2, ArrowDown, Droplets, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export default function HeroSection({ onOrderClick }: HeroSectionProps) {
  const whatsappUrl =
    'https://wa.me/212636460996?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%A3%D9%88%20%D9%86%D8%B7%D9%84%D8%A8%20%D9%82%D8%B7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%84%D9%88%D8%B1%D9%88%D9%81%D9%8A%D9%84';

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#F4F1EA] via-[#FAF8F5] to-white">
      {/* Subtle organic background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-lime-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column (Arabic reads right first): Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 mb-4 bg-emerald-50/80 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>المنتج البطل الأكثر طلباً بالمغرب للعناية والديتوكس الداخلي</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 leading-[1.35] tracking-tight mb-4 sm:mb-5 text-balance">
              تخلصي من انتفاخ البطن المزعج واستعيدي نضارة بشرتك في{' '}
              <span className="text-[#1B4332] underline decoration-emerald-400 decoration-wavy decoration-2">
                14 يوماً فقط
              </span>
              .. وبطريقة طبيعية 100% من الداخل!
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-7 max-w-2xl">
              إكسير الكلوروفيل النباتي المركز: الحل العلمي البديل للكريمات الكيميائية وأدوية الهضم المؤقتة. تنقية شاملة للجسم، هضم خفيف، وإشراقة طبيعية تلاحظينها من الأسبوع الأول.
            </p>

            {/* Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-emerald-950/5 shadow-xs">
                <span className="text-xl">🌿</span>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">مستخلص نباتي فائق التركيز</h2>
                  <p className="text-xs text-slate-600 mt-0.5">نقط قليلة في كأس ماء يومياً تكفيك شهراً كاملاً</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-emerald-950/5 shadow-xs">
                <span className="text-xl">🫧</span>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">يزيل الانتفاخ والغازات</h2>
                  <p className="text-xs text-slate-600 mt-0.5">راحة فورية للمعدة والجهاز الهضمي وبطن مسطح خلال ساعات</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-emerald-950/5 shadow-xs">
                <span className="text-xl">✨</span>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">يقلل حب الشباب الهرموني</h2>
                  <p className="text-xs text-slate-600 mt-0.5">يصفي الدم من السموم لتنقية البشرة من الأعماق</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-emerald-950/5 shadow-xs">
                <span className="text-xl">🇲🇦</span>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">توصيل سريع لباب منزلك</h2>
                  <p className="text-xs text-slate-600 mt-0.5">الدفع نقداً بعد استلام طردك ومعاينته بنفسك</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOrderClick}
                className="bg-[#1B4332] hover:bg-[#143225] text-white px-7 py-4 rounded-xl font-extrabold text-base shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                <Sparkles className="w-5 h-5 text-emerald-300 animate-spin-slow" />
                <span>اطلبِ الآن - الدفع عند الاستلام</span>
                <ArrowDown className="w-4 h-4 text-emerald-300" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-4 rounded-xl font-bold text-sm sm:text-base shadow-md shadow-green-900/15 hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 text-center"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>💬 للطلب السريع أو الاستفسار عبر واتساب</span>
              </a>
            </div>

            {/* Guarantee note */}
            <div className="flex items-center gap-4 mt-5 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                شحن مجاني لجميع المدن
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                معاينة المنتج قبل الدفع
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                ضمان الجودة الطبيعية 100%
              </span>
            </div>
          </div>

          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/20 border-4 border-white bg-emerald-950/5">
              <Image
                src="/images/hero_chlorophyll_glass_1792691529792.jpg"
                alt="قطرات الكلوروفيل المركز في كأس ماء نقي"
                width={800}
                height={600}
                priority
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
              />

              {/* Floating aesthetic feature tag */}
              <div className="absolute bottom-4 right-4 left-4 bg-slate-900/85 backdrop-blur-md p-3.5 rounded-2xl text-white border border-white/20 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-emerald-200">الجرعة اليومية السحرية</h2>
                    <p className="text-[11px] text-slate-300">10-15 قطرة صباحية في كأس ماء بارد</p>
                  </div>
                </div>
                <div className="text-left font-mono" dir="ltr">
                  <span className="text-emerald-400 font-bold text-sm">100%</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Natural</span>
                </div>
              </div>
            </div>

            {/* Badge overlay on top */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-amber-300/40">
              <span>⭐ الأكثر مبيعاً في المغرب</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

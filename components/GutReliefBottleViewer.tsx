'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AngleOption {
  id: 'main' | 'ingredients' | 'usage';
  labelAr: string;
  badge: string;
  imageSrc: string;
  caption: string;
}

const ANGLES: AngleOption[] = [
  {
    id: 'main',
    labelAr: 'الواجهة الرئيسية (Face)',
    badge: '30 كبسولة علاجية',
    imageSrc: '/assets/aistudio/mockup-capsule-main_f8052b5a.png',
    caption: 'تركيبة Balurix GUT RELIEF الأصلية لحفظ التوازن الهضمي وتخفيف الانتفاخ',
  },
  {
    id: 'ingredients',
    labelAr: 'جدول المكونات الصيدلانية',
    badge: '200mg بروبيوتيك نشط',
    imageSrc: '/assets/aistudio/mockup-capsule-right_04067d91.png',
    caption: 'مكونات طبيعية نقية وموثقة: بروبيوتيك، زنجبيل، شمر، وإينولين بريبايوتك',
  },
  {
    id: 'usage',
    labelAr: 'طريقة الاستخدام والتحذيرات',
    badge: '1 إلى 2 كبسولة يومياً',
    imageSrc: '/assets/aistudio/mockup-capsule-left_a15b3465.png',
    caption: 'إرشادات الاستخدام اليومي الموصى بها ومعايير السلامة والجودة',
  },
];

export default function GutReliefBottleViewer() {
  const [selectedAngle, setSelectedAngle] = useState<'main' | 'ingredients' | 'usage'>('main');

  const currentAngle = ANGLES.find((a) => a.id === selectedAngle) || ANGLES[0];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl shadow-[#0B3D2E]/10 border border-[#DCE8D9] relative flex flex-col items-center">
      {/* Top Floating Badge */}
      <div className="w-full flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-[#DCE8D9] text-[#0B3D2E] px-3 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#3E8E49]" />
          <span>{currentAngle.badge}</span>
        </span>
        <span className="text-[11px] font-semibold text-emerald-800/80 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
          معاينة العلبة الأصلية 360&deg;
        </span>
      </div>

      {/* Main Image Frame */}
      <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center p-2 rounded-2xl bg-gradient-to-b from-[#F8F6EF]/60 to-white overflow-hidden group">
        <Image
          src={currentAngle.imageSrc}
          alt={currentAngle.caption}
          fill
          className="object-contain drop-shadow-2xl transition-all duration-300 group-hover:scale-105"
          priority
          referrerPolicy="no-referrer"
        />

        {/* Live Zoom / Inspect hint */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <Eye className="w-3 h-3 text-[#A3E635]" />
          <span>صورة حقيقية للمنتج</span>
        </div>
      </div>

      {/* Caption */}
      <p className="text-xs text-center text-slate-600 font-medium mt-3 mb-4 max-w-xs">
        {currentAngle.caption}
      </p>

      {/* 3-Angle Switcher Buttons */}
      <div className="w-full grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 border-t border-slate-100">
        {ANGLES.map((angle) => {
          const isActive = angle.id === selectedAngle;
          return (
            <button
              key={angle.id}
              onClick={() => setSelectedAngle(angle.id)}
              className={`flex flex-col items-center justify-center py-2 px-1.5 sm:px-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#0B3D2E] text-white shadow-md shadow-[#0B3D2E]/20 scale-102 ring-2 ring-[#3E8E49]'
                  : 'bg-[#F8F6EF] text-slate-700 hover:bg-[#DCE8D9]/50 border border-slate-200/80'
              }`}
            >
              <span className="text-[11px] sm:text-xs leading-tight">{angle.labelAr}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Guarantee Strip */}
      <div className="mt-4 pt-3 w-full flex items-center justify-center gap-4 text-[11px] font-bold text-[#0B3D2E] border-t border-slate-100">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#3E8E49]" />
          <span>كبسولات نباتية 100%</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#3E8E49]" />
          <span>حق المعاينة عند الاستلام</span>
        </span>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Clock, Flame } from 'lucide-react';

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#122A1E] text-emerald-100 text-xs sm:text-sm py-2.5 px-4 border-b border-emerald-900/40 relative z-40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-right">
        <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 font-medium tracking-wide flex-wrap">
          <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
          <span>توصيل بالمجان بالمغرب</span>
          <span className="text-emerald-500/80 mx-1">|</span>
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
          <span>الدفع نقداً بعد المعاينة</span>
          <span className="hidden md:inline text-emerald-500/80 mx-1">|</span>
          <span className="hidden md:inline text-emerald-300 font-semibold">كمية محدودة لدفعة هذا الأسبوع</span>
        </div>

        <div className="flex items-center gap-2 text-xs bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 text-emerald-200">
          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
          <span>ينتهي عرض التوفير في:</span>
          <span className="font-mono font-bold text-amber-300 tabular-nums" dir="ltr">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Flame, Clock } from 'lucide-react';

export default function GutReliefAnnouncement() {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="شريط العروض والكمية المحدودة" className="bg-[#07271D] text-[#DCE8D9] text-xs sm:text-sm py-2 px-4 border-b border-[#3E8E49]/30 sticky top-0 z-50 shadow-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-right">
        {/* Urgent Stock & Free Delivery */}
        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap font-medium">
          <span className="inline-flex items-center gap-1 bg-red-950/80 text-red-300 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-red-800/40 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-red-400" />
            <span>الكمية محدودة: 35 علبة متبقية فقط</span>
          </span>
          <span className="text-emerald-500/60 hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-[#3E8E49]" />
            <span>توصيل بالمجان لجميع مدن المغرب (24 - 48 ساعة)</span>
          </span>
          <span className="text-emerald-500/60 hidden md:inline">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3E8E49]" />
            <span>الدفع نقداً بعد استلام ومعاينة طلبك</span>
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1.5 text-xs bg-[#0B3D2E] px-3 py-1 rounded-full border border-emerald-700/40 text-emerald-200">
          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>ينتهي العرض الخاص في:</span>
          <span className="font-mono font-bold text-amber-300 tabular-nums text-xs" dir="ltr">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </aside>
  );
}

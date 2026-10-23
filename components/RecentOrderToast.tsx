'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, X, CheckCircle } from 'lucide-react';

const RECENT_ORDERS = [
  { name: 'فاطمة الزهراء', city: 'الدار البيضاء', pack: 'باقة التوفير: علبتان Balurix GUT RELIEF 🔥', time: 'منذ 3 دقائق' },
  { name: 'سناء', city: 'الرباط', pack: 'باقة العلاج المكثف (3 علب)', time: 'منذ 7 دقائق' },
  { name: 'كوثر', city: 'مراكش', pack: 'باقة التوفير (علبتان)', time: 'منذ 12 دقيقة' },
  { name: 'إلهام', city: 'طنجة', pack: 'علبة واحدة Balurix GUT RELIEF', time: 'منذ 19 دقيقة' },
  { name: 'مريم', city: 'فاس', pack: 'باقة العلاج المكثف (3 علب)', time: 'منذ 24 دقيقة' },
  { name: 'حكيمة', city: 'أكادير', pack: 'باقة التوفير: علبتان Balurix 🔥', time: 'منذ 31 دقيقة' },
];

export default function RecentOrderToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      if (!closed) setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      if (!closed) {
        setVisible(false);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % RECENT_ORDERS.length);
          setVisible(true);
        }, 800);
      }
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [closed]);

  if (closed || !visible) return null;

  const current = RECENT_ORDERS[index];

  return (
    <div className="fixed bottom-22 left-3 sm:bottom-5 sm:left-5 z-40 max-w-[280px] sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-emerald-950/10 flex items-center gap-2.5 sm:gap-3 transition-all duration-300 animate-in slide-in-from-bottom-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      <div className="text-right flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-xs text-slate-900 truncate">
            {current.name} من {current.city}
          </span>
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        </div>
        <p className="text-[11px] text-emerald-900 font-semibold truncate mt-0.5">
          طلبت: {current.pack}
        </p>
        <span className="text-[10px] text-slate-400 block font-mono">{current.time}</span>
      </div>

      <button
        onClick={() => setClosed(true)}
        aria-label="إغلاق الإشعار"
        className="text-slate-300 hover:text-slate-600 p-1 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

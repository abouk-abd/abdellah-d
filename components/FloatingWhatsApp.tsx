'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref =
    'https://wa.me/212636460996?text=' +
    encodeURIComponent('السلام عليكم ورحمة الله، بغيت نستفسر أو نطلب كبسولات Balurix GUT RELIEF لراحة الجهاز الهضمي والقولون');

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Small popover teaser */}
      {showTooltip && (
        <div className="relative mb-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-emerald-950/10 flex items-center gap-2 max-w-xs animate-bounce-subtle">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="إغلاق التنبيه"
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <span className="font-semibold text-right">
            مرحباً بك! تواصل معنا مباشرة عبر واتساب لطلب Balurix أو الاستفسار
          </span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب 0636460996"
        className="bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:rotate-6 transition-transform" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          💬 تواصل معنا عبر واتساب
        </span>
      </a>
    </div>
  );
}

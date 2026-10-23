'use client';

import Image from 'next/image';
import { ShoppingBag, MessageCircle } from 'lucide-react';

interface GutReliefHeaderProps {
  onOrderClick: () => void;
}

export default function GutReliefHeader({ onOrderClick }: GutReliefHeaderProps) {
  return (
    <header className="sticky top-[37px] sm:top-[33px] z-40 bg-white/95 backdrop-blur-md border-b border-[#DCE8D9] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo with exact user asset */}
        <div className="flex items-center gap-3">
          <div className="relative w-32 sm:w-40 h-10 sm:h-12">
            <Image
              src="/assets/aistudio/png_ff50041f.png"
              alt="Balurix Natural Care Logo"
              fill
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden lg:flex flex-col border-r border-emerald-900/15 pr-3 text-right">
            <span className="text-[11px] font-bold text-[#0B3D2E] tracking-wider">
              GUT RELIEF &bull; راحة الجهاز الهضمي
            </span>
            <span className="text-[9px] text-[#3E8E49] font-medium tracking-wide">
              NATURAL CARE FOR A BETTER YOU
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/212636460996?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%84%D9%89%20Balurix%20GUT%20RELIEF"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9]/70 hover:bg-[#DCE8D9] px-3.5 py-2.5 rounded-full transition-all border border-[#3E8E49]/30"
          >
            <MessageCircle className="w-4 h-4 text-[#3E8E49]" />
            <span>استفسار واتساب</span>
          </a>

          <button
            onClick={onOrderClick}
            className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#07271D] text-white text-xs sm:text-sm font-extrabold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-[#0B3D2E]/25 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#A3E635]" />
            <span>اطلب الآن — الدفع عند الاستلام</span>
          </button>
        </div>
      </div>
    </header>
  );
}

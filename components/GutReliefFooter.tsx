'use client';

import Image from 'next/image';
import { ShieldCheck, Truck, RotateCcw, HeartHandshake, PhoneCall } from 'lucide-react';

export default function GutReliefFooter() {
  return (
    <footer className="bg-[#07271D] text-[#DCE8D9] pt-14 pb-10 border-t border-emerald-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-emerald-900/50 mb-10">
          <div className="flex items-center gap-3">
            <Truck className="w-7 h-7 text-[#A3E635] shrink-0" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">توصيل مجاني وسريع</h4>
              <p className="text-[11px] text-emerald-300/70">لكل مدن المغرب 24-48 ساعة</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#A3E635] shrink-0" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">الدفع بعد المعاينة</h4>
              <p className="text-[11px] text-emerald-300/70">تأكدي من طلبيتك قبل دفع درهم واحد</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <RotateCcw className="w-7 h-7 text-[#A3E635] shrink-0" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">جودة نباتية 100%</h4>
              <p className="text-[11px] text-emerald-300/70">خالٍ من الملينات الكيميائية والسكر</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HeartHandshake className="w-7 h-7 text-[#A3E635] shrink-0" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">خدمة عملاء بالمغرب</h4>
              <p className="text-[11px] text-emerald-300/70">متابعة يومية عبر الواتساب</p>
            </div>
          </div>
        </div>

        {/* Brand & Contacts */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right pb-8 border-b border-emerald-900/40">
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <div className="relative w-36 h-10 bg-white/90 px-3 py-1.5 rounded-xl">
              <Image
                src="/assets/aistudio/png_ff50041f.png"
                alt="Balurix Logo"
                fill
                className="object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-emerald-300/80 max-w-md">
              Balurix — العلامة المغربية الرائدة في العناية الطبيعية الفاخرة. مكمل GUT RELIEF لصحة الجهاز الهضمي والقولون.
            </p>
            <div className="flex items-center gap-3 text-[11px] text-emerald-400 font-bold">
              <span>🌿 SIMPLE</span>
              <span>&bull;</span>
              <span>💧 CLEAN</span>
              <span>&bull;</span>
              <span>🔬 CONSCIOUS</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5">
            <span className="text-xs text-emerald-300">للتواصل المباشر والاستفسارات وتتبع الطلبيات:</span>
            <a
              href="https://wa.me/212636460996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-mono font-bold text-[#A3E635] hover:text-white transition-colors"
              dir="ltr"
            >
              +212 636 460 996 (WhatsApp)
            </a>
            <span className="text-[11px] text-emerald-400/70">المملكة المغربية — توصيل لجميع المدن والقرى</span>
          </div>
        </div>

        {/* Official Medical Disclaimer */}
        <div className="pt-8 text-center text-xs text-emerald-400/60 space-y-2">
          <p className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-900/40 max-w-2xl mx-auto">
            تنويه صحي مطابق لملصق العلبة: هذا المنتج مكمل غذائي وليس مخصصاً لتشخيص أو علاج أو شفاء أو منع أي مرض. هذا ليس دواء. لا يحل محل نظام غذائي متوازن ونمط حياة صحي.
          </p>
          <p className="font-mono text-[11px]">
            &copy; {new Date().getFullYear()} Balurix Natural Care Morocco. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}

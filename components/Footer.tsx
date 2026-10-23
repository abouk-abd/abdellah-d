'use client';

import { ShieldCheck, Truck, RotateCcw, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#122A1E] text-emerald-100 border-t border-emerald-900/60 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Trust Badges 4-Columns Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-emerald-900/60 mb-12">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-white">توصيل مجاني وسريع</h4>
              <p className="text-xs text-emerald-300/70">لكل مدن وقرى المغرب 24-48 ساعة</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-white">الدفع بعد المعاينة</h4>
              <p className="text-xs text-emerald-300/70">تأكدي من طردك قبل دفع درهم واحد</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <RotateCcw className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-white">ضمان الرضا والجودة</h4>
              <p className="text-xs text-emerald-300/70">مستخلصات نباتية أصلية 100%</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HeartHandshake className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-white">خدمة عملاء بالمغرب</h4>
              <p className="text-xs text-emerald-300/70">متابعة يومية عبر الواتساب</p>
            </div>
          </div>
        </div>

        {/* Brand & Contact Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right pb-8 border-b border-emerald-900/40">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-serif font-black text-2xl text-white tracking-wider">
                BALURIX NATURAL CARE
              </span>
            </div>
            <p className="text-xs text-emerald-300/80 max-w-md">
              العلامة المغربية الرائدة في العناية الطبيعية الفاخرة المعتمدة على خلاصات نباتية نقية لصحة ونضارة تدوم.
            </p>
            <div className="mt-3">
              <a
                href="/balurix-youcan-theme.zip"
                download="balurix-youcan-theme.zip"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white underline underline-offset-4"
              >
                <span>📦 تحميل ملف القالب المخصص لمنصة YouCan (ZIP)</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-xs text-emerald-300">للاستفسار المباشر أو تتبع الطلبات:</span>
            <a
              href="https://wa.me/212636460996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-mono font-bold text-emerald-400 hover:text-white transition-colors"
              dir="ltr"
            >
              +212 636 460 996 (WhatsApp)
            </a>
            <span className="text-[11px] text-emerald-400/70">المكتب التجاري: الدار البيضاء، المملكة المغربية</span>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-center text-xs text-emerald-400/60 space-y-2">
          <p>
            تنويه صحي: منتجاتنا عبارة عن مكملات غذائية نباتية طبيعية تهدف لدعم نمط حياة صحي وتنقية الجسم، ولا تغني عن الاستشارة الطبية المتخصصة في الحالات المرضية المزمنة.
          </p>
          <p className="font-mono text-[11px]">
            &copy; {new Date().getFullYear()} BALURIX Natural Care Morocco. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}

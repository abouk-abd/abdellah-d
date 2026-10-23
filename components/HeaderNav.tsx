import Link from 'next/link';
import { Sparkles, PhoneCall } from 'lucide-react';

interface HeaderNavProps {
  onOpenDiagnostic?: () => void;
}

export default function HeaderNav({ onOpenDiagnostic }: HeaderNavProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-emerald-950/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Brand wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg py-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B3D2E] to-[#3E8E49] flex items-center justify-center text-white shadow-sm shadow-emerald-950/20 group-hover:scale-105 transition-transform">
            <span className="font-bold text-lg font-serif">B</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-extrabold text-lg tracking-tight text-[#0B3D2E] font-serif leading-none">
              BALURIX
            </span>
            <span className="text-[10px] font-semibold text-[#3E8E49] tracking-wider">
              NATURAL CARE
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700" aria-label="التنقل الرئيسي">
          <button
            onClick={() => scrollToSection('benefits')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            سر الفعالية
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            طريقة الاستخدام
          </button>
          <button
            onClick={() => scrollToSection('collection')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            التسوق حسب المشكلة
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            عروض التوفير
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            الأسئلة الشائعة
          </button>
        </nav>

        {/* Zone 3: Actions (Diagnostic Quiz + Primary CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="/balurix-youcan-theme.zip"
            download="balurix-youcan-theme.zip"
            className="text-xs font-bold text-emerald-900 bg-amber-100/90 hover:bg-amber-200 px-3 py-2 rounded-xl border border-amber-300 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs"
            title="تحميل حزمة قالب YouCan الجاهزة للرفع المباشر"
          >
            <span>📦 تحميل قالب YouCan</span>
          </a>

          {onOpenDiagnostic && (
            <button
              onClick={onOpenDiagnostic}
              className="text-xs font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/80 px-3 py-2 rounded-xl border border-emerald-300/40 transition-colors cursor-pointer whitespace-nowrap hidden sm:inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>اختبار الروتين</span>
            </button>
          )}

          <button
            onClick={() => scrollToSection('order-form')}
            className="bg-[#1B4332] hover:bg-[#143225] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/15 hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
            <span className="sm:inline hidden">اطلبِ الآن - الدفع عند الاستلام</span>
            <span className="sm:hidden inline">اطلبِ الآن</span>
          </button>
        </div>
      </div>
    </header>
  );
}

'use client';

import { ShieldCheck, Sparkles, Activity, Award } from 'lucide-react';

export default function ClinicalProofStrip() {
  return (
    <section className="bg-white border-y border-emerald-950/10 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          <div className="flex items-center gap-3.5 border-l last:border-l-0 border-slate-200/60 pl-4 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tabular-nums leading-none">
                96%
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                لاحظن بطناً مسطحاً وخفة هضمية من اليوم الثاني
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-l last:border-l-0 border-slate-200/60 pl-4 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tabular-nums leading-none">
                89%
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                تصفية ملحوظة للحبوب واختفاء شحوب البشرة في 14 يوماً
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-l last:border-l-0 border-slate-200/60 pl-4 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tabular-nums leading-none">
                100%
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                مستخلص نباتي نقي معصور على البارد خالٍ من الكيماويات
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pl-4 sm:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                معايير صيدلانية
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                تركيبات خاضعة للاختبار مطابقة لأعلى مقاييس الجودة
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

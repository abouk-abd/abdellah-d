'use client';

import { AlertCircle, XCircle, Sparkles, Activity, ShieldAlert, ArrowLeft } from 'lucide-react';

export default function ProblemAgitationSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-emerald-950/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-rose-700 text-xs sm:text-sm font-bold bg-rose-50 px-3.5 py-1.5 rounded-full mb-3 border border-rose-200">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>لماذا تفشل الحلول السطحية التقليدية؟</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug tracking-tight">
            هل تساءلتِ يوماً لماذا لا تجدي الكريمات ومساحيق التجميل نفعاً؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            إليكِ الدوامة التي تقع فيها 9 من كل 10 نساء يومياً في رحلة البحث عن بطن مرتاح وبشرة مشرقة:
          </p>
        </div>

        {/* 3 Visceral Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200/80 hover:border-rose-300 transition-all shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xl mb-4">
              <XCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              حبوب وتصبغات متكررة
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              تشتري كريمات تفتيح ومستحضرات باهظة الثمن، لكن الحبوب والتصبغات تعود بمجرد التوقف عنها أو عند أول تغير هرموني؟
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200/80 hover:border-rose-300 transition-all shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              ثقل وانتفاخ بطن دائم
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              تشعرين بثقل مستمر وانتفاخ في البطن بعد كل وجبة، مما يجعل ملابسك المفضلة ضيقة وغير مريحة ويفقدك الثقة بإطلالتك؟
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200/80 hover:border-rose-300 transition-all shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xl mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              بشرة باهتة وخمول مستمر
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              بشرتك تبدو شاحبة ومرهقة ومائلة للاصفرار مهما نمتِ ساعات طويلة أو استعملتِ أغلى المرطبات والمكياج؟
            </p>
          </div>

        </div>

        {/* Scientific Reveal Box */}
        <div className="bg-gradient-to-br from-[#122A1E] to-[#1B4332] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                <span>الحقيقة العلمية المثبتة</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-50 leading-snug">
                80% من مشاكل البشرة والخمول لا تبدأ من السطح.. بل من تراكم السموم في الجهاز الهضمي والدم!
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                لا يمكنكِ تصفية مرآة متسخة من الخلف؛ والجلد هو المرآة الحقيقية لأمعائك وكبدك. عندما يحتفظ الجهاز الهضمي بالغازات والفضلات، يحاول الجسم تصريفها عبر مسامات الوجه على هيئة بثور، شحوب، والتهابات.
                <strong className="text-white block mt-2 font-bold">
                  الحل الحقيقي والنهائي يبدأ دائماً من تنقية الداخل أولاً!
                </strong>
              </p>
            </div>

            <div className="md:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-emerald-300 font-mono" dir="ltr">
                80%
              </div>
              <div className="text-xs font-bold text-emerald-100 mt-1">
                من نضارة البشرة مرتبطة بصحة الأمعاء
              </div>
              <div className="w-12 h-0.5 bg-emerald-400/40 my-3" />
              <div className="text-[11px] text-emerald-200/80">
                تنقية الدم والكبد = بشرة صافية، تنفس منعش، وبطن رشيق خفيف
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import { Droplets, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function GutReliefHowToUse() {
  const steps = [
    {
      step: '1',
      title: 'الجرعة اليومية البسيطة',
      desc: 'تناولي كبسولة إلى كبسولتين يومياً بعد كل وجبة رئيسية (الغداء أو العشاء) مع كوب كبير من الماء البارد أو الفاتر.',
      icon: '💊',
    },
    {
      step: '2',
      title: 'امتصاص سريع خلال دقائق',
      desc: 'تذوب الكبسولة النباتية في المعدة، وتتحرر خلاصات الشمر والزنجبيل لطرد الغازات، بينما تنتقل البروبيوتيك للأمعاء لإعادة توازن الفلورا.',
      icon: '⚡',
    },
    {
      step: '3',
      title: 'طريقة مضاعفة النتيجة والفعالية',
      desc: 'احرصي على شرب لترين من الماء على مدار اليوم والمواظبة لمدة 14 يوماً متواصلة للحصول على بطن ممسوح وراحة دائمة.',
      icon: '💧',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8F6EF]/50 border-t border-[#DCE8D9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] px-3.5 py-1 rounded-full mb-3">
            طريقة الاستخدام والإرشادات
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3D2E] tracking-tight mb-4">
            كيف تستخدمين Balurix GUT RELIEF لأفضل نتيجة؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            كبسولات سهلة البلع ومريحة للمعدة، مصممة لتندمج بسلاسة في روتينك اليومي دون أي تعقيد.
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-[#DCE8D9] shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-shadow"
            >
              {/* Step Number Badge */}
              <div className="w-10 h-10 rounded-2xl bg-[#0B3D2E] text-[#A3E635] flex items-center justify-center font-black text-lg mb-4 shadow-sm">
                {item.step}
              </div>

              <div className="text-3xl mb-3">{item.icon}</div>

              <h3 className="text-base sm:text-lg font-black text-[#0B3D2E] mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Official Warnings from the real bottle label */}
        <div className="bg-white p-6 sm:p-7 rounded-3xl border border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 font-bold">
            ⚠️
          </div>
          <div className="text-right">
            <h4 className="font-extrabold text-sm text-slate-900 mb-1">
              إرشادات وتحذيرات الاستخدام (المطابقة لملصق العلبة):
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              يحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. لا يحل محل نظام غذائي صحي ومتوازن. التنبيه للحالات الصحية الخاصة: مثل الحوامل أو المرضعات أو من يتناولون أدوية معينة بضرورة استشارة الطبيب قبل الاستخدام. يحفظ في مكان بارد وجاف. هذا مكمل غذائي وليس دواء.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

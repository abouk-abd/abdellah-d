'use client';

import { AlertCircle, XCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GutReliefPainPoints() {
  const painPoints = [
    {
      title: 'انتفاخ مستمر وثقل مزعج في البطن',
      desc: 'حتى لو تناولتِ وجبة خفيفة أو شربتِ كأساً من الماء، تشعرين بأن بطنك مشدود كأنه بالون ممتلئ، مما يفسد راحتك ويجعل ملابسك المفضلة ضيقة وغير مريحة.',
      icon: '🎈',
    },
    {
      title: 'غازات محرجة وتشنجات في القولون',
      desc: 'أصوات بطن محرجة ومغص متكرر يجعلك متوترة في التجمعات والعمل، مع صعوبة في إخراج الغازات المحتبسة بطريقة طبيعية وسلسة.',
      icon: '⚡',
    },
    {
      title: 'عسر هضم مزمن وكسل حركة الأمعاء',
      desc: 'بقاء الطعام ساعات طويلة في المعدة مع إحساس بالحموضة وارتجاع المريء، مما يؤدي إلى الإمساك المتكرر والكسل العام والإرهاق طوال اليوم.',
      icon: '⏳',
    },
    {
      title: 'حلقة مفرغة مع الملينات الكيميائية',
      desc: 'تناول أدوية كيميائية سريعة تعطي راحة مؤقتة ليوم واحد فقط، بينما تزيد من تدمير بكتيريا الأمعاء النافعة وتسبب تعوداً وكسلاً أكبر للقولون.',
      icon: '💊',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#DCE8D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full mb-3">
            ⚠️ هل تعيشين أو تعيش هذه المعاناة يومياً؟
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3D2E] tracking-tight mb-4">
            لماذا تشعرين بثقل البطن والانتفاخ المستمر مهما حاولتِ؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            السبب الحقيقي ليس فقط في نوعية طعامك، بل في <strong className="text-[#0B3D2E]">خلل الفلورا المعوية</strong> وموت البكتيريا الهاضمة، مما يؤدي إلى تخمر الطعام داخل القولون وإنتاج غازات مؤلمة وضغط مستمر.
          </p>
        </div>

        {/* 4 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-red-100 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Transition Solution Box */}
        <div className="bg-gradient-to-r from-[#0B3D2E] to-[#144937] text-white p-7 sm:p-10 rounded-3xl shadow-xl shadow-[#0B3D2E]/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 bg-[#3E8E49] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>الحل العلمي الجذري من Balurix</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              توقفي عن تجربة الحلول المؤقتة.. وابدئي بعلاج أصل المشكلة!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              كبسولات <strong className="text-[#A3E635]">Balurix GUT RELIEF</strong> لا تقوم فقط بإخفاء الألم، بل تزرع مليارات البكتيريا النافعة (البروبيوتيك) وتمدها بالشمر والزنجبيل لإعادة ضبط جهازك الهضمي تلقائياً وبشكل دائم.
            </p>
          </div>

          <a
            href="#order-section"
            className="bg-[#A3E635] hover:bg-[#8fd024] text-[#07271D] font-black text-sm px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
          >
            اكتشفي عروض التوفير الآن
          </a>
        </div>

      </div>
    </section>
  );
}

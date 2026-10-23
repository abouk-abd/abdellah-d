'use client';

import { Star, CheckCircle, MessageSquare } from 'lucide-react';

export default function GutReliefReviews() {
  const reviews = [
    {
      name: 'فاطمة الزهراء العمراني',
      city: 'الدار البيضاء (Casablanca)',
      pack: 'اشترت باقة التوفير (علبتان)',
      rating: 5,
      date: 'منذ يومين',
      review:
        'والله العظيم إلا ارتاحيت مع هاد المكمل! كنت كنعاني من انتفاخ البطن لدرجة ماكنقدرش نلبس جلابتي مرتاحة. من النهار الرابع حسيت بكرشي هبطات وخفافيت، وأهم حاجة بدون أي وجع فالمعدة. شكراً بزاف Balurix.',
    },
    {
      name: 'محمد التازي',
      city: 'الرباط (Rabat)',
      pack: 'اشترى باقة العلاج المكثف (3 علب)',
      rating: 5,
      date: 'منذ 5 أيام',
      review:
        'عندي القولون العصبي هادي سنين وجربت كاع الدوايات ديال الصيدلية، كيعطيو راحة غير مؤقتة. مع Balurix Gut Relief حسيت بفرق حقيقي فالراحة الهضمية، ما بقاش عندي داك الثقل بعد الماكلة والتوصيل كان سريع لباب الدار.',
    },
    {
      name: 'سعاد البقالي',
      city: 'طنجة (Tanger)',
      pack: 'اشترت باقة التوفير (علبتان)',
      rating: 5,
      date: 'منذ أسبوع',
      review:
        'الخدمة نقية ومحترفة، فتحت الكولية وشفت العلب عاد خلصت الموزع. والنتيجة ممتازة، الانتفاخ والغازات المحرجة مشاو فمرة. كنصح بيه أي وحدة كتعاني من الهضم.',
    },
    {
      name: 'أمينة الصقلي',
      city: 'مراكش (Marrakech)',
      pack: 'اشترت باقة التجربة (علبة واحدة)',
      rating: 5,
      date: 'منذ أسبوعين',
      review:
        'كبسولات خفيفة وسهلة البلع، والزنجبيل مع الشمر كيعطي انتعاش وراحة فورية. غادي نطلب دابا باقة 3 علب لماما وأختي لأنها عجبتني بزاف.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] px-3.5 py-1 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#3E8E49]" />
            <span>تجارب حقيقية وموثقة</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3D2E] tracking-tight mb-4">
            ماذا قال زبناؤنا في المغرب عن كبسولات Balurix؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            شهادات وتجارب سيدات ورجال استعادوا خفة بطنهم وراحتهم الهضمية اليومية.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-[#DCE8D9] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-sm text-[#0B3D2E]">{rev.name}</h4>
                  <span className="text-[11px] text-slate-500">{rev.city}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-[#DCE8D9]/70 px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 text-[#3E8E49]" />
                  <span>مشتري موثق</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Testimonial Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#DCFCE7]/60 border border-[#86EFAC]/50 flex items-center justify-between flex-wrap gap-4 text-xs font-semibold text-emerald-950">
          <div className="flex items-center gap-2">
            <span className="text-xl">💬</span>
            <span>هل تودين مشاركة تجربتك معنا أو لديك أي سؤال قبل الطلب؟</span>
          </div>
          <a
            href="https://wa.me/212636460996?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D8%B3%D8%A4%D8%A7%D9%84%20%D8%AD%D9%88%D9%84%20Balurix%20GUT%20RELIEF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#0B3D2E] bg-white px-4 py-2 rounded-full border border-emerald-300 shadow-2xs hover:bg-emerald-50 transition-colors"
          >
            تحدثي مع أخصائية خدمة العملاء عبر واتساب &larr;
          </a>
        </div>

      </div>
    </section>
  );
}

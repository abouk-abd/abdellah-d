'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'متى سأبدأ بملاحظة النتيجة وتراجع انتفاخ البطن؟',
    a: 'يشعر غالبية مستخدمي Balurix GUT RELIEF بارتياح فوري في المعدة وتراجع الغازات وثقل البطن خلال الـ 24 إلى 48 ساعة الأولى بفضل خلاصات الشمر والزنجبيل. ومع الاستمرار لمدة 14 يوماً، يعيد البروبيوتيك بناء الفلورا المعوية مما يمنع عودة الانتفاخ نهائياً.',
  },
  {
    q: 'كم كبسولة تحتوي العلبة وما هي الجرعة اليومية؟',
    a: 'تحتوي كل عبوة على 30 كبسولة نباتية. الجرعة الموصى بها على ملصق العلبة هي كبسولة إلى كبسولتين يومياً بعد الوجبات الرئيسية مع كوب كبير من الماء.',
  },
  {
    q: 'هل يسبب تعوداً للأمعاء أو مغصاً كالملينات الكيميائية؟',
    a: 'إطلاقاً. تركيبتنا نباتية صيدلانية 100% وخالية تماماً من أعشاب السنا القاسية والملينات الكيميائية. كبسولات Balurix تعيد تدريب حركة الأمعاء الطبيعية عبر بكتيريا الأمعاء الصديقة، ولا تسبب أي إسهال أو مغص.',
  },
  {
    q: 'هل المنتج مناسب لمن يعانون من القولون العصبي (IBS) وارتجاع المريء؟',
    a: 'نعم، كبسولات GUT RELIEF صُممت خصيصاً لتهدئة تشنجات القولون العصبي وإعادة توازن حموضة المعدة، حيث يعمل الشمر كباسط لعضلات الأمعاء والزنجبيل كمضاد للالتهاب والحموضة.',
  },
  {
    q: 'كيف تتم عملية التوصيل وما هي طريقة الدفع؟',
    a: 'التوصيل مجاني 100% لباب منزلك في جميع مدن وقرى المغرب خلال 24 إلى 48 ساعة. الدفع يكون نقداً بعد استلامك للطرد وفتحه ومعاينته بنفسك للتأكد من أصالته وسلامته.',
  },
];

export default function GutReliefFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#DCE8D9]" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#3E8E49]" />
            <span>إجابات واضحة وشفافة</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D2E] mb-3">
            الأسئلة الشائعة حول Balurix GUT RELIEF
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            كل ما تودين معرفته قبل طلب كبسولاتك المفضلة اليوم
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-black text-sm sm:text-base text-[#0B3D2E] hover:text-[#3E8E49] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3E8E49] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

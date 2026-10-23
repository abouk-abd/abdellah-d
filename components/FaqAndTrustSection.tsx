'use client';

import { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Star,
  Quote,
  PhoneCall,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'متى تظهر النتائج؟',
    answer:
      'بالنسبة للانتفاخ والراحة الهضمية وخفة البطن: تلاحظين الفرق من أول يومين إلى 3 أيام. أما بالنسبة لنضارة وتصفية البشرة وتلاشي الحبوب وشحوب الوجه: من الأسبوع الثاني (10-14 يوماً) من الاستخدام اليومي الصباحي المنتظم.',
  },
  {
    question: 'هل المنتج آمن ومرخص؟',
    answer:
      'نعم تماماً، مستخلص طبيعي نباتي 100% معصور على البارد، خالٍ تماماً من المواد الحافظة الكيميائية، الملونات الصناعية، السكر، أو الملينات الكيميائية القاسية.',
  },
  {
    question: 'كيف تتم عملية التوصيل والدفع؟',
    answer:
      'التوصيل مجاني وسريع لجميع مدن وقرى المغرب عبر شبكة موزعين محترفين. لن تدفعي أي درهم حتى يصلك الطرد إلى باب منزلك، وتقومي بفتحه وتفقده بنفسك ثم تسليم المبلغ للموزع (Cash on Delivery).',
  },
  {
    question: 'هل يمكنني تناول الكلوروفيل إذا كنت أتناول مكملات أخرى؟',
    answer:
      'نعم بكل تأكيد، فالكلوروفيل مستخلص نباتي طبيعي مكمل لغذائك اليومي ولا يتعارض إطلاقاً مع الكولاجين البحري، الفيتامينات، أو مكملات الحديد، بل بالعكس يساعد الجسم على تحسين امتصاصها وتصفية الشوائب.',
  },
];

const REVIEWS = [
  {
    name: 'حنان المرابطي',
    city: 'الدار البيضاء (أنفا)',
    rating: 5,
    text: 'صراحة كنت كنعاني ديما من انتفاخ الكرش بعد الغدا وكريمات الوجه ما عطاونيش نتيجة دائمة. جربت قطرات الكلوروفيل هادي أسبوعين، البطن ارتاح بزاف وبشرتي صبحات نقية ورطبة بلا حبوب.',
    pack: 'الباقة الأكثر طلباً (عبوتان)',
    date: 'منذ يومين',
  },
  {
    name: 'أمينة بنجلون',
    city: 'الرباط (أكدال)',
    rating: 5,
    text: 'أحسن حاجة بديت بيها نهاري! النكهة خفيفة ومنعشة وكتعطي طاقة كبيرة بلا قهوة. وزوين التوصيل جا حتى للدار وتأكدت من السلعة عاد خلصت. شكراً ليكم.',
    pack: 'باقة الجمال الشامل (كلوروفيل + كولاجين)',
    date: 'منذ 4 أيام',
  },
  {
    name: 'سعاد التازي',
    city: 'مراكش',
    rating: 5,
    text: 'كنت شاكة فالأول ولكن بعد 10 أيام والله العظيم يلا صاحباتي فالخدمة لاحظو وجهي منور وخفة كبيرة فالمعدة. كنصح بيه أي وحدة كتعاني من عسر الهضم أو بقع الحبوب.',
    pack: 'باقة التجربة (عبوة واحدة)',
    date: 'منذ أسبوع',
  },
];

export default function FaqAndTrustSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Social Proof Reviews */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              تجارب حقيقية لزبوناتنا في مختلف مدن المغرب
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              أكثر من 2,400 سيدة استعادت راحة هضمها ونضارة بشرتها الطبيعية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{rev.name}</h4>
                    <span className="text-[11px] text-slate-500">{rev.city}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-md">
                    مشتري مؤكد
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold bg-emerald-100/70 px-4 py-1.5 rounded-full mb-3 border border-emerald-300/40">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>إجابات واضحة لجميع تساؤلاتك</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            الأسئلة الشائعة حول قطرات الكلوروفيل
          </h3>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 max-w-3xl mx-auto mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-800 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAF8F5]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Customer Care Standard & Protocol Box */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/40 shadow-xl max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700/60 text-emerald-200 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  ميثاق الثقة وخدمة العملاء السريعة (0636460996)
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                تأكيد فوري لطلبك وتتبع دقيق حتى باب دارك
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                بمجرد إرسال طلبك، يتصل بك فريقنا المتخصص في أقل من 30 دقيقة لتأكيد العنوان والوقت المفضل لديك، لضمان وصول طردك مغلفاً بعناية بدون أي تأخير، ومع حق المعاينة الكاملة قبل الدفع.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

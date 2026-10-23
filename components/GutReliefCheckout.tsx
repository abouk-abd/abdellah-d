'use client';

import { useState } from 'react';
import {
  GUT_RELIEF_PACKS,
  MOROCCO_CITIES,
  validateMoroccanPhone,
  calculateOrderSummary,
  buildWhatsAppOrderLink,
} from '@/lib/gut-relief';
import { ShieldCheck, Truck, Sparkles, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

interface GutReliefCheckoutProps {
  selectedPackId: string;
  onSelectPack: (packId: string) => void;
}

export default function GutReliefCheckout({ selectedPackId, onSelectPack }: GutReliefCheckoutProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const summary = calculateOrderSummary(selectedPackId, 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateMoroccanPhone(phone)) {
      setPhoneError('يرجى إدخال رقم هاتف مغربي صحيح يبدأ بـ 06 أو 07 (10 أرقام)');
      return;
    }

    setPhoneError('');
    setIsSubmitting(true);

    // Simulate instant secure order creation
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
    }, 600);
  };

  const whatsappLink = buildWhatsAppOrderLink(
    fullName,
    phone,
    city,
    summary.pack.name,
    summary.totalPrice
  );

  return (
    <section className="py-16 sm:py-20 bg-white" id="order-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Form Container */}
        <div className="bg-[#FAF8F5] rounded-3xl border-2 border-[#0B3D2E] p-6 sm:p-10 shadow-2xl shadow-[#0B3D2E]/15 relative overflow-hidden">
          
          {/* Top Decorative Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-[#DCE8D9] px-3.5 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3E8E49]" />
              <span>استمارة الطلب السريع — الدفع عند الاستلام 🇲🇦</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D2E] mb-2">
              أدخلي معلوماتك وسيصلك طلبك لباب دارك
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              لا تدفعي أي شيء الآن. التوصيل مجاني 100%، والدفع نقداً بعد استلامك للطرد ومعاينته.
            </p>
          </div>

          {!orderConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Pack Selection */}
              <div>
                <label className="block text-xs font-bold text-[#0B3D2E] mb-2">
                  1. اختاري الباقة المفضلة:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {GUT_RELIEF_PACKS.map((pack) => {
                    const isSelected = pack.id === selectedPackId;
                    return (
                      <div
                        key={pack.id}
                        onClick={() => onSelectPack(pack.id)}
                        className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-right flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#0B3D2E] bg-white shadow-md ring-2 ring-[#3E8E49]/30'
                            : 'border-slate-200 bg-white/60 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-xs font-black text-[#0B3D2E]">{pack.name}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isSelected ? 'border-[#0B3D2E] bg-[#0B3D2E] text-white' : 'border-slate-300'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                        </div>
                        <div className="text-sm font-black text-[#3E8E49]">
                          {pack.price} درهم
                        </div>
                        {pack.badge && (
                          <span className="text-[10px] text-amber-700 font-bold mt-1">
                            {pack.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Personal Information */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <label className="block text-xs font-bold text-[#0B3D2E]">
                  2. معلومات التوصيل والتأكيد:
                </label>

                <div>
                  <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 mb-1">
                    الاسم الكامل *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: سارة الإدريسي"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="block text-xs font-bold text-slate-700 mb-1">
                    رقم الهاتف للتواصل وتأكيد التوصيل *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    placeholder="06XXXXXXXX أو 07XXXXXXXX"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E] transition-all ${
                      phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                    }`}
                    dir="ltr"
                  />
                  {phoneError && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{phoneError}</span>
                    </p>
                  )}
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    سيتصل بك فريق خدمة العملاء خلال ساعات قليلة لتأكيد العنوان وموعد التوصيل.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city-select" className="block text-xs font-bold text-slate-700 mb-1">
                      المدينة *
                    </label>
                    <select
                      id="city-select"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E] transition-all"
                    >
                      <option value="" disabled>اختاري مدينتك...</option>
                      {MOROCCO_CITIES.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address-input" className="block text-xs font-bold text-slate-700 mb-1">
                      العنوان أو الحي (اختياري)
                    </label>
                    <input
                      id="address-input"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="مثال: حي الرياض، شارع النخيل"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Order Live Summary */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>الباقة المختارة:</span>
                  <span className="font-bold text-[#0B3D2E]">{summary.pack.name}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>مصاريف التوصيل لجميع المدن:</span>
                  <span className="font-bold text-[#3E8E49]">مجاناً (0 درهم) 🚚</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-sm font-black text-[#0B3D2E]">
                  <span>المبلغ الإجمالي عند الاستلام:</span>
                  <span className="text-xl text-[#3E8E49]">{summary.totalPrice} درهم</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-[#0B3D2E] hover:bg-[#07271D] text-white font-black text-base sm:text-lg shadow-xl shadow-[#0B3D2E]/25 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>جاري تسجيل طلبك...</span>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-[#A3E635]" />
                    <span>تأكيد طلبي الآن — الدفع عند الاستلام ({summary.totalPrice} درهم) 🛒</span>
                  </>
                )}
              </button>

              {/* WhatsApp direct order option */}
              <div className="text-center pt-2">
                <span className="text-xs text-slate-500 block mb-1">أو تفضلين الطلب السريع عبر واتساب؟</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-[#DCE8D9]/70 hover:bg-[#DCE8D9] px-4 py-2 rounded-full border border-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#3E8E49]" />
                  <span>اضغطي هنا للطلب والتأكيد الفوري عبر واتساب</span>
                </a>
              </div>

            </form>
          ) : (
            /* Order Success State */
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-emerald-700 flex items-center justify-center mx-auto text-3xl font-black">
                ✓
              </div>
              <h3 className="text-2xl font-black text-[#0B3D2E]">
                تهانينا {fullName || 'عزيزي/عزيزتي'}! تم استلام طلبك بنجاح 🌿
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                سيتصل بك فريق خدمة عملاء <strong className="text-[#0B3D2E]">Balurix</strong> خلال ساعات قليلة لتأكيد العنوان وإرسال طلبيتك لباب منزلك بالمجان.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 max-w-md mx-auto text-right text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">الباقة:</span>
                  <span className="font-bold text-[#0B3D2E]">{summary.pack.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">الهاتف:</span>
                  <span className="font-bold text-[#0B3D2E]" dir="ltr">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">المدينة:</span>
                  <span className="font-bold text-[#0B3D2E]">{city || 'المغرب'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t text-sm font-black text-[#3E8E49]">
                  <span>المبلغ المطلوب عند الاستلام:</span>
                  <span>{summary.totalPrice} درهم</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm py-3 px-6 rounded-full shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تأكيد الشحن فوراً عبر واتساب</span>
                </a>
              </div>
            </div>
          )}

          {/* Reassurance Footer in Form */}
          <div className="mt-8 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-around gap-4 text-[11px] text-slate-500 font-bold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3E8E49]" />
              <span>خصوصية وسرية تامة لبياناتك</span>
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-[#3E8E49]" />
              <span>توصيل مجاني 24-48 ساعة</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3E8E49]" />
              <span>معاينة حرة للطرد قبل الدفع</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

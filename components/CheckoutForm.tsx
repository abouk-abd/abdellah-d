'use client';

import { useState } from 'react';
import {
  PACKS,
  MOROCCAN_CITIES,
  OrderFormValues,
  ValidationErrors,
  validateOrderForm,
  getWhatsAppOrderUrl,
  PackOption,
} from '@/lib/checkout';
import {
  Sparkles,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  User,
  MapPin,
  Home,
  MessageCircle,
  FileCheck2,
} from 'lucide-react';

interface CheckoutFormProps {
  selectedPackId: string;
  onPackChange: (id: string) => void;
}

export default function CheckoutForm({
  selectedPackId,
  onPackChange,
}: CheckoutFormProps) {
  const [formData, setFormData] = useState<OrderFormValues>({
    fullName: '',
    phone: '',
    city: MOROCCAN_CITIES[0],
    address: '',
    packId: selectedPackId,
    notes: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    data: OrderFormValues;
    pack: PackOption;
    date: string;
  } | null>(null);

  // Sync selected pack prop
  const currentPack = PACKS.find((p) => p.id === selectedPackId) || PACKS[1];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePackSelect = (packId: string) => {
    onPackChange(packId);
    setFormData((prev) => ({ ...prev, packId }));
    if (errors.packId) {
      setErrors((prev) => ({ ...prev, packId: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateOrderForm({
      ...formData,
      packId: selectedPackId,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate clean instantaneous processing and confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      const randomOrderId = `MA-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedOrder({
        orderId: randomOrderId,
        data: { ...formData, packId: selectedPackId },
        pack: currentPack,
        date: new Date().toLocaleDateString('ar-MA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });
    }, 600);
  };

  return (
    <section id="order-form" className="py-16 sm:py-24 bg-white border-t border-emerald-950/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Card Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold bg-emerald-50 px-4 py-1.5 rounded-full mb-3 border border-emerald-200">
            <Truck className="w-4 h-4 text-emerald-700" />
            <span>توصيل بالمجان لجميع مدن المغرب | الدفع عند الاستلام</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            📝 املئي معلوماتك وسنتصل بكِ لتأكيد الطلب فوراً
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            لن تدفعي أي درهم مسبقاً! الموزع سيتصل بك قبل التوصيل لتحديد الموعد المناسب
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAF8F5] rounded-3xl border-2 border-emerald-900/15 p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Step 1: Pack Selection Selector */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                1. اختاري العرض المناسب لكِ:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {PACKS.map((pack) => {
                  const isChecked = selectedPackId === pack.id;
                  return (
                    <div
                      key={pack.id}
                      onClick={() => handlePackSelect(pack.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50/60 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-slate-900">
                          {pack.name}
                        </span>
                        <input
                          type="radio"
                          name="packSelection"
                          checked={isChecked}
                          onChange={() => handlePackSelect(pack.id)}
                          className="mt-0.5 accent-emerald-700 cursor-pointer"
                        />
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-baseline justify-between">
                        <span className="text-lg font-black text-emerald-900 tabular-nums">
                          {pack.price} درهم
                        </span>
                        {pack.popular && (
                          <span className="text-[10px] bg-emerald-700 text-white font-bold px-2 py-0.5 rounded-full">
                            الأكثر طلباً 🔥
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {errors.packId && (
                <p className="text-xs text-rose-600 font-bold mt-1.5">{errors.packId}</p>
              )}
            </div>

            {/* Step 2: Customer Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-200/80">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                  الاسم الكامل: <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="مثال: مريم العلمي"
                    className={`w-full bg-white px-4 py-3 pr-10 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-600 font-semibold mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                  رقم الهاتف (الواتساب): <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    dir="ltr"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="06XXXXXXXX / 07XXXXXXXX"
                    className={`w-full bg-white px-4 py-3 pl-10 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all text-right ${
                      errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.phone && (
                  <p className="text-xs text-rose-600 font-semibold mt-1">{errors.phone}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                  المدينة: <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full bg-white px-4 py-3 pr-10 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all appearance-none cursor-pointer ${
                      errors.city ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  >
                    {MOROCCAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.city && (
                  <p className="text-xs text-rose-600 font-semibold mt-1">{errors.city}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                  العنوان أو الحي: <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="مثال: حي الرياض، زنقة 14، رقم 22"
                    className={`w-full bg-white px-4 py-3 pr-10 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
                      errors.address ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  <Home className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.address && (
                  <p className="text-xs text-rose-600 font-semibold mt-1">{errors.address}</p>
                )}
              </div>

            </div>

            {/* Summary & Guarantee Box */}
            <div className="bg-emerald-50/80 rounded-2xl p-4 sm:p-5 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-right">
                <span className="text-xs text-slate-600 block">العرض المختار:</span>
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  {currentPack.name}
                </span>
                <span className="text-xs text-emerald-700 block font-semibold mt-0.5">
                  🚚 التوصيل بالمجان لجميع المدن المغربية
                </span>
              </div>

              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-500 block">المبلغ الإجمالي عند الاستلام:</span>
                <span className="text-2xl sm:text-3xl font-black text-[#1B4332] tabular-nums">
                  {currentPack.price} <span className="text-base font-bold text-slate-700">درهم</span>
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1B4332] hover:bg-[#143225] disabled:bg-slate-400 text-white py-4 sm:py-5 px-6 rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Clock className="w-5 h-5 animate-spin text-emerald-300" />
                  <span>جاري تسجيل طلبك...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-emerald-300" />
                  <span>اضغط هنا لتأكيد الطلب - الدفع عند الاستلام</span>
                </>
              )}
            </button>

            {/* COD Trust Note */}
            <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>معاينة الطرد عند باب منزلك قبل تسليم المبلغ للموزع</span>
            </div>

          </form>
        </div>

      </div>

      {/* Confirmation Modal */}
      {confirmedOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-emerald-900/10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                تم تسجيل طلبك بنجاح! رقم الطلب: {confirmedOrder.orderId}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                شكراً لثقتك، لالة {confirmedOrder.data.fullName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                سنتصل بك على الرقم <span className="font-mono font-bold text-slate-900" dir="ltr">{confirmedOrder.data.phone}</span> لتأكيد العنوان وموعد التوصيل.
              </p>
            </div>

            {/* Order Receipt Details */}
            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs sm:text-sm mb-6">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-600">العرض:</span>
                <span className="font-bold text-slate-900">{confirmedOrder.pack.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-600">المدينة والتوصيل:</span>
                <span className="font-bold text-slate-900">{confirmedOrder.data.city} (مجاني)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-600">العنوان:</span>
                <span className="font-medium text-slate-800">{confirmedOrder.data.address}</span>
              </div>
              <div className="flex justify-between py-1 text-base font-extrabold text-emerald-950">
                <span>المبلغ المستحق نقداً:</span>
                <span className="font-black tabular-nums">{confirmedOrder.pack.price} درهم</span>
              </div>
            </div>

            {/* Direct WhatsApp Instant sync */}
            <div className="space-y-3">
              <a
                href={getWhatsAppOrderUrl({
                  fullName: confirmedOrder.data.fullName,
                  phone: confirmedOrder.data.phone,
                  city: confirmedOrder.data.city,
                  packName: confirmedOrder.pack.name,
                  price: confirmedOrder.pack.price,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>💬 إرسال نسخة من الطلب فوراً عبر واتساب</span>
              </a>

              <button
                onClick={() => setConfirmedOrder(null)}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

'use client';

import { useState } from 'react';
import { calculateDiagnosticResult, DiagnosticAnswer, DiagnosticResult } from '@/lib/quiz';
import { X, Sparkles, CheckCircle2, ArrowLeft, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

interface RoutineDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRecommendation: (packId: string) => void;
}

export default function RoutineDiagnosticModal({
  isOpen,
  onClose,
  onApplyRecommendation,
}: RoutineDiagnosticModalProps) {
  const [step, setStep] = useState<number>(1);
  const [concern, setConcern] = useState<DiagnosticAnswer['primaryConcern']>('gut_bloating');
  const [timing, setTiming] = useState<DiagnosticAnswer['timing']>('after_meals');
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const calculated = calculateDiagnosticResult({
        primaryConcern: concern,
        timing,
      });
      setResult(calculated);
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setConcern('gut_bloating');
    setTiming('after_meals');
    setResult(null);
  };

  const handleApply = () => {
    if (result) {
      onApplyRecommendation(result.recommendedPackId);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-emerald-950/10 shadow-2xl relative animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
          aria-label="إغلاق التشخيص"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-right mb-6">
          <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>مساعد التشخيص الذكي للروتين العلمي (15 ثانية)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
            اكتشفي روتينك المخصص حسب مشكلتك
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            إجابة سريعة على سؤالين لتحديد التركيبة الصيدلانية الأنسب لجسدك
          </p>
        </div>

        {/* Step 1: Concern */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-800">
              1. ما هي المشكلة الأساسية التي ترغبين في حلها بشكل عاجل؟
            </label>

            <div className="space-y-2.5">
              {[
                {
                  id: 'gut_bloating',
                  title: 'انتفاخ مستمر وغازات وثقل في البطن بعد الأكل',
                  badge: 'ديتوكس القولون والهضم',
                },
                {
                  id: 'skin_dullness',
                  title: 'شحوب البشرة وظهور الحبوب الدهنية والتجاعيد',
                  badge: 'نضارة وبناء الكولاجين',
                },
                {
                  id: 'hair_loss',
                  title: 'تساقط الشعر، الفراغات الأمامية، وضعف البصيلات',
                  badge: 'كثافة وإنبات الشعر',
                },
                {
                  id: 'stress_sleep',
                  title: 'الأرق، التوتر العصبي، وانتفاخ الوجه الصباحي',
                  badge: 'تخفيض هرمون الكورتيزول',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setConcern(opt.id as any)}
                  className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between text-right ${
                    concern === opt.id
                      ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {opt.title}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold mt-0.5 block">
                      {opt.badge}
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      concern === opt.id
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {concern === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-full mt-6 bg-[#1B4332] hover:bg-[#143225] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>المتابعة للسؤال التالي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Timing */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-800">
              2. متى تلاحظين ازدياد حدة المشكلة في يومك؟
            </label>

            <div className="space-y-2.5">
              {[
                { id: 'after_meals', label: 'بعد تناول الوجبات مباشرة أو في المساء' },
                { id: 'morning', label: 'أول ما أستيقظ صباحاً بملامح شاحبة وثقل' },
                { id: 'daily', label: 'باستمرار طوال اليوم دون توقف' },
                { id: 'night', label: 'أثناء الليل وعند محاولة النوم' },
              ].map((t) => (
                <div
                  key={t.id}
                  onClick={() => setTiming(t.id as any)}
                  className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between text-right ${
                    timing === t.id
                      ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-900">{t.label}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      timing === t.id
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {timing === t.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-xs cursor-pointer"
              >
                رجوع
              </button>
              <button
                onClick={handleNext}
                className="w-2/3 bg-[#1B4332] hover:bg-[#143225] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>إظهار التوصية الصيدلانية</span>
                <Sparkles className="w-4 h-4 text-emerald-300" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Result Recommendation */}
        {step === 3 && result && (
          <div className="space-y-4 text-right animate-in fade-in duration-300">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>الروتين الموصى به طبياً لحالتك:</span>
              </div>
              <h4 className="text-lg font-black text-slate-900">{result.headline}</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {result.explanation}
              </p>
            </div>

            {/* Actives Formulation Profile */}
            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 block mb-2">
                المركّبات النشطة الفعالة في روتينك:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {result.activeActives.map((act, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-emerald-950"
                  >
                    ⚡ {act}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 px-1">
              <span>مدة الكورس الموصى بها: <strong>{result.durationDays} يوماً</strong></span>
              <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                توفير حتى {result.discountPercentage}% + شحن مجاني
              </span>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleApply}
                className="w-full bg-[#1B4332] hover:bg-[#143225] text-white py-4 rounded-xl font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>اختيار هذا الروتين وتعبئة الطلب الآن</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full text-xs text-slate-400 hover:text-slate-600 py-2 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة التشخيص</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

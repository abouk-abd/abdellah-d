'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  VIDEO_STAGES,
  VIDEO_TOTAL_DURATION,
  getStageForCurrentTime,
  formatVideoTime,
  VideoStage,
} from '@/lib/videoTimeline';
import { sounds } from '@/lib/soundEffects';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Sparkles,
  Droplets,
  CheckCircle2,
  Film,
  FlaskConical,
  Flame,
} from 'lucide-react';

interface ChlorophyllVideoPlayerProps {
  onOrderClick?: () => void;
}

export default function ChlorophyllVideoPlayer({
  onOrderClick,
}: ChlorophyllVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [mode, setMode] = useState<'video' | 'interactive'>('video');
  const [manualDrops, setManualDrops] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const lastSoundStageRef = useRef<number>(1);

  // Playback timer loop
  useEffect(() => {
    if (!isPlaying || mode === 'interactive') return;

    lastTimeRef.current = Date.now();

    const tick = () => {
      const now = Date.now();
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      setCurrentTime((prev) => {
        const nextTime = prev + delta * playbackSpeed;
        if (nextTime >= VIDEO_TOTAL_DURATION) {
          // Loop video smoothly
          if (!isMuted) sounds.playChime();
          return 0;
        }
        return nextTime;
      });

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, mode, isMuted]);

  // Sound triggers based on video stages
  useEffect(() => {
    if (isMuted || mode === 'interactive') return;

    const currentStage = getStageForCurrentTime(currentTime);
    if (currentStage.id !== lastSoundStageRef.current) {
      if (currentStage.id === 2) {
        sounds.playDrop();
      } else if (currentStage.id === 3) {
        sounds.playSwirl();
      } else if (currentStage.id === 4) {
        sounds.playChime();
      }
      lastSoundStageRef.current = currentStage.id;
    }
  }, [currentTime, isMuted, mode]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
  };

  const handleStageClick = (stage: VideoStage) => {
    setCurrentTime(stage.timeRange[0]);
    setIsPlaying(true);
  };

  const handleAddManualDrop = () => {
    if (manualDrops < 15) {
      setManualDrops((prev) => Math.min(prev + 5, 15));
      if (!isMuted) sounds.playDrop();
    }
  };

  const handleResetManual = () => {
    setManualDrops(0);
  };

  const currentStage = getStageForCurrentTime(currentTime);

  // Calculated visual styles for the liquid
  const progressRatio = currentTime / VIDEO_TOTAL_DURATION;

  // Density calculation: 0 at start, rapid rise at drops, full green at end
  const waterHue =
    mode === 'interactive'
      ? manualDrops === 0
        ? 'rgba(215, 240, 255, 0.4)'
        : manualDrops === 5
        ? 'rgba(46, 204, 113, 0.45)'
        : manualDrops === 10
        ? 'rgba(27, 106, 79, 0.75)'
        : 'rgba(18, 67, 49, 0.92)'
      : currentTime < 2.5
      ? 'rgba(215, 240, 255, 0.35)'
      : currentTime < 6.0
      ? `rgba(46, 204, 113, ${0.35 + ((currentTime - 2.5) / 3.5) * 0.4})`
      : currentTime < 9.5
      ? `rgba(27, 106, 79, ${0.65 + ((currentTime - 6.0) / 3.5) * 0.25})`
      : 'rgba(18, 67, 49, 0.92)';

  return (
    <div
      ref={containerRef}
      className={`bg-slate-950 rounded-3xl overflow-hidden border border-emerald-900/40 shadow-2xl relative select-none flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'w-full'
      }`}
    >
      {/* Top Bar: Mode Switcher & Quality Tag */}
      <div className="bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs z-20">
        <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/10">
          <button
            onClick={() => {
              setMode('video');
              setIsPlaying(true);
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              mode === 'video'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>فيديو العرض الحي</span>
          </button>

          <button
            onClick={() => {
              setMode('interactive');
              setIsPlaying(false);
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              mode === 'interactive'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5 text-amber-300" />
            <span>محاكي الخلط التفاعلي</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
            <Sparkles className="w-3 h-3" />
            <span>4K Ultra Clarity</span>
          </span>

          <button
            onClick={() => setIsMuted((prev) => !prev)}
            aria-label={isMuted ? 'تشغيل المؤثرات الصوتية' : 'كتم الصوت'}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title={isMuted ? 'تشغيل صوت القطرات' : 'كتم الصوت'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Main Video Viewport Canvas */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-gradient-to-b from-stone-900 via-emerald-950/70 to-slate-950 flex items-center justify-center">
        {/* Travertine Stone Studio Backdrop */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.25),transparent_70%)] pointer-events-none" />

        {/* Studio Sunbeams */}
        <div className="absolute -top-10 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Simulated Crystal Glass and Mixing Dynamics */}
        <div className="relative w-56 sm:w-64 h-72 sm:h-80 flex flex-col items-center justify-end">
          
          {/* Dropper Pipette (Appears in Phase 2 or when dropping) */}
          {(mode === 'interactive' || (currentTime >= 2.0 && currentTime <= 6.5)) && (
            <div className="absolute -top-6 z-20 flex flex-col items-center animate-bounce-subtle duration-1000">
              <div className="w-4 h-14 bg-gradient-to-r from-amber-200 to-amber-500 rounded-t-sm shadow-md" />
              <div className="w-3 h-16 bg-white/50 backdrop-blur-sm border border-white/60 rounded-b-md flex flex-col justify-end p-0.5 relative">
                {/* Emerald liquid inside dropper */}
                <div className="w-full h-10 bg-emerald-700 rounded-b-sm" />
                {/* Falling drop */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-3.5 bg-emerald-700 rounded-full animate-pulse shadow-sm" />
              </div>
            </div>
          )}

          {/* Glass Vessel */}
          <div className="relative w-44 sm:w-52 h-60 sm:h-68 rounded-b-[2.5rem] rounded-t-lg border-4 border-white/40 bg-white/10 backdrop-blur-xs overflow-hidden shadow-2xl shadow-emerald-950/60 flex flex-col justify-end p-2.5">
            {/* Glass highlights / reflection glares */}
            <div className="absolute top-2 left-3 w-2 h-44 bg-white/40 rounded-full blur-[1px]" />
            <div className="absolute top-4 right-3 w-1.5 h-36 bg-white/20 rounded-full" />

            {/* Liquid Surface Ripple */}
            <div
              className="w-full rounded-b-[2rem] transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-inner"
              style={{
                height: mode === 'interactive' ? `${70 + manualDrops * 1.5}%` : `${68 + progressRatio * 20}%`,
                backgroundColor: waterHue,
              }}
            >
              {/* Internal Swirling Smoke / Plume Effect */}
              {((mode === 'video' && currentTime >= 2.5 && currentTime <= 10.0) || (mode === 'interactive' && manualDrops > 0)) && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Chlorophyll swirl clouds */}
                  <div className="w-32 h-32 rounded-full bg-emerald-500/40 filter blur-md animate-spin-slow" />
                  <div className="w-24 h-24 rounded-full bg-emerald-700/50 filter blur-sm animate-ping opacity-60" />
                </div>
              )}

              {/* Floating mint leaf garnish (in final phase) */}
              {((mode === 'video' && currentTime >= 8.5) || (mode === 'interactive' && manualDrops >= 10)) && (
                <div className="absolute top-2 flex items-center gap-1 text-emerald-300 animate-in fade-in zoom-in duration-700">
                  <span className="text-lg">🍃</span>
                  <span className="text-[10px] font-bold tracking-wider text-white/90 drop-shadow-md">
                    مشروب منعش
                  </span>
                </div>
              )}

              {/* Liquid Status Label */}
              <div className="relative z-10 px-2 py-1 bg-black/30 backdrop-blur-xs rounded-full border border-white/15 text-[11px] font-bold text-white shadow-xs">
                {mode === 'interactive'
                  ? manualDrops === 0
                    ? 'ماء نقي 250 مل'
                    : `${manualDrops} قطرات كلوروفيل مركز`
                  : currentStage.title}
              </div>
            </div>
          </div>

          {/* Travertine Pedestal Reflection */}
          <div className="w-56 sm:w-64 h-3 bg-stone-300/30 rounded-full blur-[2px] mt-1" />
        </div>

        {/* Video Stage Overlay Card (Top Left) */}
        <div className="absolute top-4 right-4 max-w-[260px] sm:max-w-xs bg-slate-900/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-right z-10 shadow-xl">
          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>المرحلة {currentStage.id} من 4</span>
          </div>
          <h4 className="font-extrabold text-white text-xs sm:text-sm leading-snug">
            {currentStage.title}
          </h4>
          <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
            {currentStage.tagline}
          </p>
        </div>

        {/* Quick Buy CTA Overlay (Top Left Desktop) */}
        {onOrderClick && (
          <button
            onClick={onOrderClick}
            className="absolute top-4 left-4 hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white text-xs font-black py-2 px-3.5 rounded-xl border border-emerald-400/40 shadow-lg cursor-pointer transition-transform active:scale-95 z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>اطلبِ الآن - الدفع عند الاستلام</span>
          </button>
        )}

        {/* Big Centered Play/Pause Overlay Button */}
        {mode === 'video' && (
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'إيقاف الفيديو' : 'تشغيل الفيديو'}
            className={`absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors z-10 cursor-pointer group ${
              isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white fill-white" />
              ) : (
                <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
              )}
            </div>
          </button>
        )}

        {/* Manual Interactive Buttons Overlay */}
        {mode === 'interactive' && (
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-center gap-3 z-20">
            <button
              onClick={handleAddManualDrop}
              disabled={manualDrops >= 15}
              className="bg-[#1B4332] hover:bg-[#143225] disabled:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-xl flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed border border-emerald-400/30"
            >
              <Droplets className="w-4 h-4 text-emerald-300" />
              <span>+ أضيفي 5 قطرات الآن</span>
            </button>

            {manualDrops > 0 && (
              <button
                onClick={handleResetManual}
                className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-xl transition-colors cursor-pointer"
                title="إعادة ملء الكأس بماء نقي"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Video Control Bar & Scrubbing Timeline */}
      {mode === 'video' && (
        <div className="bg-slate-900 px-4 py-3 border-t border-white/10 flex flex-col gap-2.5 z-20">
          {/* Scrubber timeline */}
          <div className="relative flex items-center group">
            <input
              type="range"
              min="0"
              max={VIDEO_TOTAL_DURATION}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              aria-label="شريط تقدم الفيديو"
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
            />
          </div>

          {/* 4 Chapter Stage Markers */}
          <div className="grid grid-cols-4 gap-2 pt-1 border-t border-white/5">
            {VIDEO_STAGES.map((stg) => {
              const isCurrent = currentStage.id === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => handleStageClick(stg)}
                  className={`text-right p-1.5 rounded-lg transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-200'
                      : 'hover:bg-white/5 text-slate-400'
                  }`}
                >
                  <span className="text-[10px] font-mono block font-bold" dir="ltr">
                    0{stg.id}.
                  </span>
                  <span className="text-[11px] font-semibold line-clamp-1 block">
                    {stg.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom controls row */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'إيقاف' : 'تشغيل'}
                className="text-white hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                aria-label="إعادة التشغيل"
                className="hover:text-white transition-colors cursor-pointer"
                title="إعادة التشغيل من البداية"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <span className="font-mono text-[11px] text-slate-300 tabular-nums" dir="ltr">
                {formatVideoTime(currentTime)} / {formatVideoTime(VIDEO_TOTAL_DURATION)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Speed toggle */}
              <button
                onClick={() => setPlaybackSpeed((prev) => (prev === 1 ? 1.5 : 1))}
                className="font-mono text-[10px] bg-white/10 hover:bg-white/20 text-slate-200 px-2 py-0.5 rounded cursor-pointer"
              >
                {playbackSpeed}x
              </button>

              {/* Fullscreen */}
              <button
                onClick={() => setIsFullscreen((prev) => !prev)}
                aria-label={isFullscreen ? 'تصغير' : 'ملء الشاشة'}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Curiosity Booster Note */}
      <div className="bg-[#122A1E] px-4 py-2 text-center text-emerald-200 text-xs border-t border-emerald-800/40 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        <span>
          سر الانتشار العالمي: 10 قطرات فقط يومياً تحول الماء العادي إلى إكسير ينقي القولون ويمنحك بشرة صافية!
        </span>
      </div>
    </div>
  );
}

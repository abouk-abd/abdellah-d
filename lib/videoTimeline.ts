export interface VideoStage {
  id: number;
  timeRange: [number, number]; // in seconds
  title: string;
  tagline: string;
  chlorophyllDensity: number; // 0 to 100%
  tip: string;
}

export const VIDEO_TOTAL_DURATION = 12; // 12 seconds total

export const VIDEO_STAGES: VideoStage[] = [
  {
    id: 1,
    timeRange: [0, 2.5],
    title: 'تحضير كأس الماء النقي',
    tagline: 'ماء بارد أو معتدل 200 مل صباحاً على الريق',
    chlorophyllDensity: 0,
    tip: 'البداية دائماً بكأس ماء نقي لتهيئة المعدة للامتصاص الفوري',
  },
  {
    id: 2,
    timeRange: [2.5, 6.0],
    title: 'تقطير الكلوروفيل المركز',
    tagline: 'إضافة 10 إلى 15 قطرة بالقطارة الدقيقة',
    chlorophyllDensity: 35,
    tip: 'القطرات المركزة أثقل من الماء وتبدأ بالنزول إلى القاع بنعومة',
  },
  {
    id: 3,
    timeRange: [6.0, 9.5],
    title: 'تموجات الأخضر الزمردي الساحرة',
    tagline: 'انتشار مضادات الأكسدة وتطهير الماء',
    chlorophyllDensity: 75,
    tip: 'هذا المشهد البصري الساحر هو سر الفضول والانتشار في الإعلانات العالمية!',
  },
  {
    id: 4,
    timeRange: [9.5, 12.0],
    title: 'إكسير النضارة والنشاط جاهز للشرب',
    tagline: 'مشروب منعش بنكهة النعناع الخفيفة لراحة طوال اليوم',
    chlorophyllDensity: 100,
    tip: 'اشربيه فوراً وتمتعي بطاقة متجددة، هضم خفيف، وبشرة صافية',
  },
];

export function getStageForCurrentTime(currentTime: number): VideoStage {
  const boundedTime = Math.max(0, Math.min(currentTime, VIDEO_TOTAL_DURATION));
  const stage = VIDEO_STAGES.find(
    (s) => boundedTime >= s.timeRange[0] && boundedTime < s.timeRange[1]
  );
  return stage || VIDEO_STAGES[VIDEO_STAGES.length - 1];
}

export function formatVideoTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

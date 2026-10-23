import type {Metadata} from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'Balurix GUT RELIEF — كبسولات راحة الجهاز الهضمي والقولون بالمغرب',
  description: 'كبسولات Balurix GUT RELIEF الأصلية بالبروبيوتيك الحيوي (200mg) والشمر والزنجبيل. تخلصي من انتفاخ البطن والغازات وعسر الهضم في 14 يوماً. توصيل مجاني والدفع عند الاستلام.',
  openGraph: {
    title: 'Balurix GUT RELIEF — الحل الطبيعي لانتفاخ البطن والقولون',
    description: 'تركيبة صيدلانية متطورة لحفظ التوازن الهضمي وتخفيف الانتفاخات وإعادة بناء الفلورا المعوية. توصيل مجاني لجميع مدن المغرب.',
    type: 'website',
    locale: 'ar_MA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balurix GUT RELIEF — راحة الجهاز الهضمي والقولون',
    description: 'تخلصي من انتفاخ البطن والغازات. كبسولات نباتية 100% مع توصيل مجاني والدفع بعد المعاينة بالمغرب.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${tajawal.variable}`}>
      <body className={`${tajawal.className} antialiased bg-[#FAF8F5] text-[#1C251D] selection:bg-[#2D6A4F] selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

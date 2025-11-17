// app/[locale]/layout.tsx
import './globals.css';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins, Kanit, Noto_Sans_JP } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navbar from './components/Navbar';
import CookieConsent from './components/CookieConsent';

// ──────────────────────────────────────────────
// ฟอนต์แต่ละภาษา (next/font/google = โหลดเร็ว + subset อัตโนมัติ)
// ──────────────────────────────────────────────
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-kanit',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jp',
  display: 'swap',
});

// รายการภาษาที่รองรับ
const supportedLocales = ['en', 'th', 'jp'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 404 ถ้า locale ไม่รองรับ
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  // เลือกฟอนต์ตามภาษา
  const fontVariables =
    locale === 'th'
      ? `${kanit.variable}`                          // ไทย → Kanit เต็มตัว
      : locale === 'jp'
      ? `${notoSansJP.variable} ${poppins.variable}` // ญี่ปุ่น → Noto Sans JP + Poppins สำรอง
      : poppins.variable;                            // อังกฤษ → Poppins

  return (
    <html lang={locale} className={fontVariables}>
      {/* ใส่ variable ทั้งหมดเพื่อให้ CSS variable ใช้งานได้ */}
      <body
        className={`
          ${poppins.variable}
          ${kanit.variable}
          ${notoSansJP.variable}
          font-sans antialiased
          bg-gradient-to-br from-blue-500 via-white to-sky-400
        `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <CookieConsent />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';
import CookieConsent from './components/CookieConsent';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  console.log("LocaleLayout:", locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <CookieConsent />
      {children}
    </NextIntlClientProvider>
  );
}

